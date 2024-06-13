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
      section1: [
        { foreign: 'Dobar dan. Kako ste?', english: 'Hello. How are you? (formal singular)' },
        { foreign: 'Dobro. A Vi?', english: 'Fine. And you? (formal singular)' },
        { foreign: 'Zovem se Brian', english: 'My name is Brian' },
        { foreign: 'Kako se Vi zovete?', english: 'What is your name? (formal)' },
      ],
      section2: [
        { foreign: 'Ja sam Brian', english: 'I am Brian' },
        { foreign: 'Drago mi je', english: 'Nice to meet you' },
        { foreign: 'I meni', english: 'You too (nice to meet you too)' },
        { foreign: 'Doviđenja', english: 'Goodbye' },
        { foreign: 'Kako ide?', english: 'How’s it going?' },
        { foreign: 'Vidimo se kasnije', english: 'See each other later' },
      ],
      section3: [
        { foreign: 'Što radiš?', english: 'What are you doing? (informal singular)' },
        { foreign: 'Vidimo se sutra', english: 'See each other tomorrow' },
        { foreign: 'Odlično', english: 'Excellent' },
      ],
      section4: [
        { foreign: 'loše', english: 'bad' },
        { foreign: 'tako-tako', english: 'so-so' },
        { foreign: 'Čuvaj se!', english: 'Take care of yourself! (informal singular)' },
        { foreign: 'on', english: 'he' },
        { foreign: 'ona', english: 'she' },
        { foreign: 'ono', english: 'it' },
        { foreign: 'oni', english: 'they' },
      ],
      section5: [
        { foreign: 'Laku noć', english: 'Good night' },
        { foreign: 'Zbogom', english: 'Farewell (old-fashioned)' },
        { foreign: 'Dobro jutro', english: 'Good morning' },
        { foreign: 'Gospodin', english: 'Sir' },
        { foreign: 'Gospođa', english: 'Madam' },
        { foreign: 'Gospođica', english: 'Miss' },
      ],
      section6: [{ foreign: 'Gđa.', english: 'Ms.' }],
    },
    chapter2: {
      name: 'My family',
      section1: [],
    },
  },
};

const menu = `
Choose an option:
${Object.keys(flashcards)
  .map((unit, index) => `${index + 1}. Unit ${index + 1}`)
  .join('\n')}
A. All Units
Q. Quit
`;

let currentUnit = null;
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
  if (choice.toLowerCase() === 'a') {
    currentUnit = 'all';
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
      showSectionMenu();
      return;
    }
    console.log('Invalid choice. Try again.');
    showChapterMenu();
  });
}

function showSectionMenu() {
  const sectionMenu = `
Choose a section:
${Object.keys(flashcards[currentUnit][currentChapter])
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
    if (
      choiceNum > 0 &&
      choiceNum <= Object.keys(flashcards[currentUnit][currentChapter]).length - 1
    ) {
      currentSection = `section${choiceNum}`;
      startFlashcards();
      return;
    }
    console.log('Invalid choice. Try again.');
    showSectionMenu();
  });
}

function startFlashcards() {
  rl.question('Do you want to see English phrases or foreign phrases? (E/F): ', (answer) => {
    if (answer.toLowerCase() === 'q') {
      rl.close();
      return;
    }
    showEnglish = answer.toLowerCase() !== 'f';
    showNextFlashcard();
  });
}

function showNextFlashcard() {
  let phrases = [];
  if (currentUnit === 'all') {
    for (let unit in flashcards) {
      for (let chapter in flashcards[unit]) {
        for (let section in flashcards[unit][chapter]) {
          if (section === 'name') {
            continue;
          }
          phrases = phrases.concat(flashcards[unit][chapter][section]);
        }
      }
    }
  } else if (currentSection) {
    phrases = flashcards[currentUnit][currentChapter][currentSection];
  } else {
    for (let section in flashcards[currentUnit][currentChapter]) {
      phrases = phrases.concat(flashcards[currentUnit][currentChapter][section]);
    }
  }

  const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
  console.log(`  ${chalk.yellow(showEnglish ? randomPhrase.english : randomPhrase.foreign)}`);

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
    const moveUpAndClearLine = '\u001b[1A\u001b[K';
    console.log(
      `${moveUpAndClearLine}    ${chalk.green(showEnglish ? randomPhrase.foreign : randomPhrase.english)}`,
    );
    showNextFlashcard();
  });
}

showMenu();
