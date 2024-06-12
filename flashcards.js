import readline from 'readline';
import chalk from 'chalk';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const flashcards = {
  chapter1: {
    name: 'Greetings',
    section1: [
      { english: 'Hello', foreign: 'Hola' },
      { english: 'Goodbye', foreign: 'Adiós' },
    ],
    section2: [
      { english: 'Thank you', foreign: 'Gracias' },
      { english: 'Please', foreign: 'Por favor' },
    ],
  },
  chapter2: {
    name: 'Yes and no',
    section1: [
      { english: 'Yes', foreign: 'Sí' },
      { english: 'No', foreign: 'No' },
    ],
  },
};

const menu = `
Choose an option:
${Object.keys(flashcards)
  .map(
    (chapter, index) =>
      `${index + 1}. Chapter ${index + 1}: ${flashcards[chapter].name}`,
  )
  .join('\n')}
A. All Chapters
Q. Quit
`;

let currentChapter = null;
let currentSection = null;
let showEnglish = true;

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
  switch (choice.toLowerCase()) {
    case '1':
    case '2':
      currentChapter = `chapter${choice}`;
      showSectionMenu();
      break;
    case 'a':
      currentChapter = 'all';
      startFlashcards();
      break;
    default:
      console.log('Invalid choice. Try again.');
      showMenu();
  }
}

function showSectionMenu() {
  const sectionMenu = `
Choose a section:
${Object.keys(flashcards[currentChapter])
  .map((section, index) => {
    if (section === 'name') {
      return '';
    }
    return `${index}. Section ${index}`;
  })
  .join('\n')}
B. Back to main menu
Q. Quit
`;
  console.log(sectionMenu);
  rl.question('Your choice: ', (answer) => {
    if (answer.toLowerCase() === 'q') {
      rl.close();
      return;
    }
    if (answer.toLowerCase() === 'b') {
      showMenu();
      return;
    }
    handleSectionChoice(answer);
  });
}

function handleSectionChoice(choice) {
  switch (choice) {
    case '1':
    case '2':
      currentSection = `section${choice}`;
      startFlashcards();
      break;
    default:
      console.log('Invalid choice. Try again.');
      showSectionMenu();
  }
}

function startFlashcards() {
  rl.question(
    'Do you want to see English phrases or foreign phrases? (E/F): ',
    (answer) => {
      if (answer.toLowerCase() === 'q') {
        rl.close();
        return;
      }
      showEnglish = answer.toLowerCase() === 'e';
      showNextFlashcard();
    },
  );
}

function showNextFlashcard() {
  let phrases = [];
  if (currentChapter === 'all') {
    for (let chapter in flashcards) {
      for (let section in flashcards[chapter]) {
        phrases = phrases.concat(flashcards[chapter][section]);
      }
    }
  } else if (currentSection) {
    phrases = flashcards[currentChapter][currentSection];
  } else {
    for (let section in flashcards[currentChapter]) {
      phrases = phrases.concat(flashcards[currentChapter][section]);
    }
  }

  const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
  console.log(
    '  ',
    chalk.yellow(showEnglish ? randomPhrase.english : randomPhrase.foreign),
  );

  rl.question(
    'Press Enter to see the translation, B to go back, or Q to quit: ',
    (answer) => {
      if (answer.toLowerCase() === 'q') {
        rl.close();
        return;
      }
      if (answer.toLowerCase() === 'b') {
        currentSection = null;
        showMenu();
        return;
      }
      const moveUpAndClearLine = '\u001b[1A\u001b[K';
      console.log(
        moveUpAndClearLine,
        '   ',
        chalk.yellow(showEnglish ? randomPhrase.foreign : randomPhrase.english),
      );
      showNextFlashcard();
    },
  );
}

showMenu();
