/*
 Verbo ESTAR: https://docs.google.com/presentation/d/1EgpZ_7aTz-3PkhxYvJh4LOxi5-UsBuy2/edit?slide=id.p2#slide=id.p2
   PLACE: Position, Location, Action, Condition, Emotion
 Verbo SER:   https://docs.google.com/presentation/d/1EgpZ_7aTz-3PkhxYvJh4LOxi5-UsBuy2/edit?slide=id.p6#slide=id.p6
   DOCTOR: Date/Day, Occupation, Characteristic/Class, Time, Origin, Relation/Religion
 */

export const allPhrases = {
  custom: {
    chapter1: {
      name: 'Random vocab',
      lesson1: [
        { foreign: 'largo', english: 'long' },
        {
          foreign: 'Tenga cuidado.',
          english: 'Be careful. (formal) (to a male)',
        },
        { foreign: 'aquí', english: 'here' },
        { foreign: 'tiempo', english: 'weather (right now)' },
        {
          foreign: '¿Qué significa esa palabra?',
          english: 'What does that word mean?',
        },
        { foreign: 'Suena bien.', english: 'Sounds good.' },
        { foreign: 'sin embargo', english: 'however' },
        { foreign: 'ambos', english: 'both' },
        { foreign: 'entonces', english: 'so / then (like French alors)' },
        { foreign: 'estadounidense/es', english: 'American (singular and plural)' },
        { foreign: 'hay', english: 'there is/there are' },
        {
          foreign: 'Estoy retirado/a / jubilado/a.',
          english: 'I’m retired.',
          hard: true,
        },
      ],
      lesson2: [
        { foreign: 'Buen día.', english: 'Good day.' },
        { foreign: 'caballero', english: 'gentleman' },
        { foreign: 'señor', english: 'sir / Mr.' },
        { foreign: 'señora', english: 'ma’am / Mrs.' },
        { foreign: 'señorita', english: 'miss (addressing someone)' },
        { foreign: '¿Qué hay de nuevo?', english: 'What’s new?', hard: true },
        { foreign: '¿Qué pasa?', english: 'What’s up?' },
        { foreign: '¿Qué tal?', english: 'How’s it going?', hard: true },
        { foreign: 'muy', english: 'very' },
        { foreign: 'Muy bien.', english: 'Very well.' },
        { foreign: 'No muy bien.', english: 'Not very well.' },
        { foreign: 'Más o menos.', english: 'So-so.', working_on: true },
        { foreign: 'aburrido', english: 'bored' },
        { foreign: 'contento', english: 'glad' },
        { foreign: 'enojado', english: 'angry', working_on: true, hard: true },
        { foreign: 'estresado', english: 'stressed' },
        { foreign: 'nervioso', english: 'nervous' },
        { foreign: 'ocupado', english: 'busy' },
        { foreign: 'preocupado', english: 'worried' },
        { foreign: 'relajado', english: 'relaxed' },
        { foreign: '¿Y tú?', english: 'And you? (informal)' },
        {
          foreign: 'Encantado de conocerlo.',
          english: 'Pleased to meet you. (to a male)',
          hard: true,
        },
        { foreign: 'Igual.', english: 'Likewise. (short version)' },
        {
          foreign: 'Muy amable.',
          english: 'That’s very kind of you.',
          hard: true,
        },
        { foreign: 'Muchas gracias.', english: 'Thank you very much.' },
        { foreign: 'Con gusto.', english: 'You’re welcome. (With pleasure.)' },
        { foreign: '¡Chao!', english: 'Bye!' },
        { foreign: '¡Cuídate!', english: 'Take care! (informal)', working_on: true, hard: true },
        { foreign: '¡Cuídense!', english: 'Take care! (to a group)', working_on: true, hard: true },
        {
          foreign: 'Nos vemos más tarde.',
          english: 'See you later.',
          hard: true, // because tarde, not tardes
        },
        {
          foreign: '¡Que te vaya bien!',
          english: 'I hope it goes well with you! (informal)',
          hard: true,
        },
        { foreign: 'Nos vemos pronto.', english: 'See you soon.' },
        { foreign: 'Nos vemos mañana.', english: 'See you tomorrow.' },
      ],
      lesson3: [
        { foreign: 'ayer', english: 'yesterday' },
        { foreign: '¿Por qué?', english: 'Why?' },
        { foreign: 'porque', english: 'because' },
        { foreign: 'cuántos/cuántas', english: 'how many' },
        { foreign: 'una hora', english: 'an hour' },
        { foreign: 'sueño', english: 'sleep (n.)' },
        { foreign: 'divertido', english: 'fun (adj.)' },
        { foreign: 'más', english: 'more' },
      ],
      lesson4: [
        {
          foreign: 'Es joven y está siempre activo. (use está with siempre)',
          english: 'He is young and is always active.',
        },
        {
          foreign:
            "Los niños están contentos. (Always use estar with contento--it's a temporary state of mind)",
          english: 'The children are glad.',
        },
        {
          foreign: 'Los niños son felices. (Use ser with feliz)',
          english: 'The children are happy.',
        },
        { foreign: 'travieso', english: 'mischievous', working_on: true, hard: true },
        { foreign: 'avergonzado', english: 'ashamed', working_on: true, hard: true },
        { foreign: 'Eso es verdad.', english: 'That’s true.' },
        { foreign: 'Eso es falso.', english: 'That’s false.' },
      ],
      lesson5: [
        { foreign: 'ahora', english: 'now' },
        { foreign: 'así', english: 'like that / like this', hard: true },
      ],
      lesson6: [
        { foreign: 'casi', english: 'almost', working_on: true },
        { foreign: 'ya', english: 'already', working_on: true },
        { foreign: 'milagro', english: 'miracle' },
        {
          foreign: 'mayor',
          english: 'senior / elderly, adj. (polite way to refer to an old person)',
        },
        { foreign: 'después de la escuela', english: 'after school', working_on: true },
        {
          foreign: 'ese (m)| esos (m pl)| esa (f)| esas (f pl)| eso (neutral)',
          english: 'that (as in "that thing" or "that person") (all forms)',
          working_on: true,
        },
      ],
    },
    chapter2: {
      name: 'Days of the week',
      lesson1: [
        { foreign: 'lunes', english: 'Monday' },
        { foreign: 'martes', english: 'Tuesday' },
        { foreign: 'miércoles', english: 'Wednesday' },
        { foreign: 'jueves', english: 'Thursday' },
        { foreign: 'viernes', english: 'Friday' },
        { foreign: 'sábado', english: 'Saturday' },
        { foreign: 'domingo', english: 'Sunday' },
      ],
    },
    chapter3: {
      name: 'Weather',
      lesson1: [
        { foreign: 'Está frío.', english: 'It is cold.' },
        { foreign: 'Está nublado.', english: 'It is cloudy.' },
        { foreign: 'Está seco.', english: 'It is dry.' },
        { foreign: 'Está soleado.', english: 'It is sunny.' },
        { foreign: 'Está ventoso.', english: 'It is windy.' },
        { foreign: 'Hace frío.', english: 'It is cold (noun).' },
        { foreign: 'Hace mucho frío.', english: 'It is freezing (noun).' },
        { foreign: 'Está muy frío.', english: 'It is freezing (adjective).' },
      ],
    },
    chapter4: {
      name: 'Guide to pronunciation',
      lesson1: [
        { foreign: 'la llave', english: 'the key' },
        { foreign: 'la yegua', english: 'the mare', hard: true },
        { foreign: 'la gallina', english: 'the hen' },
        { foreign: 'el yoga', english: 'the yoga' },
        { foreign: 'la lluvia', english: 'the rain' },
        { foreign: 'la galleta', english: 'the cookie' },
        { foreign: 'el yate', english: 'the yacht' },
      ],
      lesson2: [
        { foreign: 'la bañera', english: 'the bathtub' },
        { foreign: 'el vestido', english: 'the dress' },
        { foreign: 'el virus', english: 'the virus' },
        { foreign: 'la botella', english: 'the bottle' },
        { foreign: 'la bufanda', english: 'the scarf' },
        { foreign: 'la vaca', english: 'the cow' },
        { foreign: 'el/la bebé', english: 'the baby' },
      ],
      lesson3: [
        { foreign: 'la campana', english: 'the bell' },
        { foreign: 'el queso', english: 'the cheese' },
        { foreign: 'el kilo', english: 'the kilo' },
        { foreign: 'el conejo', english: 'the rabbit' },
        { foreign: 'la cuchara', english: 'the spoon' },
        { foreign: 'el kárate', english: 'the karate' },
        { foreign: 'la mantequilla', english: 'the butter' },
      ],
      lesson4: [
        { foreign: 'el zapato', english: 'the shoe' },
        { foreign: 'el cepillo', english: 'the brush', hard: true },
        { foreign: 'el semáforo', english: 'the traffic light' },
        { foreign: 'el zinc', english: 'the zinc' },
        { foreign: 'el cine', english: 'the cinema' },
        { foreign: 'la silla', english: 'the chair' },
        { foreign: 'el zorro', english: 'the fox' },
      ],
      lesson5: [
        { foreign: 'el jabón', english: 'the soap', hard: true },
        { foreign: 'el traje', english: 'the suit' },
        { foreign: 'la gente', english: 'the people' },
        { foreign: 'el/la jirafa', english: 'the giraffe' },
        { foreign: 'el gimnasio', english: 'the gym' },
        { foreign: 'el ojo', english: 'the eye' },
        { foreign: 'el jugo', english: 'the juice' },
      ],
      lesson6: [
        { foreign: 'el garaje', english: 'the garage', hard: true },
        { foreign: 'el guepardo', english: 'the cheetah' },
        { foreign: 'la hamburguesa', english: 'the hamburger' },
        { foreign: 'la guitarra', english: 'the guitar' },
        { foreign: 'el águila', english: 'the eagle' },
        { foreign: 'la gorra', english: 'the cap' },
        { foreign: 'el gusano', english: 'the worm', hard: true },
      ],
      lesson7: [
        { foreign: 'el hacha', english: 'the axe' },
        { foreign: 'el helado', english: 'the ice cream' },
        { foreign: 'el hilo', english: 'the thread' },
        { foreign: 'el hueso', english: 'the bone', hard: true },
        { foreign: 'el hada', english: 'the fairy', hard: true },
        { foreign: 'la huella', english: 'the fingerprint / the footprint' },
      ],
    },
    chapter5: {
      name: 'Los pronombres de sujeto',
      lesson1: [
        { foreign: 'yo', english: 'I' },
        { foreign: 'tú', english: 'you (informal singular)' },
        { foreign: 'él', english: 'he' },
        { foreign: 'ella', english: 'she' },
        { foreign: 'usted', english: 'you (formal singular)' },
        { foreign: 'nosotros / nosotras', english: 'we' },
        { foreign: 'vosotros / vosotras', english: 'you (informal plural in Spain)' },
        { foreign: 'ellos / ellas', english: 'they' },
        {
          foreign: 'ustedes',
          english: 'you (formal plural in Spain; both formal and informal plural in Latin America)',
        },
      ],
    },
    chapter6: {
      name: 'Verb conjugations',
      lesson1: [
        {
          foreign:
            'estar, present tense:' +
            '| (yo) estoy' +
            '| (tú) estás' +
            '| (él, ella, usted) está' +
            '| (nosotros / nosotras) estamos' +
            '| (vosotros / vosotras) estáis' +
            '| (ellos / ellas / ustedes) están',
          english:
            'to be (PLACE: position, location, action, condition, emotion):| I am, you are, etc.',
        },
        {
          foreign:
            'ser, present tense:' +
            '| (yo) soy' +
            '| (tú) eres' +
            '| (él, ella, usted) es' +
            '| (nosotros / nosotras) somos' +
            '| (vosotros / vosotras) sóis' +
            '| (ellos / ellas / ustedes) son',
          english:
            'to be (DOCTOR: date/day, occupation, characteristic/class, time, origin, relation/religion):| I am, you are, etc.',
        },
      ],
    },
    chapter7: {
      name: 'Seasons',
      lesson1: [
        { foreign: 'estación(es)', english: 'season(s)' },
        { foreign: 'invierno', english: 'winter', hard: true },
        { foreign: 'primavera', english: 'spring' },
        { foreign: 'verano', english: 'summer', hard: true },
        { foreign: 'otoño', english: 'fall / autumn' },
      ],
    },
    chapter9: {
      name: 'Present participle in present continuous tense',
      lesson1: [
        /* regular */
        {
          foreign: 'Ellos están caminando en la playa.',
          english: 'They are walking on the beach.',
        },
        { foreign: 'La niña está estudiando español.', english: 'The girl is studying Spanish.' },
        {
          foreign: 'Ella está escuchando música ahora.',
          english: 'She is listening to music now.',
        },
        {
          foreign: 'Ellos están trabajando en la oficina.',
          english: 'They are working in the office.',
          hard: true,
        },
        {
          foreign: 'Ella está comiendo chocolate.',
          english: 'She is eating chocolate.',
          hard: true,
        },
        { foreign: 'La niña está haciendo la tarea.', english: 'The girl is doing her homework.' },
        { foreign: 'Ella está viviendo en Nueva York.', english: 'She is living in New York.' },
        {
          foreign: 'La niña está escribiendo en su cuaderno.',
          english: 'The girl is writing in her notebook.',
        },
        {
          foreign: 'Ellos están jugando fútbol en el parque.',
          english: 'They are playing soccer in the park.',
        },
        {
          foreign: 'La familia está mirando la televisión.',
          english: 'The family is watching television.',
          hard: true,
        },
        {
          foreign: 'Hoy está nevando mucho.',
          english: 'Today it is snowing a lot.',
          hard: true,
        },
        { foreign: 'Él está cocinando.', english: 'He is cooking.' },
        { foreign: 'Estoy hablando.', english: 'I am speaking.' },
        { foreign: 'Estoy pensando.', english: 'I am thinking.' },
        {
          foreign: 'Estoy almorzando.',
          english: 'I am having lunch.',
          hard: true,
        },
        { foreign: 'Estoy cenando.', english: 'I am having dinner.', hard: true },
        { foreign: 'Estoy bañando a mi perro.', english: 'I am bathing my dog.' },
        { foreign: 'Estoy bañandome.', english: 'I am taking a bath.' },
        {
          foreign: 'Estoy acostando al niño.',
          english: 'I am putting the boy to bed.',
          hard: true,
        },
        { foreign: 'Estoy acostandome.', english: 'I am going to bed.' },
        { foreign: 'Estoy bebiendo.', english: 'I am drinking.' },
        {
          foreign: 'Estoy conociendo a un chico.',
          english: 'I’m getting to know a guy.',
        },
        {
          foreign: 'Estoy comprendiendo esta lección.',
          english: 'I am comprehending this lesson.',
        },
        { foreign: 'Estoy abriendo la puerta.', english: 'I am opening the door.' },
        { foreign: 'Estoy aprendiendo español.', english: 'I am learning Spanish.' },
      ],
      lesson2: [
        /* irregular */
        {
          foreign: 'El gatito está durmiendo sobre la cama.',
          english: 'The kitten is sleeping on the bed.',
        },
        {
          foreign: 'El niño está diciendo la verdad.',
          english: 'The boy is telling the truth.',
        },
        { foreign: 'La chica está leyendo.', english: 'The girl is reading.' },
        {
          foreign: 'El ladrón está huyendo.',
          english: 'The thief is fleeing.',
          hard: true,
        },
        {
          foreign: 'Están construyendo un edificio.',
          english: 'They are building a building.',
          hard: true,
        },
        { foreign: 'Él está muriendo.', english: 'He is dying.' },
        { foreign: 'El político está mintiendo.', english: 'The politician is lying.' },
        {
          foreign: 'Ella está oyendo música de su cantante favorito.',
          english: 'She is hearing music by her favorite singer.',
        },
        {
          foreign: 'Desafortunadamente, las cosas no están yendo bien en el planeta.',
          english: 'Unfortunately, things are not going well on the planet.',
        },
        {
          foreign: 'La lluvia está cayendo sobre el techo.',
          english: 'The rain is falling on the roof.',
          hard: true,
        },
        {
          foreign: 'El político está influyendo en la gente.',
          english: 'The politician is influencing people.',
          hard: true, // because of 'en'
        },
        {
          foreign: 'Él está vistiendose para ir a la escuela.',
          english: 'He is getting dressed to go to school.',
          hard: true,
        },
        {
          foreign: 'Estoy pidiendo una bebida.',
          english: 'I’m asking for a drink.',
          hard: true,
        },
        {
          foreign: 'Estoy repitiendo la pregunta.',
          english: 'I am repeating the question.',
        },
        { foreign: 'Estoy sonriendo.', english: 'I’m smiling.', hard: true },
      ],
    },
  },
  genders: {
    chapter1: {
      name: 'Noun endings',
      showEnglish: false,
      lesson1: [
        {
          foreign: '-a',
          english: 'Feminine. Ejemplo: la gata (girl cat), la manzana (apple). Excepción: el día.',
        },
        {
          foreign: '-ad, -ed, -id, -ud',
          english:
            'Feminine. Ejemplo: la amistad (friendship), la pared (wall), la salud (health).',
        },
        { foreign: '-ción', english: 'Feminine. Ejemplo: la canción, la emoción, la situación.' },
        { foreign: '-eza', english: 'Feminine. Ejemplo: la tristeza (sadness), la cabeza (head).' },
        { foreign: '-is', english: 'Feminine. Ejemplo: la crisis, la tendonitis' },
        {
          foreign: '-z',
          english:
            'Feminine. Ejemplo: la cruz (cross), la nariz (nose). Excepción: el lápiz (pencil), el arroz (rice)',
        },
        {
          foreign: 'letras del abecedario',
          english: 'Feminine. Ejemplo: la a, la b, la c, ...',
        },
        { foreign: '-o', english: 'Masculine. Ejemplo: el banco. Excepción: la mano, la foto' },
        {
          foreign: '-ar, -er, -or',
          english:
            'Masculine. Ejemplo: el titular (owner), el computador, el taller (shop). Excepción: la flor (flower).',
        },
        {
          foreign: '-ma',
          english: 'Masculine. Ejemplo: el clima (weather), el problema, el sistema.',
        },
        {
          foreign: '-y',
          english: 'Masculine. Ejemplo: el rey (king), el buey (ox). Excepción: la ley (law).',
        },
        { foreign: '-x', english: 'Masculine. Ejemplo: el tórax (thorax).' },
        {
          foreign: '-al',
          english: 'Masculine. Ejemplo: el hospital, el terminal.',
        },
        {
          foreign: 'días de la semana',
          english: 'Masculine. El lunes, el martes, el miércoles, ...',
        },
        {
          foreign: 'puntos cardinales',
          english: 'Masculine. El norte, el sur, el esta, el oeste',
        },
        { foreign: 'mesos', english: 'Masculine. El enero, el febrero, el marzo, ...' },
        { foreign: 'números', english: 'Masculine. El uno, el dos, el tres, ...' },
      ],
    },
    chapter2: {
      name: 'Examples',
      lesson1: [
        { foreign: 'la gata', english: 'the girl cat' },
        { foreign: 'la manzana', english: 'the apple' },
        { foreign: 'el día', english: 'the day' },
        { foreign: 'la amistad', english: 'the friendship' },
        { foreign: 'la pared', english: 'the wall' },
        { foreign: 'la salud', english: 'the health' },
        { foreign: 'la canción', english: 'the song' },
        { foreign: 'la emoción', english: 'the emotion' },
        { foreign: 'la situación', english: 'the situation' },
        { foreign: 'la crisis', english: 'the crisis' },
        { foreign: 'la tendonitis', english: 'the tendonitis' },
        { foreign: 'la cruz', english: 'the cross' },
        { foreign: 'la nariz', english: 'the nose' },
        { foreign: 'el lápiz', english: 'the pencil' },
        { foreign: 'el arroz', english: 'the rice' },
        { foreign: 'la a', english: 'the a' },
        { foreign: 'la b', english: 'the b' },
        { foreign: 'la c', english: 'the c' },
        { foreign: 'el banco', english: 'the bank' },
        { foreign: 'la mano', english: 'the hand' },
        { foreign: 'la foto', english: 'the photo' },
        { foreign: 'el titular', english: 'the owner' },
        { foreign: 'el computador/la computadora', english: 'the computer' },
        { foreign: 'el taller', english: 'the shop' },
        { foreign: 'la flor', english: 'the flower' },
        { foreign: 'el clima', english: 'the weather (climate)' },
        { foreign: 'el problema', english: 'the problem' },
        { foreign: 'el sistema', english: 'the system' },
        { foreign: 'el rey', english: 'the king' },
        { foreign: 'el buey', english: 'the ox' },
        { foreign: 'la ley', english: 'the law' },
        { foreign: 'el tórax', english: 'the thorax' },
        { foreign: 'el hospital', english: 'the hospital' },
        { foreign: 'el terminal', english: 'the terminal' },
        { foreign: 'el lunes', english: 'the Monday (on Monday)' },
        { foreign: 'el miércoles', english: 'the Wednesday (on Wednesday)' },
        { foreign: 'el norte', english: 'the north' },
        { foreign: 'el sur', english: 'the south' },
        { foreign: 'el esta', english: 'the east', hard: true },
        { foreign: 'el oeste', english: 'the west', hard: true },
        { foreign: 'el enero', english: 'the January' },
        { foreign: 'el febrero', english: 'the February' },
        { foreign: 'el marzo', english: 'the March' },
        { foreign: 'el uno', english: 'the one' },
        { foreign: 'el dos', english: 'the two' },
        { foreign: 'el tres', english: 'the three' },
        { foreign: 'la mesa', english: 'the table' },
        { foreign: 'el sofá', english: 'the sofa' },
        { foreign: 'el planeta', english: 'the planet' },
        { foreign: 'la calle', english: 'the street', hard: true },
        { foreign: 'el campo', english: 'the field', hard: true },
        { foreign: 'el/la policia', english: 'the police officer' },
        { foreign: 'el ordenador', english: 'the computer (like the French word)' },
        { foreign: 'la tristeza', english: 'the sadness' },
        { foreign: 'la cabeza', english: 'the head' },
      ],
    },
  },
  unit1: {
    name: 'Introductions',
    chapter1: {
      name: 'Salutations and Small Talk',
      lesson1: [
        { foreign: 'Hola.', english: 'Hello.' },
        { foreign: 'Buenos días.', english: 'Good morning.' },
        { foreign: 'Buenas tardes.', english: 'Good afternoon.' },
        { foreign: 'Buenas noches.', english: 'Good evening. / Good night.' },
      ],
      lesson2: [
        { foreign: '¿Cómo está usted?', english: 'How are you? (formal)' },
        { foreign: 'cómo', english: 'how' },
        { foreign: 'estar', english: 'to be (temporary)' },
        { foreign: 'está', english: '(you) are (formal)' },
        { foreign: 'estás', english: '(you) are (informal)' },
        { foreign: 'Hola, ¿cómo está usted?', english: 'Hello, how are you? (formal)' },
        { foreign: 'hoy', english: 'today' },
        { foreign: 'Hola, ¿cómo está usted hoy?', english: 'Hello, how are you today? (formal)' },
        { foreign: '¿Cómo estás?', english: 'How are you? (informal)' },
        { foreign: '¿Cómo está ella?', english: 'How is she?' },
        { foreign: '¿Cómo está él?', english: 'How is he?' },
      ],
      lesson3: [
        { foreign: 'Estoy bien.', english: 'I’m fine.' },
        { foreign: 'estoy', english: '(I) am (temporary)' },
        { foreign: 'bien', english: 'fine' },
        { foreign: 'Gracias.', english: 'Thank you.' },
        { foreign: 'y', english: 'and' },
        { foreign: '¿Y usted?', english: 'And you? (formal)' },
        { foreign: 'Estoy bien. ¿Y usted?', english: 'I’m fine. And you? (formal)' },
        { foreign: 'también', english: 'too' },
        { foreign: 'Estoy bien también.', english: 'I’m fine too.' },
        { foreign: 'De nada.', english: 'You’re welcome.' },
        { foreign: 'Está bien. or Ella está bien.', english: 'She is fine.' },
        { foreign: 'Está bien. or Él está bien.', english: 'He is fine.' },
        { foreign: 'cansado', english: 'tired', hard: true },
        { foreign: 'Está cansado.', english: 'He is tired.', hard: true },
        { foreign: 'Está cansada.', english: 'She is tired.', hard: true },
        {
          foreign: 'Usted está cansado.',
          english: 'You are tired. (formal) (to a male)',
          hard: true,
        },
      ],
      lesson4: [
        { foreign: '¡Qué día tan frío!', english: 'What a cold day!' },
        { foreign: 'día', english: 'day' },
        { foreign: 'qué', english: 'what' },
        { foreign: '¡Qué día!', english: 'What a day!' },
        { foreign: 'frío', english: 'cold' },
        { foreign: 'día frío', english: 'cold day' },
        { foreign: 'tan', english: 'so (as in “so hot”)' },
        { foreign: 'tarde', english: 'afternoon' },
        { foreign: 'tarde fría', english: 'cold afternoon' },
        { foreign: 'lluvioso', english: 'rainy', hard: true },
        { foreign: 'tarde fría y lluviosa', english: 'cold and rainy afternoon' },
        {
          foreign: '¡Qué tarde tan fría y lluviosa!',
          english: 'What a cold and rainy afternoon!',
        },
        { foreign: 'caluroso', english: 'hot (weather)', hard: true },
        { foreign: 'mañana', english: 'morning' },
        { foreign: 'la mañana calurosa', english: 'the hot morning' },
        { foreign: 'La mañana está calurosa.', english: 'The morning is hot.' },
      ],
      lesson5: [
        { foreign: 'noche', english: 'night' },
        { foreign: '¡Qué noche tan calurosa!', english: 'What a hot night!' },
        { foreign: 'húmedo', english: 'humid' },
        { foreign: '¡Qué día tan húmedo!', english: 'What a humid day!' },
        { foreign: '¡Qué noche tan húmeda!', english: 'What a humid night!' },
      ],
      lesson6: [
        {
          foreign: 'Que tenga un buen día.',
          english: 'Have a good day. (formal)',
        },
        { foreign: 'un día', english: 'a day' },
        { foreign: 'bueno', english: 'good' },
        { foreign: 'un buen día', english: 'a good day' },
        {
          foreign: 'que',
          english:
            'that (the subordinate conjunction “that” as in, “I hope that you have a good day.”)',
        },
        { foreign: 'tener', english: 'to have' },
        { foreign: 'tenga', english: '(you) have [subjunctive] (formal)' },
        { foreign: '¡Que tenga un buen lunes!', english: 'Have a good Monday! (formal)' },
        { foreign: 'Igualmente.', english: 'Likewise.' },
        { foreign: 'ver', english: 'to see' },
        { foreign: 'Nos vemos.', english: 'See you.' },
        { foreign: 'el martes', english: 'on Tuesday' },
        { foreign: 'Nos vemos el martes.', english: 'See you on Tuesday.' },
      ],
    },
    chapter2: {
      name: 'Languages and Origins',
      lesson1: [
        {
          foreign: 'Disculpe, ¿habla usted inglés?',
          english: 'Excuse me, do you speak English? (formal)',
        },
        { foreign: 'hablar', english: 'to speak' },
        { foreign: 'habla', english: '(you) speak (formal)' },
        { foreign: 'inglés', english: 'English' },
        {
          foreign: '¡Disculpe!',
          english: 'Excuse me! (for getting attention or interrupting) (formal)',
          working_on: true,
        },
        {
          foreign: '¡Disculpa!',
          english: 'Excuse me! (for getting attention or interrupting) (informal)',
          working_on: true,
        },
        { foreign: 'español', english: 'Spanish' },
        { foreign: 'alemán', english: 'German' },
        { foreign: 'francés', english: 'French' },
        {
          foreign: '¿Habla francés?',
          english: 'Do you speak French? (formal but leaving out the optional personal pronoun)',
        },
        { foreign: 'hablas', english: '(you) speak (informal)' },
        { foreign: '¿Hablas español?', english: 'Do you speak Spanish? (informal)' },
        { foreign: '¿Habla usted español?', english: 'Do you speak Spanish? (formal)' },
        { foreign: '¿Hablas francés?', english: 'Do you speak French? (informal)' },
        { foreign: 'o', english: 'or' },
        {
          foreign: '¿Hablas francés o inglés?',
          english: 'Do you speak French or English? (informal)',
        },
        {
          foreign: 'Disculpe, ¿habla usted francés o alemán?',
          english: 'Excuse me, do you speak French or German? (formal)',
          working_on: true,
        },
      ],
      lesson2: [
        {
          foreign: 'Hablo un poco de español.',
          english: 'I speak a little bit of Spanish.',
        },
        { foreign: 'hablo', english: '(I) speak' },
        { foreign: 'un poco', english: 'a little bit' },
        { foreign: 'de', english: 'of / from' },
        { foreign: 'sí', english: 'yes' },
        { foreign: 'italiano', english: 'Italian' },
        { foreign: 'no', english: 'no' },
        { foreign: 'No hablo inglés.', english: 'I don’t speak English.' },
        {
          foreign: 'Ella habla un poco de inglés.',
          english: 'She speaks a little bit of English.',
        },
      ],
      lesson3: [
        {
          foreign: '¿De dónde es usted?',
          english: 'Where are you from? (formal)',
          working_on: true,
        },
        { foreign: 'dónde', english: 'where' },
        { foreign: '¿De dónde?', english: 'From where?' },
        { foreign: '¿De dónde eres?', english: 'Where are you from? (informal)', working_on: true },
        { foreign: 'ellos', english: 'they' },
        { foreign: '¿De dónde son ellos?', english: 'Where are they from?', working_on: true },
        { foreign: 'ellas', english: 'they (females)', working_on: true },
        {
          foreign: 'Disculpe. ¿De dónde son ellas?',
          english: 'Excuse me. Where are they from? (formal) (about a group of females)',
          working_on: true,
        },
        { foreign: '¿De dónde es?', english: 'Where is she from?', working_on: true },
      ],
      lesson4: [
        {
          foreign: 'Soy de los Estados Unidos.',
          english: 'I’m from the United States.',
        },
        { foreign: 'soy', english: '(I) am (for permanent states of being)' },
        {
          foreign: 'Usted es de los Estados Unidos.',
          english: 'You are from the United States. (formal)',
        },
        {
          foreign: 'Disculpe. ¿Es usted de los Estados Unidos?',
          english: 'Excuse me. Are you from the United States? (formal)',
        },
        { foreign: 'México', english: 'Mexico' },
        { foreign: 'Soy de México.', english: 'I am from Mexico.' },
        { foreign: 'Soy mexicano.', english: 'I’m Mexican. (male)' },
        {
          foreign: 'Usted es estadounidense.',
          english: 'You are American. (formal)',
        },
        {
          foreign: 'Eres estadounidense.',
          english: 'You are American. (informal)',
        },
        { foreign: 'Canadá', english: 'Canada' },
        { foreign: 'canadiense/es', english: 'Canadian (singular and plural)' },
        { foreign: 'Ellos son de México.', english: 'They are from Mexico.' },
        { foreign: 'Son mexicanos.', english: 'They are Mexican.' },
      ],
      lesson5: [
        { foreign: 'hablan', english: '(they) speak' },
        {
          foreign: 'Ellos no son de México y no hablan español.',
          english: 'They are not from Mexico and they don’t speak Spanish.',
        },
        { foreign: 'vivir', english: 'to live' },
        { foreign: 'vivo', english: 'I live' },
        { foreign: 'en', english: 'in' },
        { foreign: 'Vivo en México.', english: 'I live in Mexico.' },
        { foreign: 'pero', english: 'but' },
        {
          foreign: 'Soy de Canadá pero vivo en México.',
          english: 'I’m from Canada but I live in Mexico.',
        },
        {
          foreign: 'Soy canadiense pero vivo en los Estados Unidos.',
          english: 'I’m Canadian but I live in the United States.',
        },
      ],
    },
  },
};

/*
        { foreign: '', english: '' },
*/
