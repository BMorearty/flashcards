/*
  para = for (for someone), or before an infinitive
  por = because of

  además: besides
  por cierto: by the way
  en la actualidad: currently
 */

export const allPhrases = {
  grammar: {
    chapter1: {
      name: 'Guide to pronunciation',
      lesson1: [
        { foreign: 'la llave', english: 'the key' },
        { foreign: 'la yegua', english: 'the mare', hard: true },
        { foreign: 'la gallina', english: 'the hen', hard: true },
        { foreign: 'el yoga', english: 'the yoga' },
        { foreign: 'la lluvia', english: 'the rain' },
        { foreign: 'la galleta', english: 'the cookie' },
        { foreign: 'el yate', english: 'the yacht' },
      ],
      lesson2: [
        { foreign: 'la bañera', english: 'the bathtub', hard: true },
        { foreign: 'el vestido', english: 'the dress', hard: true },
        { foreign: 'el virus', english: 'the virus' },
        { foreign: 'la botella', english: 'the bottle' },
        { foreign: 'la bufanda', english: 'the scarf' },
        { foreign: 'la vaca', english: 'the cow', hard: true },
        { foreign: 'el/la bebé', english: 'the baby' },
      ],
      lesson3: [
        { foreign: 'la campana', english: 'the bell', hard: true },
        { foreign: 'el queso', english: 'the cheese' },
        { foreign: 'el kilo', english: 'the kilo' },
        { foreign: 'el conejo', english: 'the rabbit', hard: true },
        { foreign: 'la cuchara', english: 'the spoon' },
        { foreign: 'el kárate', english: 'the karate' },
        { foreign: 'la mantequilla', english: 'the butter', hard: true },
      ],
      lesson4: [
        { foreign: 'el zapato', english: 'the shoe' },
        { foreign: 'el cepillo', english: 'the brush', hard: true },
        { foreign: 'el semáforo', english: 'the traffic light', hard: true },
        { foreign: 'el zinc', english: 'the zinc' },
        { foreign: 'el cine', english: 'the movie theater' },
        { foreign: 'la silla', english: 'the chair', hard: true },
        { foreign: 'el zorro', english: 'the fox' },
      ],
      lesson5: [
        { foreign: 'el jabón', english: 'the soap', hard: true },
        { foreign: 'el traje', english: 'the suit', hard: true },
        { foreign: 'la gente', english: 'the people' },
        { foreign: 'el/la jirafa', english: 'the giraffe' },
        { foreign: 'el gimnasio', english: 'the gym' },
        { foreign: 'el jugo', english: 'the juice' },
      ],
      lesson6: [
        { foreign: 'el garaje', english: 'the garage', hard: true },
        { foreign: 'el guepardo', english: 'the cheetah', hard: true },
        { foreign: 'la hamburguesa', english: 'the hamburger' },
        { foreign: 'la guitarra', english: 'the guitar' },
        { foreign: 'el águila', english: 'the eagle', hard: true },
        {
          foreign: 'una gorra',
          english: 'a cap (with a visor/brim like a baseball cap)',
          hard: true,
        },
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
    chapter2: {
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
    chapter3: {
      name: 'Verb conjugations',
      lesson1: [
        // Present tense indicative
        {
          foreign:
            'estar, presente de indicativo:' +
            '| (yo) estoy' +
            '| (tú) estás' +
            '| (él, ella, usted) está' +
            '| (nosotros / nosotras) estamos' +
            '| (vosotros / vosotras) estáis' +
            '| (ellos / ellas / ustedes) están',
          english:
            'to be (PLACE: position, location, action, condition, emotion), present tense:| I am, you are, etc.',
        },
        {
          foreign:
            'ser, presente de indicativo:' +
            '| (yo) soy' +
            '| (tú) eres' +
            '| (él, ella, usted) es' +
            '| (nosotros / nosotras) somos' +
            '| (vosotros / vosotras) sóis' +
            '| (ellos / ellas / ustedes) son',
          english:
            'to be (DOCTOR: date/day, occupation, characteristic/class, time, origin, relation/religion), present tense:| I am, you are, etc.',
        },
        {
          foreign:
            'tener, presente de indicativo:' +
            '| (yo) tengo' +
            '| (tú) tienes' +
            '| (él, ella, usted) tiene' +
            '| (nosotros / nosotras) tenemos' +
            '| (vosotros / vosotras) tenéis' +
            '| (ellos / ellas / ustedes) tienen',
          english: 'to have (a belonging or sensation), present tense:| I have, you have, etc.',
        },
        {
          foreign:
            'haber, present perfect tense:' +
            '| (yo) he (infinitivo)' +
            '| (tú) has (infinitivo)' +
            '| (él, ella, usted) ha (infinitivo)' +
            '| (nosotros / nosotras) hemos (infinitivo)' +
            '| (vosotros / vosotras) habéis (infinitivo)' +
            '| (ellos / ellas / ustedes) han (infinitivo)',
          english: 'to have (done something):| I have (gone), you have (gone), etc.',
          hard: true,
        },
        {
          foreign:
            'caminar, presente de indicativo:' +
            '| (yo) camino' +
            '| (tú) caminas' +
            '| (él, ella, usted) camina' +
            '| (nosotros / nosotras) caminamos' +
            '| (vosotros / vosotras) camináis' +
            '| (ellos / ellas / ustedes) caminan (ca-MEE-nan)',
          english: 'to walk, present tense (regular -ar verb conjugation)',
        },
        {
          foreign:
            'comer, presente de indicativo:' +
            '| (yo) como' +
            '| (tú) comes' +
            '| (él, ella, usted) come' +
            '| (nosotros / nosotras) comemos' +
            '| (vosotros / vosotras) coméis' +
            '| (ellos / ellas / ustedes) comen',
          english: 'to eat, present tense (regular -er verb conjugation)',
        },
        {
          foreign:
            'partir, presente de indicativo:' +
            '| (yo) parto' +
            '| (tú) partes' +
            '| (él, ella, usted) parte' +
            '| (nosotros / nosotras) partimos' +
            '| (vosotros / vosotras) partís' +
            '| (ellos / ellas / ustedes) parten',
          english: 'to leave, present tense (regular -ir verb conjugation)',
        },
        {
          foreign:
            'decir, presente de indicativo:' +
            '| (yo) digo' +
            '| (tú) dices' +
            '| (él, ella, usted) dice' +
            '| (nosotros / nosotras) decimos' +
            '| (vosotros / vosotras) decís' +
            '| (ellos / ellas / ustedes) dicen',
          english: 'to say, present tense indicative',
        },
        {
          foreign:
            'ver, presente de indicativo:' +
            '| (yo) veo' +
            '| (tú) ves' +
            '| (él, ella, usted) ve' +
            '| (nosotros / nosotras) vemos' +
            '| (vosotros / vosotras) veis' +
            '| (ellos / ellas / ustedes) ven',
          english: 'to see, present tense indicative',
        },
        {
          foreign:
            'conocer, presente de indicativo:' +
            '| (yo) conozco' +
            '| (tú) conoces' +
            '| (él, ella, usted) conoce' +
            '| (nosotros / nosotras) conocemos' +
            '| (vosotros / vosotras) conocéis' +
            '| (ellos / ellas / ustedes) conocen',
          english: 'to know (someone), present tense indicative',
        },
        {
          foreign:
            'acabar de (ahcahBAR de), presente de indicativo:' +
            '| (yo) acabo de...' +
            '| (tú) acabas de...' +
            '| (él, ella, usted) acaba de...' +
            '| (nosotros / nosotras) acabamos de...' +
            '| (vosotros / vosotras) acabáis de...' +
            '| (ellos / ellas / ustedes) acaban de...',
          english: 'to finish--or to have just done something, present tense indicative',
        },
        {
          foreign:
            'empezar, presente de indicativo:' +
            '| (yo) empiezo' +
            '| (tú) empiezas' +
            '| (él, ella, usted) empieza' +
            '| (nosotros / nosotras) empezamos' +
            '| (vosotros / vosotras) empezáis' +
            '| (ellos / ellas / ustedes) empiezan',
          english: 'to start, present tense indicative',
        },
        {
          foreign:
            'hacer, presente de indicativo:' +
            '| (yo) hago' +
            '| (tú) haces' +
            '| (él, ella, usted) hace' +
            '| (nosotros / nosotras) hacemos' +
            '| (vosotros / vosotras) hacéis' +
            '| (ellos / ellas / ustedes) hacen',
          english: 'to do / make, present tense indicative',
        },
        {
          foreign:
            'venir, presente de indicativo:' +
            '| (yo) vengo' +
            '| (tú) vienes' +
            '| (él, ella, usted) viene' +
            '| (nosotros / nosotras) venimos' +
            '| (vosotros / vosotras) venís' +
            '| (ellos / ellas / ustedes) vienen',
          english: 'to come, present tense indicative',
        },
      ],
      lesson2: [
        // Preterite tense
        {
          foreign:
            'ser, tiempo pretérito:' +
            '| (yo) fui' +
            '| (tú) fuiste' +
            '| (él, ella, usted) fue' +
            '| (nosotros / nosotras) fuimos' +
            '| (vosotros / vosotras) fuisteis' +
            '| (ellos / ellas / ustedes) fueron',
          english:
            'to be (DOCTOR: date/day, occupation, characteristic/class, time, origin, relation/religion), preterite tense:| I was, you were, etc.',
        },
        {
          foreign:
            'ir, tiempo pretérito:' +
            '| (yo) fui' +
            '| (tú) fuiste' +
            '| (él, ella, usted) fue' +
            '| (nosotros / nosotras) fuimos' +
            '| (vosotros / vosotras) fuisteis' +
            '| (ellos / ellas / ustedes) fueron',
          english: 'to go, preterite tense: I went, you went, etc.',
        },
        {
          foreign:
            'estar, tiempo pretérito:' +
            '| (yo) estuve' +
            '| (tú) estuviste' +
            '| (él, ella, usted) estuvo' +
            '| (nosotros / nosotras) estuvimos' +
            '| (vosotros / vosotras) estuvisteis' +
            '| (ellos / ellas / ustedes) estuvieron',
          english:
            'to be (PLACE: position, location, action, condition, emotion), preterite tense:| I was, you were, etc.',
        },
        {
          foreign:
            'decir, tiempo pretérito:' +
            '| (yo) dije' +
            '| (tú) dijiste' +
            '| (él, ella, usted) dijo' +
            '| (nosotros / nosotras) dijimos' +
            '| (vosotros / vosotras) dijisteis' +
            '| (ellos / ellas / ustedes) dijeron',
          english: 'to say, preterite tense: I said, you said, etc.',
        },
      ],
    },
    chapter4: {
      name: 'Gender noun endings',
      showEnglish: false,
      lesson1: [
        {
          foreign: '-a (masc. or fem.)',
          english: 'Feminine. Ejemplo: la gata (girl cat), la manzana (apple). Excepción: el día.',
        },
        {
          foreign: '-ad, -ed, -id, -ud (masc. or fem.)',
          english:
            'Feminine. Ejemplo: la amistad (friendship), la pared (wall), la salud (health).',
        },
        {
          foreign: '-ción (masc. or fem.)',
          english: 'Feminine. Ejemplo: la canción, la emoción, la situación.',
        },
        {
          foreign: '-eza (masc. or fem.)',
          english: 'Feminine. Ejemplo: la tristeza (sadness), la cabeza (head).',
        },
        { foreign: '-is (masc. or fem.)', english: 'Feminine. Ejemplo: la crisis, la tendonitis' },
        {
          foreign: '-z (masc. or fem.)',
          english:
            'Feminine. Ejemplo: la cruz (cross), la nariz (nose). Excepción: el lápiz (pencil), el arroz (rice)',
        },
        {
          foreign: 'letras del abecedario (masc. or fem.)',
          english: 'Feminine. Ejemplo: la a, la b, la c, ...',
        },
        {
          foreign: '-o (masc. or fem.)',
          english: 'Masculine. Ejemplo: el banco. Excepción: la mano, la foto',
        },
        {
          foreign: '-ar, -er, -or (masc. or fem.)',
          english:
            'Masculine. Ejemplo: el titular (owner), el computador, el taller (workshop). Excepción: la flor (flower).',
        },
        {
          foreign: '-ma (masc. or fem.)',
          english: 'Masculine. Ejemplo: el clima (weather), el problema, el sistema.',
        },
        {
          foreign: '-y (masc. or fem.)',
          english: 'Masculine. Ejemplo: el rey (king), el buey (ox). Excepción: la ley (law).',
        },
        { foreign: '-x (masc. or fem.)', english: 'Masculine. Ejemplo: el tórax (thorax).' },
        {
          foreign: '-al (masc. or fem.)',
          english: 'Masculine. Ejemplo: el hospital, el terminal.',
        },
        {
          foreign: 'días de la semana (masc. or fem.)',
          english: 'Masculine. El lunes, el martes, el miércoles, ...',
        },
        {
          foreign: 'puntos cardinales (masc. or fem.)',
          english: 'Masculine. El norte, el sur, el este, el oeste',
        },
        {
          foreign: 'mesos (masc. or fem.)',
          english: 'Masculine. El enero, el febrero, el marzo, ...',
        },
        { foreign: 'números (masc. or fem.)', english: 'Masculine. El uno, el dos, el tres, ...' },
      ],
    },
    chapter5: {
      name: 'Gender examples',
      lesson1: [
        { foreign: 'la gata', english: 'the girl cat' },
        { foreign: 'la manzana', english: 'the apple' },
        { foreign: 'el día', english: 'the day' },
        { foreign: 'la amistad', english: 'the friendship', hard: true },
        { foreign: 'la pared', english: 'the wall' },
        { foreign: 'la salud', english: 'the health' },
        { foreign: 'la canción', english: 'the song', hard: true },
        { foreign: 'la emoción', english: 'the emotion' },
        { foreign: 'la situación', english: 'the situation' },
        { foreign: 'la crisis', english: 'the crisis' },
        { foreign: 'la tendonitis', english: 'the tendonitis' },
        { foreign: 'la cruz', english: 'the cross' },
        { foreign: 'el lápiz', english: 'the pencil' },
        { foreign: 'el arroz', english: 'the rice' },
        { foreign: 'la a', english: 'the a' },
        { foreign: 'la b', english: 'the b' },
        { foreign: 'la c', english: 'the c' },
        { foreign: 'el banco', english: 'the bank' },
        { foreign: 'la mano', english: 'the hand' },
        { foreign: 'la foto', english: 'the photo' },
        { foreign: 'el titular', english: 'the owner', hard: true },
        { foreign: 'el computador/la computadora', english: 'the computer' },
        { foreign: 'el taller', english: 'the workshop', hard: true },
        { foreign: 'la flor', english: 'the flower' },
        { foreign: 'el clima', english: 'the weather (climate)' },
        { foreign: 'el problema', english: 'the problem' },
        { foreign: 'el sistema', english: 'the system' },
        { foreign: 'el rey', english: 'the king' },
        { foreign: 'el buey', english: 'the ox', hard: true },
        { foreign: 'la ley', english: 'the law', hard: true },
        { foreign: 'el tórax', english: 'the thorax' },
        { foreign: 'el hospital', english: 'the hospital' },
        { foreign: 'el terminal', english: 'the terminal' },
        { foreign: 'el lunes', english: 'the Monday (on Monday)' },
        { foreign: 'el miércoles', english: 'the Wednesday (on Wednesday)' },
        { foreign: 'el norte', english: 'the north' },
        { foreign: 'el sur', english: 'the south' },
        { foreign: 'el este', english: 'the east', hard: true },
        { foreign: 'el oeste', english: 'the west', hard: true },
        { foreign: 'el enero', english: 'the January' },
        { foreign: 'el febrero', english: 'the February' },
        { foreign: 'el marzo', english: 'the March' },
        { foreign: 'el uno', english: 'the one' },
        { foreign: 'el dos', english: 'the (number) two' },
        { foreign: 'el tres', english: 'the (number) three' },
        { foreign: 'la mesa', english: 'the table' },
        { foreign: 'el sofá', english: 'the sofa' },
        { foreign: 'el planeta', english: 'the planet' },
        { foreign: 'la calle', english: 'the street', hard: true },
        { foreign: 'el campo', english: 'the field', hard: true },
        { foreign: 'el/la policia', english: 'the police officer' },
        { foreign: 'el ordenador', english: 'the computer (like the French word)', hard: true },
        { foreign: 'la tristeza', english: 'the sadness' },
        { foreign: 'la cabeza', english: 'the head' },
      ],
    },
    chapter6: {
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
        { foreign: 'Hoy está nevando mucho.', english: 'Today it is snowing a lot.', hard: true },
        { foreign: 'Hoy está lloviendo mucho.', english: 'Today it is raining a lot.', hard: true },
        { foreign: 'Él está cocinando.', english: 'He is cooking.' },
        { foreign: 'Estoy hablando.', english: 'I am speaking.' },
        { foreign: 'Estoy pensando.', english: 'I am thinking.' },
        { foreign: 'Estoy almorzando.', english: 'I am having lunch.', hard: true },
        { foreign: 'Estoy cenando.', english: 'I am having dinner.', hard: true },
        { foreign: 'Estoy bañando a mi perro.', english: 'I am bathing my dog.' },
        { foreign: 'Estoy bañandome.', english: 'I am taking a bath.' },
        {
          foreign: 'Estoy acostando al niño.',
          english: 'I am putting the boy to bed.',
          hard: true,
        },
        { foreign: 'Estoy acostandome.', english: 'I am going to bed.', hard: true },
        { foreign: 'Estoy bebiendo.', english: 'I am drinking.' },
        { foreign: 'Estoy conociendo a un chico.', english: 'I’m getting to know a guy.' },
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
        { foreign: 'El niño está diciendo la verdad.', english: 'The boy is telling the truth.' },
        { foreign: 'La chica está leyendo.', english: 'The girl is reading.' },
        { foreign: 'El ladrón está huyendo.', english: 'The thief is fleeing.', hard: true },
        {
          foreign: 'Están construyendo un edificio.',
          english: 'They are building a building.',
          hard: true,
        },
        { foreign: 'Él está muriendo.', english: 'He is dying.' },
        { foreign: 'El político está mintiendo.', english: 'The politician is lying.', hard: true },
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
        { foreign: 'Estoy pidiendo una bebida.', english: 'I’m asking for a drink.', hard: true },
        { foreign: 'Estoy repitiendo la pregunta.', english: 'I am repeating the question.' },
        { foreign: 'Estoy sonriendo.', english: 'I’m smiling.', hard: true },
      ],
    },
    chapter7: {
      name: 'Almost, already, still, not yet, not anymore, etc.',
      lesson1: [
        { foreign: 'casi', english: 'almost', hard: true },
        { foreign: 'ya', english: 'already', hard: true },
        { foreign: 'todavía no / no todavía', english: 'not yet', hard: true },
        { foreign: 'todavía', english: 'still (still happening)', hard: true },
        { foreign: 'ya no', english: 'not anymore', hard: true },
        {
          foreign: 'Nosotros estamos casi en casa.',
          english: 'We are almost home. (masculine, with pronoun)',
          hard: true,
        },
        {
          foreign: 'Nosotros ya estamos en casa.',
          english: 'We are already home. (masculine, with pronoun)',
          hard: true,
        },
        { foreign: 'Ya no estamos en casa.', english: 'We are not home anymore.', hard: true },
        { foreign: 'Todavía no estamos en casa.', english: 'We are not home yet.', hard: true },
        { foreign: 'Todavía estamos en casa.', english: 'We are still home.', hard: true },
      ],
    },
    chapter8: {
      name: 'tener y haber',
      lesson1: [
        { foreign: 'Brian tiene un hermano gemelo.', english: 'Brian has a twin brother.' },
        { foreign: 'Yo tengo un carro.', english: 'I have a car.' },
        { foreign: 'El niño tiene un juguete.', english: 'The child has a toy.' },
        { foreign: 'La niña tiene un gato.', english: 'The girl has a cat.' },
        { foreign: 'El profesor tiene una casa.', english: 'The professor has a house.' },
        { foreign: 'Yo tengo un computador.', english: 'I have a computer.' },
        { foreign: 'Tengo sed.', english: 'I am thirsty.', hard: true },
        { foreign: 'Tengo mucha hambre.', english: 'I am very hungry.' },
        { foreign: 'Tengo sueño.', english: 'I am sleepy.' },
        { foreign: 'Tengo frío.', english: 'I am cold.' },
        { foreign: 'Tengo un resfriado / resfrío.', english: 'I have a cold.', hard: true },
        { foreign: 'Yo tengo mucha suerte.', english: 'I am very lucky.' },
        { foreign: 'Ella tiene pereza.', english: 'She is lazy.', hard: true },
        { foreign: 'El niño tiene dos años.', english: 'The child is two years old.' },
        {
          foreign: 'El hombre tiene prisa. Está atrasado.',
          english: 'The man is in a hurry. He is late.',
          hard: true,
        },
        {
          foreign: 'El niño tiene miedo de los monstruos.',
          english: 'The boy is afraid of monsters.',
        },
        {
          foreign: 'El bebé tiene ganas de llorar.',
          english: 'The baby feels like crying.',
          hard: true,
        },
        {
          foreign: 'Hay que tener cuidado. Hay hielo en la calle.',
          english: 'You have to be careful. There’s ice on the street.',
          hard: true,
        },
        { foreign: 'Tiene que ir.', english: 'He has to go.', hard: true },
        { foreign: 'Yo he hecho mi trabajo.', english: 'I have done my job.' },
        { foreign: 'Ella ha ido al gimnasio.', english: 'She has gone to the gym.', hard: true },
      ],
    },
    chapter9: {
      name: 'Verbos afectivos (verbs that require an indirect object pronouns)',
      lesson1: [
        {
          foreign: 'Él me cae bien.',
          english: 'I like him. (respect, admire, get along with, platonically)',
          hard: true,
        },
        {
          foreign: 'Él me cae mal.',
          english:
            'I don’t like him. (don’t respect, don’t admire, don’t get along with, platonically)',
          hard: true,
        },
        {
          foreign: '(A ti) la camisa te queda bien.',
          english: 'The shirt looks good on you / suits you. (informal)',
          hard: true,
        },
        {
          foreign: 'A mí me gusta la pizza y los espaguetis también.',
          english: 'I like pizza and spaghetti too.',
        },
        {
          foreign: 'A ti te encanta dormir hasta tarde.',
          english: 'You love to sleep in late. (informal)',
          hard: true,
        },
        {
          foreign: 'A ella le interesa aprender español.',
          english: 'She is interested in learning Spanish.',
        },
        {
          foreign: 'A nosotros nos importan los animales.',
          english: 'Animals matter to us. / We care about animals.',
        },
        {
          foreign: 'A mí me parece una buena idea.',
          english: 'I think it’s a good idea.',
          hard: true,
        },
        {
          foreign: 'A ellos les gusta el café con leche.',
          english: 'They like coffee with milk.',
          hard: true,
        },
        {
          foreign: 'Tú comes manzanas, te gustan.',
          english: 'You eat apples, you like them. (informal)',
        },
        {
          foreign: 'Él ve mucha televisión. Le divierte.',
          english: 'He watches a lot of television. He enjoys it.',
          hard: true,
        },
        {
          foreign: 'Ella trabaja mucho. Le gusta su trabajo.',
          english: 'She works a lot. She likes her job.',
        },
        {
          foreign: 'A ella le disgusta el mal tiempo.',
          english: 'She dislikes bad weather.',
          hard: true,
        },
        {
          foreign: 'A mi hermana y a mí nos impresiona esa ciudad.',
          english: 'My sister and I are impressed by that city.',
          hard: true,
        },
        {
          foreign: 'A ellos no les molesta la música a alto volumen.',
          english: 'They don’t mind loud music.',
          hard: true,
        },
      ],
      lesson2: [
        {
          foreign: '¿Te duele la cabeza?',
          english: 'Do you have a headache? (informal)',
          hard: true,
        },
        {
          foreign: 'A ella le aburre la lluvia.',
          english: 'She is bored by the rain.',
          hard: true,
        },
        {
          foreign: '¿Te importa el español?',
          english: 'Do you care about Spanish? (informal)',
          hard: true,
        },
        {
          foreign: 'Nos impresionan las montañas Rocallosas.',
          english: 'We are impressed by the Rocky Mountains.',
          hard: true,
        },
        {
          foreign: 'No le divierten las matemáticas.',
          english: 'He doesn’t enjoy math.',
          hard: true,
        },
        {
          foreign: 'Les divierte ver televisión.',
          english: 'They enjoy watching television.',
          hard: true,
        },
        {
          foreign: 'Me impresiona la torre Eiffel.',
          english: 'I’m impressed by the Eiffel Tower.',
        },
        {
          foreign: 'Al niño le encanta la lluvia, al perro no le gusta para nada.',
          english: 'The boy loves the rain, the dog doesn’t like it at all.',
        },
        { foreign: 'A ella le gusta bastante pintar.', english: 'She quite likes painting.' },
        {
          foreign: 'A Cristina le gusta caminar por la montaña.',
          english: 'Cristina likes to walk in the mountains.',
          hard: true,
        },
        {
          foreign: 'Señora, le importa decirme su nombre?',
          english: 'Madam, would you mind telling me your name? (formal)',
          hard: true,
        },
        {
          foreign: 'No me asustan las tormentas. Me parecen muy bonitas.',
          english: 'I’m not afraid of storms. I think they’re very beautiful.',
          hard: true,
        },
        {
          foreign: 'Qué les pasa a los niños?| Están nerviosos porque tienen un examen.',
          english: 'What’s wrong with the children?| They’re nervous because they have an exam.',
          hard: true,
        },
      ],
    },
    chapter10: {
      name: 'Determinantes y pronombres demostrativos',
      lesson1: [
        { foreign: 'aquí', english: 'here' },
        { foreign: 'ahí', english: 'there' },
        { foreign: 'allá', english: 'over there' },
        { foreign: 'acá', english: 'here (España)' },
        { foreign: 'allí', english: 'over there (España)' },
        {
          foreign: 'cerca:| esta| estas| este| estos| esto',
          english: 'near: this / these (fem, masc, neutral)',
        },
        {
          foreign: 'distancia media:| esa| esas| ese| esos| eso',
          english: 'medium distance: that / those (fem, masc, neutral)',
        },
        {
          foreign: 'lejos:| aquella| aquellas| aquel| aquellos| aquello',
          english: 'far away: that / those (fem, masc, neutral)',
        },
      ],
      lesson2: [
        { foreign: 'Esta jirafa come.', english: 'This giraffe eats.' },
        { foreign: 'Esa jirafa come.', english: 'That giraffe eats.' },
        { foreign: 'Aquella jirafa come.', english: 'That giraffe over there eats.' },
        { foreign: 'Estas fresas son rojas.', english: 'These strawberries are red.' },
        { foreign: 'Esas fresas son rojas.', english: 'Those strawberries are red.' },
        {
          foreign: 'Aquellas fresas son rojas.',
          english: 'Those strawberries over there are red.',
        },
        { foreign: 'Este carro es mío.', english: 'This car is mine.' },
        { foreign: 'Ese carro es mío.', english: 'That car is mine.' },
        { foreign: 'Aquel carro es mío.', english: 'That car over there is mine.' },
        { foreign: 'Estos gatos juegan.', english: 'These cats play.' },
        { foreign: 'Esos gatos juegan.', english: 'Those cats play.' },
        { foreign: 'Aquellos gatos juegan.', english: 'Those cats over there play.' },
      ],
      lesson3: [
        { foreign: 'esto', english: 'this (unknown gender)' },
        { foreign: 'eso', english: 'that (unknown gender)' },
        { foreign: 'aquello', english: 'that over there (unknown gender)' },
        { foreign: '¿Qué es esto?', english: 'What is this?' },
        {
          foreign: '¿Qué es eso? Esa es una mariposa.',
          english: 'What is that? That is a butterfly.',
        },
        { foreign: 'No sé eso.', english: 'I don’t know that.' },
        { foreign: 'Esto es importante.', english: 'This is important.' },
        { foreign: '¿Qué es aquello?', english: 'What is that over there?' },
        { foreign: 'No me gusta eso.', english: 'I don’t like that.' },
        { foreign: 'Esto es lo que pienso.', english: 'This is what I think.' },
        { foreign: 'No conozco a esa niña.', english: 'I don’t know that girl.' },
        { foreign: 'Me siento muy bien acerca de eso.', english: 'I feel great about that.' },
      ],
      lesson4: [
        {
          foreign: '¿Ese de allí es tu perro?',
          english:
            'That way over there, is that your dog? (informal) (medium distance but clarify "way over there" using Spain form)',
        },
        {
          foreign: 'Aquella de allá es mi casa.',
          english: 'That one over there is my house. (far away, with "over there")',
        },
        {
          foreign: 'Esas alcachofas están muy sabrosas.',
          english: 'Those artichokes are very tasty.',
        },
        {
          foreign: 'Usa este paraguas (pahRAHguas), está lloviendo.',
          english: 'Use this umbrella, it’s raining.',
          hard: true,
        },
        {
          foreign: 'Esa del medio es mi gata.',
          english: 'That one in the middle is my (girl) cat.',
        },
      ],
    },
  },
  vocabulary: {
    chapter1: {
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
    chapter2: {
      name: 'Weather',
      lesson1: [
        { foreign: 'Está frío.', english: 'It is cold.' },
        { foreign: 'Está nublado.', english: 'It is cloudy.' },
        { foreign: 'Está seco.', english: 'It is dry.' },
        { foreign: 'Está soleado.', english: 'It is sunny.' },
        { foreign: 'Está ventoso.', english: 'It is windy.', hard: true },
        { foreign: 'Hace frío.', english: 'It is cold (noun).' },
        { foreign: 'Hace mucho frío.', english: 'It is freezing (noun).' },
        { foreign: 'Está muy frío.', english: 'It is freezing (adjective).' },
      ],
    },
    chapter3: {
      name: 'Seasons',
      lesson1: [
        { foreign: 'estación(es)', english: 'season(s)' },
        { foreign: 'invierno', english: 'winter', hard: true },
        { foreign: 'primavera', english: 'spring' },
        { foreign: 'verano', english: 'summer', hard: true },
        { foreign: 'otoño', english: 'fall / autumn' },
      ],
    },
    chapter4: {
      name: 'Nationalities and origins, places and countries, languages',
      lesson1: [
        { foreign: 'nacionalidad', english: 'nationality' },
        { foreign: 'árabe', english: 'Arab (adj.)' },
        { foreign: 'argentino / argentina', english: 'Argentinian (adj.)' },
        { foreign: 'australiano / australiana', english: 'Australian (adj.)' },
        { foreign: 'boliviano / boliviana', english: 'Bolivian (adj.)' },
        { foreign: 'brasileño / brasileña', english: 'Brazilian (adj.)' },
        { foreign: 'chileno / chilena', english: 'Chilean (adj.)', hard: true },
        { foreign: 'chino / china', english: 'Chinese (adj.)' },
        { foreign: 'colombiano / colombiana', english: 'Colombian (adj.)' },
        {
          foreign: 'costarricense (kohstahrreeSEHNseh)',
          english: 'Costa Rican (adj.)',
          hard: true,
        },
        { foreign: 'cubano / cubana', english: 'Cuban (adj.)' },
        { foreign: 'ecuatoriano / ecuatoriana', english: 'Ecuadorean (adj.)' },
        { foreign: 'salvadoreño / salvadoreña', english: 'El Salvadorian (adj.)', hard: true },
        { foreign: 'español / española', english: 'Spanish (adj.)' },
        { foreign: 'europeo / europea (ehwrohPEHoh /ehwrohPEHah)', english: 'European (adj.)' },
        { foreign: 'británico / británica', english: 'British (adj.)' },
        {
          foreign: 'guatemalteco / guatemalteca (gwahtehmahlTEHkoh / gwahtehmahlTEHkah)',
          english: 'Guatemalan (adj.)',
          hard: true,
        },
        { foreign: 'hondureño / hondureña', english: 'Honduran (adj.)' },
        { foreign: 'japonés / japonesa', english: 'Japanese (adj.)' },
        { foreign: 'nicaragüense', english: 'Nicaraguan (adj.)', hard: true },
        { foreign: 'panameño / panameña', english: 'Panamanian (adj.)', hard: true },
        {
          foreign: 'paraguayo / paraguaya (pahrahGWAHyoh / pahrahGWAHyah)',
          english: 'Paraguayan (adj.)',
        },
        { foreign: 'peruano / peruana', english: 'Peruvian (adj.)', hard: true },
        { foreign: 'portugués / portuguesa', english: 'Portuguese (adj.)' },
        { foreign: 'puertorriqueño / puertorriqueña', english: 'Puerto Rican (adj.)' },
        { foreign: 'dominicano / dominicana', english: 'Dominican (adj.)' },
        { foreign: 'ruso / rusa', english: 'Russian (adj.)' },
        { foreign: 'turco / turca', english: 'Turkish (adj.)' },
        { foreign: 'uruguayo / uruguaya', english: 'Uruguayan (adj.)' },
        { foreign: 'venezolano / venezolana', english: 'Venezuelan (adj.)' },
        { foreign: 'maltés / maltesa', english: 'Maltese (adj.)' },
        { foreign: 'irlandés / irlandesa', english: 'Irish (adj.)', hard: true },
        { foreign: 'alemán / alemana', english: 'German (adj.)' },
        { foreign: 'francés / francesa', english: 'French (adj.)' },
      ],
      lesson2: [
        { foreign: 'país', english: 'country' },
        { foreign: 'Francia', english: 'France' },
        { foreign: 'Gran Bretaña', english: 'Great Britain' },
        { foreign: 'Inglaterra', english: 'England' },
        { foreign: 'Reino Unido', english: 'United Kingdom' },
        { foreign: 'Rusia', english: 'Russia' },
        { foreign: 'Turquía', english: 'Turkey' },
        { foreign: 'Dinamarca', english: 'Denmark' },
        { foreign: 'Groenlandia', english: 'Greenland' },
      ],
      lesson3: [
        { foreign: 'chino', english: 'Chinese (language)' },
        { foreign: 'criollo', english: 'creole (language)' },
        { foreign: 'holandés', english: 'Dutch (language)' },
        { foreign: 'idioma', english: 'language' },
        { foreign: 'japonés', english: 'Japanese (language)' },
        { foreign: 'lengua originaria', english: 'indigenous language' },
        { foreign: 'portugués', english: 'Portuguese (language)' },
        { foreign: 'ruso', english: 'Russian (language)' },
        { foreign: 'turco', english: 'Turkish (language)' },
      ],
    },
    chapter5: {
      name: 'Months',
      lesson1: [
        { foreign: 'enero', english: 'January' },
        { foreign: 'febrero', english: 'February' },
        { foreign: 'marzo', english: 'March' },
        { foreign: 'abril', english: 'April' },
        { foreign: 'mayo', english: 'May' },
        { foreign: 'junio', english: 'June' },
        { foreign: 'julio', english: 'July' },
        { foreign: 'agosto', english: 'August', hard: true },
        { foreign: 'septiembre', english: 'September' },
        { foreign: 'octubre', english: 'October' },
        { foreign: 'noviembre', english: 'November' },
        { foreign: 'diciembre', english: 'December' },
      ],
    },
    chapter6: {
      name: 'Professions',
      lesson1: [
        { foreign: 'abogado / abogada', english: 'lawyer' },
        { foreign: 'actor / actriz', english: 'actor / actress' },
        { foreign: 'arquitecto / arquitecta', english: 'architect' },
        { foreign: 'un artista / una artista', english: 'an artist' },
        { foreign: 'autor / autora', english: 'author' },
        { foreign: 'un cantante / una cantante', english: 'a singer' },
        { foreign: 'un / una chef (pronounced like Chef Chu)', english: 'a chef' },
        { foreign: 'científico / científica', english: 'scientist' },
        { foreign: 'conductor / conductora', english: 'driver' },
        { foreign: 'director / directora', english: 'director' },
        { foreign: 'doctor / doctora', english: 'doctor' },
        { foreign: 'ejecutivo de negocios / ejecutiva de negocios', english: 'business executive' },
        {
          foreign: 'empleado del gobierno / empleada del gobierno',
          english: 'government employee',
        },
        { foreign: 'empleo', english: 'job' },
        { foreign: 'escritor / escritora', english: 'writer', hard: true },
        { foreign: 'un / una especialista', english: 'a specialist' },
        { foreign: 'estudiante de primaria', english: 'elementary school student' },
        { foreign: 'estudiante de secundaria', english: 'high school student' },
        {
          foreign: 'estudiante universitario / estudiante universitaria',
          english: 'university student',
        },
        { foreign: 'gerente (heiREHNtay)', english: 'manager', hard: true },
        { foreign: 'juez / jueza', english: 'judge', hard: true },
        {
          foreign: 'maestro de primaria / maestra de primaria',
          english: 'elementary school teacher',
        },
        { foreign: 'mesero / mesera', english: 'waiter / waitress', hard: true },
        { foreign: 'ministro / ministra', english: '(religious) minister' },
        { foreign: 'músico / música', english: 'musician' },
        { foreign: 'pintor / pintora', english: 'painter' },
        { foreign: 'un poeta / una poeta', english: 'a poet' },
        { foreign: 'político / política', english: 'politician' },
        { foreign: 'profesor / profesora', english: 'professor' },
        { foreign: 'programador / programadora', english: 'computer programmer' },
        { foreign: 'sacerdote', english: 'priest', hard: true },
        { foreign: 'secretario / secretaria', english: 'secretary' },
        { foreign: 'un / una soldado', english: 'a soldier' },
        { foreign: 'trabajador / trabajadora', english: 'worker / laborer' },
        { foreign: 'vendedor / vendedora', english: 'salesperson', hard: true },
      ],
    },
    chapter7: {
      name: 'Ordinal numbers',
      lesson1: [
        {
          foreign: 'primero / primer mes / primera puerta',
          english: 'first / first month / first door',
        },
        { foreign: 'segundo / segunda', english: 'second' },
        {
          foreign: 'tercero / tercer mes / tercera puerta',
          english: 'third / third month / third door',
        },
        { foreign: 'cuarto / cuarta', english: 'fourth' },
      ],
    },
    chapter8: {
      name: 'Cardinal numbers',
      lesson1: [
        { foreign: 'uno', english: 'one' },
        { foreign: 'dos', english: 'two' },
        { foreign: 'tres', english: 'three' },
        { foreign: 'cuatro', english: 'four' },
        { foreign: 'cinco', english: 'five' },
        { foreign: 'seis', english: 'six' },
        { foreign: 'siete', english: 'seven' },
        { foreign: 'ocho', english: 'eight' },
        { foreign: 'nueve', english: 'nine' },
        { foreign: 'diez', english: 'ten' },
      ],
      lesson2: [
        { foreign: 'once', english: 'eleven' },
        { foreign: 'doce', english: 'twelve' },
        { foreign: 'trece', english: 'thirteen' },
        { foreign: 'catorce', english: 'fourteen' },
        { foreign: 'quince', english: 'fifteen' },
        { foreign: 'dieciséis', english: 'sixteen' },
        { foreign: 'diecisiete', english: 'seventeen' },
        { foreign: 'dieciocho', english: 'eighteen' },
        { foreign: 'diecinueve', english: 'nineteen' },
        { foreign: 'veinte', english: 'twenty' },
      ],
      lesson3: [
        { foreign: 'veintiuno', english: 'twenty-one' },
        { foreign: 'veintidós', english: 'twenty-two' },
        { foreign: 'veintitrés', english: 'twenty-three' },
        { foreign: 'veinticuatro', english: 'twenty-four' },
        { foreign: 'treinta', english: 'thirty' },
        { foreign: 'cuarenta', english: 'forty' },
        { foreign: 'cincuenta', english: 'fifty' },
        { foreign: 'cincuenta y uno', english: 'fifty-one' },
        { foreign: 'sesenta', english: 'sixty' },
        { foreign: 'sesenta y cinco', english: 'sixty-five' },
        { foreign: 'setenta', english: 'seventy' },
        { foreign: 'setenta y tres', english: 'seventy-three' },
      ],
    },
    chapter9: {
      name: 'Los colores',
      lesson1: [
        { foreign: 'Los tomates son rojos.', english: 'The tomatoes are red.' },
        { foreign: 'La manzana es roja.', english: 'The apple is red.' },
        { foreign: 'La sangre es roja.', english: 'Blood is red.' },
        { foreign: 'Me gusta el color rojo.', english: 'I like the color red.' },
        { foreign: 'El limón es amarillo.', english: 'The lemon is yellow.' },
        {
          foreign: 'Los taxis de Nueva York son amarillos.',
          english: 'New York taxis are yellow.',
        },
        {
          foreign: 'Las zanahorias (sahnaOReeas) son naranja.',
          english: 'Carrots are orange.',
          hard: true,
        },
        {
          foreign: 'La niña lleva un vestido naranja.',
          english: 'The girl is wearing an orange dress.',
          hard: true,
        },
        { foreign: 'Me gusta el jugo de naranja.', english: 'I like orange juice.' },
        { foreign: 'Las plantas son verdes.', english: 'The plants are green.' },
        { foreign: 'El mar y el cielo son azules.', english: 'The sea and the sky are blue.' },
        {
          foreign: 'La bandera europea es azul con estrellas amarillas.',
          english: 'The European flag is blue with yellow stars.',
        },
        { foreign: 'El chocolate es de color marrón.', english: 'Chocolate is the color brown.' },
        {
          foreign: 'El hombre lleva unos zapatos marrones.',
          english: 'The man is wearing some brown shoes.',
        },
        { foreign: 'La nieve es blanca.', english: 'Snow is white.' },
        { foreign: 'El blanco es el color de la leche.', english: 'White is the color of milk.' },
        { foreign: 'El gato es negro.', english: 'The cat is black.' },
        { foreign: 'Las cebras tienen rayas negras.', english: 'Zebras have black stripes.' },
        { foreign: 'El helado de fresa es rosa.', english: 'Strawberry ice cream is pink.' },
        {
          foreign: 'Los flamencos son pájaros rosa.',
          english: 'Flamingos are pink birds.',
          hard: true,
        },
        { foreign: 'Las uvas son moradas.', english: 'Grapes are purple.', hard: true },
        { foreign: 'La lavanda es morada.', english: 'Lavender is purple.', hard: true },
        { foreign: 'Las delfines son grises.', english: 'The (girl) dolphins are gray.' },
        {
          foreign: 'Cuando llueve el cielo está gris.',
          english: 'When it rains, the sky is gray.',
          hard: true,
        },
        { foreign: 'morado', english: 'purple' },
        { foreign: 'rosado', english: 'rosy' },
      ],
    },
    chapter10: {
      name: 'Partes del cuerpo',
      lesson1: [
        { foreign: 'la frente', english: 'the forehead' },
        { foreign: 'las cejas', english: 'the eyebrows', hard: true },
        { foreign: 'la oreja', english: 'the ear' },
        { foreign: 'el ojo', english: 'the eye' },
        { foreign: 'la mejilla', english: 'the cheek', hard: true },
        { foreign: 'la boca', english: 'the mouth' },
        { foreign: 'la nariz', english: 'the nose' },
        { foreign: 'los dientes', english: 'the teeth' },
        { foreign: 'el labio', english: 'the lip' },
        { foreign: 'la lengua', english: 'the tongue' },
        { foreign: 'la garganta', english: 'the throat' },
        { foreign: 'el pecho', english: 'the chest', hard: true },
        { foreign: 'el brazo', english: 'the arm' },
        { foreign: 'el estómago', english: 'the stomach' },
        { foreign: 'la muñeca', english: 'the wrist', hard: true },
      ],
      lesson2: [
        { foreign: 'el ombligo', english: 'the navel / belly button' },
        { foreign: 'el muslo', english: 'the thigh', hard: true },
        { foreign: 'la rodilla', english: 'the knee' },
        { foreign: 'el tobillo', english: 'the ankle', hard: true },
        { foreign: 'los dedos de los pies / del pie', english: 'the toes' },
        { foreign: 'los dedos', english: 'the fingers', hard: true },
        { foreign: 'el pie', english: 'the foot' },
        { foreign: 'el cabello / el pelo', english: 'the hair' },
        { foreign: 'el hombro', english: 'the shoulder' },
        { foreign: 'el cuello', english: 'the neck' },
        { foreign: 'el codo', english: 'the elbow' },
        { foreign: 'la espalda', english: 'the back' },
        { foreign: 'la cintura', english: 'the waist' },
        { foreign: 'el trasero', english: 'the butt', hard: true },
        { foreign: 'la pantorrilla', english: 'the calf' },
        { foreign: 'el talón', english: 'the heel' },
      ],
    },
    chapter11: {
      name: 'La ropa - clothes',
      lesson1: [
        { foreign: 'un armario', english: 'a closet' },
        { foreign: 'la ropa', english: 'the clothes' },
        { foreign: 'los accesorios', english: 'the accessories' },
        { foreign: 'Llevo unos pantalones cortos.', english: 'I am wearing shorts.', hard: true },
        { foreign: 'Las camisetas son de algodón.', english: 'The T-shirts are made of cotton.' },
        { foreign: 'corbata', english: 'tie (necktie)' },
        {
          foreign: 'Los hombres usan corbata en la oficina.',
          english: 'Men wear ties in the office.',
          hard: true,
        },
        {
          foreign: 'Las corbatas son de colores variados.',
          english: 'The ties are of various colors.',
        },
        {
          foreign: 'Los suéteres están en descuento después de Navidad.',
          english: 'Sweaters are on sale after Christmas.',
          hard: true,
        },
        {
          foreign: 'Los guantes no están en oferta.',
          english: 'The gloves are not on sale.',
          hard: true,
        },
        {
          foreign: 'un gorro',
          english: 'a beanie / soft, brimless, often knitted cap',
          hard: true,
        },
        { foreign: 'sombrero', english: 'hat' },
        {
          foreign: 'Hay un conejo dentro del sombrero.',
          english: 'There is a rabbit inside the hat.',
        },
        {
          foreign: 'El mago saca un conejo del sombrero.',
          english: 'The magician pulls a rabbit out of the hat.',
        },
        {
          foreign: 'El vestido es fucsia y tiene un cinturón turquesa.',
          english: 'The dress is fuchsia and has a turquoise belt.',
        },
        { foreign: 'falda', english: 'skirt', hard: true },
      ],
      lesson2: [
        { foreign: 'Los calcetines calientan los pies.', english: 'Socks warm the feet.' },
        { foreign: 'La niña se pone los calcetines.', english: 'The girl puts on her socks.' },
        {
          foreign: 'Está lloviendo, uso mis botas de lluvia.',
          english: 'It’s raining; I’m wearing my rain boots.',
          hard: true,
        },
        { foreign: 'botas de goma', english: 'rubber boots' },
        { foreign: 'botas', english: 'boots' },
        {
          foreign: 'No encuentro mis zapatos favoritos.',
          english: 'I can’t find my favorite shoes.',
        },
        { foreign: 'el traje de baño / el bañador', english: 'the swimsuit' },
        {
          foreign: 'Los lentes de sol protegen los ojos de los rayos ultravioleta.',
          english: 'Sunglasses protect the eyes from ultraviolet rays.',
        },
        {
          foreign: 'Las botas de invierno no se llevan en verano.',
          english: 'Winter boots are not worn in the summer.',
        },
        {
          foreign: 'El cinturón es de cuero marrón.',
          english: 'The belt is made of brown leather.',
        },
        {
          foreign: 'Él lleva traje para la oficina.',
          english: 'He wears a suit to the office.',
          hard: true,
        },
        { foreign: 'El bolso es beige.', english: 'The bag is beige.' },
        { foreign: 'el bolso', english: 'the purse / handbag' },
        { foreign: 'la bolsa', english: 'the bag / sack (including luggage bag)', hard: true },
        {
          foreign: 'El cinturón y el bolso no combinan.',
          english: 'The belt and the bag don’t match.',
        },
        { foreign: 'una cartera', english: 'a purse / wallet', hard: true },
        { foreign: 'una billetera', english: 'a wallet' },
      ],
      lesson3: [
        { foreign: 'abrigo', english: 'coat', hard: true },
        { foreign: 'un pijama (j sounds like y)', english: 'a pair of pajamas' },
        { foreign: 'chaleco', english: 'vest' },
        { foreign: 'mochila', english: 'backpack', hard: true },
        { foreign: 'las bragas', english: 'the panties' },
        { foreign: 'sujetador', english: 'bra', hard: true },
        { foreign: 'un bastón', english: 'a cane' },
        {
          foreign:
            'Lleva puestos unos vaqueros azules.|' +
            '(lleva: carries or wears, lleva puestos == wears; |' +
            'puestos must agree with gender and plurality)',
          english: 'He is wearing blue jeans.',
          hard: true,
        },
        { foreign: 'blusa', english: 'blouse' },
      ],
    },
    chapter12: {
      name: 'Furnishings',
      lesson1: [
        { foreign: 'la alfombra', english: 'the rug', hard: true },
        { foreign: 'los cojines', english: 'the cushions' },
        { foreign: 'los jarrones', english: 'the vases', hard: true },
        { foreign: 'la cortina', english: 'the curtain' },
        { foreign: 'el adorno', english: 'the decoration / ornament' },
        { foreign: 'el techo', english: 'the ceiling / roof' },
        { foreign: 'la persiana', english: 'the blind (window covering)' },
        { foreign: 'la estantería', english: 'the bookshelf', hard: true },
        { foreign: 'la chimenea', english: 'the fireplace' },
        { foreign: 'la ventana panorámica', english: 'the panoramic window' },
        { foreign: 'el escritorio', english: 'the desk' },
        { foreign: 'el portalápiz', english: 'the pencil holder', hard: true },
      ],
    },
  },
  conversational: {
    chapter1: {
      name: 'Small talk',
      lesson1: [
        { foreign: 'Absolutamente nada.', english: 'Nothing at all.' },
        { foreign: 'Bienvenido.', english: 'Welcome. (to my humble abode) (masc. singular)' },
        { foreign: '¡Claro!', english: 'Of course! / Sure! / You’re welcome!' },
        { foreign: 'Lo siento.', english: 'I’m sorry.' },
        { foreign: 'No mucho.', english: 'Not much.' },
        { foreign: '¡Perdón!', english: 'Sorry! / Excuse me!' },
        { foreign: '¿Perdón?', english: 'Pardon?' },
        { foreign: 'Por supuesto.', english: 'Of course.', hard: true },
        { foreign: 'Un poquito.', english: 'A little bit.' },
        { foreign: 'además', english: 'besides', hard: true, showEnglish: 'random' },
        { foreign: 'entender', english: 'understand' },
        { foreign: 'escribir', english: 'to write' },
        { foreign: 'escuchar', english: 'to hear / to listen to' },
        { foreign: 'leer', english: 'to read' },
        { foreign: 'Buena suerte.', english: 'Good luck.' },
      ],
    },
    chapter2: {
      name: 'Idioms',
      lesson1: [
        {
          foreign: 'Este lápiz cuesta un ojo de la cara.',
          english: 'This pencil costs an arm and a leg.',
        },
        {
          foreign: '... no está de más.',
          english: 'It wouldn’t hurt to ...',
          showEnglish: 'random',
          hard: true,
        },
        {
          foreign: 'Siempre digo que poner una alarma no está de más.',
          english: 'I always say that it can’t hurt to set an alarm.',
        },
        { foreign: 'un hueso duro de roer', english: 'a tough nut to crack', hard: true },
      ],
    },
    chapter3: {
      name: 'Introductions',
      lesson1: [
        { foreign: 'enfermo', english: 'sick' },
        { foreign: 'finalmente', english: 'finally' },
        { foreign: 'ingeniero / ingeniera', english: 'engineer' },
        { foreign: 'voy a', english: 'I am going to' },
        {
          foreign: '¿Me permite presentarle a...?',
          english: 'May I introduce you to...? (formal)',
        },
        { foreign: 'Mucho gusto.', english: 'Nice to meet you. (formal or informal)' },
        { foreign: 'casado / casada', english: 'married', hard: true },
        { foreign: 'un colega / una colega', english: 'a colleague' },
        {
          foreign: 'compañero / compañera',
          english: 'partner / companion / classmate / coworker / colleague',
        },
        { foreign: 'un conocido / una conocida', english: 'an acquaintance' },
        { foreign: 'hija', english: 'daughter' },
        { foreign: 'hijo', english: 'son' },
        { foreign: 'madre', english: 'mother' },
        { foreign: 'padre', english: 'father' },
        { foreign: 'Don', english: 'Sir (not Señor)' },
        { foreign: 'Doña', english: 'Madam (not Señora)' },
        { foreign: 'presentar', english: 'to introduce' },
        { foreign: 'primo / prima', english: 'cousin' },
        { foreign: 'soltero / soltera', english: 'bachelor / single woman' },
        { foreign: 'suegro / suegra', english: 'father-in-law / mother-in-law', hard: true },
        { foreign: 'cuñado', english: 'brother-in-law', hard: true },
        { foreign: 'cuñada', english: 'sister-in-law' },
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
        {
          foreign: '¿Qué tal estás?',
          english: 'How are you? (informal) (how’s it going, are you?)',
          hard: true,
        },
        { foreign: 'muy', english: 'very' },
        { foreign: 'Muy bien.', english: 'Very well.' },
        { foreign: 'No muy bien.', english: 'Not very well.' },
        { foreign: 'Más o menos.', english: 'So-so.', showEnglish: 'random' },
        { foreign: 'Está aburrido.', english: 'He’s bored.' },
        { foreign: 'Es aburrido.', english: 'He’s boring.' },
        { foreign: 'contento', english: 'glad' },
        { foreign: 'enojado', english: 'angry', hard: true },
        { foreign: 'estresado', english: 'stressed' },
        { foreign: 'nervioso', english: 'nervous' },
        { foreign: 'ocupado', english: 'busy' },
        { foreign: 'preocupado', english: 'worried' },
        { foreign: 'relajado', english: 'relaxed' },
        { foreign: '¿Y tú?', english: 'And you? (informal)' },
        {
          foreign: 'Encantado de conocerlo.',
          english: 'Pleased to meet you. (to a male) (formal)',
          hard: true,
        },
        { foreign: 'Igual.', english: 'Likewise. (short version)' },
        { foreign: 'Muy amable.', english: 'That’s very kind of you.', hard: true },
        { foreign: 'Muchas gracias.', english: 'Thank you very much.' },
        { foreign: 'Con gusto.', english: 'You’re welcome. (With pleasure.)' },
        { foreign: '¡Chao!', english: 'Bye!' },
        { foreign: '¡Cuídate!', english: 'Take care! (informal)', hard: true },
        { foreign: '¡Cuídense!', english: 'Take care! (to a group)', hard: true },
        {
          foreign: 'Nos vemos más tarde.',
          english: 'See you later.',
          hard: true, // because tarde, not tardes
        },
        {
          foreign: '¡Que te vaya bien!',
          english: 'May it go well with you! / Have a good one! (informal)',
          hard: true,
        },
        { foreign: 'Nos vemos pronto.', english: 'See you soon.' },
        { foreign: 'Nos vemos mañana.', english: 'See you tomorrow.' },
      ],
    },
    chapter4: {
      name: 'Descripción de personas',
      lesson1: [
        { foreign: 'ser blanco / blanca', english: 'to be white (person)' },
        { foreign: 'ser moreno / morena', english: 'to be black or brown-skinned (person)' },
        { foreign: 'ser rubio / rubia', english: 'to be blond / blonde' },
        { foreign: 'ser pelirrojo / pelirroja', english: 'to be a redhead', hard: true },
        { foreign: 'ser joven', english: 'to be young' },
        { foreign: 'ser mayor', english: 'to be old' },
        { foreign: 'ser gordo / gorda', english: 'to be fat' },
        { foreign: 'ser gordito / gordita', english: 'to be chubby' },
        { foreign: 'ser delgado / delgada', english: 'to be thin' },
        { foreign: 'ser alto / alta', english: 'to be tall' },
        { foreign: 'ser bajo / baja', english: 'to be short (a person)' },
        { foreign: 'ser calvo / calva', english: 'to be bald' },
      ],
      lesson2: [
        { foreign: 'tener los ojos azules', english: 'to be blue-eyed' },
        { foreign: 'tener los ojos verdes', english: 'to be green-eyed' },
        { foreign: 'tener los ojos marrones', english: 'to be brown-eyed' },
        { foreign: 'tener los ojos negros', english: 'to be black-eyed' },
        { foreign: 'tener pecas', english: 'to have freckles' },
        { foreign: 'tener un lunar', english: 'to have a mole' },
        { foreign: 'tener los labios pintados', english: 'to have lipstick on' },
        { foreign: 'tener los labios gruesos', english: 'to have thick lips', hard: true },
        { foreign: 'tener los labios finos', english: 'to have thin lips' },
        { foreign: 'tener las orejas grandes', english: 'to have big ears' },
        { foreign: 'tener las orejas pequeñas', english: 'to have small ears' },
        { foreign: 'tener el cabello corto', english: 'to have short hair' },
        { foreign: 'tener el cabello largo', english: 'to have long hair' },
        { foreign: 'tener el cabello negro', english: 'to have black hair' },
        { foreign: 'tener el cabello castaño', english: 'to have brown hair' },
        { foreign: 'tener el cabello rubio', english: 'to have blond hair' },
        { foreign: 'tener el cabello rojo', english: 'to have red hair' },
        { foreign: 'tener el cabello canoso', english: 'to have gray hair', hard: true },
        { foreign: 'tener el cabello rizado', english: 'to have curly hair', hard: true },
        { foreign: 'tener el cabello ondulado', english: 'to have wavy hair' },
        { foreign: 'tener el cabello liso', english: 'to have straight hair' },
        { foreign: 'tener el cabello crespo', english: 'to have coily / frizzy hair' },
      ],
      lesson3: [
        { foreign: 'tener/usar/llevar barba', english: 'to have a beard' },
        { foreign: 'tener/usar/llevar bigotes', english: 'to have a mustache' },
        { foreign: 'tener/usar/llevar lentes/gafas', english: 'to wear glasses' },
        { foreign: 'tener/usar/llevar moño', english: 'to wear a bun' },
        { foreign: 'tener/usar/llevar cola de caballo / coleta', english: 'to wear a ponytail' },
        { foreign: 'tener/usar/llevar crineja/trenza', english: 'to have braids', hard: true },
      ],
      lesson4: [
        { foreign: 'anciano / anciana', english: 'old man / woman' },
        { foreign: 'viejito / viejita', english: 'not offensive little old man / little old lady' },
        { foreign: 'cana / canas', english: 'gray hair (sing. and plural)' },
        { foreign: 'arrugas', english: 'wrinkles', hard: true },
        { foreign: 'Es de estatura promedio.', english: 'He is of average height.', hard: true },
        {
          foreign: 'Mi amigo Jake tiene rasgos asiáticos.',
          english: 'My friend Jake has Asian features.',
        },
        { foreign: '¿Cuál es su raza?', english: 'Whis is his race?' },
      ],
    },
    chapter5: {
      name: 'Emociones y sensaciones: sentirse y estar',
      lesson1: [
        {
          foreign:
            '(yo) me' +
            '| (tú) te' +
            '| (él, ella, usted) se' +
            '| (nosotros / nosotras) nos' +
            '| (vosotros / vosotras) os' +
            '| (ellos / ellas / ustedes) se',
          english: 'reflexive pronouns',
        },
        { foreign: 'me siento / estoy asustado', english: 'I’m scared (male)' },
        { foreign: 'me siento / estoy decepcionado', english: 'I’m upset / disappointed (male)' },
        { foreign: 'me siento / estoy emocionado', english: 'I’m excited (male)' },
        { foreign: 'me siento / estoy enamorado', english: 'I’m in love (male)' },
        { foreign: 'me siento / estoy enfadado', english: 'I’m angry / annoyed (male)' },
        { foreign: 'me siento / estoy enfermo', english: 'I feel sick (male)' },
        { foreign: 'me siento / estoy sorprendido', english: 'I’m surprised (male)' },
        { foreign: 'me siento / estoy triste', english: 'I’m sad' },
      ],
      lesson2: [
        // Estar o sentirse + (modifier) + emotión
        {
          foreign: 'nada (when describing how much you feel an emotion)',
          english: 'No + estar or sentirse + “at all” + emotion',
        },
        {
          foreign: 'para nada',
          english: 'No + estar or sentirse + “at all” + emotion / emotion + “at all”',
        },
        {
          foreign: 'ni un poco',
          english: 'No + estar or sentirse + “not even a little” + emotion',
        },
        {
          foreign: 'un poco (when describing how much you feel an emotion)',
          english: 'estar or sentirse + “a little” + emotion',
        },
        {
          foreign: 'bastante (when describing an emotion)',
          english: 'estar or sentirse + “quite” + emotion',
        },
        { foreign: 'muy + emoción', english: 'estar or sentirse + “very” + emotion' },
      ],
      lesson3: [
        {
          foreign: 'No me siento ni un poco cansado.',
          english: 'I don’t feel even a little bit tired. (male)',
        },
        { foreign: 'Me siento bastante aburrido.', english: 'I feel quite bored. (male)' },
        {
          foreign: 'Me siento muy asustado porque veo una araña.',
          english: 'I feel very scared because I see a spider. (male)',
        },
        { foreign: 'Me siento un poco enamorado.', english: 'I feel a little in love. (male)' },
        {
          foreign: 'Bruno se siente triste porque nadie quiere jugar con él.',
          english: 'Bruno feels sad because no one wants to play with him.',
        },
        {
          foreign: 'Ellos se sienten decepcionados porque no están jugando fútbol hoy.',
          english: 'They feel disappointed because they are not playing soccer today. (males)',
          hard: true,
        },
        {
          foreign: 'El aire acondicionado está encendido y siente frío.',
          english: 'The air conditioning is on and she feels cold.',
          workingOn: true,
        },
      ],
      lesson4: [
        {
          foreign: 'Se siente como que va a llover.',
          english: 'It feels like it’s going to rain.',
          workingOn: true,
        },
        {
          foreign: 'Cuando está nublado se siente sombrio.',
          english: 'When it is cloudy, it feels gloomy.',
        },
      ],
    },
    chapter6: {
      name: 'Emociones y sensaciones: sentir y tener',
      lesson1: [
        // sentirse o tener + (modifier) + sensación
        { foreign: 'nada de', english: 'No + sentir o tener + “any” + sensation' },
        { foreign: 'un poco de', english: 'Sentir o tener + “a little” + sensation' },
        {
          foreign: 'bastante (when describing a sensation)',
          english: 'Sentir o tener + “quite” + sensation',
        },
        { foreign: 'mucho/mucha', english: 'Sentir o tener + “very” + sensation' },
      ],
      lesson2: [
        {
          foreign: 'Tengo un poco de sueño, estoy cansada.',
          english: 'I’m a little sleepy; I’m tired. (feminine)',
          hard: true,
        },
        {
          foreign: 'No siento nada de hambre, acabo de comer.',
          english: 'I don’t feel hungry at all; I just ate.',
          workingOn: true,
        },
        { foreign: 'No tengo nada de sed.', english: 'I’m not thirsty at all.' },
        {
          foreign: 'Siento un poco de hambre, porque tengo solo una manzana.',
          english: 'I feel a little hungry, because I only have one apple.',
        },
        {
          foreign: 'Siento mucho sueño.',
          english: 'I feel very sleepy.',
          hard: true,
          workingOn: true,
        },
        { foreign: 'Siento bastante frío.', english: 'I feel quite cold.' },
      ],
    },
  },
  random: {
    chapter1: {
      name: 'Random vocab, Nov 2025-Feb 2026',
      lesson1: [
        { foreign: 'largo', english: 'long' },
        { foreign: 'Tenga cuidado.', english: 'Be careful. (formal)' },
        { foreign: 'tiempo', english: 'weather (right now)' },
        { foreign: '¿Qué significa esa palabra?', english: 'What does that word mean?' },
        { foreign: 'Suena bien.', english: 'Sounds good.' },
        { foreign: 'sin embargo', english: 'however', hard: true },
        { foreign: 'ambos / ambas', english: 'both', hard: true },
        {
          foreign: 'entonces',
          english: 'so / then (like French alors but more like "then")',
          hard: true,
        },
        { foreign: 'estadounidense/es', english: 'American (singular and plural)' },
        { foreign: 'hay', english: 'there is/there are' },
        { foreign: 'Estoy retirado/a / jubilado/a.', english: 'I’m retired.', hard: true },
      ],
      lesson2: [
        { foreign: 'ayer', english: 'yesterday' },
        { foreign: '¿Por qué?', english: 'Why?' },
        { foreign: 'porque', english: 'because' },
        { foreign: 'cuántos/cuántas', english: 'how many' },
        { foreign: 'una hora', english: 'an hour' },
        { foreign: 'sueño', english: 'sleep (n.)' },
        { foreign: 'divertido', english: 'fun (adj.)' },
        { foreign: 'más', english: 'more' },
      ],
      lesson3: [
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
          foreign: 'Los niños son felices. (Use ser or estar with feliz)',
          english: 'The children are happy.',
        },
        { foreign: 'travieso', english: 'mischievous', hard: true },
        { foreign: 'avergonzado', english: 'ashamed', hard: true },
        { foreign: 'Eso es verdad.', english: 'That’s true.' },
        { foreign: 'Eso es falso.', english: 'That’s false.' },
      ],
      lesson4: [
        { foreign: 'ahora', english: 'now' },
        { foreign: 'así', english: 'like that / like this', hard: true },
        { foreign: 'milagro', english: 'miracle' },
        {
          foreign: 'mayor',
          english: 'senior / elderly, adj. (polite way to refer to an old person)',
        },
        { foreign: 'después de la escuela', english: 'after school' },
        {
          foreign: 'ese (m)| esos (m pl)| esa (f)| esas (f pl)| eso (neutral)',
          english: 'that (one or thing) (demonstrative pronoun) (all forms)',
        },
        { foreign: 'mismo / misma', english: 'same', hard: true },
        { foreign: 'ahorita', english: 'right now' },
      ],
      lesson5: [
        { foreign: 'afuera', english: 'outside', hard: true },
        { foreign: 'adentro', english: 'inside', hard: true },
        { foreign: 'juntos', english: 'together' },
        { foreign: 'novios', english: 'boyfriend and girlfriend / a couple' },
        { foreign: 'novio', english: 'boyfriend' },
        { foreign: 'novia', english: 'girlfriend' },
        { foreign: '¿Tienes novio?', english: 'Do you have a boyfriend? (informal)' },
        { foreign: 'mensajes de audio', english: 'audio messages' },
        { foreign: 'todo el día', english: 'all day' },
        { foreign: 'Se extrañan mucho.', english: 'They miss each other very much.' },
        { foreign: 'desayunar', english: 'to have breakfast', hard: true },
        { foreign: 'Estoy desayunando.', english: 'I’m having breakfast.' },
        { foreign: '¿Qué estás haciendo?', english: 'What are you doing? (informal)' },
        { foreign: 'Estoy cocinando el almuerzo.', english: 'I’m cooking lunch.' },
        { foreign: 'árbol', english: 'tree' },
        { foreign: 'ventana', english: 'window' },
        { foreign: 'llevar una chaqueta', english: 'to wear a jacket', hard: true },
        { foreign: 'unos lápices de colores', english: 'some colored pencils' },
      ],
      lesson6: [
        { foreign: 'éxito', english: 'success' },
        { foreign: 'hace un rato', english: 'a while ago' },
        { foreign: 'hace un mes', english: 'a month ago' },
        { foreign: 'hace un minuto', english: 'a minute ago' },
        { foreign: 'todo está bien', english: 'everything is fine' },
        { foreign: 'todos están bien', english: 'everyone is fine' },
        { foreign: 'nos parece extraño', english: 'it seems strange to us' },
        { foreign: 'quizás', english: 'maybe', hard: true },
        { foreign: 'mejor', english: 'better' },
        { foreign: 'esperar', english: 'to wait / to hope' },
        { foreign: 'colegio / escuela', english: 'school' },
        {
          foreign: 'debe ser aterrador / tiene que ser aterrador',
          english: 'it must be scary',
          hard: true,
        },
        { foreign: 'Tengo tres hijos.', english: 'I have three children.' },
        { foreign: 'hijos', english: 'sons and daughters' },
      ],
      lesson7: [
        { foreign: 'tomar café', english: 'to have coffee' },
        { foreign: 'a veces / algunas veces', english: 'sometimes' },
        { foreign: '¡Aja!', english: 'Aha!' },
        { foreign: '¡Guao!', english: 'Wow!' },
        { foreign: 'nunca antes', english: 'never before' },
        { foreign: 'olvidar', english: 'to forget' },
        {
          foreign: 'Un café por día / al día no es nada.',
          english: 'One coffee per day is nothing.',
        },
        { foreign: 'una taza de café', english: 'a cup of coffee' },
        {
          foreign: 'Cuando tienes poca energía, el café te la da.',
          english: 'When you have low energy, coffee gives you some. (informal)',
        },
        { foreign: 'un abrazo', english: 'a hug' },
        { foreign: 'un abrazote', english: 'a big hug' },
        { foreign: 'hispanos', english: 'hispanics' },
        { foreign: 'morenos', english: 'black people' },
        { foreign: '¡Chévere!', english: 'Cool!' },
        { foreign: 'mis papis', english: 'my parents' },
        { foreign: 'un pato', english: 'a duck' },
        { foreign: 'un patito', english: 'a duckling' },
        { foreign: 'un pez / algunos peces', english: 'a fish / some fish' },
        { foreign: 'dar un paseo', english: 'to go for a walk' },
        { foreign: 'Querido primo', english: 'Dear cousin (writing a letter)' },
      ],
      lesson8: [
        { foreign: 'desde', english: 'from (place or time of origin) / since' },
        { foreign: 'desde ... hasta', english: 'from ... until' },
        {
          foreign: 'Se habla español en América Latina, desde México hasta Argentina.',
          english: 'People speak Spanish in Latin America, from Mexico to Argentina.',
        },
        {
          foreign: 'El avión vuela desde Nueva York a Los Ángeles.',
          english: 'The plane flies from New York to Los Angeles.',
        },
        {
          foreign: 'Desde aquí se ve toda la ciudad.',
          english: 'From here you can see the whole city.',
        },
      ],
      lesson9: [
        { foreign: 'Mira, ...', english: 'Look, ...' },
        { foreign: 'No hay problema.', english: 'No problem.' },
        {
          foreign: 'Algunos les dicen a otros lo que hay que hacer.',
          english: 'Some tell others what to do.',
          hard: true,
        },
        {
          foreign: 'Le digo a él "Buenas tardes." / Le digo "Buenas tardes" a él.',
          english: 'I say "Good afternoon" to him.',
        },
        {
          foreign: 'Esto es lo que él quería para su casa.',
          english: 'This is what he wanted for his house.',
          hard: true,
        },
      ],
      lesson10: [
        {
          foreign: 'Ese no es un nombre que ellos se dan a sí mismos.',
          english: 'That’s not a name they give themselves.',
          hard: true,
        },
        { foreign: 'amenazar', english: 'to threaten', hard: true },
        { foreign: 'Sí, eso parece.', english: 'Yes, it seems so.', hard: true },
        { foreign: 'Él tiene la piel morena.', english: 'He has brown skin.' },
        {
          foreign:
            'A veces en español decir la palabra "negro" es un poco ofensivo, entonces a veces decimos "es un poco moreno", también podemos decir "persona de color".',
          english:
            'Sometimes in Spanish, saying the word "black" is a bit offensive, so sometimes we say "he/she is a little dark-skinned," or we can also say "person of color."',
        },
        { foreign: 'una minoría', english: 'a minority' },
        { foreign: 'sí mismos', english: 'themselves' },
        { foreign: 'un/una inmigrante', english: 'an immigrant' },
      ],
      lesson11: [
        {
          foreign: 'escarcha',
          english: 'frost (a thin layer of ice crystals that form on surfaces on cold nights)',
          hard: true,
        },
        { foreign: 'una helada', english: 'a frost or freeze (weather event)', hard: true },
        { foreign: 'tierno', english: 'cute' },
        {
          foreign: 'lindo',
          english:
            'pretty / attractive / good-looking / lovely / nice - “mix of beautiful and cute”',
        },
        { foreign: 'Nos parece buena / bien tu idea.', english: 'We like your idea.', hard: true },
        {
          foreign: 'Nos parece mala / mal tu idea.',
          english: 'We don’t like your idea.',
          hard: true,
        },
        { foreign: 'la contaminación', english: 'pollution' },
        {
          foreign: 'la basura tirada por las calles',
          english: 'the trash thrown in the streets',
          hard: true,
        },
        { foreign: 'el humo negro de los autobuses', english: 'the black smoke from the buses' },
        { foreign: 'sacar a pasear al perro', english: 'to take the dog for a walk' },
        { foreign: 'una película', english: 'a movie' },
        { foreign: 'hacer deporte', english: 'to do sports' },
        { foreign: 'salir a correr', english: 'to go for a run' },
      ],
      lesson12: [
        {
          foreign: '¿Puedo dirigirme a usted con tú?',
          english: 'May I address you informally? (more formal)',
          hard: true,
        },
        {
          foreign: '¿Puedo tratarle de tú?',
          english: 'May I address you informally? (more common)',
        },
        {
          foreign: 'Ellos están tratándose de tú. / de tú a tú.',
          english: 'They are using tú with each other.',
        },
        {
          foreign: 'Quedaste bien con tu discurso.',
          english: 'You did well (made a good impression) with your speech. (informal)',
          hard: true,
        },
        { foreign: 'verdadero', english: 'true' },
        { foreign: 'chocolate con leche', english: 'milk chocolate' },
        { foreign: 'chocolate oscuro', english: 'dark chocolate', hard: true },
        { foreign: 'saludable', english: 'healthy', hard: true },
        { foreign: 'gobierno', english: 'government' },
        { foreign: 'empresa privada', english: 'private company / private enterprise', hard: true },
        { foreign: 'Estoy de acuerdo.', english: 'I agree.' },
        {
          foreign: 'alguien',
          english: 'someone / anyone (positive sense, like “Is anyone here?”',
          hard: true,
        },
        { foreign: 'enviar', english: 'to send' },
      ],
      lesson13: [
        { foreign: '¡Santo cielo!', english: 'Holy cow!' },
        { foreign: 'impresionante', english: 'stunning / awesome', hard: true },
        { foreign: 'Me duele el estómago.', english: 'My stomach hurts.' },
        { foreign: 'No me siento bien. Tengo tos.', english: 'I don’t feel well. I have a cough.' },
        { foreign: '¿Te duele algo?', english: 'Does something hurt? (informal)' },
        { foreign: 'Me duele la garganta.', english: 'My throat hurts.' },
        { foreign: 'Me duele el cuello.', english: 'My neck hurts.', hard: true },
        { foreign: 'Me duele la rodilla.', english: 'My knee hurts.' },
        { foreign: 'Hola. ¿Cómo te sientes?', english: 'Hello. How are you feeling? (informal)' },
        { foreign: 'No me siento bien. / Me siento mal.', english: 'I don’t feel well.' },
        { foreign: 'Me duele el hombro.', english: 'My shoulder hurts.' },
        { foreign: 'Me duele la espalda.', english: 'My back hurts.' },
        {
          foreign: 'Me alegro de oír eso. / Me alegra oír eso.',
          english: 'I’m glad to hear that.',
          hard: true,
        },
      ],
      lesson14: [
        { foreign: 'el azúcar (masc. or fem! Usually masc.)', english: 'the sugar' },
        { foreign: 'el agua (fem.)', english: 'the water' },
        { foreign: 'azúcar moreno', english: 'brown sugar' },
        { foreign: 'azúcar blanca', english: 'white sugar' },
        { foreign: 'afición', english: 'hobby / pastime / fondness' },
        { foreign: 'pasado / pasada', english: 'last (most recent)' },
        { foreign: 'siguiente / próxima / próximo', english: 'next' },
        {
          foreign: 'Feliz fin de semana para ti también.',
          english: 'You have a nice weekend too. (informal)',
        },
        { foreign: 'darse cuenta', english: 'to realize', hard: true },
        { foreign: 'montaña rusa', english: 'roller coaster' },
        { foreign: 'de la nada', english: 'out of nowhere / out of the blue' },
        { foreign: 'la habilidad', english: 'the skill' },
      ],
      lesson15: [
        { foreign: 'el gatito', english: 'the kitten' },
        { foreign: 'el perrito', english: 'the puppy' },
        { foreign: 'el caballo', english: 'the horse' },
        { foreign: 'la ballena', english: 'the whale' },
        { foreign: 'el tigre', english: 'the tiger' },
        { foreign: 'la ardilla', english: 'the squirrel', hard: true },
        { foreign: 'el león', english: 'the lion' },
        { foreign: 'el elefante', english: 'the elephant' },
        { foreign: 'el mono', english: 'the monkey' },
        { foreign: 'la selva', english: 'the jungle', hard: true },
        { foreign: 'demasiado', english: 'too (e.g. too hot, etc.)', hard: true },
        {
          foreign: 'aproximadamente mes por medio',
          english: 'about once every other month',
          hard: true,
        },
        { foreign: 'el error de escritura', english: 'the typo' },
        { foreign: 'Tiene sentido.', english: 'It makes sense.', hard: true },
        {
          foreign: 'Me gusta de chocolate con vainilla. ¿Qué sabor te gusta?',
          english: 'I like chocolate with vanilla. What flavor do you like? (informal)',
        },
        { foreign: 'No me gusta levantarme temprano.', english: 'I don’t like getting up early.' },
        { foreign: 'el chiste', english: 'the joke' },
        { foreign: 'Que maravilloso.', english: 'How wonderful.' },
        { foreign: 'Dame una pista.', english: 'Give me a hint / clue. (informal)' },
        { foreign: 'El animal tiene cuatro patas.', english: 'The animal has four legs.' },
        { foreign: 'Los humanos tenemos dos piernas.', english: 'Humans have two legs.' },
        { foreign: 'Yo bebo en el bar.', english: 'I drink at the bar.' },
      ],
      lesson16: [
        { foreign: 'incluso cuando', english: 'even when' },
        { foreign: 'la cara', english: 'the face' },
        { foreign: 'expresiones idiomáticas', english: 'idioms' },
        { foreign: 'un dicho', english: 'a saying', hard: true },
        { foreign: 'la carpeta', english: 'the folder' },
        { foreign: 'signos de exclamación', english: 'exclamation marks' },
        { foreign: 'signo de exclamación abierto', english: 'opening exclamation mark' },
        { foreign: 'signo de exclamación cerrado', english: 'closing exclamation mark' },
        { foreign: 'una araña', english: 'a spider' },
        { foreign: 'aterrador / aterradora', english: 'scary' },
        {
          foreign: 'Para mí las arañas son aterradoras.',
          english: 'To me, spiders are terrifying.',
        },
      ],
      lesson17: [
        { foreign: 'Disculpa por lo del martes.', english: 'I’m sorry about Tuesday. (informal)' },
        { foreign: 'un día feriado / un feriado', english: 'a holiday', hard: true },
        {
          foreign: 'Es para celebrar los cumpleaños de Washington y Lincoln.',
          english: 'It’s to celebrate the birthdays of Washington and Lincoln.',
        },
        {
          foreign: 'Estoy acostumbrado a tomar café todas las mañanas.',
          english: 'I am used to drinking coffee every morning.',
        },
        { foreign: 'un carterista / una carterista', english: 'a pickpocket', hard: true },
        { foreign: 'bolsillo', english: 'pocket' },
        { foreign: 'intentar hablar español', english: 'to try to speak Spanish', hard: true },
        { foreign: 'gritar', english: 'to scream / shout' },
        { foreign: 'lugar', english: 'place' },
        { foreign: 'lugares turísticos', english: 'tourist attractions' },
      ],
      lesson18: [
        {
          foreign: 'Es mejor poner una alarma y no necesitarla, que no ponerla y perder una cita.',
          english:
            'It’s better to set an alarm and not need it, than not to set one and miss an appointment.',
        },
        { foreign: 'fuera de este mundo', english: 'out of this world' },
        { foreign: 'qué simple', english: 'how simple' },
        { foreign: 'un robot (roh-BOT) humanoide', english: 'a humanoid robot' },
        { foreign: 'en el escenario', english: 'on stage', hard: true },
        { foreign: 'Cuéntame.', english: 'Tell me. (informal)' },
        { foreign: 'cada', english: 'each', hard: true },
        { foreign: 'una entrevista', english: 'an interview' },
        {
          foreign: 'Cuéntame la última presentación a la que fuiste con tu hija. Detalles.',
          english:
            'Tell me about the last performance you went to with your daughter. Give details.',
          hard: true,
        },
        { foreign: 'una milla', english: 'one mile' },
        { foreign: 'Estaba equivocado.', english: 'I was wrong.', hard: true },
        { foreign: 'un reloj', english: 'a watch' },
        { foreign: 'algo', english: 'something' },
        { foreign: 'desconocido', english: 'unknown' },
        { foreign: 'despacio', english: 'slowly' },
        { foreign: 'Por favor hable despacio.', english: 'Please speak slowly. (formal)' },
        { foreign: 'vecino', english: 'neighbor', hard: true },
      ],
    },
    chapter2: {
      name: 'Random vocab, Mar 2026',
      lesson1: [
        { foreign: 'acabo de + infinitive', english: 'I just ... (did something)' },
        {
          foreign: 'Acabo de mudarme, así que todavía hay un poco de desorden.',
          english: 'I just moved in, so there’s still a bit of a mess.',
        },
        { foreign: 'así que', english: 'and so (cause and effect)', hard: true },
        {
          foreign: 'Acá, a mi lado, está este adorable perro.',
          english: 'Here, next to me, is this adorable dog. (España)',
        },
        { foreign: 'juguetón / juguetona', english: 'playful' },
        { foreign: 'un sillón', english: 'an armchair' },
        { foreign: 'peligroso', english: 'dangerous' },
        { foreign: 'Mi vaso está medio lleno.', english: 'My glass is half-full.' },
        { foreign: 'Mi dormitorio está limpio.', english: 'My bedroom is clean.' },
        { foreign: 'llenar los blancos', english: 'to fill in the blanks' },
      ],
      lesson2: [
        { foreign: 'listo', english: 'ready' },
        { foreign: 'dar asco', english: 'to disgust', hard: true },
        { foreign: 'Me da asco.', english: 'It disgusts me.' },
        { foreign: 'aparato', english: 'device' },
        { foreign: 'el ejército', english: 'the army', hard: true },
        { foreign: 'sin', english: 'without' },
        { foreign: 'matar', english: 'to kill' },
        { foreign: 'vigilancia masiva', english: 'mass surveillance', hard: true },
        { foreign: 'riesgo', english: 'risk' },
        { foreign: 'Mi regalo tiene un lazo amarillo.', english: 'My gift has a yellow bow.' },
        { foreign: 'antes', english: 'before' },
        { foreign: 'apagón / apagones', english: 'blackout / blackouts', hard: true },
        { foreign: 'El gato rompió el jarrón.', english: 'The cat broke the vase.', hard: true },
        { foreign: 'Se rompió el jarrón.', english: 'The vase broke. (impersonal)', hard: true },
      ],
      lesson3: [
        {
          foreign: 'El cielo es de color azul, pero cuando llueve se pone gris.',
          english: 'The sky is blue, but when it rains it turns gray.',
        },
        { foreign: 'jardín', english: 'garden' },
        { foreign: 'la pizarra', english: 'the chalkboard' },
        { foreign: 'el pizarrón', english: 'the blackboard or whiteboard' },
        { foreign: 'bolígrafo', english: 'pen' },
        { foreign: 'camiseta', english: 't-shirt' },
        { foreign: 'un suéter / un jersey', english: 'a sweater' },
        { foreign: 'un pantalón azul', english: 'a pair of blue pants' },
        { foreign: 'Está al lado de la ventana.', english: 'He is next to the window.' },
        { foreign: 'No veo a Javier.', english: 'I don’t see Javier.' },
      ],
      lesson4: [
        { foreign: 'me pregunto', english: 'I wonder' },
        { foreign: 'una mezcla', english: 'a mix' },
        { foreign: 'mezclar', english: 'to mix' },
        { foreign: 'Me mareo.', english: 'I feel dizzy.' },
        { foreign: 'Me mareo en el mar.', english: 'I get seasick.' },
        { foreign: 'mareado / mareada', english: 'seasick / dizzy' },
        { foreign: 'un crucero en un rio', english: 'a river cruise' },
        { foreign: 'tronco / torso', english: 'torso' },
        { foreign: 'agarrar', english: 'to grab', hard: true },
        { foreign: 'guantes', english: 'gloves' },
        { foreign: 'los calcetines / las medias', english: 'the socks', hard: true },
        {
          foreign: 'Estás caminando muy raro.',
          english: 'You are walking very weirdly. (informal)',
        },
        { foreign: 'todo el mundo / todo', english: 'everyone' },
        { foreign: 'pastillas', english: 'pills', hard: true },
        { foreign: 'hidroavión', english: 'seaplane' },
        { foreign: 'orca', english: 'orca' },
        { foreign: 'trabajo', english: 'job' },
        { foreign: 'Ven, dame la mano.', english: 'Come, give me your hand. (informal)' },
        {
          foreign: 'Primero un pie y después el otro, poco a poco.',
          english: 'First one foot, and then the other—little by little.',
        },
        {
          foreign: '¡Ya puedes abrir los ojos!',
          english: 'You can open your eyes now! (informal)',
        },
      ],
      lesson5: [
        { foreign: 'Ya no estoy tan joven.', english: 'I’m not so young anymore.' },
        { foreign: 'una sonrisa', english: 'a smile' },
        { foreign: 'caro / cara', english: 'expensive' },
        { foreign: 'barato / barata', english: 'cheap', hard: true },
        { foreign: 'Ella tiene las piernas largas.', english: 'She has long legs.' },
      ],
      lesson6: [
        { foreign: 'Está malo.', english: 'He is sick.' },
        { foreign: 'Es malo.', english: 'He is bad.' },
        { foreign: 'Está sano.', english: 'He is healthy.' },
        { foreign: 'pañuelo', english: 'handkerchief', hard: true },
        { foreign: 'Yo hablé.', english: 'I spoke.' },
        { foreign: 'Yo comí.', english: 'I ate.' },
        { foreign: 'Yo escribí.', english: 'I wrote.' },
        { foreign: 'Esta mujer se viste muy bien.', english: 'This woman dresses very well.' },
      ],
      lesson7: [
        {
          foreign: '¿Al final vas de vacaciones a Alaska?',
          english: 'Are you going on vacation to Alaska after all? (informal)',
          hard: true,
        },
        { foreign: 'He cambiado de idea.', english: 'I’ve changed my mind.', hard: true },
        { foreign: 'comprarse', english: 'to buy for oneself' },
        { foreign: 'prestarte', english: 'to lend to you (informal)', hard: true },
        { foreign: 'Ya no hace falta.', english: 'It’s no longer necessary.' },
        { foreign: 'Pues ven.', english: 'Well, come.' },
        { foreign: 'un par de', english: 'a couple of' },
        {
          foreign: 'Suena genial, creo que me apunto.',
          english: 'That sounds great; sign me up.',
          hard: true,
        },
        { foreign: 'Será divertido.', english: 'It will be fun.' },
      ],
      lesson8: [
        { foreign: 'conmigo', english: 'with me' },
        { foreign: 'contigo', english: 'with you (informal)' },
        { foreign: 'la boda', english: 'the wedding' },
        { foreign: 'bloqueador solar / protector solar', english: 'sunscreen' },
        { foreign: 'colores chillones', english: 'bright (loud) colors' },
        { foreign: 'me pongo', english: 'I put on (present tense)' },
        { foreign: 'pantuflas', english: 'slippers' },
        { foreign: 'zapatillas', english: 'sneakers or sometimes slippers' },
        { foreign: 'azul verdoso', english: 'bluegreen' },
        { foreign: 'ser humano / humana', english: 'human being' },
        { foreign: 'seres humanos', english: 'human beings' },
        { foreign: 'acostado / a', english: 'lying down' },
        { foreign: 'sentado / a', english: 'sitting down', hard: true },
        { foreign: 'lentes de contacto', english: 'contact lenses' },
        { foreign: 'muletas', english: 'crutches', hard: true },
      ],
      lesson9: [
        { foreign: 'nunca', english: 'never', hard: true },
        { foreign: 'nadie', english: 'nobody / no one', hard: true },
        { foreign: 'nada', english: 'nothing' },
        { foreign: 'en ningún lugar / en ninguna parte', english: 'nowhere', hard: true },
      ],
    },
    chapter3: {
      name: 'Random vocab, Apr 2026',
      lesson1: [
        {
          foreign: 'Te contaré un poco sobre mí y mi familia.',
          english: 'I’ll tell you a little bit about myself and my family. (informal)',
        },
        { foreign: 'guapo', english: 'handsome' },
        { foreign: 'guapa', english: 'hot, attractive, or well-dressed (fem.)' },
        { foreign: 'Está en forma.', english: 'He is in shape.' },
        { foreign: 'amistoso / amistosa', english: 'friendly' },
        { foreign: 'actividades al aire libre', english: 'outdoor activities' },
        {
          foreign: 'Planeamos ir de viaje a Francia| y hemos invitado a Marta, la mamá de David.',
          english: 'We plan to go on a trip to France| and we have invited Marta, David’s mother.',
          hard: true,
        },
        { foreign: 'cierto', english: 'true (not starting with a v)' },
        { foreign: 'sobre todo', english: 'above all' },
        { foreign: 'Me encantan los deportes.', english: 'I love sports.' },
        { foreign: 'jugador', english: 'player (of a sport)' },
        {
          foreign: 'Creo que ella puede lograrlo.',
          english: 'I think she can achieve it.',
          hard: true,
        },
        { foreign: 'alegre', english: 'cheerful' },
      ],
      lesson2: [
        { foreign: 'de hecho', english: 'in fact', showEnglish: 'random', hard: true },
        { foreign: 'termómetro', english: 'thermometer' },
        { foreign: 'adolescente', english: 'teenager' },
        { foreign: 'fluido / a', english: 'fluent' },
        {
          foreign: 'por cinco minutos (use por for a period of time)',
          english: 'for five minutes',
        },
        {
          foreign: 'Este lápiz es para escribir. (use para for a goal)',
          english: 'This pencil is for writing.',
        },
        {
          foreign: 'Estudio español para hablarlo. (use para for a goal)',
          english: 'I study Spanish to speak it.',
        },
        { foreign: 'con un poco de suerte', english: 'hopefully' },
        {
          foreign: 'Vivo junto a / con mi esposo y mi hijo.',
          english: 'I live together with my husband and son.',
        },
        { foreign: 'en forma', english: 'fit (in shape)' },
        {
          foreign: 'Mi mamá esta yendo a hacer la compra al mercado.',
          english: 'My mom is going to the market to do the shopping.',
          hard: true,
        },
        {
          foreign:
            'Yo me estoy duchando con agua fría para despertarme.|Luego, me seco el pelo y me visto para irme.',
          english:
            'I am taking a cold shower to wake up.|Then, I dry my hair and get dressed to leave.',
          hard: true,
        },
        { foreign: 'la computadora portátil', english: 'the laptop' },
      ],
      lesson3: [
        {
          foreign: 'una cola para comprar las entradas',
          english: 'a queue to buy tickets',
          hard: true,
        },
        {
          foreign: 'en la parte de adelante de la cola',
          english: 'at the front of the line',
          hard: true,
        },
        { foreign: 'tomar', english: 'to take' },
        { foreign: 'navegador', english: 'browser' },
        { foreign: 'buscador', english: 'search engine' },
        { foreign: 'empezar', english: 'to begin', hard: true },
        { foreign: 'de nuevo', english: 'again' },
        { foreign: 'Es por eso que ...', english: 'That is why ...', hard: true },
        { foreign: 'rendirse', english: 'to give up', hard: true },
      ],
      lesson4: [
        { foreign: 'estabas congelado/a', english: 'you were frozen (on screen) (informal)' },
        { foreign: 'ya recuerdo', english: 'now I remember' },
        { foreign: 'No es ese el problema.', english: 'That’s not the problem.' },
        { foreign: 'hubo', english: 'there was/there were' },
        {
          foreign: 'Hubo dos veces en las que usé español| con personas que no hablaban inglés.',
          english:
            'There were two times when I used Spanish| with people who didn’t speak English.',
        },
        { foreign: 'una escala', english: 'a layover' },
        { foreign: 'una tarjeta de embarque', english: 'a boarding pass' },
        {
          foreign: 'Él nos dijo que fuéramos a la oficina de Vueling.',
          english: 'He told us to go to the Vueling office.',
        },
        { foreign: 'No recuerdo lo que ella dijo.', english: 'I don’t remember what she said.' },
        { foreign: 'Tengo que cambiar el destino.', english: 'I have to change the destination.' },
        { foreign: 'servicial', english: 'helpful' },
        {
          foreign: '¿Por dónde quieres empezar?',
          english: 'Where do you want to start? (informal)',
        },
        { foreign: '¡Eso apesta!', english: 'That sucks!' },
        { foreign: 'una tos persistente', english: 'a lingering cough' },
        {
          foreign: 'Alejandra está describiendo a su esposo, David, y a su hijo, Javier.',
          english: 'Alejandra is describing her husband, David, and her son, Javier.',
        },
        { foreign: 'Eso creo.', english: 'I think so.' },
      ],
      lesson5: [
        { foreign: 'Jake está describiendo su casa.', english: 'Jake is describing his house.' },
        { foreign: 'Jake está describiendo una cabra.', english: 'Jake is describing a goat.' },
        { foreign: 'Jake está describiendo a su cabra.', english: 'Jake is describing his goat.' },
        {
          foreign: 'Jake está describiendo a sus amigos.',
          english: 'Jake is describing his friends.',
        },
        {
          foreign: 'Estoy describiéndote a mi esposa.',
          english: 'I’m describing my wife to you. (informal)',
        },
        { foreign: '¿Cómo luce ella?', english: 'What does she look like?' },
        { foreign: '...no es lo mismo que...', english: '...is not the same as...' },
        {
          foreign: 'Lo bonito de esa ciudad es su gente.',
          english: 'The beautiful thing about that city is its people.',
        },
        { foreign: 'creer', english: 'to believe' },
        { foreign: 'crear', english: 'to create' },
        {
          foreign: 'Yo me estoy alistando para mi cita.',
          english: 'I am getting ready for my date.',
        },
        {
          foreign: 'por cierto',
          english: 'by the way',
          showEnglish: 'random',
          hard: true,
          workingOn: true,
        },
        { foreign: 'hablando del tiempo', english: 'speaking of the time' },
        {
          foreign: 'No puedo creer que ya casi es hora.',
          english: 'I can’t believe it’s almost time.',
        },
      ],
    },
    chapter4: {
      name: 'Random vocab, May 2026',
      lesson1: [
        { foreign: 'Los veo.', english: 'I see them.' },
        { foreign: 'El Polo Norte', english: 'The North Pole' },
        {
          foreign: 'Portugal limita al norte y al este con España.',
          english: 'Portugal borders Spain to the north and east.',
        },
        { foreign: 'me han dicho', english: 'I’ve been told' },
        { foreign: 'párrafo', english: 'paragraph' },
        { foreign: 'el país luso', english: 'Portugal nickname' },
        { foreign: 'destacar', english: 'to stand out', hard: true },
        { foreign: 'ciudad costera', english: 'coastal city' },
        { foreign: 'urbe', english: 'large city' },
        {
          foreign: 'en la actualidad / actualmente',
          english: 'currently',
          showEnglish: 'random',
          hard: true,
        },
        { foreign: 'océano', english: 'ocean' },
        { foreign: 'salpicar', english: 'to splash or sprinkle', hard: true },
        { foreign: 'el único', english: 'the only one' },
        { foreign: 'un sinfín de sorpresas', english: 'an endless number of surprises' },
        { foreign: 'villas esparcidas aquí y allá', english: 'villas scattered here and there' },
        {
          foreign: 'con un gran encanto para los visitantes',
          english: 'with great charm for visitors',
        },
        { foreign: 'cascos amurallados', english: 'walled historic centers' },
        { foreign: 'casco central', english: 'downtown' },
        { foreign: 'envidiable', english: 'enviable' },
        {
          foreign: 'pequeños y encantadores negocios',
          english: 'small and charming shops',
          hard: true,
        },
      ],
      lesson2: [
        { foreign: '¡Qué rico / sabroso!', english: 'How delicious!' },
        { foreign: 'Tienes razón.', english: 'You’re right. (informal)' },
        { foreign: 'azucar agregada', english: 'added sugar' },
        { foreign: 'otro / otra (don’t say “un otro” or “una otra”)', english: 'another' },
        {
          foreign: 'Está casi listo.',
          english: 'It’s almost done. (I was talking about my coffee.)',
        },
      ],
      lesson3: [
        { foreign: 'caja', english: 'box' },
        { foreign: 'llegar', english: 'to arrive' },
        { foreign: 'Yo mejor sigo estudiando.', english: 'I’d better keep studying.', hard: true },
        { foreign: 'Cuando hace calor, uso un ventilador.', english: 'When it’s hot I use a fan.' },
        { foreign: 'raro', english: 'weird' },
        { foreign: 'hace calor', english: 'it’s hot (weather)' },
        { foreign: 'entrenador', english: 'trainer / coach' },
        { foreign: 'vidrio', english: 'glass (the material)' },
        {
          foreign: 'Ten cuidado con esa jarra; es de vidrio.',
          english: 'Be careful with that pitcher; it’s made of glass. (informal)',
        },
        { foreign: 'tener un golpe de calor', english: 'to have heat stroke', hard: true },
        { foreign: 'la electricidad se va', english: 'the electricity goes out' },
        { foreign: 'aire acondicionado', english: 'air conditioning' },
        { foreign: 'acondicionador de aire', english: 'air conditioner' },
        { foreign: 'hierro', english: 'iron (the element)' },
        { foreign: 'Lamento escuchar eso.', english: 'I’m sorry to hear that.' },
        { foreign: 'una hamaca (accent on MA)', english: 'a hammock' },
        { foreign: 'patio', english: 'backyard' },
        { foreign: 'chanclas / chancletas', english: 'flip flops', hard: true },
        { foreign: 'un delantal (accent on TAL)', english: 'an apron', hard: true },
        { foreign: 'salchichas', english: 'sausages' },
        { foreign: 'Hay comida en la fiesta.', english: 'There is food at the party.' },
        { foreign: 'con ropa', english: 'with clothes on' },
        { foreign: 'borracho / a', english: 'drunk' },
        { foreign: 'tonto / a', english: 'silly' },
        {
          foreign: 'Nunca he visto un mono en una fiesta.',
          english: 'I have never seen a monkey at a party.',
        },
        {
          foreign: 'La patineta tiene ruedas cuadradas.',
          english: 'The scooter has squares wheels.',
          hard: true,
        },
        { foreign: 'la parilla', english: 'the barbecue / grill', hard: true },
        { foreign: 'muñeco de nieve', english: 'snowman', hard: true },
        { foreign: 'un pitillo', english: 'a straw', hard: true },
        { foreign: 'perro caliente', english: 'hot dog' },
        {
          foreign:
            'Tengo mucha hambre. Me comería una pizza entera. (Sometimes use ‘se’ to emphasize an action)',
          english: 'I’m very hungry. I would eat a whole pizza.',
          hard: true,
        },
        { foreign: 'pesadilla', english: 'nightmare', hard: true },
        { foreign: 'Está flotando.', english: 'It’s floating.' },
        {
          foreign: 'A veces hago trampa y tomo café.',
          english: 'Sometimes I cheat and have coffee.',
          hard: true,
        },
      ],
      lesson4: [
        { foreign: 'lesionarse', english: 'to get injured' },
        { foreign: 'Me lesioné las rodillas.', english: 'I injured my knees.', hard: true },
        { foreign: 'Mis rodillas se lesionaron.', english: 'My knees got injured.', hard: true },
        {
          foreign: 'Cuando corro, no necesito zigzaguear,| eso es un esfuerzo para la rodilla.',
          english: 'When I run, I don’t need to zigzag;| that puts a strain on my knee.',
          hard: true,
        },
        { foreign: 'cirugía de reemplazo de rodilla', english: 'knee replacement surgery' },
      ],
      lesson5: [
        { foreign: 'un aperativo', english: 'an appetizer' },
        {
          foreign: 'un bocadillo',
          english: 'a sub/sandwich eaten as a heavy snack or light meal',
          hard: true,
        },
        { foreign: 'un tentempié', english: 'a light snack between meals', hard: true },
        { foreign: 'estar equivocado', english: 'to be wrong', hard: true },
        { foreign: 'mostrarte', english: 'to show you (informal)', hard: true },
        { foreign: 'se ve rico / rica', english: 'it looks delicious' },
        { foreign: 'arepa', english: 'common corn cake breakfast item in Venezuela and Columbia' },
        {
          foreign: 'arepas de harina de trigo',
          english: 'wheat flour breakfast item in Venezuela and Columbia',
          hard: true,
        },
        { foreign: 'una proteína', english: 'a protein' },
        {
          foreign: 'bajo / debajo de (neither changes with gender)',
          english: 'under / underneath / beneath',
        },
        {
          foreign: 'El gato está bajo la mesa. / debajo de la mesa.',
          english: 'The cat is under the table.',
          hard: true,
        },
        { foreign: 'abajo', english: 'below / down below', hard: true },
        { foreign: 'El gato está ahí abajo.', english: 'The cat is down there.', hard: true },
        {
          foreign: 'Soy tu vecino; vivo abajo.',
          english: 'I’m your neighbor; I live downstairs. (informal, from a male)',
        },
        {
          foreign: 'No me siento cansado para nada. / para nada cansado. / nada cansado.',
          english: 'I don’t feel tired at all. (male)',
        },
        { foreign: 'prestamos atencion', english: 'we pay attention', hard: true },
        { foreign: 'Estoy orgulloso de ella.', english: 'I’m proud of her. (from a male)' },
      ],
      lesson6: [
        { foreign: 'Vamos a disfrutar mucho.', english: 'We’re going to enjoy ourselves a lot.' },
        {
          foreign: 'Nosotros estamos viendo la televisión.',
          english: 'We are watching television.',
        },
        {
          foreign: 'Sin embargo, sé que todo estará bien.',
          english: 'However, I know that everything will be fine.',
        },
        {
          foreign: 'El mar y la arena curan todas las penas.',
          english: 'The sea and the sand heal all sorrows.',
          hard: true,
        },
      ],
      lesson7: [
        { foreign: 'obra de arte', english: 'artwork / work of art' },
        { foreign: 'a cinco o diez millas de aqui', english: 'five or ten miles from here' },
        { foreign: 'Quiero presentartelo.', english: 'I want to introduce him to you. (informal)' },
      ],
      lesson8: [
        { foreign: 'rango de atención corto', english: 'short attention span' },
        { foreign: 'en esa época, ...', english: 'at that time, ...' },
        { foreign: 'en línea', english: 'online' },
        { foreign: 'agotado/a', english: 'exhausted', hard: true },
        { foreign: 'despedir', english: 'to fire (someone)', hard: true, workingOn: true },
        { foreign: 'la decisión más importante', english: 'the most important decision' },
        { foreign: 'enseñar', english: 'to teach', hard: true, workingOn: true },
        { foreign: 'Es de contextura media.', english: 'He is of average build.' },
        { foreign: 'fiesta de picnic', english: 'picnic' },
        { foreign: 'Ellos están en la grama.', english: 'They are on the grass.' },
        {
          foreign: 'sentadas en/sobre una manta',
          english: 'sitting on a blanket (plural feminine)',
          hard: true,
        },
        { foreign: 'cesta de picnic', english: 'picnic basket', workingOn: true },
        { foreign: 'el payaso de la clase', english: 'the class clown', hard: true },
        {
          foreign: 'Está tratando de encontrar a sus amigos.',
          english: 'He is trying to find his friends.',
          hard: true,
        },
        { foreign: 'la gallinita ciega', english: 'blind man’s bluff' },
        { foreign: '¡Eres tu!', english: 'You’re it! (in a game)' },
        { foreign: 'hacer cosquillas a alguien', english: 'to tickle someone' },
        { foreign: 'bambalina', english: 'banner or streamer (e.g. for a party)' },
        { foreign: 'el cumpleaños', english: 'the birthday' },
        { foreign: 'la mascota', english: 'the pet' },
        { foreign: 'el insecto', english: 'the insect' },
        { foreign: 'los truenos y los relámpagos', english: 'thunder and lightning' },
        { foreign: 'el trueno', english: 'the thunder' },
        { foreign: 'un rayo', english: 'a lightning bolt' },
        { foreign: 'los relámpagos / los rayos', english: 'the lightning', hard: true },
        { foreign: 'descansar', english: 'to rest', hard: true, workingOn: true },
        { foreign: 'relajarse', english: 'to relax' },
      ],
      lesson9: [
        { foreign: 'pimienta', english: 'pepper' },
        { foreign: 'pimienta negra', english: 'black pepper' },
        { foreign: 'unas pocas / cuantas manzanas', english: 'a few apples' },
        { foreign: 'unos pocos niños', english: 'a few kids' },
        { foreign: 'ultimamente', english: 'lately', workingOn: true },
        { foreign: 'hacer una broma', english: 'to play a joke / prank', hard: true },
        { foreign: 'aceite de oliva (accent on LI)', english: 'olive oil', hard: true },
        { foreign: 'unas repisas', english: 'some shelves', hard: true, workingOn: true },
        { foreign: 'lámpara', english: 'lamp' },
        { foreign: 'un horno', english: 'an oven' },
        { foreign: 'un horno tostador', english: 'a toaster oven' },
        { foreign: 'unos papeles', english: 'some papers' },
        { foreign: 'un trozo de papel (accent on EL)', english: 'a piece of paper' },
        { foreign: 'un imán', english: 'a magnet' },
        { foreign: 'desordenado', english: 'messy' },
        { foreign: 'el pelo de los animales', english: 'fur' },
        { foreign: 'confuso/a', english: 'confusing', workingOn: true },
        { foreign: 'estoy confundido/a', english: 'I’m confused', workingOn: true },
        {
          foreign: 'a tu orden / a tus órdenes (en México)',
          english: 'at your service / you’re welcome (polite)',
        },
        { foreign: 'Sé tocar la guitarra.', english: 'I know how to play the guitar.' },
        { foreign: 'sumar y restar', english: 'adding and subtracting', workingOn: true },
        { foreign: 'viajar por el mundo', english: 'to travel the world' },
        { foreign: 'nadar', english: 'to swim' },
        { foreign: 'un coche', english: 'a car (in Spain, Mexico City, and Argentina)' },
        { foreign: 'el final de la película', english: 'the end of the movie' },
        {
          foreign:
            'Mientras estás de visita en esa ciudad| puedes ir de un lugar a otro| sin problema.',
          english:
            'While visiting that city,| you can go from one place to another| without any problems. (informal)',
          hard: true,
          workingOn: true,
        },
        { foreign: 'sin parar', english: 'non-stop' },
      ],
      lesson10: [
        {
          foreign: 'Yo hice la mayor parte de la tarea',
          english: 'I did most of the homework',
          hard: true,
          workingOn: true,
        },
        {
          foreign: 'La leche ha caducado y sabe muy mal. (saber = to know but also to taste)',
          english: 'The milk has gone bad and tastes very bad.',
        },
        { foreign: 'Este pescado sabe muy salado.', english: 'This fish tastes really salty.' },
        { foreign: 'La lima sabe ácida.', english: 'The lime tastes sour.' },
        { foreign: 'daltónico', english: 'red/green color-blind', hard: true },
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
        { foreign: 'está', english: '(you) are (temporary) (formal)' },
        { foreign: 'estás', english: '(you) are (temporary) (informal)' },
        { foreign: 'Hola, ¿cómo está usted?', english: 'Hello, how are you? (formal)' },
        { foreign: 'hoy', english: 'today' },
        { foreign: 'Hola, ¿cómo está usted hoy?', english: 'Hello, how are you today? (formal)' },
        { foreign: '¿Cómo estás?', english: 'How are you? (informal)' },
        { foreign: '¿Cómo está ella?', english: 'How is she?' },
        { foreign: '¿Cómo está él?', english: 'How is he?', hard: true },
      ],
      lesson3: [
        { foreign: 'Estoy bien.', english: 'I’m fine.' },
        { foreign: 'estoy', english: '(I) am (temporary)' },
        { foreign: 'bien', english: 'fine' },
        { foreign: 'Gracias.', english: 'Thank you.' },
        { foreign: 'y', english: 'and' },
        { foreign: '¿Y usted?', english: 'And you? (formal)' },
        { foreign: 'Estoy bien. ¿Y usted?', english: 'I’m fine. And you? (formal)' },
        { foreign: 'también', english: 'too / also' },
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
        { foreign: '¡Qué tarde tan fría y lluviosa!', english: 'What a cold and rainy afternoon!' },
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
        { foreign: 'Que tenga un buen día.', english: 'Have a good day. (formal)' },
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
        { foreign: 'inglés', english: 'English (language)' },
        {
          foreign: '¡Disculpe!',
          english: 'Excuse me! (for getting attention or interrupting) (formal)',
        },
        {
          foreign: '¡Disculpa!',
          english: 'Excuse me! (for getting attention or interrupting) (informal)',
        },
        { foreign: 'español', english: 'Spanish (language)' },
        { foreign: 'alemán', english: 'German (language)' },
        { foreign: 'francés', english: 'French (language)' },
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
        },
      ],
      lesson2: [
        { foreign: 'Hablo un poco de español.', english: 'I speak a little bit of Spanish.' },
        { foreign: 'hablo', english: '(I) speak' },
        { foreign: 'un poco', english: 'a little bit' },
        { foreign: 'de', english: 'of / from' },
        { foreign: 'sí', english: 'yes' },
        { foreign: 'italiano', english: 'Italian (language)' },
        { foreign: 'no', english: 'no' },
        { foreign: 'No hablo inglés.', english: 'I don’t speak English.' },
        {
          foreign: 'Ella habla un poco de inglés.',
          english: 'She speaks a little bit of English.',
        },
      ],
      lesson3: [
        { foreign: '¿De dónde es usted?', english: 'Where are you from? (formal)' },
        { foreign: 'dónde', english: 'where' },
        { foreign: '¿De dónde?', english: 'From where?' },
        { foreign: '¿De dónde eres?', english: 'Where are you from? (informal)' },
        { foreign: 'ellos', english: 'they (males)' },
        { foreign: '¿De dónde son ellos?', english: 'Where are they from?' },
        { foreign: 'ellas', english: 'they (females)' },
        {
          foreign: 'Disculpe. ¿De dónde son ellas?',
          english: 'Excuse me. Where are they from? (formal) (about a group of females)',
        },
        { foreign: '¿De dónde es?', english: 'Where is she from?' },
      ],
      lesson4: [
        { foreign: 'Soy de los Estados Unidos.', english: 'I’m from the United States.' },
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
        { foreign: 'Usted es estadounidense.', english: 'You are American. (formal)' },
        { foreign: 'Eres estadounidense.', english: 'You are American. (informal)' },
        { foreign: 'Canadá', english: 'Canada' },
        { foreign: 'canadiense/es', english: 'Canadian (singular and plural)' },
        { foreign: 'Ellos son de México.', english: 'They are from Mexico.' },
        { foreign: 'Son mexicanos.', english: 'They are Mexican.', hard: true },
      ],
      lesson5: [
        { foreign: 'hablan', english: '(they) speak' },
        {
          foreign: 'Ellos no son de México y no hablan español.',
          english: 'They are not from Mexico and they don’t speak Spanish.',
        },
        { foreign: 'vivir', english: 'to live' },
        { foreign: 'vivo', english: 'I live' },
        { foreign: 'en', english: 'in / on' },
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
      lesson6: [
        { foreign: 'Me encanta Chile en primavera.', english: 'I love Chile in spring.' },
        { foreign: 'Me encanta.', english: 'I love it.' },
        { foreign: 'Me encanta la primavera.', english: 'I love spring.' },
        { foreign: 'Chile es frío en invierno.', english: 'Chile is cold in winter.', hard: true },
        { foreign: '¿Es verano?', english: 'Is it summer?' },
        { foreign: '¿Es verano en Argentina?', english: 'Is it summer in Argentina?' },
        { foreign: 'Me encanta México en enero.', english: 'I love Mexico in January.' },
        {
          foreign: '¿Es verano en Argentina en enero?',
          english: 'Is it summer in Argentina in January?',
        },
      ],
      lesson7: [
        { foreign: 'cuándo', english: 'when' },
        { foreign: '¿Cuándo es verano en Argentina?', english: 'When is summer in Argentina?' },
        { foreign: '¿Cuándo es otoño?', english: 'When is fall?' },
        { foreign: 'Me encanta el otoño.', english: 'I love fall.' },
        {
          foreign: 'Me encanta el otoño. ¿Cuándo es otoño en Chile?',
          english: 'I love fall. When is fall in Chile?',
        },
        { foreign: 'la clase', english: 'the class' },
        { foreign: 'con fluidez', english: 'fluently', hard: true },
      ],
    },
    chapter3: {
      name: 'Introductions and Professions',
      lesson1: [
        {
          foreign: '¿Cómo se llama usted? / ¿Usted cómo se llama?',
          english: 'What is your name? (formal)',
        },
        { foreign: 'llamarse', english: 'to call oneself' },
        { foreign: 'usted se llama', english: 'you call yourself (formal)' },
        { foreign: 'te llamas', english: 'you call yourself (informal)' },
        { foreign: '¿Cómo te llamas?', english: 'What is your name? (informal)' },
        { foreign: 'ella se llama', english: 'she calls herself' },
        { foreign: '¿Cómo se llama ella?', english: 'What is her name?' },
        { foreign: 'él se llama', english: 'he calls himself' },
        { foreign: '¿Cómo se llama?', english: 'What is his name?' },
      ],
      lesson2: [
        { foreign: 'Me llamo Tom.', english: 'My name is Tom.' },
        { foreign: 'me llamo', english: 'I call myself' },
        { foreign: 'Ella se llama María.', english: 'Her name is Maria.' },
        { foreign: 'Él se llama Carlos.', english: 'His name is Carlos.' },
        { foreign: 'ellos se llaman', english: 'they call themselves' },
        { foreign: 'Se llaman Carlos y María.', english: 'Their names are Carlos and María.' },
        { foreign: 'Soy John.', english: 'I’m John.' },
        { foreign: 'No soy María. Me llamo Juana.', english: 'I’m not Maria. My name is Juana.' },
        {
          foreign: 'Hola, me llamo Tom y soy de los Estados Unidos.',
          english: 'Hi, my name is Tom and I’m from the United States.',
        },
      ],
      lesson3: [
        { foreign: 'Ella es mi hermana.', english: 'This is my sister.' },
        { foreign: 'mi', english: 'my' },
        { foreign: 'hermana', english: 'sister' },
        {
          foreign: 'Mi hermana habla un poco de inglés.',
          english: 'My sister speaks a little bit of English.',
        },
        { foreign: 'hermano', english: 'brother' },
        { foreign: 'esposo', english: 'husband' },
        { foreign: 'Él es mi esposo.', english: 'This is my husband.' },
        {
          foreign: 'Él no es mi hermano. Es mi esposo.',
          english: 'He’s not my brother. He’s my husband.',
        },
        { foreign: 'esposa', english: 'wife' },
        { foreign: 'Ella es mi esposa.', english: 'She is my wife.' },
        { foreign: 'Mi esposo habla italiano.', english: 'My husband speaks Italian.' },
        {
          foreign: 'Ella es mi hermana y se llama Guadalupe.',
          english: 'She is my sister and her name is Guadalupe.',
        },
        { foreign: 'amigos', english: 'friends' },
        { foreign: 'mis amigos', english: 'my friends' },
        { foreign: 'Ellos son mis amigos.', english: 'They are my friends.' },
      ],
      lesson4: [
        {
          foreign: 'Es un gusto / placer conocerlo.',
          english: 'It is a pleasure to meet you. (formal) (to a male)',
        },
        { foreign: 'conocer', english: 'to meet / to know' },
        { foreign: 'Gusto conocerlo.', english: 'Pleasure to meet you. (formal) (to a male)' },
        {
          foreign: 'Es un gusto / placer conocerla.',
          english: 'It is a pleasure to meet you. (formal) (to a female)',
        },
        {
          foreign: 'Es un gusto / placer conocerte.',
          english: 'It is a pleasure to meet you. (informal)',
        },
      ],
      lesson5: [
        { foreign: 'Mi esposo es policía.', english: 'My husband is a police officer.' },
        { foreign: 'Él es policía.', english: 'He’s a police officer.' },
        { foreign: 'Mi hermana es policía.', english: 'My sister is a police officer.' },
        {
          foreign: 'Disculpe, ¿es usted policía?',
          english: 'Excuse me, are you a police officer? (formal)',
        },
        { foreign: 'enfermero', english: 'nurse' },
        { foreign: 'Yo soy enfermera.', english: 'I’m a nurse. (from a female)' },
        {
          foreign: 'Yo soy enfermera y él es policía.',
          english: 'I’m a nurse, and he is a police officer. (from a female)',
        },
        { foreign: 'un / una periodista', english: 'a journalist' },
        {
          foreign: 'Me llamo Juan. Soy periodista.',
          english: 'My name is Juan. I’m a journalist.',
        },
        { foreign: 'empleado / empleada', english: 'employee' },
        { foreign: 'Nosotros somos empleados.', english: 'We are employees.' },
        {
          foreign: 'Nosotros no somos empleados. Somos periodistas.',
          english: 'We are not employees. We are journalists.',
        },
      ],
      lesson6: [
        { foreign: 'trabajar', english: 'to work' },
        { foreign: 'trabajamos', english: '(we) work' },
        {
          foreign: 'Mi hermano y yo trabajamos juntos.',
          english: 'My brother and I work together.',
        },
        {
          foreign: 'Nosotros somos periodistas. Trabajamos juntos.',
          english: 'We are journalists. We work together.',
        },
        { foreign: 'comerciante', english: 'merchant' },
        { foreign: '¿Es ella comerciante?', english: 'Is she a merchant?' },
        {
          foreign: 'Mi esposa no es comerciante, es periodista.',
          english: 'My wife is not a merchant, she is a journalist.',
        },
        { foreign: 'hacer', english: 'to do / to make' },
        { foreign: 'hace', english: '(you) do (formal)' },
        { foreign: '¿Qué hace usted?', english: 'What do you do? (formal)' },
        {
          foreign: 'Yo soy comerciante, ¿qué hace usted?',
          english: 'I’m a merchant. What do you do? (formal)',
        },
        { foreign: 'haces', english: '(you) do (informal)' },
        { foreign: '¿Qué haces tú?', english: 'What do you do? (informal)' },
        {
          foreign: 'Mi esposa y yo somos periodistas. ¿Qué haces tú?',
          english: 'My wife and I are journalists. What do you do? (informal)',
        },
      ],
      lesson7: [
        { foreign: '¿Quién es su esposo?', english: 'Who is your husband? (formal)' },
        { foreign: 'quién', english: 'who (singular)' },
        { foreign: '¿Quién es?', english: 'Who is he?' },
        { foreign: 'su', english: 'your (formal)' },
        { foreign: 'jefe / jefa', english: 'boss' },
        { foreign: '¿Quién es su jefe?', english: 'Who is your boss? (formal)' },
        {
          foreign: 'Yo soy el jefe. ¿Quién es usted?',
          english: 'I’m the boss. Who are you? (formal)',
        },
        { foreign: '¿Quién eres tú?', english: 'Who are you? (informal)' },
        { foreign: '¿Quién es su hermana?', english: 'Who is your sister? (formal)' },
        { foreign: 'quiénes', english: 'who (plural)' },
        { foreign: '¿Quiénes son ellas?', english: 'Who are they? (about a group of women)' },
        { foreign: 'tu', english: 'your (informal)' },
        { foreign: '¿Quiénes son tus hermanos?', english: 'Who are your brothers? (informal)' },
      ],
    },
    chapter4: {
      name: 'Personal Info and Preferences',
      lesson1: [
        {
          foreign: 'Tengo una reserva para el viernes dos.',
          english: 'I have a reservation for Friday the 2nd.',
        },
        { foreign: 'una reserva', english: 'a reservation' },
        { foreign: 'para el viernes dos', english: 'for Friday the 2nd' },
        { foreign: 'para el miércoles primero', english: 'for Wednesday the 1st' },
        { foreign: 'a mi nombre', english: 'under my name' },
        {
          foreign: 'Tengo una reserva a mi nombre.',
          english: 'I have a reservation under my name.',
        },
        {
          foreign: 'Tengo una reserva a mi nombre para el miércoles primero.',
          english: 'I have a reservation under my name for Wednesday the 1st.',
        },
      ],
      lesson2: [
        { foreign: 'domingo cuatro', english: 'Sunday the 4th' },
        { foreign: 'del... al...', english: 'from... to... (dates)' },
        {
          foreign: 'del viernes dos al domingo cuatro',
          english: 'from Friday the 2nd to Sunday the 4th',
        },
        {
          foreign: 'una reserva del viernes dos al domingo cuatro',
          english: 'a reservation from Friday the 2nd to Sunday the 4th',
        },
        { foreign: 'para el jueves', english: 'for Thursday' },
        {
          foreign: 'Tengo una reserva para el jueves tres.',
          english: 'I have a reservation for Thursday the 3rd.',
        },
        { foreign: 'a nombre de', english: 'under the name of' },
        {
          foreign: 'Tengo una reserva a nombre de Lucas.',
          english: 'I have a reservation under the name of Lucas.',
        },
        { foreign: 'para el martes', english: 'for Tuesday' },
        {
          foreign: 'Tengo una reserva a nombre de Lucas para el martes.',
          english: 'I have a reservation under the name of Lucas for Tuesday.',
        },
      ],
      lesson3: [
        {
          foreign: 'del miércoles primero al sábado cuatro',
          english: 'from Wednesday the 1st to Saturday the 4th',
        },
        {
          foreign: '¿Tengo una reserva para el lunes cinco?',
          english: 'Do I have a reservation for Monday the 5th?',
        },
      ],
      lesson4: [
        { foreign: '¿Cuál es su dirección?', english: 'What is your address? (formal)' },
        { foreign: 'cuál', english: 'which (as in which one)' },
        { foreign: 'la dirección', english: 'the address' },
        { foreign: 'Calle San Martín seis', english: '6 San Martin Street' },
        {
          foreign: 'Mi dirección es Calle San Martín seis.',
          english: 'My address is 6 San Martin Street.',
        },
        { foreign: 'apartamento', english: 'apartment' },
        {
          foreign: 'Mi dirección es Calle San Martín seis, apartamento siete.',
          english: 'My address is 6 San Martin Street, apartment 7.',
        },
        { foreign: 'correo electrónico', english: 'email' },
        { foreign: 'dirección de correo electrónico', english: 'email address' },
        {
          foreign: '¿Cuál es su dirección de correo electrónico?',
          english: 'What’s your email address? (formal)',
        },
        { foreign: 'arroba', english: 'at (@)' },
        {
          foreign:
            'Mi correo electrónico es juanperez arroba mangolanguages (mahngoLAHNguehhehs) punto com.',
          english: 'My email is juanperez@mangolanguages.com.',
        },
        { foreign: 'teléfono', english: 'telephone' },
        { foreign: 'número', english: 'number' },
        { foreign: 'número de teléfono', english: 'telephone number' },
        {
          foreign: '¿Cuál es su número de teléfono?',
          english: 'What is your telephone number? (formal)',
        },
      ],
      lesson5: [
        { foreign: 'celular (sehlooLAHR)', english: 'cell phone' },
        { foreign: '¿Tiene celular?', english: 'Do you have a cell phone? (formal)' },
        {
          foreign: '¿Tiene celular? ¿Cuál es el número?',
          english: 'Do you have a cell phone? What’s the number? (formal)',
        },
        { foreign: '¿Tienes correo?', english: 'Do you have email? (informal)' },
        {
          foreign: 'No tengo celular. ¿Tienes correo?',
          english: 'I don’t have a cell phone. Do you have email? (informal)',
        },
      ],
      lesson6: [
        { foreign: '¿Qué edad tiene usted?', english: 'How old are you? (formal)' },
        { foreign: 'edad (fem.)', english: 'age' },
        { foreign: '¿Qué edad....?', english: 'How old...?' },
        { foreign: '¿Qué edad tienes?', english: 'How old are you? (informal)' },
        {
          foreign: 'Tengo treinta años. ¿Qué edad tienes tú?',
          english: 'I’m thirty years old. How old are you? (informal)',
        },
        { foreign: '¿Tienes veinte años?', english: 'Are you twenty years old? (informal)' },
        { foreign: '¡No tengo veinte!', english: 'I’m not twenty!' },
        {
          foreign: '¡No tengo veinte! ¡Tengo veintisiete!',
          english: 'I’m not twenty! I’m twenty-seven!',
        },
        {
          foreign: 'Yo tengo treinta y mi hermano cuarenta.',
          english: 'I’m thirty and my brother is forty.',
        },
        {
          foreign: 'Yo tengo veintinueve años. ¿Qué edad tiene usted?',
          english: 'I’m twenty-nine years old. How old are you? (formal)',
        },
      ],
      lesson7: [
        {
          foreign: 'Su habitación es la cinquenta.',
          english: 'Your room is number fifty. (formal)',
        },
        { foreign: 'habitación', english: 'room' },
        { foreign: 'hotel', english: 'hotel' },
        { foreign: 'El hotel tiene gimnasio.', english: 'The hotel has a gym.' },
        {
          foreign: 'El hotel tiene sesenta y cinco habitaciones y un gimnasio.',
          english: 'The hotel has sixty-five rooms and a gym.',
        },
        {
          foreign: 'Disculpe, ¿dónde está la habitación sesenta?',
          english: 'Excuse me, where is room sixty? (formal)',
        },
        {
          foreign: 'Mi habitación es la setenta y tres.',
          english: 'My room is number seventy-three.',
        },
      ],
      lesson8: [
        { foreign: 'ochenta', english: 'eighty' },
        { foreign: 'ochenta y dos', english: 'eighty-two' },
        { foreign: 'noventa', english: 'ninety' },
        { foreign: 'noventa y tres', english: 'ninety-three' },
        {
          foreign: 'Mi hermana está en la habitación noventa y tres.',
          english: 'My sister is in room ninety-three.',
        },
        { foreign: 'cien', english: 'one hundred' },
        {
          foreign: 'Yo estoy en la habitación cien y mi hermana en la noventa y ocho.',
          english: 'I’m in room one hundred and my sister in ninety-eight.',
        },
      ],
      lesson9: [
        {
          foreign: 'La tarjeta azul es para la piscina.',
          english: 'The blue card is for the swimming pool.',
        },
        { foreign: 'tarjeta', english: 'card' },
        { foreign: 'piscina', english: 'pool' },
        { foreign: 'para', english: 'for' },
        { foreign: 'Es para la piscina.', english: 'It is for the swimming pool.' },
        { foreign: '¿De qué color...?', english: 'What color...?' },
        { foreign: 'bandera', english: 'flag' },
        { foreign: '¿De qué color es la bandera?', english: 'What color is the flag?' },
        {
          foreign: '¿De qué color es la bandera de Chile?',
          english: 'What color is the Chilean flag?',
        },
        {
          foreign: 'La bandera es roja, blanca y azul.',
          english: 'The flag is red, white, and blue.',
        },
        {
          foreign: 'La bandera de Colombia es amarilla, azul y roja.',
          english: 'The Colombian flag is yellow, blue and red.',
        },
      ],
      lesson10: [
        { foreign: 'banana', english: 'banana' },
        { foreign: 'fruta', english: 'fruit' },
      ],
      lesson11: [
        {
          foreign: '¿Cuál es tu color favorito?',
          english: 'What is your favorite color? (informal)',
        },
        { foreign: 'Mi color favorito es el rojo.', english: 'My favorite color is red.' },
        { foreign: 'odontólogo / dentista', english: 'dentist' },
        { foreign: 'los dos / las dos', english: 'both (does not start with a)' },
      ],
    },
  },
  unit2: {
    name: 'Connections',
    chapter1: {
      name: 'Places and Directions',
      lesson1: [
        { foreign: 'Estoy perdido.', english: 'I’m lost. (from a male)' },
        {
          foreign: 'Buenas tardes. ¿Usted está perdida?',
          english: 'Good afternoon. Are you lost? (formal, to a female)',
        },
        { foreign: 'saber', english: 'to know' },
        { foreign: 'sabe', english: 'you know (formal)' },
        {
          foreign: 'Estoy perdida. ¿Sabe dónde está el cine?',
          english: 'I’m lost. Do you know where the movie theater is? (formal) (from a female)',
        },
        { foreign: 'centro', english: 'center' },
        { foreign: 'comercial', english: 'commercial' },
        { foreign: 'el centro comercial', english: 'the mall' },
        { foreign: 'panadería', english: 'bakery', hard: true },
        { foreign: 'carnicería', english: 'butcher shop', hard: true },
        {
          foreign: '¿Sabe dónde está el centro comercial?',
          english: 'Do you know where the mall is? (formal)',
        },
        { foreign: 'sé', english: 'I know' },
        { foreign: 'No sé dónde está.', english: 'I don’t know where it is.' },
        { foreign: 'a', english: 'to / at' },
        { foreign: 'querer', english: 'to want' },
        { foreign: 'quiero', english: '(I) want' },
        {
          foreign: 'Quiero llegar al centro comercial y no sé dónde está.',
          english: 'I want to get to the mall, and I don’t know where it is.',
        },
        {
          foreign: 'Estoy perdida y quiero llegar al cine.| ¿Sabe dónde está?',
          english:
            'I’m lost, and I want to get to the movie theater.| Do you know where it is? (formal) (from a female)',
        },
      ],
      lesson2: [
        { foreign: '¿Dónde está el baño?', english: 'Where is the bathroom?' },
        { foreign: 'baño', english: 'bathroom' },
        { foreign: 'el restaurante', english: 'the restaurant' },
        { foreign: 'autobús', english: 'bus' },
        { foreign: 'la parada', english: 'the stop' },
        { foreign: 'la parada de autobús', english: 'the bus stop' },
        {
          foreign: 'Buenos días. ¿Dónde está la parada de autobús?',
          english: 'Good morning. Where is the bus stop?',
        },
        { foreign: '¿Dónde están las llaves?', english: 'Where are the keys?' },
      ],
      lesson3: [
        { foreign: 'el boleto', english: 'the ticket' },
        { foreign: '¿Dónde están los boletos?', english: 'Where are the tickets?' },
        { foreign: 'el mapa', english: 'the map' },
        { foreign: 'en el mapa', english: 'on the map' },
        {
          foreign: '¿Dónde está el restaurante en el mapa?',
          english: 'Where is the restaurant on the map?',
        },
        { foreign: 'cafetería', english: 'cafe' },
        { foreign: '¿Dónde hay una cafetería?', english: 'Where is there a cafe?' },
        { foreign: 'acogedor / a', english: 'cozy' },
        {
          foreign: '¿Dónde hay una cafetería acogedora?',
          english: 'Where is there a cozy cafe?',
          hard: true,
        },
        { foreign: 'moderno', english: 'modern' },
        {
          foreign: '¿Dónde hay un restaurante moderno?',
          english: 'Where is there a modern restaurant?',
        },
        {
          foreign: 'El restaurante es moderno pero no acogedor.',
          english: 'The restaurant is modern but not cozy.',
        },
      ],
      lesson4: [
        { foreign: 'Está justo ahí.', english: 'It is right there.' },
        { foreign: 'justo', english: 'right / just (as in right here or right on time)' },
        { foreign: 'Está ahí.', english: 'It is there.' },
        { foreign: 'cerca', english: 'close / near' },
        { foreign: 'El hotel está muy cerca.', english: 'The hotel is very close.' },
        { foreign: 'lejos', english: 'far' },
        { foreign: 'La parada de autobús está muy lejos.', english: 'The bus stop is very far.' },
        { foreign: 'Está aquí.', english: 'It’s here.' },
        { foreign: 'Está lejos de aquí.', english: 'It’s far from here.' },
        {
          foreign: 'La parada de autobús está un poco lejos de aquí.',
          english: 'The bus stop is a little bit far from here.',
        },
        { foreign: 'kilómetro', english: 'kilometer' },
        { foreign: 'seis kilómetros', english: 'six kilometers' },
        { foreign: 'Está a seis kilómetros de aquí.', english: 'It’s six kilometers from here.' },
        { foreign: '¡Seis kilómetros es lejos!', english: 'Six kilometers is far!' },
      ],
      lesson5: [
        { foreign: 'justo a tiempo', english: 'right on time' },
        { foreign: 'en frente de', english: 'in front of' },
        { foreign: 'el teatro', english: 'the theater' },
        {
          foreign: 'El hotel está en frente del teatro.',
          english: 'The hotel is in front of the theater.',
        },
        { foreign: 'derecha', english: 'right (direction)' },
        { foreign: 'a la derecha', english: 'to the right' },
        { foreign: 'iglesia', english: 'church' },
        { foreign: 'A la derecha de la iglesia.', english: 'To the right of the church.' },
        {
          foreign: 'El hotel está en frente del teatro,| a la derecha de la iglesia.',
          english: 'The hotel is in front of the theater,| to the right of the church.',
        },
        { foreign: 'izquierda', english: 'left (direction)' },
        { foreign: 'a la izquierda', english: 'to the left' },
        {
          foreign: 'El cine está a la izquierda de la iglesia.',
          english: 'The movie theater is to the left of the church.',
        },
        {
          foreign: 'El cine está a la izquierda de la iglesia,| a dos kilómetros de aquí.',
          english: 'The movie theater is to the left of the church,| two kilometers from here.',
        },
      ],
      lesson6: [
        { foreign: 'al lado de', english: 'beside / next to' },
        {
          foreign: 'El cine está al lado de la iglesia.',
          english: 'The movie theater is beside the church.',
        },
        {
          foreign: 'Hay un restaurante moderno al lado del cine.',
          english: 'There is a modern restaurant beside the movie theater.',
        },
        { foreign: 'detrás de', english: 'behind', hard: true },
        {
          foreign: 'El hotel está detrás de la iglesia.',
          english: 'The hotel is behind the church.',
          hard: true,
        },
        {
          foreign: 'Hay un hotel acogedor detrás de la iglesia,| a siete kilómetros de aquí.',
          english: 'There’s a cozy hotel behind the church,| seven kilometers from here.',
          hard: true,
        },
      ],
      lesson7: [
        {
          foreign: 'Vaya derecho y luego a la izquierda.',
          english: 'Go straight and then to the left. (formal)',
        },
        { foreign: 'Vaya.', english: 'Go. (formal imperative)' },
        { foreign: 'derecho', english: 'straight (direction)' },
        { foreign: 'Luego vaya a la izquierda.', english: 'Then, go to the left. (formal)' },
        { foreign: 'hacia (accent on AH)', english: 'towards' },
        {
          foreign: 'Vaya hacia la derecha. (Accent on AH)',
          english: 'Go to the right (literally towards the right). (formal imperative)',
        },
        {
          foreign: 'Vaya hacia la derecha| y luego hacia la izquierda. (Accent on AH)',
          english: 'Go to the right| and then to the left. (Literally “towards.” Formal.)',
        },
        { foreign: 'más despacio', english: 'slower' },
        { foreign: 'Más despacio por favor.', english: 'Slower, please.' },
        {
          foreign: 'Hablo un poco de español. Más despacio, por favor.',
          english: 'I speak a little bit of Spanish. Slower, please.',
        },
        { foreign: '¡Muchas gracias!', english: 'Thank you very much!' },
      ],
      lesson8: [
        { foreign: '¿Cómo puedo encontrar la embajada?', english: 'How can I find the embassy?' },
        { foreign: 'poder', english: 'to ne able' },
        { foreign: 'puedo', english: '(I) can / (I) am able to' },
        { foreign: 'encontrar', english: 'to find' },
        { foreign: 'puedo encontrar', english: 'I can find' },
        { foreign: '¿Cómo puedo encontrar…?', english: 'How can I find…?' },
        { foreign: 'embajada', english: 'embassy' },
        { foreign: 'doblar', english: 'to turn' },
        { foreign: 'Doble.', english: 'Turn. (imperative, formal)' },
        { foreign: 'Doble a la izquierda.', english: 'Turn left. (formal)' },
        {
          foreign: 'Doble a la derecha y luego vaya derecho.',
          english: 'Turn right and then go straight. (formal)',
        },
        { foreign: 'Dobla.', english: 'Turn. (imperative, informal)' },
        {
          foreign: 'Doble a la izquierda en la calle San Martín.',
          english: 'Turn left on San Martin Street. (formal)',
        },
        { foreign: 'esquina', english: 'corner' },
        { foreign: 'Está en la esquina.', english: 'It’s on the corner.' },
      ],
      lesson10: [
        {
          foreign: '¡Vamos a un restaurante tradicional!',
          english: 'Let’s go to a traditional restaurant!',
        },
        { foreign: '¡Vamos!', english: 'Let’s go!' },
        { foreign: 'tradicional', english: 'traditional' },
        { foreign: 'comer', english: 'to eat' },
        { foreign: 'Quiero comer.', english: 'I want to eat.' },
        { foreign: 'diferente', english: 'different' },
        { foreign: 'internacional', english: 'international' },
        { foreign: 'restaurante internacional', english: 'international restaurant' },
        {
          foreign: 'Quiero comer algo diferente.| ¡Vamos a un restaurante internacional!',
          english: 'I want to eat something different.| Let’s go to an international restaurant!',
        },
        { foreign: 'la acción', english: 'the action' },
        { foreign: 'película de acción', english: 'action movie' },
        {
          foreign: 'Quiero ver una buena película de acción.| ¡Vamos al cine!',
          english: 'I want to see a good action movie.| Let’s go to the movie theater!',
        },
      ],
    },
  },
};

/*
        { foreign: '', english: '', workingOn: true },
*/
