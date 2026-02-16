import readline from 'readline';
import fs from 'fs';
import chalk from 'chalk';

const language = 'spanish';
const { allPhrases } = await import(`./${language}.js`);

let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

checkDupes();
addShowEnglish();

const menu = `
Choose an option:
${Object.keys(allPhrases)
  .filter((unit) => unit !== 'custom')
  .map(
    (unit, index) =>
      `${index + 1}. Unit ${index + 1}${allPhrases[unit].name ? `: ${allPhrases[unit].name}` : ''}`,
  )
  .join('\n')}
A. All phrases
H. Hard phrases
W. Working on
C. Custom phrases
Q. Quit
`;

let currentUnit = null;
let currentChapter = null;
let currentLesson = null;
let phrases;
let lastPhrase = null;
let wrongPhrases;
let phraseIndex;
let shownPhrases = new Set();
let allPhrasesShownMessageDisplayed = false;
let prevUnit, prevChapter, prevLesson, nextUnit, nextChapter, nextLesson;
let showUnseen;

// Check for duplicate foreign phrases across all units/chapters/lessons
function checkDupes() {
  const seen = new Set();
  const dupes = [];

  for (let unit in allPhrases) {
    for (let chapter in allPhrases[unit]) {
      if (chapter === 'name') {
        continue;
      }
      for (let lesson in allPhrases[unit][chapter]) {
        if (['name', 'showEnglish'].includes(lesson)) {
          continue;
        }
        for (let phrase of allPhrases[unit][chapter][lesson]) {
          if (seen.has(phrase.foreign)) {
            dupes.push(phrase.foreign);
          } else {
            seen.add(phrase.foreign);
          }
        }
      }
    }
  }

  if (dupes.length > 0) {
    console.log(chalk.red('Duplicate phrases found: '));
    console.log('  ' + dupes.join('\n  ') + '\n\n');
    process.exit(1);
  }
}

// Copy 'showEnglish' prop down into each phrase (only if phrase doesn't already have it)
function addShowEnglish() {
  for (let unit in allPhrases) {
    for (let chapter in allPhrases[unit]) {
      if (chapter === 'name') {
        continue;
      }
      for (let lesson in allPhrases[unit][chapter]) {
        if (['name', 'showEnglish'].includes(lesson)) {
          continue;
        }
        for (let phrase of allPhrases[unit][chapter][lesson]) {
          if ('showEnglish' in allPhrases[unit][chapter] && !('showEnglish' in phrase)) {
            phrase.showEnglish = allPhrases[unit][chapter].showEnglish;
          }
        }
      }
    }
  }
}

// Show top-level menu
function showMenu() {
  console.log(menu);
  rl.question('Your choice: ', (answer) => {
    if (answer.toLowerCase() === 'q') {
      rl.close();
      return;
    }
    handleMenuChoice(answer);
  });
}

// Respond to top-level menu choice
function handleMenuChoice(choice) {
  if (choice.toLowerCase() === 'a') {
    currentUnit = 'all';
    startFlashcards();
    return;
  }
  if (choice.toLowerCase() === 'h') {
    currentUnit = 'hard';
    startFlashcards();
    return;
  }
  if (choice.toLowerCase() === 'w') {
    currentUnit = 'workingOn';
    startFlashcards();
    return;
  }
  if (choice.toLowerCase() === 'c') {
    currentUnit = 'custom';
    showChapterMenu();
    return;
  }
  const choiceNum = parseInt(choice, 10);
  const { name, ...unitKeys } = allPhrases;
  const numUnits = Object.keys(unitKeys).length;
  if (choiceNum > 0 && choiceNum <= numUnits - 1) {
    currentUnit = `unit${choiceNum}`;
    showChapterMenu();
    return;
  }
  console.log('Invalid choice. Try again.');
  showMenu();
}

// Show the chapter menu for the current unit
function showChapterMenu() {
  const chapterMenu = `
Choose a chapter:
${Object.keys(allPhrases[currentUnit])
  .filter((chapter) => chapter !== 'name')
  .map((chapter, index) => {
    return `${index + 1}. Chapter ${index + 1}: ${allPhrases[currentUnit][chapter].name}`;
  })
  .join('\n')}
B. Back to main menu
Q. Quit
`;
  console.log(chapterMenu);
  rl.question('Your choice: ', (choice) => {
    if (choice.toLowerCase() === 'q') {
      rl.close();
      return;
    }
    if (choice.toLowerCase() === 'b') {
      showMenu();
      return;
    }
    const choiceNum = parseInt(choice, 10);
    const { name, ...chapterKeys } = allPhrases[currentUnit];
    const numChapters = Object.keys(chapterKeys).length;
    if (choiceNum > 0 && choiceNum <= numChapters) {
      currentChapter = `chapter${choiceNum}`;
      showLessonMenu();
      return;
    }
    console.log('Invalid choice. Try again.');
    showChapterMenu();
  });
}

// Show the lesson menu for the current unit+chapter
function showLessonMenu() {
  let skipped = 0;
  const lessonMenu = `
Choose a lesson:
${Object.keys(allPhrases[currentUnit][currentChapter])
  .map((lesson, index) => {
    if (['name', 'showEnglish'].includes(lesson)) {
      skipped++;
      return null;
    }
    return `${index + 1 - skipped}. Lesson ${index + 1 - skipped}`;
  })
  .filter(Boolean)
  .join('\n')}
A. All lessons
H. Hard phrases
B. Back to main menu
Q. Quit
`;
  console.log(lessonMenu);
  rl.question('Your choice: ', (choice) => {
    if (choice.toLowerCase() === 'q') {
      rl.close();
      return;
    }
    if (choice.toLowerCase() === 'b') {
      showMenu();
      return;
    }
    if (choice.toLowerCase() === 'a') {
      currentLesson = 'all';
      startFlashcards();
      return;
    }
    if (choice.toLowerCase() === 'h') {
      currentLesson = 'hard';
      startFlashcards();
      return;
    }
    const choiceNum = parseInt(choice, 10);
    if (
      choiceNum > 0 &&
      choiceNum <= Object.keys(allPhrases[currentUnit][currentChapter]).length - skipped
    ) {
      currentLesson = `lesson${choiceNum}`;
      startFlashcards();
      return;
    }
    console.log('Invalid choice. Try again.');
    showLessonMenu();
  });
}

// Start the flashcard session for the current unit+chapter+lesson,
// but first ask whether to show English or foreign phrases.
function startFlashcards() {
  // If current unit+chapter has showEnglish set to true or false, don't ask.
  let showEnglish;
  if ('showEnglish' in (allPhrases?.[currentUnit]?.[currentChapter] ?? {})) {
    showEnglish = allPhrases[currentUnit][currentChapter].showEnglish;
  }
  if (typeof showEnglish === 'undefined') {
    rl.question(`\nDo you want to see English phrases\nor foreign phrases? (E/f): `, (answer) => {
      if (answer.toLowerCase() === 'q') {
        rl.close();
        return;
      }
      const showEnglish = answer.toLowerCase() !== 'f';
      setupPrompts(showEnglish);
    });
  } else {
    setupPrompts(showEnglish);
  }
}

// Set up (P)rev/(N)ext prompts based on whether there are previous/next lessons,
// then start showing flashcards.
function setupPrompts(showEnglish) {
  [prevUnit, prevChapter, prevLesson] = calcPrevLesson();
  [nextUnit, nextChapter, nextLesson] = calcNextLesson();
  const prevNextPrompt =
    prevUnit && nextUnit
      ? ' (P)rev / (N)ext lesson, '
      : prevUnit
        ? ' (P)rev lesson, '
        : nextUnit
          ? ' (N)ext lesson, '
          : ' ';
  const unitName =
    currentUnit && allPhrases[currentUnit] && allPhrases[currentUnit].name
      ? `- “${allPhrases[currentUnit].name}”\n`
      : '';
  const name = currentChapter ? `- “${allPhrases[currentUnit][currentChapter].name}”\n` : '';
  console.log(
    `\nStarting ${nameOf(currentUnit)}${unitName}${nameOf(currentChapter)}${nameOf(currentLesson)}${name}`,
  );
  setupPhrases().then(() => {
    if (phrases.length === 0) {
      console.log(chalk.red('No phrases found.'));
      showMenu();
      return;
    }
    showNextFlashcard(undefined, showEnglish, prevNextPrompt);
  });
}

// Set up the phrases array based on the current unit/chapter/lesson and filters like
// hard/workingOn.
async function setupPhrases() {
  phrases = [];
  wrongPhrases = [];
  phraseIndex = 0;
  shownPhrases.clear();
  allPhrasesShownMessageDisplayed = false;
  showUnseen = false;
  if (['all', 'hard', 'workingOn'].includes(currentUnit)) {
    for (let unit in allPhrases) {
      for (let chapter in allPhrases[unit]) {
        if (chapter === 'name') {
          continue;
        }
        for (let lesson in allPhrases[unit][chapter]) {
          if (['name', 'showEnglish'].includes(lesson)) {
            continue;
          }
          if (currentUnit === 'hard') {
            phrases = phrases.concat(
              allPhrases[unit][chapter][lesson].filter((phrase) => phrase.hard),
            );
            continue;
          }
          if (currentUnit === 'workingOn') {
            phrases = phrases.concat(
              allPhrases[unit][chapter][lesson].filter((phrase) => phrase.workingOn),
            );
            continue;
          }
          phrases = phrases.concat(allPhrases[unit][chapter][lesson]);
        }
      }
    }
  } else if (currentLesson === 'all') {
    for (let lesson in allPhrases[currentUnit][currentChapter]) {
      if (['name', 'showEnglish'].includes(lesson)) {
        continue;
      }
      phrases = phrases.concat(allPhrases[currentUnit][currentChapter][lesson]);
    }
  } else if (currentLesson === 'hard') {
    for (let lesson in allPhrases[currentUnit][currentChapter]) {
      if (['name', 'showEnglish'].includes(lesson)) {
        continue;
      }
      phrases = phrases.concat(
        allPhrases[currentUnit][currentChapter][lesson].filter((phrase) => phrase.hard),
      );
    }
  } else if (currentLesson) {
    phrases = allPhrases[currentUnit][currentChapter][currentLesson];
  }
}

// Read a single character from stdin
function readSingleChar() {
  return new Promise((resolve) => {
    // Close readline to cleanly remove its listeners and state
    rl.close();

    process.stdin.setRawMode(true);
    process.stdin.resume();
    process.stdin.once('data', (key) => {
      process.stdin.setRawMode(false);
      process.stdin.pause();

      // Recreate readline interface
      rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
      });

      resolve(key.toString());
    });
  });
}

// Show text one line at a time, waiting for single character input between lines
async function showTextLineByLine(text, color, prefix) {
  const lines = text.split(/\| */);

  if (lines.length === 1) {
    // No line breaks, show normally
    process.stdout.write(`${prefix}${color(text)}`);
    return;
  }

  // Multiple lines - show one at a time
  for (let i = 0; i < lines.length; i++) {
    process.stdout.write(`${prefix}${color(lines[i])}`);

    // Wait for user to press any key to continue
    const char = await readSingleChar();

    // If this is not the last line, print newline
    if (i !== lines.length - 1) {
      console.log();
    }

    // If user types q or Q, show all remaining lines and continue
    if (char.toLowerCase() === 'q') {
      for (let j = i + 1; j < lines.length; j++) {
        process.stdout.write(`${prefix}${color(lines[j])}`);
        if (j !== lines.length - 1) {
          console.log();
        }
      }
      return;
    }
  }
}

// Show the next flashcard and wait for a user command.
async function showNextFlashcard(phrase, showEnglish, prevNextPrompt) {
  let randomPhrase;
  if (phrase) {
    randomPhrase = phrase;
  } else if (showUnseen && shownPhrases.size < phrases.length) {
    const unseenPhrases = phrases.filter((phrase) => !shownPhrases.has(phrase.foreign));
    randomPhrase = unseenPhrases[Math.floor(Math.random() * unseenPhrases.length)];
    showUnseen = false;
  } else if (phraseIndex % 3 === 0 && wrongPhrases.length > 0) {
    randomPhrase = wrongPhrases[Math.floor(Math.random() * wrongPhrases.length)];
  } else {
    randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
  }
  const hard = randomPhrase.hard ? '  (hard)' : '';
  const workingOn = randomPhrase.workingOn ? '  (working on)' : '';
  const wrong = wrongPhrases.map((phrase) => phrase.foreign).includes(randomPhrase.foreign)
    ? '  (wrong before)'
    : '';
  shownPhrases.add(randomPhrase.foreign);
  const englishNow = 'showEnglish' in randomPhrase ? randomPhrase.showEnglish : showEnglish;
  console.log(
    `  ${chalk.yellow((englishNow ? randomPhrase.english : randomPhrase.foreign).replaceAll(/\| */g, '\n  '))}`,
  );
  const shownPhrasesCounter = Math.min(shownPhrases.size, phrases.length);
  const anyMoreUnseen = shownPhrases.size < phrases.length;
  const showUnseenPrompt = anyMoreUnseen ? 'Show (U)nseen, ' : '';
  const morePrompts = `${prevNextPrompt}${showUnseenPrompt}`;
  const prompt = `[${wrongPhrases.length}W][${shownPhrasesCounter}/${phrases.length}] Enter: ans, (B)ack, (Q)uit,${morePrompts}Last was (H)ard / (NH) / (WO)rking On / (NWO) / (W)rong / (R)ight: `;
  const winWidth = process.stdout.columns;
  const wrappedPrompt =
    prompt.length > winWidth ? prompt.replace('Last was', '\nLast was') : prompt;

  rl.question(wrappedPrompt, async (answer) => {
    answer = answer.toLowerCase();
    if (answer === 'q') {
      rl.close();
      return;
    }
    if (answer === 'b') {
      console.log(
        `\nFinished with ${nameOf(currentUnit)}${nameOf(currentChapter)}${nameOf(currentLesson)}`,
      );
      currentUnit = currentChapter = currentLesson = null;
      showMenu();
      return;
    }
    if (answer === 'p') {
      if (!prevUnit) {
        console.log(chalk.red('No previous lesson.'));
        showNextFlashcard(randomPhrase, showEnglish, prevNextPrompt);
        return;
      }
      [currentUnit, currentChapter, currentLesson] = [prevUnit, prevChapter, prevLesson];
      startFlashcards();
      return;
    }
    if (answer === 'n') {
      if (!nextUnit) {
        console.log(chalk.red('No next lesson.'));
        showNextFlashcard(randomPhrase, showEnglish, prevNextPrompt);
        return;
      }
      [currentUnit, currentChapter, currentLesson] = [nextUnit, nextChapter, nextLesson];
      startFlashcards();
      return;
    }
    if (answer === 'u') {
      if (shownPhrases.size >= phrases.length) {
        console.log(chalk.red('There are no unseen phrases.'));
        showNextFlashcard(randomPhrase, showEnglish, prevNextPrompt);
        return;
      } else {
        showUnseen = true;
        // Fall through so we'll show the last answer before showing the next flashcard.
      }
    }
    if (answer === 'h' && lastPhrase) {
      markPhraseAsHard(lastPhrase).then(() => {
        showNextFlashcard(randomPhrase, showEnglish, prevNextPrompt);
      });
      return;
    }
    if (answer === 'nh' && lastPhrase) {
      unmarkPhraseAsHard(lastPhrase).then(() => {
        showNextFlashcard(randomPhrase, showEnglish, prevNextPrompt);
      });
      return;
    }
    if (answer === 'wo' && lastPhrase) {
      markPhraseAsWorkingOn(lastPhrase).then(() => {
        showNextFlashcard(randomPhrase, showEnglish, prevNextPrompt);
      });
      return;
    }
    if (answer === 'nwo' && lastPhrase) {
      unmarkPhraseAsWorkingOn(lastPhrase).then(() => {
        showNextFlashcard(randomPhrase, showEnglish, prevNextPrompt);
      });
      return;
    }
    if (answer === 'w' && lastPhrase) {
      if (!wrongPhrases.map((phrase) => phrase.foreign).includes(lastPhrase.foreign)) {
        wrongPhrases.push(lastPhrase);
      }
      showNextFlashcard(randomPhrase, showEnglish, prevNextPrompt);
      return;
    }
    if (answer === 'r' && lastPhrase) {
      wrongPhrases = wrongPhrases.filter((phrase) => phrase.foreign !== lastPhrase.foreign);
      showNextFlashcard(randomPhrase, showEnglish, prevNextPrompt);
      return;
    }
    // If I typed a phrase, don't erase what I typed. I want to compare it to the correct answer.
    const moveUpAndClearLine = ['', 'u'].includes(answer) ? '\u001b[1A\u001b[K' : '';
    const linesToClear = (wrappedPrompt.match(/\n/g) || []).length + 1;

    // Clear the prompt and show the answer line by line
    process.stdout.write(`${moveUpAndClearLine.repeat(linesToClear)}`);
    const answerText = englishNow ? randomPhrase.foreign : randomPhrase.english;
    await showTextLineByLine(answerText, chalk.green, '    ');
    console.log(`${hard}${workingOn}${wrong}`);

    if (shownPhrases.size === phrases.length && !allPhrasesShownMessageDisplayed) {
      console.log(chalk.cyanBright.underline('All phrases have been shown.'));
      allPhrasesShownMessageDisplayed = true;
    }
    phraseIndex++;
    lastPhrase = randomPhrase;
    showNextFlashcard(undefined, showEnglish, prevNextPrompt);
  });
}

// Convert unit/chapter/lesson keys into readable names, e.g. "unit1" to "Unit 1"
function nameOf(thing) {
  return thing
    ? `${thing[0].toUpperCase() + thing.slice(1).replace(/([a-z])([0-9])/gi, '$1 $2')} `
    : '';
}

// Builds a regex pattern that matches text in source file format.
// Handles both single-line ('text') and multi-line ('text' + '| more') formats.
// Also handles single-line phrases with literal pipe characters ('text | more').
function buildSourcePatternForText(text) {
  // Helper to escape special regex characters
  const escapeRegex = (str) => str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

  // Build single-line pattern with or without pipes in the text: 'text' or 'text| more text'
  const singleLinePattern = `'${escapeRegex(text)}'`;

  // Build multi-line pattern ('part1' + '| part2' + '| part3')
  const parts = text.split('|');
  let multiLinePattern = `'${escapeRegex(parts[0])}'`;
  for (let i = 1; i < parts.length; i++) {
    multiLinePattern += `\\s*\\+\\s*'\\|${escapeRegex(parts[i])}'`;
  }

  // Return pattern that matches either format
  // Try multi-line first (more specific), then single-line
  return `(?:${multiLinePattern}|${singleLinePattern})`;
}

// Add a property to a phrase in the source file
async function addPhraseProperty(phrase, property) {
  // Check if property is already set in memory
  if (phrase[property]) {
    return;
  }

  const filePath = `./${language}.js`;
  let content = fs.readFileSync(filePath, 'utf8');

  // Build regex patterns that match source file format (handles multi-line)
  const foreignPattern = buildSourcePatternForText(phrase.foreign);
  const englishPattern = buildSourcePatternForText(phrase.english);

  // Find the phrase by matching both foreign and english, then insert property after english
  const regex = new RegExp(
    `(\\{[^}]*foreign:\\s*${foreignPattern}[^}]*english:\\s*${englishPattern})`,
    's',
  );

  content = content.replace(regex, (match) => {
    if (match.includes(`${property}:`)) {
      return match; // Already has property, don't modify
    } else {
      return match + `, ${property}: true`;
    }
  });

  fs.writeFileSync(filePath, content, 'utf8');
  phrase[property] = true;
}

// Remove a property from a phrase in the source file
async function removePhraseProperty(phrase, property) {
  // Check if property is already unset in memory
  if (!phrase[property]) {
    return;
  }

  const filePath = `./${language}.js`;
  let content = fs.readFileSync(filePath, 'utf8');

  // Build regex patterns that match source file format (handles multi-line)
  const foreignPattern = buildSourcePatternForText(phrase.foreign);
  const englishPattern = buildSourcePatternForText(phrase.english);

  // Find the phrase and remove the property from it
  const regex = new RegExp(
    `(\\{[^}]*foreign:\\s*${foreignPattern}[^}]*english:\\s*${englishPattern}[^}]*)(,\\s*${property}:\\s*true)`,
    's',
  );

  content = content.replace(regex, (match, beforeProperty, propertyPart) => {
    return beforeProperty; // Remove the property part
  });

  fs.writeFileSync(filePath, content, 'utf8');
  delete phrase[property];
}

// Add hard: true to a phrase in the language file and in memory
async function markPhraseAsHard(phrase) {
  await addPhraseProperty(phrase, 'hard');
}

// Remove hard: true from a phrase in the language file and in memory
async function unmarkPhraseAsHard(phrase) {
  await removePhraseProperty(phrase, 'hard');
}

// Add workingOn: true to a phrase in the language file and in memory
async function markPhraseAsWorkingOn(phrase) {
  await addPhraseProperty(phrase, 'workingOn');
}

// Remove workingOn: true from a phrase in the language file and in memory
async function unmarkPhraseAsWorkingOn(phrase) {
  await removePhraseProperty(phrase, 'workingOn');
}

// Calculate the previous lesson based on the current unit/chapter/lesson.
function calcPrevLesson() {
  if (!(currentUnit.startsWith('unit') || currentUnit === 'custom')) {
    // Unit is 'all', 'hard'
    return [null, null, null];
  }

  const unitNum = parseInt(currentUnit.slice(4), 10);
  const chapterNum = parseInt(currentChapter.slice(7), 10);
  const lessonNum = parseInt(currentLesson.slice(6), 10);

  if (currentLesson === 'all' || currentLesson === 'hard') {
    if (chapterNum > 1) {
      // Do 'all' or 'hard' in the previous chapter of this unit
      return [currentUnit, `chapter${chapterNum - 1}`, currentLesson];
    }
    if (unitNum && unitNum > 1) {
      // Do 'all' or 'hard' in the last chapter of the previous unit
      return [
        `unit${unitNum - 1}`,
        Object.keys(allPhrases[`unit${unitNum - 1}`]).at(-1),
        currentLesson,
      ];
    }
    // Currently at unit 1 or custom, chapter 1. There is no previous.
    return [null, null, null];
  }

  if (lessonNum > 1) {
    return [currentUnit, currentChapter, `lesson${lessonNum - 1}`];
  }

  if (chapterNum > 1) {
    // Do the last lesson in the previous chapter of this unit
    const prevChapter = `chapter${chapterNum - 1}`;
    return [currentUnit, prevChapter, Object.keys(allPhrases[currentUnit][prevChapter]).at(-1)];
  }

  if (unitNum && unitNum > 1) {
    // Do the last lesson in the last chapter of the previous unit
    const prevUnit = `unit${unitNum - 1}`;
    const lastChapter = Object.keys(allPhrases[prevUnit]).at(-1);
    const lastLesson = Object.keys(allPhrases[prevUnit][lastChapter]).at(-1);
    return [prevUnit, lastChapter, lastLesson];
  }

  return [null, null, null];
}

// Calculate the next lesson based on the current unit/chapter/lesson.
function calcNextLesson() {
  if (!(currentUnit.startsWith('unit') || currentUnit === 'custom')) {
    // Unit is 'all', 'hard'
    return [null, null, null];
  }

  const unitNum = parseInt(currentUnit.slice(4), 10);
  const chapterNum = parseInt(currentChapter.slice(7), 10);
  const lessonNum = parseInt(currentLesson.slice(6), 10);

  const numUnits = Object.keys(allPhrases).filter((un) => un.startsWith('unit')).length;
  const numChapters = Object.keys(allPhrases[currentUnit]).filter((ch) =>
    ch.startsWith('chapter'),
  ).length;
  const numLessons = Object.keys(allPhrases[currentUnit][currentChapter]).filter((les) =>
    les.startsWith('lesson'),
  ).length;

  if (currentLesson === 'all' || currentLesson === 'hard') {
    if (chapterNum < numChapters) {
      // Do 'all' or 'hard' in the next chapter of this unit
      return [currentUnit, `chapter${chapterNum + 1}`, currentLesson];
    }
    if (unitNum && unitNum < numUnits) {
      // Do 'all' or 'hard' in the first chapter of the next unit
      return [`unit${unitNum + 1}`, 'chapter1', currentLesson];
    }
    // Currently at the last unit or custom, last chapter. There is no next.
    return [null, null, null];
  }

  if (lessonNum < numLessons) {
    return [currentUnit, currentChapter, `lesson${lessonNum + 1}`];
  }

  // If current unit has a name, don't count it as a chapter
  if (chapterNum < numChapters) {
    // Do the first lesson in the next chapter of this unit
    const nextChapter = `chapter${chapterNum + 1}`;
    return [currentUnit, nextChapter, Object.keys(allPhrases[currentUnit][nextChapter])[1]];
  }

  if (currentUnit !== 'custom' && currentUnit !== Object.keys(allPhrases).at(-1)) {
    // Do the first lesson in the first chapter of the next unit
    const nextUnit = `unit${unitNum + 1}`;
    return [nextUnit, 'chapter1', Object.keys(allPhrases[nextUnit].chapter1)[1]];
  }

  return [null, null, null];
}

// Start the app by showing the top-level menu.
showMenu();
