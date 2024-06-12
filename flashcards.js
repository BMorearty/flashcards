const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const flashcards = {
  chapter1: {
    section1: [
      { english: "Hello", foreign: "Hola" },
      { english: "Goodbye", foreign: "Adiós" }
    ],
    section2: [
      { english: "Thank you", foreign: "Gracias" },
      { english: "Please", foreign: "Por favor" }
    ]
  },
  chapter2: {
    section1: [
      { english: "Yes", foreign: "Sí" },
      { english: "No", foreign: "No" }
    ]
  }
};

const menu = `
Choose an option:
1. Chapter 1
2. Chapter 2
3. All Chapters
Q. Quit
`;

const chapters = {
  1: "chapter1",
  2: "chapter2"
};

const sections = {
  1: "section1",
  2: "section2"
};

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
  switch (choice) {
    case '1':
    case '2':
      currentChapter = chapters[choice];
      showSectionMenu();
      break;
    case '3':
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
1. Section 1
2. Section 2
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
      currentSection = sections[choice];
      startFlashcards();
      break;
    default:
      console.log('Invalid choice. Try again.');
      showSectionMenu();
  }
}

function startFlashcards() {
  rl.question('Do you want to see English phrases or foreign phrases? (E/F): ', (answer) => {
    if (answer.toLowerCase() === 'q') {
      rl.close();
      return;
    }
    showEnglish = (answer.toLowerCase() === 'e');
    showNextFlashcard();
  });
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
  console.log(showEnglish ? randomPhrase.english : randomPhrase.foreign);

  rl.question('Press Enter to see the translation, B to go back, or Q to quit: ', (answer) => {
    if (answer.toLowerCase() === 'q') {
      rl.close();
      return;
    }
    if (answer.toLowerCase() === 'b') {
      currentSection = null;
      showMenu();
      return;
    }
    console.log(showEnglish ? randomPhrase.foreign : randomPhrase.english);
    showNextFlashcard();
  });
}

showMenu();
