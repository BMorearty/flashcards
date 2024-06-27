import readline from 'readline';
import fs from 'fs';
import chalk from 'chalk';
import { allPhrases } from './croatian.js';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const menu = `
Choose an option:
${Object.keys(allPhrases)
  .filter((unit) => unit !== 'custom')
  .map((unit, index) => `${index + 1}. Unit ${index + 1}`)
  .join('\n')}
A. All units
H. Hard phrases
C. Custom phrases
Q. Quit
`;

let currentUnit = null;
let currentChapter = null;
let currentLesson = null;
let showEnglish = true;
let phrases = [];
let lastPhrase = null;
let wrongPhrases;
let phraseIndex;
let shownPhrases = new Set();

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
  if (choice.toLowerCase() === 'c') {
    currentUnit = 'custom';
    startFlashcards();
    return;
  }
  const choiceNum = parseInt(choice, 10);
  if (choiceNum > 0 && choiceNum <= Object.keys(allPhrases).length) {
    currentUnit = `unit${choiceNum}`;
    showChapterMenu();
    return;
  }
  console.log('Invalid choice. Try again.');
  showMenu();
}

function showChapterMenu() {
  const chapterMenu = `
Choose a chapter:
${Object.keys(allPhrases[currentUnit])
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
    if (choiceNum > 0 && choiceNum <= Object.keys(allPhrases[currentUnit]).length) {
      currentChapter = `chapter${choiceNum}`;
      showLessonMenu();
      return;
    }
    console.log('Invalid choice. Try again.');
    showChapterMenu();
  });
}

function showLessonMenu() {
  const lessonMenu = `
Choose a lesson:
${Object.keys(allPhrases[currentUnit][currentChapter])
  .map((lesson, index) => {
    if (lesson === 'name') {
      return null;
    }
    return `${index}. Lesson ${index}`;
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
      choiceNum <= Object.keys(allPhrases[currentUnit][currentChapter]).length - 1
    ) {
      currentLesson = `lesson${choiceNum}`;
      startFlashcards();
      return;
    }
    console.log('Invalid choice. Try again.');
    showLessonMenu();
  });
}

function startFlashcards() {
  rl.question('Do you want to see English phrases\nor foreign phrases? (E/f): ', (answer) => {
    if (answer.toLowerCase() === 'q') {
      rl.close();
      return;
    }
    showEnglish = answer.toLowerCase() !== 'f';
    setupPhrases().then(() => {
      showNextFlashcard();
    });
  });
}

async function setupPhrases() {
  phrases = [];
  wrongPhrases = [];
  phraseIndex = 0;
  shownPhrases = new Set();
  const hardPhrases = await dynHardPhrases();
  if (currentUnit === 'all' || currentUnit === 'hard') {
    for (let unit in allPhrases) {
      if (unit === 'custom') {
        if (currentUnit === 'hard') {
          phrases = phrases.concat(
            allPhrases[unit].filter(
              (phrase) => phrase.hard || hardPhrases.includes(phrase.foreign),
            ),
          );
          continue;
        }
        phrases = phrases.concat(allPhrases[unit]);
        continue;
      }
      for (let chapter in allPhrases[unit]) {
        for (let lesson in allPhrases[unit][chapter]) {
          if (lesson === 'name') {
            continue;
          }
          if (currentUnit === 'hard') {
            phrases = phrases.concat(
              allPhrases[unit][chapter][lesson].filter(
                (phrase) => phrase.hard || hardPhrases.includes(phrase.foreign),
              ),
            );
            continue;
          }
          phrases = phrases.concat(allPhrases[unit][chapter][lesson]);
        }
      }
    }
  } else if (currentUnit === 'custom') {
    phrases = allPhrases[currentUnit];
  } else if (currentLesson === 'all') {
    for (let lesson in allPhrases[currentUnit][currentChapter]) {
      if (lesson === 'name') {
        continue;
      }
      phrases = phrases.concat(allPhrases[currentUnit][currentChapter][lesson]);
    }
  } else if (currentLesson === 'hard') {
    for (let lesson in allPhrases[currentUnit][currentChapter]) {
      if (lesson === 'name') {
        continue;
      }
      phrases = phrases.concat(
        allPhrases[currentUnit][currentChapter][lesson].filter((phrase) => phrase.hard),
      );
    }
  } else if (currentLesson) {
    phrases = allPhrases[currentUnit][currentChapter][currentLesson];
  }
  for (let phrase of phrases) {
    if (hardPhrases.includes(phrase.foreign)) {
      phrase.hard = true;
    }
  }
}

function showNextFlashcard(phrase) {
  const randomPhrase =
    phrase ??
    (phraseIndex % 3 === 0 && wrongPhrases.length > 0
      ? wrongPhrases[Math.floor(Math.random() * wrongPhrases.length)]
      : phrases[Math.floor(Math.random() * phrases.length)]);
  const hard = randomPhrase.hard ? '  (hard)' : '';
  const wrong = wrongPhrases.map((phrase) => phrase.foreign).includes(randomPhrase.foreign)
    ? '  (wrong before)'
    : '';
  shownPhrases.add(randomPhrase.foreign);
  console.log(
    `  ${chalk.yellow((showEnglish ? randomPhrase.english : randomPhrase.foreign).replaceAll(/; */g, '\n  '))}`,
  );

  rl.question(
    'Enter: see translation, (B)ack, (Q)uit,\nLast was (H)ard / (W)rong / (R)ight: ',
    (answer) => {
      if (answer.toLowerCase() === 'q') {
        rl.close();
        return;
      }
      if (answer.toLowerCase() === 'b') {
        console.log(
          `\nFinished with ${nameOf(currentUnit)}${nameOf(currentChapter)}${nameOf(currentLesson)}`,
        );
        currentUnit = currentChapter = currentLesson = null;
        showMenu();
        return;
      }
      if (answer.toLowerCase() === 'h' && lastPhrase) {
        addHard(lastPhrase).then(() => {
          showNextFlashcard(randomPhrase);
        });
        return;
      }
      if (answer.toLowerCase() === 'w' && lastPhrase) {
        if (!wrongPhrases.map((phrase) => phrase.foreign).includes(lastPhrase.foreign)) {
          wrongPhrases.push(lastPhrase);
        }
        showNextFlashcard(randomPhrase);
        return;
      }
      if (answer.toLowerCase() === 'r' && lastPhrase) {
        wrongPhrases = wrongPhrases.filter((phrase) => phrase.foreign !== lastPhrase.foreign);
        showNextFlashcard(randomPhrase);
        return;
      }
      // If I typed a phrase, don't erase what I typed. I want to compare it to the correct answer.
      const moveUpAndClearLine = answer === '' ? '\u001b[1A\u001b[K' : '';
      console.log(
        `${moveUpAndClearLine}${moveUpAndClearLine}    ${chalk.green((showEnglish ? randomPhrase.foreign : randomPhrase.english).replaceAll(/; */g, '\n    '))}${hard}${wrong}`,
      );
      if (shownPhrases.size === phrases.length) {
        console.log('All phrases have been shown.');
        shownPhrases.add('don’t show that message again.');
      }
      phraseIndex++;
      lastPhrase = randomPhrase;
      showNextFlashcard();
    },
  );
}

function nameOf(thing) {
  return thing
    ? `${thing[0].toUpperCase() + thing.slice(1).replace(/([a-z])([0-9])/gi, '$1 $2')} `
    : '';
}

// Phrases in the hard phrases text file
async function dynHardPhrases() {
  const hardPhrases = [];

  const rl = readline.createInterface({
    input: fs.createReadStream('hardphrases.txt'),
    crlfDelay: Infinity,
  });

  rl.on('line', (line) => {
    hardPhrases.push(line);
  });

  await new Promise((resolve) => rl.on('close', resolve));

  return hardPhrases;
}

async function addHard(phrase) {
  if (!(await dynHardPhrases()).includes(phrase.foreign)) {
    phrase.hard = true;
    fs.appendFile('hardphrases.txt', `${phrase.foreign}\n`, (err) => {
      if (err) {
        console.error(err);
      }
    });
  }
}

showMenu();
