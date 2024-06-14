import readline from 'readline';
import chalk from 'chalk';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const flashcards = {
  unit1: {
    chapter1: {
      name: 'Who are you?',
      lesson1: [
        { foreign: 'Dobar dan. Kako ste?', english: 'Hello. How are you? (formal singular)' },
        { foreign: 'Dobro. A Vi?', english: 'Fine. And you? (formal singular)' },
        { foreign: 'Zovem se Brian', english: 'My name is Brian' },
        { foreign: 'Kako se Vi zovete?', english: 'What is your name? (formal)' },
      ],
      lesson2: [
        { foreign: 'Ja sam Brian', english: 'I am Brian' },
        { foreign: 'Drago mi je', english: 'Nice to meet you', hard: true },
        { foreign: 'I meni', english: 'You too (nice to meet you too)' },
        { foreign: 'Doviđenja', english: 'Goodbye' },
        { foreign: 'Kako ide?', english: 'How’s it going?', hard: true },
        { foreign: 'Vidimo se kasnije', english: 'See each other later', hard: true },
      ],
      lesson3: [
        { foreign: 'Što radiš?', english: 'What are you doing? (informal singular)', hard: true },
        { foreign: 'Vidimo se sutra', english: 'See each other tomorrow' },
        { foreign: 'Odlično', english: 'Excellent', hard: true },
      ],
      lesson4: [
        { foreign: 'loše', english: 'bad' },
        { foreign: 'tako-tako', english: 'so-so' },
        { foreign: 'Čuvaj se!', english: 'Take care of yourself! (informal singular)', hard: true },
        { foreign: 'on', english: 'he' },
        { foreign: 'ona', english: 'she' },
        { foreign: 'ono', english: 'it' },
        { foreign: 'oni', english: 'they' },
      ],
      lesson5: [
        { foreign: 'Laku noć', english: 'Good night', hard: true },
        { foreign: 'Zbogom', english: 'Farewell (old-fashioned)' },
        { foreign: 'Dobro jutro', english: 'Good morning' },
        { foreign: 'Gospodin', english: 'Sir', hard: true },
        { foreign: 'Gospođa', english: 'Madam', hard: true },
        { foreign: 'Gospođica', english: 'Miss', hard: true },
      ],
      lesson6: [{ foreign: 'Gđa', english: 'Ms.', hard: true }],
    },
    chapter2: {
      name: 'My family',
      lesson1: [
        { foreign: 'To je moja sestra, Tanja', english: 'That is my sister, Tanja' },
        { foreign: 'Ovo je', english: 'This is' },
        { foreign: 'To je (ono je)', english: 'That is' },
        { foreign: 'moja sestra', english: 'my sister' },
        { foreign: 'moj brat', english: 'my brother' },
        { foreign: 'moje diete', english: 'my child' },
        { foreign: 'selo', english: 'village' },
        {
          foreign: 'Imaš li i brata?',
          english: 'Do you also have a brother? (Informal singular)',
          hard: true,
        },
        { foreign: 'Da. On je tamo.', english: 'Yes. He is over there.', hard: true },
        { foreign: 'Da', english: 'Yes' },
      ],
      lesson2: [
        { foreign: 'On je s mamom i tatom.', english: 'He is with mom and dad.' },
        { foreign: 'i', english: 'and/too/also' },
        { foreign: 'Živi li i on ovdje?', english: 'Does he live here, too?' },
        {
          foreign: 'Cijela naša obitelj živi ovdje.',
          english: 'Our whole family lives here.',
          hard: true,
        },
      ],
      lesson3: [
        { foreign: 'otac (accent is on first syllable)', english: 'father' },
        { foreign: 'majka', english: 'mother' },
        { foreign: 'tetka', english: 'aunt (mother’s or father’s sister)' },
        { foreign: 'ujna', english: 'aunt (wife of mother’s brother)' },
        { foreign: 'strina', english: 'aunt (wife of father’s brother)' },
        {
          foreign: 'tetak (accent is on first syllable)',
          english: 'uncle (husband of mother’s or father’s sister)',
        },
        { foreign: 'ujak', english: 'uncle (mother’s brother)' },
        { foreign: 'stric', english: 'uncle (father’s brother)' },
        { foreign: 'bratić', english: 'cousin (male)' },
        { foreign: 'sestrična', english: 'cousin (female)' },
        { foreign: 'sin', english: 'son' },
        { foreign: 'kći', english: 'daughter' },
        { foreign: 'zaruke', english: 'engagement' },
      ],
      lesson4: [
        { foreign: 'brak', english: 'marriage' },
        { foreign: 'u braku', english: 'married' },
        { foreign: 'suprug', english: 'husband' },
        { foreign: 'supruga', english: 'wife' },
        { foreign: 'roditelji', english: 'parents' },
        { foreign: 'djeca', english: 'children' },
        { foreign: 'djed i baka', english: 'grandparents (grandfather and grandmother)' },
      ],
      lesson5: [
        { foreign: 'unuk', english: 'grandson' },
        { foreign: 'unuka', english: 'granddaughter' },
        { foreign: 'nećakinja (accent on second syllable)', english: 'niece' },
        { foreign: 'nećak (accent on first syllable)', english: 'nephew' },
      ],
    },
  },
};

const menu = `
Choose an option:
${Object.keys(flashcards)
  .map((unit, index) => `${index + 1}. Unit ${index + 1}`)
  .join('\n')}
A. All units
H. Hard phrases
Q. Quit
`;

let currentUnit = null;
let currentChapter = null;
let currentLesson = null;
let showEnglish = true;
let phrases = [];

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
  const choiceNum = parseInt(choice, 10);
  if (choiceNum > 0 && choiceNum <= Object.keys(flashcards).length) {
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
${Object.keys(flashcards[currentUnit])
  .map((chapter, index) => {
    return `${index + 1}. Chapter ${index + 1}: ${flashcards[currentUnit][chapter].name}`;
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
    if (choiceNum > 0 && choiceNum <= Object.keys(flashcards[currentUnit]).length) {
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
${Object.keys(flashcards[currentUnit][currentChapter])
  .map((lesson, index) => {
    if (lesson === 'name') {
      return null;
    }
    return `${index}. Lesson ${index}`;
  })
  .filter(Boolean)
  .join('\n')}
A. All lessons
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
    const choiceNum = parseInt(choice, 10);
    if (
      choiceNum > 0 &&
      choiceNum <= Object.keys(flashcards[currentUnit][currentChapter]).length - 1
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
  rl.question('Do you want to see English phrases or foreign phrases? (E/f): ', (answer) => {
    if (answer.toLowerCase() === 'q') {
      rl.close();
      return;
    }
    showEnglish = answer.toLowerCase() !== 'f';
    setupPhrases();
    showNextFlashcard();
  });
}

function setupPhrases() {
  phrases = [];
  if (currentUnit === 'all' || currentUnit === 'hard') {
    for (let unit in flashcards) {
      for (let chapter in flashcards[unit]) {
        for (let lesson in flashcards[unit][chapter]) {
          if (lesson === 'name') {
            continue;
          }
          if (currentUnit === 'hard') {
            phrases = phrases.concat(
              flashcards[unit][chapter][lesson].filter((phrase) => phrase.hard),
            );
            continue;
          }
          phrases = phrases.concat(flashcards[unit][chapter][lesson]);
        }
      }
    }
  } else if (currentLesson === 'all') {
    for (let lesson in flashcards[currentUnit][currentChapter]) {
      if (lesson === 'name') {
        continue;
      }
      phrases = phrases.concat(flashcards[currentUnit][currentChapter][lesson]);
    }
  } else if (currentLesson) {
    phrases = flashcards[currentUnit][currentChapter][currentLesson];
  }
}

function showNextFlashcard() {
  const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
  console.log(`  ${chalk.yellow(showEnglish ? randomPhrase.english : randomPhrase.foreign)}`);

  rl.question('Press Enter to see the translation, B to go back, or Q to quit: ', (answer) => {
    if (answer.toLowerCase() === 'q') {
      rl.close();
      return;
    }
    if (answer.toLowerCase() === 'b') {
      currentLesson = null;
      showMenu();
      return;
    }
    const moveUpAndClearLine = '\u001b[1A\u001b[K';
    console.log(
      `${moveUpAndClearLine}    ${chalk.green(showEnglish ? randomPhrase.foreign : randomPhrase.english)}`,
    );
    showNextFlashcard();
  });
}

showMenu();
