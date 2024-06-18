import readline from 'readline';
import fs from 'fs';
import chalk from 'chalk';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const flashcards = {
  custom: [
    { foreign: 'kuća / kuće', english: 'house / houses' },
    { foreign: 'žena / žene', english: 'woman / women' },
    { foreign: 'stolica / stolice', english: 'chair / chairs' },
    { foreign: 'pivo / piva', english: 'beer / beers' },
    { foreign: 'vino / vina', english: 'wine / wines' },
    { foreign: 'sunce', english: 'sun' },
    { foreign: 'more / mora', english: 'sea / seas' },
    { foreign: 'televizor / televizori', english: 'TV / TVs' },
    { foreign: 'susjed / susjedi', english: 'neighbor / neighbors' },
    { foreign: 'most / mostovi', english: 'bridge / bridges' },
    { foreign: 'stol / stolovi', english: 'table / tables' },
    { foreign: 'dječak / dječaci', english: 'boy / boys' },
    { foreign: 'liječnik / liyečnici', english: 'doctor / doctors' },
    { foreign: 'čovjek / ljudi', english: 'man / people' },
    { foreign: 'brat / braća', english: 'brother / brothers' },
    { foreign: 'kći / kćeri', english: 'daughter / daughters' },
    { foreign: 'djete / djeca', english: 'child / children' },
    { foreign: 'nož / noževi', english: 'knife / knives' },
  ],
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
        { foreign: 'Gospodin', english: 'Sir' },
        { foreign: 'Gospođa', english: 'Madam' },
        { foreign: 'Gospođica', english: 'Miss' },
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
        { foreign: 'moje diete', english: 'my child', hard: true },
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
        { foreign: 'u braku', english: 'married', hard: true },
        { foreign: 'suprug', english: 'husband' },
        { foreign: 'supruga', english: 'wife' },
        { foreign: 'roditelji', english: 'parents' },
        { foreign: 'djeca', english: 'children', hard: true },
        { foreign: 'djed i baka', english: 'grandparents (grandfather and grandmother)' },
      ],
      lesson5: [
        { foreign: 'unuk', english: 'grandson' },
        { foreign: 'unuka', english: 'granddaughter' },
        { foreign: 'nećakinja (accent on second syllable)', english: 'niece' },
        { foreign: 'nećak (accent on first syllable)', english: 'nephew' },
      ],
    },
    chapter3: {
      name: 'Getting to know you',
      lesson1: [
        { foreign: 'Uh, ona je super!', english: 'Wow, she is great!' },
        { foreign: 'Stvarno tako misliš?', english: 'Do you really think so? (Informal singular)' },
        {
          foreign: 'Da, volio bih je upoznati.',
          english: 'Yes, I would like to meet her. (Spoken by a man)',
        },
        { foreign: 'voljela bih', english: 'I would like to (spoken by a woman)' },
        { foreign: 'je', english: 'her' },
        { foreign: 'Ona je moja prijateljica.', english: 'She is my friend.', hard: true },
      ],
      lesson2: [
        {
          foreign: 'Upoznat ću te s njom.',
          english: 'I will introduce you (to her). (Informal singular)',
          hard: true,
        },
        { foreign: 'te', english: 'you (Informal singular)' },
        { foreign: 'njom', english: 'her' },
        { foreign: 'Nađimo se na kavi.', english: 'Let’s meet for coffee.', hard: true },
        { foreign: 'na', english: 'on' },
        { foreign: 'lijepa', english: 'pretty' },
        { foreign: 'zgodan', english: 'handsome' },
        { foreign: 'mlad (muškarac)', english: 'young (man)' },
        { foreign: 'mlada (žena)', english: 'young (woman)' },
        { foreign: 'star (muškarac)', english: 'old (man)' },
        { foreign: 'stara (žena)', english: 'old (woman)' }
      ],
      lesson3: [
        { foreign: 'visok (muškarac)', english: 'tall (man)' },
        { foreign: 'visoka (žena) (accent on first syllable)', english: 'tall (woman)' },
        { foreign: 'nizak (muškarac)', english: 'short (man)' },
        { foreign: 'niska (žena)', english: 'short (woman)' },
        { foreign: 'mršav (muškarac)', english: 'thin (man)' },
        { foreign: 'mršava (žena)', english: 'thin (woman)' },
        { foreign: 'debeo (muškarac)', english: 'fat (man)' },
      ],
      lesson4: [
        { foreign: 'debela (žena)', english: 'fat (woman)' },
        { foreign: 'osobnost (accent on second syllable)', english: 'personality' },
        { foreign: 'To mi se sviđa.', english: 'I like it.' },
        { foreign: 'poznanik / poznanici', english: 'acquaintance / acquaintances (male)' },
        { foreign: 'poznanica', english: 'acquaintance (female)' },
      ],
      lesson5: [
        { foreign: 'neznanac (accent on 2nd syllable)', english: 'stranger (male)' },
        { foreign: 'neznanka (accent on 1st syllable)', english: 'stranger (female)' },
        { foreign: 'cimer', english: 'roommate' },
        { foreign: 'djevojka', english: 'girl' },
        { foreign: 'dečko', english: 'boy' },
        { foreign: 'prijatelj / prijatelji', english: 'friend / friends' },
      ],
    },
    chapter4: {
      name: 'Where are you from?',
      lesson1: [
        { foreign: 'Odakle ste?', english: 'Where are you from? (Formal singular)' },
        { foreign: 'Ja sam iz Sjedinjenih Država.', english: 'I am from the United States.' },
        { foreign: 'Stvarno? Vrlo dobro govorite hrvatski.', english: 'Really? You speak Croatian very well. (Formal singular)' },
        {
          foreign: 'Govoriti: (ja) govorim, (ti) govoriš, (on/ona/ono) govori, (mi) govorimo, (vi) govorite, (oni/one/ona) govore',
          english: 'To speak: (I) speak, (you) speak, (he/she/it) speaks, (we) speak, (you) speak, (they) speak'
        },
        {
          foreign: 'Učim hrvatski pomoću jednog izvrsnog web-sitea koji se zove Mango Languages.',
          english: 'I am learning Croatian from (with help of) a great website called Mango Languages.'
        },
        {
          foreign: 'Učiti: (ja) učim, (ti) učiš, (on/ona/ono) ući, (mi) učimo, (vi) učite, (oni/one/ona) uće',
          english: 'To learn: (I) learn, (you) learn, etc.'
        },
        { foreign: 'Ne učim.', english: 'I am not learning.' },
      ],
    },
  },
};

const menu = `
Choose an option:
${Object.keys(flashcards)
  .filter(unit => unit !== 'custom')
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
  if (choiceNum > 0 && choiceNum <= Object.keys(flashcards).length) {
    currentUnit = `unit${choiceNum}`;
    showChapterMenu();
    return;
  }
  console.log('Invalid choice. Try again.');
  showMenu();
}

function showChapterMenu() {
console.log(currentUnit)
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
  const hardPhrases = await dynHardPhrases();
  if (currentUnit === 'all' || currentUnit === 'hard') {
    for (let unit in flashcards) {
      if (unit === 'custom') {
        if (currentUnit === 'hard') {
          phrases = phrases.concat(
            flashcards[unit].filter(
              (phrase) => phrase.hard || hardPhrases.includes(phrase.foreign),
            ),
          );
          continue;
        }
        phrases = phrases.concat(flashcards[unit]);
        continue;
      }
      for (let chapter in flashcards[unit]) {
        for (let lesson in flashcards[unit][chapter]) {
          if (lesson === 'name') {
            continue;
          }
          if (currentUnit === 'hard') {
            phrases = phrases.concat(
              flashcards[unit][chapter][lesson].filter(
                (phrase) => phrase.hard || hardPhrases.includes(phrase.foreign),
              ),
            );
            continue;
          }
          phrases = phrases.concat(flashcards[unit][chapter][lesson]);
        }
      }
    }
  } else if (currentUnit === 'custom') {
    phrases = flashcards[currentUnit];
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
  for (let phrase in phrases) {
    if (hardPhrases.includes(phrase.foreign)) {
      phrase.hard = true;
    }
  }
}

function showNextFlashcard(phrase) {
  const randomPhrase = phrase ?? phrases[Math.floor(Math.random() * phrases.length)];
  const hard = randomPhrase.hard ? '  (hard)' : '';
  console.log(`  ${chalk.yellow(showEnglish ? randomPhrase.english : randomPhrase.foreign)}`);

  rl.question('Enter: see translation, (B)ack, (Q)uit,\nLast was (H)ard: ', (answer) => {
    if (answer.toLowerCase() === 'q') {
      rl.close();
      return;
    }
    if (answer.toLowerCase() === 'b') {
      currentLesson = null;
      showMenu();
      return;
    }
    if (answer.toLowerCase() === 'h' && lastPhrase) {
      addHard(lastPhrase).then(() => {
        showNextFlashcard(randomPhrase);
      });
      return;
    }
    const moveUpAndClearLine = '\u001b[1A\u001b[K';
    console.log(
      `${moveUpAndClearLine}${moveUpAndClearLine}    ${chalk.green(showEnglish ? randomPhrase.foreign : randomPhrase.english)}${hard}`,
    );
    lastPhrase = randomPhrase.foreign;
    showNextFlashcard();
  });
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
  if (!(await dynHardPhrases()).includes(phrase)) {
    fs.appendFile('hardphrases.txt', `${phrase}\n`, (err) => {
      if (err) {
        console.error(err);
      }
    });
  }
}

showMenu();
