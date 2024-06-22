import readline from 'readline';
import fs from 'fs';
import chalk from 'chalk';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

/*
Govorite li engleski?
Da. RaZUMijem malo.
Drago mi je.
To mi se svjiđa.
Čuvaj se!
*/

const flashcards = {
  custom: [
    { foreign: 'kuća / kuće', english: 'house / houses' },
    { foreign: 'žena / žene', english: 'woman / women' },
    { foreign: 'stolica / stolice', english: 'chair / chairs', hard: true },
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
    { foreign: 'nož / noževi', english: 'knife / knives', hard: true },
  ],
  unit1: {
    chapter1: {
      name: 'Who are you?',
      lesson1: [
        { foreign: 'Dobar dan. Kako ste?', english: 'Hello. How are you? (Formal singular)' },
        { foreign: 'Dobro. A Vi?', english: 'Fine. And you? (Formal singular)' },
        { foreign: 'Zovem se Brian', english: 'My name is Brian' },
        { foreign: 'Kako se Vi zovete?', english: 'What is your name? (Formal)' },
      ],
      lesson2: [
        { foreign: 'Ja sam Brian', english: 'I am Brian' },
        { foreign: 'Drago mi je', english: 'Nice to meet you', hard: true },
        { foreign: 'I meni', english: 'You too (nice to meet you too)' },
        { foreign: 'Doviđenja', english: 'Goodbye' },
        { foreign: 'Kako ide?', english: 'How’s it going?', hard: true },
        { foreign: 'Vidimo se kasnije.', english: 'See each other later.', hard: true },
      ],
      lesson3: [
        { foreign: 'Što radiš?', english: 'What are you doing? (Informal singular)', hard: true },
        { foreign: 'Vidimo se sutra', english: 'See each other tomorrow' },
        { foreign: 'Odlično', english: 'Excellent', hard: true },
      ],
      lesson4: [
        { foreign: 'loše', english: 'bad' },
        { foreign: 'tako-tako', english: 'so-so' },
        { foreign: 'Čuvaj se!', english: 'Take care of yourself! (Informal singular)', hard: true },
        { foreign: 'on', english: 'he' },
        { foreign: 'ona', english: 'she' },
        { foreign: 'ono', english: 'it' },
        { foreign: 'oni', english: 'they' },
      ],
      lesson5: [
        { foreign: 'Laku noć', english: 'Good night' },
        { foreign: 'Zbogom', english: 'Farewell (old-fashioned)' },
        { foreign: 'Dobro jutro', english: 'Good morning' },
        { foreign: 'Gospodin', english: 'Sir' },
        { foreign: 'Gospođa', english: 'Madam' },
        { foreign: 'Gospođica', english: 'Miss' },
      ],
      lesson6: [{ foreign: 'Gđa', english: 'Ms.' }],
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
        { foreign: 'otac (1st syllable)', english: 'father' },
        { foreign: 'majka', english: 'mother' },
        { foreign: 'tetka', english: 'aunt (mother’s or father’s sister)' },
        { foreign: 'ujna', english: 'aunt (wife of mother’s brother)' },
        { foreign: 'strina', english: 'aunt (wife of father’s brother)' },
        {
          foreign: 'TEtak',
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
        { foreign: 'unuk', english: 'grandson', hard: true },
        { foreign: 'unuka', english: 'granddaughter', hard: true },
        { foreign: 'neĆAKinja', english: 'niece' },
        { foreign: 'NEćak', english: 'nephew' },
      ],
    },
    chapter3: {
      name: 'Getting to know you',
      lesson1: [
        { foreign: 'Uh, ona je super!', english: 'Wow, she is great!' },
        { foreign: 'Stvarno tako misliš?', english: 'Do you really think so? (Informal singular)' },
        {
          foreign: 'Da, volio bih je upoznati.',
          english: 'Yes, I would like/love to meet her. (Spoken by a man)',
        },
        { foreign: 'voljela bih', english: 'I would like/love to (spoken by a woman)' },
        { foreign: 'je', english: 'her' },
        { foreign: 'Ona je moja prijateljica.', english: 'She is my friend.' },
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
        { foreign: 'na', english: 'on', hard: true },
        { foreign: 'lijepa', english: 'pretty' },
        { foreign: 'zgodan', english: 'handsome', hard: true },
        { foreign: 'mlad (muškarac)', english: 'young (man)' },
        { foreign: 'mlada (žena)', english: 'young (woman)' },
        { foreign: 'star (muškarac)', english: 'old (man)' },
        { foreign: 'stara (žena)', english: 'old (woman)' },
      ],
      lesson3: [
        { foreign: 'visok (muškarac)', english: 'tall (man)' },
        { foreign: 'VIsoka (žena)', english: 'tall (woman)' },
        { foreign: 'nizak (muškarac)', english: 'short (man)' },
        { foreign: 'niska (žena)', english: 'short (woman)' },
        { foreign: 'mršav (muškarac)', english: 'thin (man)', hard: true },
        { foreign: 'mršava (žena)', english: 'thin (woman)', hard: true },
        { foreign: 'debeo (muškarac)', english: 'fat (man)' },
      ],
      lesson4: [
        { foreign: 'debela (žena)', english: 'fat (woman)' },
        { foreign: 'oSOBnost', english: 'personality', hard: true },
        { foreign: 'To mi se sviđa.', english: 'I like it.', hard: true },
        { foreign: 'poznanik / poznanici', english: 'acquaintance / acquaintances (male)' },
        { foreign: 'poznanica', english: 'acquaintance (female)', hard: true },
      ],
      lesson5: [
        { foreign: 'nezNANac', english: 'stranger (male)', hard: true },
        { foreign: 'NEZnanka', english: 'stranger (female)', hard: true },
        { foreign: 'cimer', english: 'roommate' },
        { foreign: 'djevojka', english: 'girl', hard: true },
        { foreign: 'dečko', english: 'boy', hard: true },
        { foreign: 'prijatelj / prijatelji', english: 'friend / friends (male)' },
      ],
    },
    chapter4: {
      name: 'Where are you from?',
      lesson1: [
        { foreign: 'Odakle ste?', english: 'Where are you from? (Formal singular)', hard: true },
        {
          foreign: 'Ja sam iz Sjedinjenih Država.',
          english: 'I am from the United States.',
          hard: true,
        },
        {
          foreign: 'Stvarno? Vrlo dobro govorite hrvatski.',
          english: 'Really? You speak Croatian very well. (Formal singular)',
        },
        {
          foreign:
            'Govoriti:; (ja) govorim; (ti) govoriš; (on/ona/ono) govori; (mi) govorimo; (vi) govorite; (oni/one/ona) govore',
          english:
            'To speak:; (I) speak; (you) speak; (he/she/it) speaks; (we) speak; (you) speak; (they) speak',
        },
        {
          foreign: 'Učim hrvatski pomoću jednog izvrsnog web-sitea koji se zove Mango Languages.',
          english:
            'I am learning Croatian from (with help of) a great website called Mango Languages.',
          hard: true,
        },
        {
          foreign:
            'Učiti:; (ja) učim; (ti) učiš; (on/ona/ono) ući; (mi) učimo; (vi) učite; (oni/one/ona) uće',
          english: 'To learn: (I) learn, (you) learn, etc.',
        },
        { foreign: 'Ne učim.', english: 'I am not learning.' },
      ],
      lesson2: [
        { foreign: 'Govorite li engleski?', english: 'Do you speak English? (Formal singular)' },
        { foreign: 'Da. RaZUMijem malo.', english: 'Yes. I understand a little.', hard: true },
      ],
      lesson3: [
        { foreign: 'Italija', english: 'Italy' },
        { foreign: 'taLIjanski', english: 'Italian' },
        { foreign: 'Austrija', english: 'Austria' },
        { foreign: 'njemački', english: 'German', hard: true },
        { foreign: 'Meksiko', english: 'Mexico' },
        { foreign: 'španjolski', english: 'Spanish' },
        { foreign: 'puno', english: 'a lot', hard: true },
        { foreign: 'zemlja', english: 'country', hard: true },
        { foreign: 'ne', english: 'no' },
        { foreign: 'naravno', english: 'of course', hard: true },
      ],
      lesson4: [
        { foreign: 'taKOđer', english: 'also', hard: true },
        { foreign: 'Moja doMOvina je…', english: 'My home country is…', hard: true },
        { foreign: 'Moj grad je…', english: 'My city (town) is…', hard: true },
        { foreign: 'Moje selo je…', english: 'My village is…', hard: true },
      ],
    },
    chapter5: {
      name: 'Where did you go to school?',
      lesson1: [
        {
          foreign: 'Što ste stuDIRali?',
          english: 'What did you study? (Formal singular)',
          hard: true,
        },
        {
          foreign:
            'stuDIRati, past tense masculine/feminine:; (ja) sam studirao/studirala (studirao sam); (ti) si studirao/studirala (studirao si); (on/ona/ono) je studirao/studirala (studirao je); (mi) smo studirali (studirali smo); (vi) ste studirali (studirali ste); (oni) su studirali (studiraoli su)',
          english: 'to study, past tense masculine/feminine speaker: I studied, etc.',
        },
        {
          foreign: 'biti:; (ja) sam; (ti) si; (on/ona/ono) je; (mi) smo; (vi) ste; (oni) su',
          english: 'to be, all conjugations. I am, etc.',
        },
        {
          foreign: 'StuDIrao sam povijest na Filozofskom fakulTEtu u Zagrebu.',
          english:
            'I studied history at the Faculty of Humanities and Social Sciences in Zagreb. (From male)',
        },
        { foreign: 'u', english: 'in' },
        {
          foreign: 'Čula sam za taj fakultet',
          english: 'I’ve heard of that faculty. (From female)',
        },
        {
          foreign:
            'negative past tense form on the verb čuti:; (ja) nisam čuo/čula; (ti) nisi čuo/čula; (on/ona/oni) nije čuo/čula; (mi) nismo čuli/čule; (vi) niste čuli/čule; (oni/one/ona) nisu čuli/čule/čula',
          english:
            'Negative past tense conjugation of to hear: I haven’t heard, you haven’t heard, etc.',
        },
        { foreign: 'za', english: 'of', hard: true },
        { foreign: 'taj', english: 'that (e.g., that thing)', hard: true },
      ],
      lesson2: [
        { foreign: 'Što ste Vi stuDIrali?', english: 'What did *you* study? (Formal singular)' },
        {
          foreign: 'StuDIrala sam pravo na Pravnom fakultetu u Osijeku.',
          english: 'I studied law at the School of Law in Osijek. (Feminine)',
        },
        {
          foreign: 'To je također vrlo dobar fakultet.',
          english: 'That is also a very good school.',
        },
      ],
      lesson3: [
        { foreign: 'Ali moj je bolji!', english: 'But mine is better!', hard: true },
        { foreign: 'državno obrazoVANje', english: 'public education', hard: true },
        { foreign: 'privatno obrazoVANje', english: 'private education', hard: true },
        { foreign: 'dipLOma', english: 'degree (in education)' },
        { foreign: 'stuDENT', english: 'undergraduate' },
      ],
      lesson4: [
        { foreign: 'diploMIrati', english: 'to graduate' },
        { foreign: 'posloVANje', english: 'business', hard: true },
        { foreign: 'fiNANcije', english: 'finance' },
        { foreign: 'srednja škola', english: 'high school (literally middle school)', hard: true },
        { foreign: 'umjetnost', english: 'art', hard: true },
      ],
      lesson5: [
        { foreign: 'mateMAtika', english: 'mathematics' },
        { foreign: 'psihoLOgija', english: 'philosophy' },
        { foreign: 'fizika', english: 'physics' },
        { foreign: 'profesor', english: 'professor' },
        { foreign: 'učenik (srednja škola)', english: 'student (high school)', hard: true },
        { foreign: 'ImpresiONiran sam.', english: 'I’m impressed. (male)' },
        { foreign: 'Impresionirana sam.', english: 'I’m impressed. (female)' },
      ],
      lesson6: [
        { foreign: 'glasovna pošta', english: 'voicemail' },
        { foreign: 'e-pošta', english: 'email' },
        { foreign: 'bilješka', english: 'note', hard: true },
        { foreign: 'teLEfonski broj', english: 'phone number', hard: true },
      ],
    },
  },
  unit2: {
    chapter1: {
      name: 'How do you say...?',
      lesson1: [
        {
          foreign:
            'Htjela bih naUčiti neke nove riJEči na hrvatskom. (hrvatski becomes hrvatskom after na.)',
          english: 'I’d like to learn some new words in Croatian. (female)',
          hard: true,
        },
        { foreign: 'htjela bih', english: 'I’d like to (female)' },
        { foreign: 'htio bih', english: 'I’d like to (male)' },
        {
          foreign: 'Molim te, razGOvaraj sa mnom na hrvatskom.',
          english: 'Please speak to me in Croatian. (Informal singular)',
          hard: true,
        },
        { foreign: 'molim te', english: 'please (Informal singular)' },
        { foreign: 'sa', english: 'with' },
      ],
      lesson2: [
        {
          foreign: 'Htjela bih naUčiti neke nove riJEči na hrvatskom.',
          english: 'I’d like to learn some new words in Croatian. (female)',
          hard: true,
        },
        { foreign: 'Htjela bih', english: 'I’d like to (female)' },
        {
          foreign: 'Molim te, razGOvaraj sa mnom na hrvatskom.',
          english: 'Please speak to me in Croatian. (Informal singular)',
          hard: true,
        },
        { foreign: 'molim te', english: 'please (Informal singular)' },
        { foreign: 'sa', english: 'with' },
        { foreign: 'Nema probLEma.', english: 'No problem.' },
        {
          foreign: 'Kako se to kaže na hrvatskom jeziku?',
          english: 'How is that said in Croatian?',
          hard: true,
        },
        {
          foreign: 'Kako se kaže "xyz" na hrvatskom jeziku?',
          english: 'How do you say "xyz" in Croatian?',
          hard: true,
        },
        { foreign: 'jeziku', english: 'language' },
        { foreign: 'To je knjiga.', english: 'That is a book.', hard: true },
        {
          foreign: 'Možeš li to reći ponovo?',
          english: 'Can you say that again? (Informal singular)',
          hard: true,
        },
        { foreign: 'rećiti', english: 'to say', hard: true },
        { foreign: 'ponovo', english: 'again' },
      ],
      lesson3: [
        { foreign: 'Što je tako smiJEŠno?', english: 'What is so funny?', hard: true },
        { foreign: 'Je li moj hrvatski tako loš?', english: 'Is my Croatian so bad?' },
        { foreign: 'je li?', english: 'is?' },
        {
          foreign: 'Ti si pravi stručnjak.',
          english: 'You are a real expert. (Informal singular)',
          hard: true,
        },
        { foreign: 'Kako vi kažete...?', english: 'How do you say...? (Plural)' },
        { foreign: 'Što ova rijEČ znači?', english: 'What does this word mean?', hard: true },
      ],
    },
  },
};

/*
        { foreign: '', english: '' },
*/

const menu = `
Choose an option:
${Object.keys(flashcards)
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
  } else if (currentLesson === 'hard') {
    for (let lesson in flashcards[currentUnit][currentChapter]) {
      if (lesson === 'name') {
        continue;
      }
      phrases = phrases.concat(
        flashcards[currentUnit][currentChapter][lesson].filter((phrase) => phrase.hard),
      );
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
  console.log(
    `  ${chalk.yellow((showEnglish ? randomPhrase.english : randomPhrase.foreign).replaceAll(/; */g, '\n  '))}`,
  );

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
      `${moveUpAndClearLine}${moveUpAndClearLine}    ${chalk.green((showEnglish ? randomPhrase.foreign : randomPhrase.english).replaceAll(/; */g, '\n    '))}${hard}`,
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
