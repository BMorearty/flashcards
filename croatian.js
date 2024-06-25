/*
Govorite li engleski?
Da. RaZUMijem malo.
Drago mi je.
To mi se svjiđa.
Čuvaj se!
Molim vas, goVOri sporije.
Ti govoriš prebrzo.
Što ova rijEČ znači?
*/

export const allPhrases = {
  custom: [
    { foreign: 'kuća / kuće', english: 'house / houses' },
    { foreign: 'žena / žene', english: 'woman / women' },
    { foreign: 'stolica / stolice', english: 'chair / chairs', hard: true },
    { foreign: 'pivo / piva', english: 'beer / beers' },
    { foreign: 'vino / vina', english: 'wine / wines', hard: true },
    { foreign: 'sunce', english: 'sun' },
    { foreign: 'more / mora', english: 'sea / seas', hard: true },
    { foreign: 'televizor / televizori', english: 'TV / TVs' },
    { foreign: 'susjed / susjedi', english: 'neighbor / neighbors' },
    { foreign: 'most / mostovi', english: 'bridge / bridges' },
    { foreign: 'stol / stolovi', english: 'table / tables', hard: true },
    { foreign: 'dječak / dječaci', english: 'boy / boys' },
    { foreign: 'liječnik / liyečnici', english: 'doctor / doctors', hard: true },
    { foreign: 'čovjek / ljudi', english: 'man (human) / people', hard: true },
    { foreign: 'brat / braća', english: 'brother / brothers', hard: true },
    { foreign: 'kći / kćeri', english: 'daughter / daughters' },
    { foreign: 'djete / djeca', english: 'child / children' },
    { foreign: 'nož / noževi', english: 'knife / knives', hard: true },
    { foreign: 'dobra večer', english: 'good evening', hard: true },
    { foreign: 'Bok.', english: 'Hi. / Bye.', hard: true },
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
        { foreign: 'dječak', english: 'boy', hard: true }, // used to say dečko but that's boyfriend
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
            'Govoriti, present tense:; (ja) govorim; (ti) govoriš; (on/ona/ono) govori; (mi) govorimo; (vi) govorite; (oni/one/ona) govore',
          english:
            'To speak, present tense:; (I) speak; (you) speak; (he/she/it) speaks; (we) speak; (you) speak; (they) speak',
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
            'Učiti, present tense:; (ja) učim; (ti) učiš; (on/ona/ono) ući; (mi) učimo; (vi) učite; (oni/one/ona) uće',
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
          foreign: 'Čula sam za taj fakultet',
          english: 'I’ve heard of that faculty. (From female)',
        },
        {
          foreign:
            'negative past tense form on the verb čuti:; (ja) nisam čuo/čula; (ti) nisi čuo/čula; (on/ona/ono) nije čuo/čula/čulo; (mi) nismo čuli/čule; (vi) niste čuli/čule; (oni/one/ona) nisu čuli/čule/čula',
          english:
            'Negative past tense conjugation of to hear: I haven’t heard/didn’t hear, you haven’t heard/didn’t hear, etc.',
          hard: true,
        },
        { foreign: 'za', english: 'of / for', hard: true },
        { foreign: 'taj', english: 'that (as in "that thing")', hard: true },
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
        { foreign: 'To je knjiga.', english: 'That is a book.', hard: true },
        {
          foreign: 'Možeš li to reći ponovo?',
          english: 'Can you say that again? (Informal singular)',
          hard: true,
        },
        {
          foreign: 'možeš li...?',
          english: 'can you...? (Informal singular)',
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
        { foreign: 'stvar', english: 'thing', hard: true },
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
        { foreign: 'želio bih', english: 'I would like (Formal, male)', hard: true },
        { foreign: 'željela bih', english: 'I would like (Formal, female)', hard: true },
        { foreign: 'do', english: 'to (as in, “a ticket to Zagreb”)' },
        { foreign: 'Koliko to košta?', english: 'How much does it cost?' },
      ],
      lesson2: [
        { foreign: 'To je peDEset kuna.', english: 'It is fifty kunas.', hard: true },
        {
          foreign: 'Mogu Vam dati samo četrDEset pet.',
          english: 'I can only give you 45. (Formal singular)',
          hard: true,
        },
        { foreign: 'mogu', english: 'I can', hard: true },
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
        { foreign: 'možete li...?', english: 'can you...? (Formal singular)' },
        { foreign: 'To je previše.', english: 'That is too much.', hard: true },
        { foreign: 'skupo', english: 'expensive' },
        { foreign: 'jeftino', english: 'cheap', hard: true },
        { foreign: 'skup kaput', english: 'expensive coat', hard: true },
        { foreign: 'skupa karta', english: 'expensive ticket', hard: true },
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
        { foreign: 'DVAnaest', english: 'twelve' },
        { foreign: 'TRInaest', english: 'thirteen' },
        { foreign: 'čeTRnaest', english: 'fourteen' },
        { foreign: 'PETnaest', english: 'fifteen' },
        { foreign: 'ŠESnaest', english: 'sixteen' },
        { foreign: 'seDAMnaest', english: 'seventeen', hard: true },
        { foreign: 'oSAMnaest', english: 'eighteen' },
        { foreign: 'deVETnaest', english: 'nineteen' },
        { foreign: 'DVAdeset', english: 'twenty' },
        { foreign: 'DVAdeset jedan', english: 'twenty-one' },
        { foreign: 'DVAdeset dva', english: 'twenty-two' },
        { foreign: 'TRIdeset', english: 'thirty' },
        { foreign: 'TRIdeset pet', english: 'thirty-five' },
        { foreign: 'četrDEset', english: 'forty' },
        { foreign: 'peDEset', english: 'fifty', hard: true },
        { foreign: 'peDEset osam', english: 'fifty-eight' },
        { foreign: 'šezDEset', english: 'sixty' },
        { foreign: 'sedamDEset', english: 'seventy' },
        { foreign: 'osamDEset', english: 'eighty' },
        { foreign: 'deveDEset', english: 'ninety', hard: true },
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
        { foreign: 'nositi', english: 'to wear', hard: true },
        {
          foreign:
            'future tense of biti:; ja ću; ti ćeš; on/ona/ono će; mi ćemo; vi ćete; oni/one/ona će',
          english: 'future tense of to be: I will be, you will be, etc.',
          hard: true,
        },
        {
          foreign:
            'negative future tense of biti:; Ja neću; ti nećeš; on/ona/ono neće; mi nećemo; vi nećete; oni/one/ona neće',
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
          hard: true,
        },
        { foreign: 'traperice', english: 'jeans' },
        { foreign: 'majica', english: 'shirt', hard: true },
        { foreign: 'kratkih ruKAva', english: 'short-sleeved', hard: true },
        {
          foreign: 'Želiš li nositi haljinu?',
          english: 'Do you want to wear a dress? (Informal singular)',
          hard: true,
        },
        { foreign: 'haljina', english: 'dress', hard: true },
        { foreign: 'Želiš li...?', english: 'Do you want...? (Informal singular)' },
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
        { foreign: 'hlače', english: 'pants', hard: true },
        { foreign: 'čarape', english: 'socks', hard: true },
        { foreign: 'cipele', english: 'shoes', hard: true },
        { foreign: 'šal', english: 'scarf' },
        { foreign: 'ruKAvice', english: 'gloves', hard: true },
      ],
      lesson3: [
        { foreign: 'šešir', english: 'hat' },
        { foreign: 'odiJElo', english: 'suit' },
        { foreign: 'suknja', english: 'skirt', hard: true },
        { foreign: 'kraVAta', english: 'tie' },
        { foreign: 'remen', english: 'belt' },
        { foreign: 'kupaći kostim', english: 'swimsuit' },
        { foreign: 'piDŽAma', english: 'pajamas' },
        { foreign: 'Istuširat ću se.', english: 'I’ll take a shower.', hard: true },
      ],
      lesson4: [
        { foreign: 'oKUpat ću se.', english: 'I’ll take a bath.' },
        { foreign: 'OBUći se', english: 'to get dressed' },
        { foreign: 'oBUci se.', english: 'Get dressed. (Informal singular)' },
        { foreign: 'Oprat ću odjeću.', english: 'I’ll wash the clothes.', hard: true },
        { foreign: 'odjeća', english: 'clothes', hard: true },
      ],
      lesson5: [
        { foreign: 'plakar', english: 'closet' },
        { foreign: 'ormar (namještaj)', english: 'wardrobe (furniture)', hard: true },
        { foreign: 'gardeROba (odjeća)', english: 'wardrobe (clothes)', hard: true },
        { foreign: 'prije', english: 'before', hard: true },
        { foreign: 'nakon', english: 'after', hard: true },
        { foreign: 'tiJEkom', english: 'during', hard: true },
        { foreign: 'Ne bih...', english: 'I wouldn’t...' },
        { foreign: 'Nisam...', english: 'I’m not...' },
      ],
      lesson6: [
        { foreign: 'Nisam siguran.', english: 'I’m not sure. (Masculine)' },
        { foreign: 'Nisam sigurna.', english: 'I’m not sure. (Feminine)' },
      ],
    },
  },
};

/*
        { foreign: '', english: '' },
*/
