/*
Govorite li engleski?
Da. RaZUMijem malo.
Drago mi je.
To mi se svjiđa.
Čuvaj se!
Molim vas, goVOri sporije.
Ti govoriš prebrzo.
Kakav je moj izgovor?
Što ova rijEČ znači?
oPROstite
Ne znam.
Hvala.
Da, molim.
Trebam pomoć.
*/

export const allPhrases = {
  custom: {
    chapter1: {
      name: 'Plurals',
      lesson1: [
        { foreign: 'žena / žene', english: 'woman / women' },
        { foreign: 'stolica / stolice', english: 'chair / chairs', hard: true },
        { foreign: 'pivo / piva', english: 'beer / beers' },
        { foreign: 'sunce', english: 'sun' },
        { foreign: 'more / mora', english: 'sea / seas', hard: true },
        { foreign: 'televizor / televizori', english: 'TV / TVs' },
        { foreign: 'susjed / susjedi', english: 'neighbor / neighbors' },
        { foreign: 'most / mostovi', english: 'bridge / bridges' },
        { foreign: 'stol / stolovi', english: 'table / tables', hard: true },
        { foreign: 'liječnik / liječnici', english: 'doctor / doctors', hard: true },
        { foreign: 'čovjek / ljudi', english: 'man (human) / people', hard: true },
        { foreign: 'brat / braća', english: 'brother / brothers', hard: true },
        { foreign: 'kći / kćeri', english: 'daughter / daughters' },
        { foreign: 'djete / djeca', english: 'child / children' },
      ],
    },
    chapter2: {
      name: 'Conjugations',
      lesson1: [
        {
          foreign:
            'imati, present tense:; (ja) imam; (ti) imaš; (on/ona/ono) ima; (mi) imamo; (vi) imate; (oni/one/ona) imaju',
          english: 'To have, present tense:; I have, you have, etc.',
          hard: true,
        },
        {
          foreign:
            'imati, negative present tense:; (ja) nemam; (ti) nemaš; (on/ona/ono) nema; (mi) nemamo; (vi) nemate; (oni/one/ona) nemaju',
          english: 'To have, negative present tense:; I don’t have, you don’t have, etc.',
          hard: true,
        },
        {
          foreign:
            'odlaziti, present tense:; (ja) odlazim; (ti) odlaziš; (on/ona/ono) odlazi; (mi) odlazimo; (vi) odlazite; (oni/one/ona) odlaze',
          english: 'To leave, present tense:; I’m leaving, you’re leaving, etc.',
          hard: true,
        },
      ],
    },
    chapter3: {
      name: 'General phrases',
      lesson1: [
        { foreign: 'Bok.', english: 'Hi. / Bye.', hard: true },
        { foreign: 'Trebam pomoć.', english: 'I need help.', hard: true },
        { foreign: 'dobra večer', english: 'good evening', hard: true },
      ],
    },
    chapter4: {
      name: 'Vocabulary',
      lesson1: [{ foreign: 'ako', english: 'if' }],
    },
  },
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
        { foreign: 'Kako ide?', english: 'How’s it going?' },
        { foreign: 'Vidimo se kasnije.', english: 'See each other later.' },
      ],
      lesson3: [
        { foreign: 'Što radiš?', english: 'What are you doing? (Informal singular)' },
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
        { foreign: 'GosPOdin', english: 'Sir' },
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
        },
        { foreign: 'Da. On je tamo.', english: 'Yes. He is over there.' },
        { foreign: 'Da', english: 'Yes' },
      ],
      lesson2: [
        { foreign: 'On je s mamom i tatom.', english: 'He is with mom and dad.' },
        { foreign: 'i', english: 'and/too/also' },
        { foreign: 'Živi li i on ovdje?', english: 'Does he live here, too?' },
        {
          foreign: 'Cijela naša oBItelj živi ovdje.',
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
        { foreign: 'u braku', english: 'married' },
        { foreign: 'suprug', english: 'husband' },
        { foreign: 'supruga', english: 'wife' },
        { foreign: 'roditelji', english: 'parents' },
        { foreign: 'djeca', english: 'children' },
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
        { foreign: 'Nađimo se na kavi.', english: 'Let’s meet for coffee.' },
        { foreign: 'na', english: 'on / at', hard: true },
        { foreign: 'lijepa', english: 'pretty' },
        { foreign: 'zgodan', english: 'handsome' },
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
        {
          foreign: 'poznanik / poznanici',
          english: 'acquaintance / acquaintances (male)',
          hard: true,
        },
        { foreign: 'poznanica', english: 'acquaintance (female)', hard: true },
      ],
      lesson5: [
        { foreign: 'nezNANac', english: 'stranger (male)' },
        { foreign: 'NEZnanka', english: 'stranger (female)' },
        { foreign: 'cimer', english: 'roommate' },
        { foreign: 'djevojka / djevojke', english: 'girl / girls', hard: true },
        { foreign: 'dječak / dječaci', english: 'boy / boys', hard: true }, // used to say dečko but that's boyfriend
        { foreign: 'prijatelj / prijatelji', english: 'friend / friends (male)' },
      ],
    },
    chapter4: {
      name: 'Where are you from?',
      lesson1: [
        { foreign: 'Odakle ste?', english: 'Where are you from? (Formal singular)' },
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
            'govoriti, present tense:; (ja) govorim; (ti) govoriš; (on/ona/ono) govori; (mi) govorimo; (vi) govorite; (oni/one/ona) govore',
          english: 'to speak, present tense:; I speak, you speak, etc',
          hard: true,
        },
        {
          foreign: 'Učim hrvatski pomoću jednog izvrsnog web-sitea koji se zove Mango Languages.',
          english:
            'I am learning Croatian from (with help of) a great website called Mango Languages.',
          hard: true,
        },
        {
          foreign:
            'učiti, present tense:; (ja) učim; (ti) učiš; (on/ona/ono) ući; (mi) učimo; (vi) učite; (oni/one/ona) uće',
          english: 'To learn, present tense: (I) learn, (you) learn, etc.',
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
        { foreign: 'njemački', english: 'German' },
        { foreign: 'Meksiko', english: 'Mexico' },
        { foreign: 'španjolski', english: 'Spanish' },
        { foreign: 'puno', english: 'a lot (of)', hard: true },
        { foreign: 'zemlja', english: 'country', hard: true },
        { foreign: 'ne', english: 'no' },
        { foreign: 'naravno', english: 'of course', hard: true },
      ],
      lesson4: [
        { foreign: 'taKOđer', english: 'also', hard: true },
        { foreign: 'Moja doMOvina je…', english: 'My home country is…' },
        { foreign: 'Moj grad je…', english: 'My city (town) is…' },
        { foreign: 'Moje selo je…', english: 'My village is…' },
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
            'stuDIRati, past tense masculine/feminine:; (ja) sam studirao/studirala (studirao sam); (ti) si studirao/studirala (studirao si); (on/ona/ono) je studirao/studirala (studirao je); (mi) smo studirali (studirali smo); (vi) ste studirali (studirali ste); (oni/one/ona) su studirali (studiraoli su)',
          english: 'to study, past tense masculine/feminine speaker: I studied, etc.',
          hard: true,
        },
        {
          foreign:
            'biti, present tense:; (ja) sam; (ti) si; (on/ona/ono) je; (mi) smo; (vi) ste; (oni/one/ona) su',
          english: 'to be, present tense. I am, you are, etc.',
          hard: true,
        },
        {
          foreign: 'StuDIrao sam povijest na Filozofskom fakulTEtu u Zagrebu.',
          english:
            'I studied history at the Faculty of Humanities and Social Sciences in Zagreb. (From male)',
        },
        { foreign: 'u', english: 'in' },
        {
          foreign: 'Čula sam za taj faKULtet',
          english: 'I’ve heard of that school. (From female)',
          hard: true,
        },
        {
          foreign:
            'negative past tense form on the verb čuti:; (ja) nisam čuo/čula; (ti) nisi čuo/čula; (on/ona/ono) nije čuo/čula/čulo; (mi) nismo čuli/čule; (vi) niste čuli/čule; (oni/one/ona) nisu čuli/čule/čula',
          english:
            'Negative past tense conjugation of to hear: I haven’t heard/didn’t hear, you haven’t heard/didn’t hear, etc.',
          hard: true,
        },
        { foreign: 'za', english: 'of / for', hard: true },
        { foreign: 'taj', english: 'that (as in "that thing"), masculine', hard: true },
      ],
      lesson2: [
        { foreign: 'Što ste Vi stuDIrali?', english: 'What did *you* study? (Formal singular)' },
        {
          foreign: 'StuDIrala sam pravo na Pravnom fakulTEtu u Osijeku.',
          english: 'I studied law at the School of Law in Osijek. (Feminine)',
        },
        {
          foreign: 'To je također vrlo dobar faKULtet.',
          english: 'That is also a very good school.',
        },
      ],
      lesson3: [
        { foreign: 'Ali moj je bolji!', english: 'But mine is better!', hard: true },
        { foreign: 'državno obrazoVANje', english: 'public education' },
        { foreign: 'privatno obrazoVANje', english: 'private education' },
        { foreign: 'dipLOma', english: 'degree (in education)' },
        { foreign: 'stuDENT', english: 'undergraduate' },
      ],
      lesson4: [
        { foreign: 'diploMIrati', english: 'to graduate' },
        { foreign: 'posloVANje', english: 'business' },
        { foreign: 'fiNANcije', english: 'finance' },
        { foreign: 'srednja škola', english: 'high school (literally middle school)' },
        { foreign: 'umjetnost', english: 'art' },
      ],
      lesson5: [
        { foreign: 'mateMAtika', english: 'mathematics' },
        { foreign: 'psihoLOgija', english: 'philosophy' },
        { foreign: 'fizika', english: 'physics' },
        { foreign: 'profesor', english: 'professor' },
        {
          foreign: 'učenik (srednja škola)',
          english: 'student (high school)',
          hard: true,
        },
        { foreign: 'ImpresiONiran sam.', english: 'I’m impressed. (male)' },
        { foreign: 'Impresionirana sam.', english: 'I’m impressed. (female)' },
      ],
      lesson6: [
        { foreign: 'glasovna pošta', english: 'voicemail' },
        { foreign: 'e-pošta', english: 'email' },
        { foreign: 'bilješka', english: 'note', hard: true },
        { foreign: 'teLEfonski broj', english: 'phone number' },
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
        { foreign: 'Nema probLEma.', english: 'No problem.' },
        { foreign: 'nema', english: 'there is not / there are not', hard: true },
        { foreign: 'ima', english: 'there is / there are', hard: true },
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
        { foreign: 'To je knjiga.', english: 'That is a book.' },
        {
          foreign: 'Možeš li to reći ponovo?',
          english: 'Can you say that again? (Informal singular)',
          hard: true,
        },
        {
          foreign: 'možeš li ...?',
          english: 'can you ...? (Informal singular)',
        },
        { foreign: 'rećiti', english: 'to say' },
        { foreign: 'ponovo', english: 'again' },
      ],
      lesson3: [
        { foreign: 'Što je tako smiJEŠno?', english: 'What is so funny?', hard: true },
        { foreign: 'Je li moj hrvatski tako loš?', english: 'Is my Croatian so bad?' },
        { foreign: 'je li?', english: 'is?', hard: true },
        {
          foreign: 'Ti si pravi stručnjak.',
          english: 'You are a real expert. (Informal singular)',
          hard: true,
        },
        { foreign: 'pravi', english: 'real / true / proper', hard: true },
        { foreign: 'stručnjak', english: 'expert', hard: true },
        { foreign: 'Kako vi kažete ...?', english: 'How do you say ...? (Plural)', hard: true },
        { foreign: 'Što ova rijEČ znači?', english: 'What does this word mean?', hard: true },
      ],
      lesson4: [
        { foreign: 'Što je to?', english: 'What is that?' },
        {
          foreign: 'Kako izGOvaraš ovu riJEČ?',
          english: 'How do you pronounce this word? (Informal singular)',
          hard: true,
        },
        { foreign: 'Kakav je moj izgovor?', english: 'How is my pronunciation?', hard: true },
      ],
      lesson5: [
        { foreign: 'Ja učim!', english: 'I am learning!' },
        {
          foreign: 'Molim te, goVOri sporije.',
          english: 'Please speak more slowly. (Informal singular)',
          hard: true,
        },
        {
          foreign: 'Ti govoriš prebrzo.',
          english: 'You are speaking too fast. (Informal singular)',
          hard: true,
        },
      ],
      lesson6: [
        {
          foreign: 'Molim te, poNOvi pitanje.',
          english: 'Please repeat the question. (Informal singular)',
          hard: true,
        },
        { foreign: 'pitanje', english: 'question' },
        { foreign: 'stvar', english: 'thing' },
        { foreign: 'odgovor', english: 'answer' },
        { foreign: 'čitati', english: 'to read' },
      ],
      lesson7: [
        { foreign: 'Čitaj!', english: 'Read! (Informal singular imperative)' },
        { foreign: 'pisati', english: 'to write' },
        { foreign: 'Piši!', english: 'Write! (Informal singular imperative)' },
        { foreign: 'slovo', english: 'letter (in alphabet)' },
        { foreign: 'pismo', english: 'letter (a written message)' },
        { foreign: 'pravopis', english: 'spelling', hard: true },
      ],
    },
    chapter2: {
      name: 'Haggling and money',
      lesson1: [
        {
          foreign: 'Želio bih kartu za vlak do Zagreba.',
          english: 'I would like a train ticket to Zagreb. (Formal, male)',
          hard: true,
        },
        { foreign: 'želio bih', english: 'I would like (Formal, male)' },
        { foreign: 'željela bih', english: 'I would like (Formal, female)' },
        { foreign: 'do', english: 'to (as in, “a ticket to Zagreb”)' },
        { foreign: 'Koliko to košta?', english: 'How much does it cost?' },
      ],
      lesson2: [
        { foreign: 'To je peDEset kuna.', english: 'It is fifty kunas.' },
        {
          foreign: 'Mogu Vam dati samo četrDEset pet.',
          english: 'I can only give you 45. (Formal singular)',
          hard: true,
        },
        { foreign: 'mogu', english: 'I can' },
        { foreign: 'Žao mi je.', english: 'I’m sorry.', hard: true },
        {
          foreign: 'Nema pregovora o ciJEni.',
          english: 'No negotiations about price.',
          hard: true,
        },
      ],
      lesson3: [
        { foreign: 'To je sve što imam.', english: 'That is all that I have.', hard: true },
        { foreign: 'sve', english: 'all' },
        {
          foreign: 'Molim Vas, možete li mi dati popust?',
          english: 'Can you please give me a discount? (Formal singular)',
          hard: true,
        },
        { foreign: 'Molim Vas', english: 'please (Formal singular)' },
        { foreign: 'možete li ...?', english: 'can you ...? (Formal singular)' },
        { foreign: 'To je previše.', english: 'That is too much.', hard: true },
        { foreign: 'skupo', english: 'expensive' },
        { foreign: 'jeftino', english: 'cheap' },
        { foreign: 'skup kaput', english: 'expensive coat' },
        { foreign: 'skupa karta', english: 'expensive ticket' },
        { foreign: 'skupe karte', english: 'expensive tickets' },
        { foreign: 'skupo ljetovanje', english: 'expensive summer holidays', hard: true },
      ],
      lesson4: [
        { foreign: 'nula', english: 'zero' },
        { foreign: 'jedan', english: 'one' },
        { foreign: 'dva', english: 'two' },
        { foreign: 'tri', english: 'three' },
        { foreign: 'četiri', english: 'four', hard: true },
        { foreign: 'pet', english: 'five' },
        { foreign: 'šest', english: 'six' },
        { foreign: 'sedam', english: 'seven', hard: true },
        { foreign: 'osam', english: 'eight' },
        { foreign: 'devet', english: 'nine', hard: true },
        { foreign: 'deset', english: 'ten' },
        { foreign: 'jeDAnaest', english: 'eleven' },
        { foreign: 'dvanaest', english: 'twelve' },
        { foreign: 'trinaest', english: 'thirteen' },
        { foreign: 'čeTRnaest', english: 'fourteen' },
        { foreign: 'petnaest', english: 'fifteen' },
        { foreign: 'šesnaest', english: 'sixteen' },
        { foreign: 'seDAMnaest', english: 'seventeen' },
        { foreign: 'oSAMnaest', english: 'eighteen' },
        { foreign: 'deVETnaest', english: 'nineteen' },
        { foreign: 'DVAdeset', english: 'twenty' },
        { foreign: 'DVAdeset jedan', english: 'twenty-one' },
        { foreign: 'DVAdeset dva', english: 'twenty-two' },
        { foreign: 'TRIdeset', english: 'thirty' },
        { foreign: 'TRIdeset pet', english: 'thirty-five' },
        { foreign: 'četrDEset', english: 'forty' },
        { foreign: 'peDEset', english: 'fifty' },
        { foreign: 'peDEset osam', english: 'fifty-eight' },
        { foreign: 'šezDEset', english: 'sixty' },
        { foreign: 'sedamDEset', english: 'seventy' },
        { foreign: 'osamDEset', english: 'eighty' },
        { foreign: 'deveDEset', english: 'ninety' },
        { foreign: 'sto', english: 'one hundred' },
        { foreign: 'sto dvadeset četiri', english: 'one hundred twenty-four' },
      ],
      lesson5: [
        { foreign: 'tisuću', english: 'one thousand', hard: true },
        { foreign: 'miLIjun', english: 'one million' },
      ],
    },
    chapter3: {
      name: 'My clothes',
      lesson1: [
        {
          foreign: 'Što ćeš nositi danas?',
          english: 'What will you wear today? (Informal singular)',
          hard: true,
        },
        { foreign: 'nositi', english: 'to wear' },
        {
          foreign:
            'htjeti:; (ja) ću; (ti) ćeš; (on/ona/ono) će; (mi) ćemo; (vi) ćete; (oni/one/ona) će',
          english: 'future tense auxiliary verb: I will, you will, etc.',
          hard: true,
        },
        {
          foreign:
            'negative htjeti / negative future tense auxiliary verb:; (Ja) neću; (ti) nećeš; (on/ona/ono) neće; (mi) nećemo; (vi) nećete; (oni/one/ona) neće',
          english: 'negative future tense of to be: I will not be, you will not be, etc.',
          hard: true,
        },
        {
          foreign:
            'future tense of nositi:; ja ću nositi (nosit ću); ti ćeš nositi (nosit ćeš); on/ona/ono će nositi (nosit će); mi ćemo nositi (nosit ćemo); vi ćete nositi (nosit ćete); oni/one/ona će nositi (nosit će)',
          english: 'future tense of to wear: I will wear, you will wear, etc.',
          hard: true,
        },
        {
          foreign:
            'negative future tense of nositi:; neću nositi; nećeš nositi; neće nositi; nećemo nositi; nećete nositi; neće nositi',
          english: 'negative future tense of to wear: I will not wear, you will not wear, etc.',
          hard: true,
        },
        { foreign: 'danas', english: 'today' },
        {
          foreign: 'Traperice i majicu kratkih ruKAva.',
          english: 'Jeans and a short-sleeved shirt.',
        },
        { foreign: 'traperice', english: 'jeans' },
        { foreign: 'majica', english: 'shirt' },
        { foreign: 'kratkih ruKAva', english: 'short-sleeved' },
        {
          foreign: 'Želiš li nositi haljinu?',
          english: 'Do you want to wear a dress? (Informal singular)',
        },
        { foreign: 'haljina', english: 'dress' },
        { foreign: 'Želiš li ...?', english: 'Do you want ...? (Informal singular)' },
        {
          foreign: 'Možemo se presvući kasnije.',
          english: 'We can change clothes later.',
          hard: true,
        },
        { foreign: 'možemo', english: 'we can' },
      ],
      lesson2: [
        { foreign: 'U pravu si!', english: 'You’re right! (Informal singular)', hard: true },
        {
          foreign: 'Nosit ću sanDAle za sada.',
          english: 'I will wear sandals for now.',
          hard: true,
        },
        { foreign: 'džemper', english: 'sweater' },
        { foreign: 'hlače', english: 'pants' },
        { foreign: 'čarape', english: 'socks' },
        { foreign: 'cipele', english: 'shoes' },
        { foreign: 'šal', english: 'scarf' },
        { foreign: 'ruKAvice', english: 'gloves', hard: true },
      ],
      lesson3: [
        { foreign: 'šešir', english: 'hat' },
        { foreign: 'odiJElo', english: 'suit' },
        { foreign: 'suknja', english: 'skirt' },
        { foreign: 'kraVAta', english: 'tie' },
        { foreign: 'remen', english: 'belt' },
        { foreign: 'kupaći kostim', english: 'swimsuit' },
        { foreign: 'piDŽAma', english: 'pajamas' },
        { foreign: 'IstuŠIrat ću se.', english: 'I’ll take a shower.', hard: true },
      ],
      lesson4: [
        { foreign: 'oKUpat ću se.', english: 'I’ll take a bath.' },
        { foreign: 'oBUći se', english: 'to get dressed', hard: true },
        { foreign: 'oBUci se.', english: 'Get dressed. (Informal singular)', hard: true },
        { foreign: 'Oprat ću odjeću.', english: 'I’ll wash the clothes.', hard: true },
        { foreign: 'odjeća', english: 'clothes', hard: true },
      ],
      lesson5: [
        { foreign: 'plakar', english: 'closet' },
        { foreign: 'ormar (namještaj)', english: 'wardrobe (furniture)', hard: true },
        { foreign: 'gardeROba (odjeća)', english: 'wardrobe (clothes)' },
        { foreign: 'prije', english: 'before' },
        { foreign: 'nakon', english: 'after' },
        { foreign: 'tiJEkom', english: 'during', hard: true },
        { foreign: 'Ne bih...', english: 'I wouldn’t...' },
        { foreign: 'Nisam...', english: 'I’m not...' },
      ],
      lesson6: [
        { foreign: 'Nisam siguran.', english: 'I’m not sure. (Masculine)' },
        { foreign: 'Nisam sigurna.', english: 'I’m not sure. (Feminine)' },
      ],
    },
    chapter4: {
      name: 'Shopping',
      lesson1: [
        {
          foreign: 'oPROstite, gdje mogu kupiti jaknu?',
          english: 'Excuse me, where can I buy a jacket? (Formal singular)',
        },
        { foreign: 'gdje', english: 'where' },
        { foreign: 'jakna', english: 'jacket' },
        {
          foreign: 'ProdavaOnica je dvije zgrade odavdje.',
          english: 'There is a store two buildings from here.',
        },
        { foreign: 'prodavaOnica', english: 'store' },
        { foreign: 'zgrada', english: 'building' },
        {
          foreign: 'Možete je kupiti tamo.',
          english: 'You can buy one there. (Formal singular, referring to feminine object.)',
        },
        { foreign: 'kupiti', english: 'to buy' },
      ],
      lesson2: [
        {
          foreign: 'Je li ta prodavaOnica još otvorena?',
          english: 'Is that store still open?',
          hard: true,
        },
        { foreign: 'ta', english: 'that (as in “that thing”), feminine' },
        { foreign: 'još', english: 'still (e.g. still open)', hard: true },
        { foreign: 'otvoreno / otvorena', english: 'open (like a store, adjective)' },
        { foreign: 'Ne znam. VjeroJATno.', english: 'I don’t know. Probably.', hard: true },
        {
          foreign: 'Ali, mislim da se prodavaOnice zatVAraju za jedan sat.',
          english: 'But, I believe the stores close in one hour.',
          hard: true,
        },
        { foreign: 'sat', english: 'hour' },
        { foreign: 'mislim da...', english: 'I believe that (I think that)...' },
        { foreign: 'se zatVAraju', english: 'they close', hard: true },
      ],
      lesson3: [
        { foreign: 'penKAla', english: 'pens' },
        { foreign: 'mobitel', english: 'cell phone' },
      ],
      lesson4: [
        { foreign: 'bilježnica', english: 'notebook' },
        { foreign: 'hrana', english: 'food' },
        { foreign: 'Gdje mogu popiti nešto?', english: 'Where can I drink something?' },
        { foreign: 'popiti', english: 'to drink' },
        { foreign: 'nešto', english: 'something' },
        { foreign: 'Gdje mogu pojesti sendvič?', english: 'Where can I eat a sandwich?' },
        { foreign: 'pojesti', english: 'to eat', hard: true },
        { foreign: 'sendvič', english: 'sandwich' },
      ],
      lesson5: [
        { foreign: 'zatvoreno / zatvorena', english: 'closed' },
        { foreign: 'prodavaOnica hrane', english: 'grocery store' },
        { foreign: 'prodavaOnica elekTROničke robe', english: 'electronics store' },
      ],
      lesson6: [
        { foreign: 'prodavaOnica odjeće', english: 'clothing store' },
        { foreign: 'robna kuća', english: 'department store', hard: true },
      ],
    },
    chapter5: {
      name: 'Where is the...',
      lesson1: [
        {
          foreign: 'Oprostite, gdje je plaža?',
          english: 'Excuse me, where is the beach? (Formal singular)',
        },
        { foreign: 'Uz more.', english: 'By the sea.' },
        {
          foreign: 'Haha. Samo se šalim.',
          english: 'Haha. Just kidding.',
          hard: true,
        },
        { foreign: 'Idite ravno.', english: 'Go straight. (Formal singular)', hard: true },
        { foreign: 'ravno', english: 'straight' },
        {
          foreign: 'Onda skrenite liJEvo na uglu.',
          english: 'Then turn left at the corner. (Formal singular)',
          hard: true,
        },
        { foreign: 'onda', english: 'then (in a list of instructions)' },
        { foreign: 'liJEvo', english: 'left' },
      ],
      lesson2: [
        { foreign: 'Mogu li pješačiti do tamo?', english: 'Can I walk there?', hard: true },
        { foreign: 'Mogu li ...?', english: 'Can I ...?' },
        { foreign: 'Da, to je vrlo blizu.', english: 'Yes, it is very close.' },
        { foreign: 'sjever', english: 'north' },
        { foreign: 'jug', english: 'south' },
        { foreign: 'istok', english: 'east' },
        { foreign: 'zapad', english: 'west' },
        {
          foreign: 'To je na sjeveru. (Use on, not in)',
          english: 'It is in the North.',
          hard: true,
        },
        { foreign: 'banka / ispred banke', english: 'bank / in front of the bank' },
        { foreign: 'selo / iza sela', english: 'village / behind the village' },
      ],
      lesson3: [
        { foreign: 'raskrižje', english: 'intersection', hard: true },
        {
          foreign: 'KoLIko je daLEko ...?',
          english: 'How far is ...?',
          hard: true,
        },
        { foreign: 'dolje', english: 'down', hard: true },
        {
          foreign: 'Ima deset milja do ...? (It has ...)',
          english: 'It is ten miles to ...?',
          hard: true,
        },
      ],
      lesson4: [
        {
          foreign: 'Ima pet kilometara od ...?',
          english: 'It is five kilometers from ...?',
          hard: true,
        },
        { foreign: 'desno', english: 'right (direction)', hard: true },
        { foreign: 'ispred', english: 'in front of' },
        { foreign: 'iza', english: 'behind' },
      ],
      lesson5: [
        { foreign: 'okolo', english: 'around' },
        { foreign: 'benzinska postaja', english: 'gas station', hard: true },
        { foreign: 'banka', english: 'bank' },
        { foreign: 'hotel', english: 'hotel' },
        { foreign: 'blizu', english: 'near / close' },
      ],
    },
  },
  unit3: {
    chapter1: {
      name: 'Time for sports',
      lesson1: [
        {
          foreign: 'Želiš li igrati tenis?',
          english: 'Do you want to play tennis? (Informal singular)',
          hard: true,
        },
        {
          foreign: 'Ne, hvala. Već sam se razGIbao.',
          english: 'No, thanks. I already did my exercise. (Male speaker)',
          hard: true,
        },
        { foreign: 'Ne, hvala.', english: 'No thanks.' },
        { foreign: 'Hvala.', english: 'Thanks.' },
        { foreign: 'već', english: 'already', hard: true },
        {
          foreign: 'Što si radio / radila?',
          english: 'What did you do? (Informal, to a male / female)',
        },
        {
          foreign: 'Kad si igrao / igrala tenis?',
          english: 'When did you play tennis? (Informal, to a male / female)',
          hard: true,
        },
        {
          foreign: 'Igrao sam nogomet s prijateljima.',
          english: 'I played soccer with friends. (Male speaker)',
          hard: true,
        },
      ],
      lesson2: [
        { foreign: 'To zvuči zabavno', english: 'That sounds fun.', hard: true },
        {
          foreign: 'Želiš li sutra igrati tenis?',
          english: 'Do you want to play tennis tomorrow? (Informal singular)',
          hard: true,
        },
        { foreign: 'željeti', english: 'to want', hard: true },
        { foreign: 'rukomet', english: 'handball', hard: true },
        { foreign: 'košarka', english: 'basketball' },
        { foreign: 'razGIbati se', english: 'to do exercise', hard: true },
        { foreign: 'džoGIrati', english: 'to jog', hard: true },
        { foreign: 'hodati', english: 'to walk', hard: true },
      ],
      lesson3: [
        { foreign: 'trčati', english: 'to run', hard: true },
        { foreign: 'plivati', english: 'to swim', hard: true },
        { foreign: 'odMArati se', english: 'to relax / rest', hard: true },
        { foreign: 'umoran / umorna / umorno', english: 'tired (masculine / feminine / neuter)' },
        { foreign: 'Da, molim.', english: 'Yes, please.' },
        { foreign: 'dvoRAna za vježbanje', english: 'gym', hard: true },
        { foreign: 'dvoRAna', english: 'hall', hard: true },
        { foreign: 'vježbanje', english: 'exercise', hard: true },
      ],
      lesson4: [
        { foreign: 'stadion', english: 'stadium' },
        { foreign: 'poslije podne', english: 'this afternoon', hard: true },
        { foreign: 'poslije', english: 'after', hard: true },
        { foreign: 'podne', english: 'noon', hard: true },
        { foreign: 'danas kasnije', english: 'later today' },
        { foreign: 'tjedan', english: 'week' },
      ],
      lesson5: [
        { foreign: 'ovaj tjedan', english: 'this week' },
        {
          foreign: 'prije nekoliko sati',
          english: 'a few hours ago',
          hard: true,
        },
        { foreign: 'danas ranije', english: 'earlier today' },
        { foreign: 'ranije', english: 'earlier' },
        { foreign: 'uskoro', english: 'soon', hard: true },
      ],
      lesson6: [
        { foreign: 'utakmica', english: 'match (in a sport)', hard: true },
        {
          foreign: 'Idemo igrati nogomet sutra!',
          english: 'Let’s play soccer tomorrow!',
        },
        { foreign: 'idemo', english: 'let’s' },
      ],
    },
    chapter2: {
      name: 'I love summer best',
      lesson1: [
        {
          foreign: 'Ja najviše volim ljeto.',
          english: 'I love summer most.',
          hard: true,
        },
        { foreign: 'više', english: 'more', hard: true },
        { foreign: 'najviše', english: 'most', hard: true },
        { foreign: 'ljeto', english: 'summer' },
        {
          foreign: 'Ljeti je najbolje vriJEme.',
          english: 'In summer is the best weather.',
          hard: true,
        },
        { foreign: 'bolje', english: 'better' },
        { foreign: 'najbolje', english: 'best', hard: true },
        { foreign: 'ljeti', english: 'in summer' },
        {
          foreign: 'Što voliš raditi ljeti?',
          english: 'What do you like to do in summer? (Informal singular)',
        },
      ],
      lesson2: [
        { foreign: 'Uživam ići na plažu.', english: 'I enjoy going to the beach.', hard: true },
        { foreign: 'uŽIvati', english: 'to enjoy', hard: true },
        { foreign: 'ići', english: 'to go' },
        {
          foreign: 'I ja! Volim se igrati na piJEsku.',
          english: 'Me too! I like playing in the sand.',
          hard: true,
        },
        { foreign: 'piJEsak', english: 'sand', hard: true },
        { foreign: 'zima', english: 'winter' },
        { foreign: 'zimi', english: 'during the winter / in winter' },
        { foreign: 'proljeće', english: 'spring', hard: true },
        { foreign: 'u proljeće', english: 'during the spring (in spring)', hard: true },
      ],
      lesson3: [
        { foreign: 'jesen', english: 'fall / autumn', hard: true },
        { foreign: 'u jesen', english: 'during the fall / in fall', hard: true },
        { foreign: 'sunčano', english: 'sunny' },
        { foreign: 'snijeg', english: 'snow', hard: true },
        { foreign: 'kiša', english: 'rain' },
        { foreign: 'oblačno', english: 'cloudy' },
        { foreign: 'kišno vriJEme', english: 'rainy weather', hard: true },
      ],
      lesson4: [
        { foreign: 'vruće', english: 'hot' },
        { foreign: 'Vruće je.', english: 'It’s hot.' },
        { foreign: 'hladno', english: 'cold' },
        { foreign: 'Hladno je.', english: 'It’s cold.' },
        { foreign: 'vlažno', english: 'humid' },
        { foreign: 'siječanj / u siječnju', english: 'January / in January', hard: true },
        {
          foreign: 'veljača / u veljači',
          english: 'February / in February',
          hard: true,
        },
      ],
      lesson5: [
        { foreign: 'ožujak / u ožujku', english: 'March / in March', hard: true },
        { foreign: 'travanj / u travnju', english: 'April / in April' },
        { foreign: 'svibanj / u svibnju', english: 'May / in May' },
        { foreign: 'lipanj / u lipnju', english: 'June / in June' },
        { foreign: 'srpanj / u srpnju', english: 'July / in July' },
        { foreign: 'kolovoz / u kolovozu', english: 'August / in August' },
        { foreign: 'rujan / u rujnu', english: 'September / in September' },
        { foreign: 'listopad / u listopadu', english: 'October / in October' },
      ],
      lesson6: [
        { foreign: 'studeni / u studenom', english: 'November / in November' },
        { foreign: 'prosinac / u prosincu', english: 'December / in December' },
        { foreign: 'Ima puno sniJEga u prosincu.', english: 'There’s a lot of snow in December.' },
        { foreign: 'ima', english: 'it has (there is)' },
        {
          foreign: 'Ljeti je uvijek sunčano.',
          english: 'It’s always sunny in the summer.',
          hard: true,
          working_on: true,
        },
        { foreign: 'uvijek', english: 'always' },
      ],
    },
    chapter3: {
      name: 'What are you doing this weekend?',
      lesson1: [
        {
          foreign: 'Što radiš ovaj vikend?',
          english: 'What are you doing this weekend? (Informal singular)',
        },
        {
          foreign: 'U nedjelju mi je rođendan.',
          english: 'On Sunday is my birthday. (In Sunday to me is birthday.)',
          hard: true,
        },
        { foreign: 'nedjelja / u nedjelju', english: 'Sunday / on Sunday', hard: true },
        { foreign: 'To je sjajno!', english: 'That is splendid!', hard: true },
        {
          foreign: 'Proslavimo ga ranije.',
          english: 'Let’s celebrate it earlier.',
          hard: true,
        },
        { foreign: 'ga', english: 'it (masculine, genitive case)' },
        {
          foreign: 'Napravimo zabavu u petak ili subotu.',
          english: 'Let’s have a party on Friday or Saturday.',
          hard: true,
        },
        { foreign: 'petak / u petak', english: 'Friday / on Friday' },
        { foreign: 'subota / u subotu', english: 'Saturday / on Saturday', hard: true },
        { foreign: 'ili', english: 'or' },
      ],
      lesson2: [
        { foreign: 'KoLIko imaš godina?', english: 'How old are you? (Informal singular)' },
        { foreign: 'godina', english: 'year' },
        { foreign: 'Imam dvadeset osam godina.', english: 'I am 28 years old.' },
        {
          foreign: 'Ali, to je tajna.',
          english: 'But, it is a secret.',
          hard: true,
        },
      ],
      lesson3: [
        { foreign: 'poNEdjeljak / u poNEdjeljak', english: 'Monday / on Monday', hard: true },
        { foreign: 'utorak / u utorak', english: 'Tuesday / on Tuesday' },
        { foreign: 'sriJEda / u sriJEdu', english: 'Wednesday / on Wednesday', hard: true },
        { foreign: 'četVRtak / u četVRtak', english: 'Thursday / on Thursday' },
        { foreign: 'Idem plesati.', english: 'I’m going to dance.', hard: true },
        { foreign: 'godišnjica', english: 'anniversary' },
        { foreign: 'dosadno', english: 'boring' },
      ],
      lesson4: [
        { foreign: 'izvrsno', english: 'great' },
        { foreign: 'mirno', english: 'quiet' },
        { foreign: 'radni dan', english: 'weekday (“working day”)' },
        { foreign: 'Kad je tvoj rođendan?', english: 'When is your birthday? (Informal singular)' },
        { foreign: 'kad', english: 'when' },
        { foreign: 'tvoj', english: 'your (Informal singular, masculine object)' },
        { foreign: 'Moj rođendan je u poNEdjeljak.', english: 'My birthday is on Monday.' },
      ],
    },
    chapter4: {
      name: 'Let’s go to a party',
      lesson1: [
        {
          foreign: 'Idemo na zabavu veČEras.',
          english: 'Let’s go to the party tonight.',
          hard: true,
        },
        { foreign: 'veČEras', english: 'tonight (this evening)', hard: true },
        { foreign: 'idemo', english: 'let’s go' },
        {
          foreign: 'U koje vrijeme počinje?',
          english: 'What time does it start?',
          hard: true,
        },
        { foreign: 'vriJEme', english: 'time' },
        {
          foreign: 'Počinje u devet sati navečer.',
          english: 'It starts at 9:00pm.',
          hard: true,
        },
        { foreign: 'navečer', english: 'in the evening', hard: true },
        { foreign: 'Dolje u centru je, u disku.', english: 'It is downtown, at the Disco.' },
        { foreign: 'centar', english: 'center' },
      ],
      lesson2: [
        {
          foreign: 'Da poZOvem prijatelje?',
          english: 'Should I invite my friends?',
          hard: true,
        },
        { foreign: 'Što više to bolje.', english: 'The more the merrier.' },
        { foreign: 'početi', english: 'to begin' },
        { foreign: 'pozvati', english: 'to invite' },
        { foreign: 'ponoć', english: 'midnight' },
        { foreign: 'prije podne', english: 'a.m.' },
        { foreign: 'poslije podne', english: 'afternoon' },
        { foreign: 'večer', english: 'evening' },
      ],
      lesson3: [
        { foreign: 'noću', english: 'at night' },
        { foreign: 'zora', english: 'dawn' },
        { foreign: 'u zoru', english: 'at dawn', hard: true },
        { foreign: 'kuća / kuće', english: 'house / houses' },
        { foreign: 'rođendanska zabava', english: 'birthday party (birthday’s party)' },
        { foreign: 'događaj', english: 'event', hard: true },
        { foreign: 'miNUta', english: 'minutes' },
      ],
      lesson4: [
        { foreign: 'dvadeset sati / osam sati navečer', english: '8:00pm' },
        { foreign: 'jedan sat u noći', english: '1:00am' },
      ],
      lesson5: [
        {
          foreign: 'šest sati i trideset miNUta / pola sedam uJUtro',
          english: '6:30am',
        },
      ],
    },
    chapter5: {
      name: 'I love this place',
      lesson1: [
        { foreign: 'Divno je biti ovdje.', english: 'It’s wonderful to be here.', hard: true },
        {
          foreign: 'Bilo nam je tako zabavno.',
          english: 'We had so much fun. (It was so much fun to us.)',
          hard: true,
        },
        { foreign: 'nam', english: 'to us', hard: true },
        { foreign: 'bilo je', english: 'it was', hard: true },
        {
          foreign:
            'biti, past tense masculine/feminine/neuter:; bio sam/bila sam; bio si/bila si; bio je/bila je/bilo je; bili smo; bili ste; bili su/bile su/bila su.',
          english: 'to be, past tense: I was, you were, etc.',
          hard: true,
        },
        { foreign: 'Bilo je dobro.', english: 'It was good.' },
        { foreign: 'Bilo je divno.', english: 'It was great.', hard: true },
        { foreign: 'Bilo mi je loše.', english: 'It was bad to me.', hard: true },
        { foreign: 'Bilo mi je dosadno.', english: 'It was boring to me.', hard: true },
        {
          foreign: 'Kako ti je bilo? / Kako vam je bilo?',
          english: 'How was it to you? (Informal singular / formal singular)',
          hard: true,
        },
        {
          foreign: 'Sjećaš li se kad smo otišli na plaNInu?',
          english: 'Remember when we went (left) to the mountain? (Informal singular)',
          hard: true,
        },
      ],
      lesson2: [
        {
          foreign: 'Uživala sam u pjeŠAčenju.',
          english: 'I loved the hike. (From a female)',
          hard: true,
        },
        {
          foreign: 'Sviđa mi se Hrvatska.',
          english: 'I like Croatia.',
          hard: true,
        },
        {
          foreign: 'Kad ćeš ponovno doći?',
          english: 'When will you come again? (Informal singular)',
          hard: true,
        },
        { foreign: 'ponovno', english: 'again' },
        { foreign: 'doći', english: 'to come', hard: true },
        {
          foreign: 'Sljedeće godine. Nadam se.',
          english: 'Next year. Hopefully!',
          hard: true,
        },
        { foreign: 'nadati se', english: 'to hope', hard: true },
        { foreign: 'nadam se', english: 'hopefully' },
      ],
      lesson3: [
        { foreign: 'plaNIna', english: 'mountain' },
        { foreign: 'pjeŠAčenje', english: 'hike (noun)' },
        { foreign: 'jučer', english: 'yesterday', hard: true },
        { foreign: 'sljedeći tjedan', english: 'next week', hard: true },
        { foreign: 'sljedeći', english: 'next (masculine)' },
        { foreign: 'jutros', english: 'this morning' },
        {
          foreign: 'Koliko ćeš dugo biti ovdje?',
          english: 'How long will you be here? (Informal singular)',
        },
      ],
      lesson4: [
        { foreign: 'Ovdje sam pet dana.', english: 'I have been here for five days.', hard: true },
        { foreign: 'dana', english: 'days (genitive)' },
        { foreign: 'Odlazim sutra.', english: 'I leave tomorrow.', hard: true },
      ],
      lesson5: [
        {
          foreign: 'Odlazim za tri dana.',
          english: 'I leave in 3 days.',
          hard: true,
          working_on: true,
        },
        { foreign: 'dan / dani', english: 'day / days (nominative)' },
        { foreign: 'tjedni', english: 'weeks' },
        { foreign: 'mjesec / mjeSEci', english: 'month / months', hard: true },
        { foreign: 'Bit ću ovdje za...', english: 'I’ll be here for...' },
        { foreign: 'bit ću', english: 'I’ll be' },
      ],
      lesson6: [
        {
          foreign: 'Vratit ću se za…',
          english: 'I will be back in...',
          hard: true,
          working_on: true,
        },
        { foreign: 'vratiti se', english: 'to return', hard: true, working_on: true },
      ],
    },
  },
  unit4: {
    chapter1: {
      name: 'I don’t feel well',
      lesson1: [
        {
          foreign: 'Trebam neki liJEK.',
          english: 'I need some medicine.',
          hard: true,
        },
        {
          foreign: 'Koji su Vaši simpTOmi?',
          english: 'What are your symptoms? (Formal singular)',
          hard: true,
        },
        {
          foreign: 'Imam kašalj i začepljen nos.',
          english: 'I have a cough and a stuffy nose.',
          hard: true,
          working_on: true,
        },
        { foreign: 'kašalj', english: 'cough', hard: true },
        { foreign: 'začepljen', english: 'stuffed up', hard: true },
        { foreign: 'nos', english: 'nose' },
        { foreign: 'I prsa me bole.', english: 'My chest hurts also.', hard: true },
      ],
      lesson2: [
        {
          foreign: 'Uzmite ovaj liJEK za prehladu.',
          english: 'Take this cold medicine. (Formal singular)',
          hard: true,
        },
        { foreign: 'prehlada', english: 'cold (sickness)', hard: true },
        { foreign: 'bol (feminine)', english: 'pain' },
        { foreign: 'sol', english: 'salt' },
        {
          foreign:
            'Osjećam bol. (Bol is feminine but accusative and other forms don’t change ending.)',
          english: 'I feel pain.',
          hard: true,
        },
        {
          foreign:
            'Trebam sol. (Sol is feminine but accusative and other forms don’t change ending.)',
          english: 'I need some salt.',
        },
        { foreign: 'Boli me noga.', english: 'My leg hurts.', hard: true },
        { foreign: 'Imam prehladu.', english: 'I have a cold.' },
        { foreign: 'gripa', english: 'flu' },
        { foreign: 'glava', english: 'head' },
      ],
      lesson3: [
        { foreign: 'glaVObolja', english: 'headache' },
        { foreign: 'stopalo / stopala', english: 'foot / feet', hard: true },
        { foreign: 'ruka', english: 'arm or hand' },
        { foreign: 'noga', english: 'leg' },
        { foreign: 'vrat', english: 'neck' },
      ],
      lesson4: [
        { foreign: 'lakat', english: 'elbow', hard: true },
        { foreign: 'koljeno', english: 'knee', hard: true },
        { foreign: 'grlo', english: 'throat' },
        { foreign: 'uho / uši', english: 'ear / ears' },
        { foreign: 'oko / oči', english: 'eye / eyes' },
        { foreign: 'zub / zubi', english: 'tooth / teeth', hard: true },
      ],
      lesson5: [
        { foreign: 'slomiti', english: 'to break', hard: true, working_on: true },
        {
          foreign: 'Slomio / Slomila sam nogu.',
          english: 'I broke my leg. (Male speaker / Female speaker)',
        },
        { foreign: 'liJEčnički recept', english: 'doctor’s prescription' },
        { foreign: 'ljekarna', english: 'drugstore', hard: true, working_on: true },
      ],
    },
    chapter2: {
      name: 'Let’s eat',
      lesson1: [
        {
          foreign: 'Želite li naručiti nešto?',
          english: 'Do you want to order something? (Formal singular)',
        },
        { foreign: 'Želite li ...?', english: 'Do you want ...? (Formal singular)' },
        { foreign: 'naručiti', english: 'to order' },
        {
          foreign: 'Htio bih naručiti sarmu.',
          english: 'I would like to order sarma. (Formal, male speaker)',
        },
        { foreign: 'Htio bih ...', english: 'I would like ... (Formal, male speaker)' },
        {
          foreign: 'Želite li nešto popiti?',
          english: 'Do you want something to drink? (Formal singular)',
        },
        {
          foreign: 'Jedno pivo i čašu vode.',
          english: 'One beer and a glass of water.',
          hard: true,
          working_on: true,
        },
        { foreign: 'čaša', english: 'glass (of liquid)', hard: true },
        { foreign: 'voda', english: 'water' },
        { foreign: 'vode', english: 'of water' },
      ],
      lesson2: [
        {
          foreign: 'Bez leda, molim.',
          english: 'Without ice please.',
          hard: true,
          working_on: true,
        },
        { foreign: 'I malo kruha, molim.', english: 'And a little bread, please.' },
        { foreign: 'kruh', english: 'bread' },
        { foreign: 'juha / malo juhe', english: 'soup / a little soup' },
        { foreign: 'salata / malo salate', english: 'salad / a little salad' },
        { foreign: 'jelo', english: 'dish', hard: true, working_on: true },
        { foreign: 'tanjur', english: 'plate', hard: true, working_on: true },
        { foreign: 'žlica', english: 'spoon' },
      ],
      lesson3: [
        { foreign: 'vilica', english: 'fork', hard: true },
        { foreign: 'nož / noževi', english: 'knife / knives' },
        { foreign: 'salveta', english: 'napkin' },
        { foreign: 'ručak', english: 'lunch', hard: true, working_on: true },
        { foreign: 'doručak', english: 'breakfast' },
        { foreign: 'večera', english: 'dinner' },
        { foreign: 'mlijeko', english: 'milk' },
        { foreign: 'zdjela', english: 'bowl', hard: true },
      ],
      lesson4: [
        { foreign: 'gaZIrani sok', english: 'soda' },
        {
          foreign:
            'željeti:; želim li (do I want); želiš li (do you want); želi li (on/ona) (does he/she want); želimo li (do we want); želite li (do you want); žele li (do they want)',
          english:
            'to ask if someone wants, present tense, all conjugations: do I want, do you want, does he/she want, ...',
          hard: true,
        },
        { foreign: 'vino / vina', english: 'wine / wines', hard: true },
        { foreign: 'još', english: 'more' },
        { foreign: 'vina', english: 'of wine' },
      ],
    },
    chapter3: {
      name: 'I can’t eat that',
      lesson1: [
        {
          foreign: 'Gladan sam / Gladna sam, idemo jesti.',
          english: 'I am hungry, let’s eat. (Male / Female speaker)',
          hard: true,
          working_on: true,
        },
        {
          foreign: 'Sve izgleda ukusno!',
          english: 'Everything looks delicious!',
          hard: true,
          working_on: true,
        },
        {
          foreign: 'Ali, ja sam vegetariJAnac.',
          english: 'But, I am a vegetarian. (Male speaker)',
        },
        {
          foreign: 'Ima li mesa u ovom jelu?',
          english: 'Is there meat in this dish?',
          hard: true,
          working_on: true,
        },
        { foreign: 'meso', english: 'meat' },
      ],
      lesson2: [
        {
          foreign: 'Ne, ali ima školjki u juhi.',
          english: 'No, but there is shellfish in the soup.',
        },
        {
          foreign: 'aLERrgičan sam na školjke!',
          english: 'I am allergic to shellfish! (Male speaker)',
          hard: true,
        },
        { foreign: 'Ali sigurno dobro miriše.', english: 'But it sure smells good.', hard: true },
        { foreign: 'doručkovati', english: 'to have breakfast', hard: true },
        { foreign: 'ručati', english: 'to have lunch' },
        { foreign: 'večerati', english: 'to have dinner' },
      ],
      lesson3: [
        { foreign: 'slano', english: 'salty' },
        { foreign: 'papar', english: 'pepper' },
        { foreign: 'začinjeno', english: 'spicy' },
        { foreign: 'ljuto', english: 'hot (food)' },
        { foreign: 'Volim ljutu hranu.', english: 'I like hot food.' },
      ],
      lesson4: [
        { foreign: 'vegan', english: 'vegan' },
        { foreign: 'soja', english: 'soy' },
        { foreign: 'riba', english: 'fish' },
        { foreign: 'Ne volim...', english: 'I don’t like...' },
        { foreign: 'Ne volim ribu.', english: 'I don’t like fish.' },
        { foreign: 'To je ukusno.', english: 'It tastes good.' },
        { foreign: 'ukusno', english: 'delicious' },
        { foreign: 'To nije ukusno.', english: 'It doesn’t taste good.' },
      ],
    },
  },
};

/*
        { foreign: '', english: '' },
*/
