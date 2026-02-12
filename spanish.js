/*
 Verbo ESTAR: https://docs.google.com/presentation/d/1EgpZ_7aTz-3PkhxYvJh4LOxi5-UsBuy2/edit?slide=id.p2#slide=id.p2
   PLACE: Position, Location, Action, Condition, Emotion
 Verbo SER:   https://docs.google.com/presentation/d/1EgpZ_7aTz-3PkhxYvJh4LOxi5-UsBuy2/edit?slide=id.p6#slide=id.p6
   DOCTOR: Date/Day, Occupation, Characteristic/Class, Time, Origin, Relation/Religion

  casi = almost,
  ya = already,
  ya no = not anymore,
  todavía = still,
  todavía no / no todavía = not yet,

  para = for (for someone), por = because of
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
        { foreign: 'sin embargo', english: 'however', hard: true },
        { foreign: 'ambos / ambas', english: 'both', hard: true },
        {
          foreign: 'entonces',
          english: 'so / then (like French alors)',
          hard: true,
        },
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
        {
          foreign: '¿Qué tal estás?',
          english: 'How are you? (informal) (how’s it going, you?)',
          hard: true,
        },
        { foreign: 'muy', english: 'very' },
        { foreign: 'Muy bien.', english: 'Very well.' },
        { foreign: 'No muy bien.', english: 'Not very well.' },
        { foreign: 'Más o menos.', english: 'So-so.', showEnglish: false },
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
        { foreign: '¡Cuídate!', english: 'Take care! (informal)', hard: true, workingOn: true },
        { foreign: '¡Cuídense!', english: 'Take care! (to a group)', hard: true },
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
        { foreign: 'travieso', english: 'mischievous', hard: true },
        { foreign: 'avergonzado', english: 'ashamed', hard: true },
        { foreign: 'Eso es verdad.', english: 'That’s true.' },
        { foreign: 'Eso es falso.', english: 'That’s false.' },
      ],
      lesson5: [
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
      lesson6: [
        { foreign: 'afuera', english: 'outside', hard: true },
        { foreign: 'adentro', english: 'inside', hard: true },
        { foreign: 'juntos', english: 'together' },
        { foreign: 'novios', english: 'boyfriend and girlfriend / a couple' },
        { foreign: 'mensajes de audio', english: 'audio messages' },
        { foreign: 'todo el día', english: 'all day' },
        {
          foreign: 'Se extrañan mucho.',
          english: 'They miss each other very much.',
        },
        { foreign: 'desayunar', english: 'to have breakfast', hard: true },
        { foreign: 'Estoy desayunando.', english: 'I’m having breakfast.' },
        {
          foreign: '¿Qué estás haciendo?',
          english: 'What are you doing? (informal)',
        },
        {
          foreign: 'Estoy cocinando el almuerzo.',
          english: 'I’m cooking lunch.',
        },
        { foreign: 'árbol', english: 'tree' },
        { foreign: 'ventana', english: 'window' },
        {
          foreign: 'llevar una chaqueta',
          english: 'to wear a jacket',
          hard: true,
        },
        { foreign: 'unos lápices de colores', english: 'some colored pencils' },
      ],
      lesson7: [
        { foreign: 'éxito', english: 'success' },
        { foreign: 'hace un rato', english: 'a while ago' },
        { foreign: 'hace un mes', english: 'a month ago' },
        { foreign: 'hace un minuto', english: 'a minute ago' },
        { foreign: 'cuñado', english: 'brother-in-law' },
        { foreign: 'cuñada', english: 'sister-in-law' },
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
      lesson8: [
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
      lesson9: [
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
          foreign: 'Desde aqui se ve toda la ciudad.',
          english: 'From here you can see the whole city.',
        },
      ],
      lesson10: [
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
        },
      ],
      lesson11: [
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
      lesson12: [
        {
          foreign: 'escarcha',
          english: 'frost (a thin layer of ice crystals that form on surfaces on cold nights)',
          hard: true,
        },
        {
          foreign: 'una helada',
          english: 'a frost or freeze (weather event)',
          hard: true,
        },
        { foreign: 'tierno', english: 'cute' },
        {
          foreign: 'lindo',
          english:
            'pretty / attractive / good-looking / lovely / nice - “mix of beautiful and cute”',
        },
        {
          foreign: 'Nos parece buena / bien tu idea.',
          english: 'We like your idea.',
          workingOn: true,
          hard: true,
        },
        {
          foreign: 'Nos parece mala / mal tu idea.',
          english: 'We don’t like your idea.',
          workingOn: true,
          hard: true,
        },
        { foreign: 'la contaminación', english: 'pollution' },
        {
          foreign: 'la basura tirada por las calles',
          english: 'the trash thrown in the streets',
          hard: true,
        },
        {
          foreign: 'el humo negro de los autobuses',
          english: 'the black smoke from the buses',
        },
        {
          foreign: 'sacar a pasear al perro',
          english: 'to take the dog for a walk',
        },
        { foreign: 'una película', english: 'a movie' },
        { foreign: 'hacer deporte', english: 'to do sports' },
        { foreign: 'salir a correr', english: 'to go for a run' },
      ],
      lesson13: [
        {
          foreign: '¿Puedo dirigirme a usted con tú?',
          english: 'May I address you informally? (more formal)',
          workingOn: true,
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
        { foreign: 'saludable', english: 'healthy' },
        { foreign: 'gobierno', english: 'government' },
        {
          foreign: 'empresa privada',
          english: 'private company / private enterprise',
          hard: true,
        },
        { foreign: 'Estoy de acuerdo.', english: 'I agree.' },
        { foreign: 'alguien', english: 'someone', hard: true },
        { foreign: 'enviar', english: 'to send' },
      ],
      lesson14: [
        { foreign: '¡Santo cielo!', english: 'Holy cow!' },
        { foreign: 'impresionante', english: 'stunning / awesome', workingOn: true, hard: true },
        { foreign: 'Me duele el estómago.', english: 'My stomach hurts.' },
        {
          foreign: 'No me siento bien. Tengo tos.',
          english: 'I don’t feel well. I have a cough.',
        },
        { foreign: '¿Te duele algo?', english: 'Does something hurt? (informal)' },
        { foreign: 'Me duele la garganta.', english: 'My throat hurts.' },
        { foreign: 'Me duele la rodilla.', english: 'My knee hurts.' },
        {
          foreign: 'Hola. ¿Cómo te sientes?',
          english: 'Hello. How are you feeling? (informal)',
        },
        {
          foreign: 'No me siento bien. / Me siento mal.',
          english: 'I don’t feel well.',
        },
        { foreign: 'Me duele el hombro.', english: 'My shoulder hurts.', workingOn: true },
        { foreign: 'Me duele la espalda.', english: 'My back hurts.', workingOn: true },
        {
          foreign: 'Me alegro de oír eso. / Me alegra oír eso.',
          english: 'I’m glad to hear that.',
          hard: true,
          workingOn: true,
        },
      ],
      lesson15: [
        {
          foreign: 'el azúcar (masc. or fem! Usually masc.)',
          english: 'the sugar',
        },
        { foreign: 'el agua (fem.)', english: 'the water' },
        { foreign: 'azúcar moreno', english: 'brown sugar' },
        { foreign: 'azúcar blanca', english: 'white sugar' },
        { foreign: 'afición', english: 'hobby / pastime / fondness' },
        { foreign: 'pasado / pasada', english: 'last (most recent)', workingOn: true },
        { foreign: 'siguiente / próxima / próximo', english: 'next', workingOn: true },
        {
          foreign: 'Feliz fin de semana para ti también.',
          english: 'You have a nice weekend too. (informal)',
          workingOn: true,
        },
        { foreign: 'darse cuenta', english: 'to realize', workingOn: true, hard: true },
        { foreign: 'montaña rusa', english: 'roller coaster' },
        { foreign: 'de la nada', english: 'out of nowhere / out of the blue' },
        { foreign: 'la habilidad', english: 'the skill' },
      ],
      lesson16: [
        { foreign: 'el gatito', english: 'the kitten' },
        { foreign: 'el perrito', english: 'the puppy', workingOn: true },
        { foreign: 'el caballo', english: 'the horse' },
        { foreign: 'la ballena', english: 'the whale' },
        { foreign: 'el tigre', english: 'the tiger' },
        { foreign: 'la ardilla', english: 'the squirrel', hard: true, workingOn: true },
        { foreign: 'el león', english: 'the lion' },
        { foreign: 'el elefante', english: 'the elephant' },
        { foreign: 'el mono', english: 'the monkey' },
        { foreign: 'la selva', english: 'the jungle', workingOn: true },
        { foreign: 'demasiado', english: 'too (e.g. too hot, etc.)', hard: true, workingOn: true },
        {
          foreign: 'aproximadamente mes por medio',
          english: 'about once every other month',
          hard: true,
          workingOn: true,
        },
        { foreign: 'el error de escritura', english: 'the typo', workingOn: true },
        { foreign: 'Tiene sentido.', english: 'It makes sense.', hard: true, workingOn: true },
        {
          foreign: 'Me gusta de chocolate con vainilla. ¿Qué sabor te gusta?',
          english: 'I like chocolate with vanilla. What flavor do you like? (informal)',
          workingOn: true,
        },
        {
          foreign: 'No me gusta levantarme temprano.',
          english: 'I don’t like getting up early.',
          workingOn: true,
        },
        { foreign: 'el chiste', english: 'the joke', workingOn: true },
        { foreign: 'Que maravilloso.', english: 'How wonderful.', workingOn: true },
        { foreign: 'Dame una pista.', english: 'Give me a hint. (informal)', workingOn: true },
        {
          foreign: 'El animal tiene cuatro patas.',
          english: 'The animal has four legs.',
          workingOn: true,
        },
        {
          foreign: 'Los humanos tenemos dos piernas.',
          english: 'Humans have two legs.',
          workingOn: true,
        },
        { foreign: 'Yo bebo en el bar.', english: 'I drink at the bar.', workingOn: true },
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
        { foreign: 'Está ventoso.', english: 'It is windy.', hard: true },
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
        { foreign: 'el semáforo', english: 'the traffic light' },
        { foreign: 'el zinc', english: 'the zinc' },
        { foreign: 'el cine', english: 'the cinema' },
        { foreign: 'la silla', english: 'the chair', hard: true },
        { foreign: 'el zorro', english: 'the fox', hard: true },
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
        { foreign: 'el guepardo', english: 'the cheetah', hard: true },
        { foreign: 'la hamburguesa', english: 'the hamburger' },
        { foreign: 'la guitarra', english: 'the guitar' },
        { foreign: 'el águila', english: 'the eagle', hard: true },
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
            'to be (PLACE: position, location, action, condition, emotion), present tense:| I am, you are, etc.',
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
            'to be (DOCTOR: date/day, occupation, characteristic/class, time, origin, relation/religion), present tense:| I am, you are, etc.',
        },
        {
          foreign:
            'tener, present tense:' +
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
            'caminar, present tense:' +
            '| (yo) camino' +
            '| (tú) caminas' +
            '| (él, ella, usted) camina' +
            '| (nosotros / nosotras) caminamos' +
            '| (vosotros / vosotras) camináis' +
            '| (ellos / ellas / ustedes) caminan (ca-MEE-nan)',
          english: 'to walk, present tense regular verb conjugation',
          workingOn: true,
        },
        {
          foreign:
            'comer, present tense:' +
            '| (yo) como' +
            '| (tú) comes' +
            '| (él, ella, usted) come' +
            '| (nosotros / nosotras) comemos' +
            '| (vosotros / vosotras) coméis' +
            '| (ellos / ellas / ustedes) comen',
          english: 'to eat, present tense regular verb conjugation',
          workingOn: true,
        },
        {
          foreign:
            'partir, present tense:' +
            '| (yo) parto' +
            '| (tú) partes' +
            '| (él, ella, usted) parte' +
            '| (nosotros / nosotras) partimos' +
            '| (vosotros / vosotras) partís' +
            '| (ellos / ellas / ustedes) parten',
          english: 'to leave, present tense regular verb conjugation',
          workingOn: true,
        },
        {
          foreign:
            'decir, present tense:' +
            '| (yo) digo' +
            '| (tú) dices' +
            '| (él, ella, usted) dice' +
            '| (nosotros / nosotras) decimos' +
            '| (vosotros / vosotras) decís' +
            '| (ellos / ellas / ustedes) dicen',
          english: 'to say, present tense conjugation',
          workingOn: true,
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
    chapter8: {
      name: 'Gender noun endings',
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
          foreign: 'días de la semana (masc. or fem.)',
          english: 'Masculine. El lunes, el martes, el miércoles, ...',
        },
        {
          foreign: 'puntos cardinales',
          english: 'Masculine. El norte, el sur, el este, el oeste',
        },
        { foreign: 'mesos', english: 'Masculine. El enero, el febrero, el marzo, ...' },
        { foreign: 'números', english: 'Masculine. El uno, el dos, el tres, ...' },
      ],
    },
    chapter9: {
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
        { foreign: 'la nariz', english: 'the nose' },
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
        { foreign: 'el taller', english: 'the shop', hard: true },
        { foreign: 'la flor', english: 'the flower' },
        { foreign: 'el clima', english: 'the weather (climate)' },
        { foreign: 'el problema', english: 'the problem' },
        { foreign: 'el sistema', english: 'the system' },
        { foreign: 'el rey', english: 'the king' },
        { foreign: 'el buey', english: 'the ox' },
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
        { foreign: 'el dos', english: 'the two' },
        { foreign: 'el tres', english: 'the three' },
        { foreign: 'la mesa', english: 'the table' },
        { foreign: 'el sofá', english: 'the sofa' },
        { foreign: 'el planeta', english: 'the planet' },
        { foreign: 'la calle', english: 'the street', hard: true },
        { foreign: 'el campo', english: 'the field', hard: true },
        { foreign: 'el/la policia', english: 'the police officer' },
        {
          foreign: 'el ordenador',
          english: 'the computer (like the French word)',
          hard: true,
        },
        { foreign: 'la tristeza', english: 'the sadness' },
        { foreign: 'la cabeza', english: 'the head' },
      ],
    },
    chapter10: {
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
        {
          foreign: 'Hoy está lloviendo mucho.',
          english: 'Today it is raining a lot.',
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
        { foreign: 'Estoy acostandome.', english: 'I am going to bed.', hard: true },
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
        {
          foreign: 'El político está mintiendo.',
          english: 'The politician is lying.',
          hard: true,
        },
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
    chapter11: {
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
        {
          foreign: 'Ya no estamos en casa.',
          english: 'We are not home anymore.',
          hard: true,
        },
        {
          foreign: 'Todavía no estamos en casa.',
          english: 'We are not home yet.',
          hard: true,
        },
        {
          foreign: 'Todavía estamos en casa.',
          english: 'We are still home.',
          hard: true,
        },
      ],
    },
    chapter12: {
      name: 'tener y haber',
      lesson1: [
        {
          foreign: 'Brian tiene un hermano gemelo.',
          english: 'Brian has a twin brother.',
        },
        { foreign: 'Yo tengo un carro.', english: 'I have a car.' },
        { foreign: 'El niño tiene un juguete.', english: 'The child has a toy.' },
        { foreign: 'La niña tiene un gato.', english: 'The girl has a cat.' },
        {
          foreign: 'El profesor tiene una casa.',
          english: 'The professor has a house.',
        },
        { foreign: 'Yo tengo un computador.', english: 'I have a computer.' },
        { foreign: 'Tengo sed.', english: 'I am thirsty.', hard: true },
        { foreign: 'Tengo mucha hambre.', english: 'I am very hungry.' },
        { foreign: 'Tengo sueño.', english: 'I am sleepy.' },
        { foreign: 'Tengo frío.', english: 'I am cold.' },
        { foreign: 'Tengo un resfriado.', english: 'I have a cold.', hard: true },
        { foreign: 'Yo tengo mucha suerte.', english: 'I am very lucky.' },
        { foreign: 'Ella tiene pereza.', english: 'She is lazy.' },
        {
          foreign: 'El niño tiene dos años.',
          english: 'The child is two years old.',
        },
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
        },
        {
          foreign: 'Hay que tener cuidado. Hay hielo en la calle.',
          english: 'You have to be careful. There’s ice on the street.',
          hard: true,
        },
        { foreign: 'Tiene que ir.', english: 'He has to go.' },
        { foreign: 'Yo he hecho mi trabajo.', english: 'I have done my job.' },
        {
          foreign: 'Ella ha ido al gimnasio.',
          english: 'She has gone to the gym.',
        },
      ],
    },
    chapter13: {
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
        {
          foreign: 'salvadoreño / salvadoreña',
          english: 'El Salvadorian (adj.)',
          hard: true,
        },
        { foreign: 'español / española', english: 'Spanish (adj.)' },
        {
          foreign: 'europeo / europea (ehwrohPEHoh /ehwrohPEHah)',
          english: 'European (adj.)',
        },
        { foreign: 'británico / británica', english: 'British (adj.)' },
        {
          foreign: 'guatemalteco / guatemalteca (gwahtehmahlTEHkoh / gwahtehmahlTEHkah)',
          english: 'Guatemalan (adj.)',
          hard: true,
        },
        { foreign: 'hondureño / hondureña', english: 'Honduran (adj.)' },
        { foreign: 'japonés / japonesa', english: 'Japanese (adj.)' },
        { foreign: 'nicaragüense', english: 'Nicaraguan (adj.)', hard: true },
        {
          foreign: 'panameño / panameña',
          english: 'Panamanian (adj.)',
          hard: true,
        },
        {
          foreign: 'paraguayo / paraguaya (pahrahGWAHyoh / pahrahGWAHyah)',
          english: 'Paraguayan (adj.)',
        },
        { foreign: 'peruano / peruana', english: 'Peruvian (adj.)', hard: true },
        { foreign: 'portugués / portuguesa', english: 'Portuguese (adj.)' },
        {
          foreign: 'puertorriqueño / puertorriqueña',
          english: 'Puerto Rican (adj.)',
        },
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
    chapter14: {
      name: 'Small talk',
      lesson1: [
        { foreign: 'Absolutamente nada.', english: 'Nothing at all.' },
        { foreign: 'Bienvenido.', english: 'Welcome. (to my humble abode)' },
        { foreign: '¡Claro!', english: 'Of course! / Sure! / You’re welcome!' },
        { foreign: 'Lo siento.', english: 'I’m sorry.' },
        { foreign: 'No mucho.', english: 'Not much.' },
        { foreign: '¡Perdón!', english: 'Sorry! / Excuse me!' },
        { foreign: '¿Perdón?', english: 'Pardon?' },
        { foreign: 'Por supuesto.', english: 'Of course.', hard: true },
        { foreign: 'Un poquito.', english: 'A little bit.' },
        { foreign: 'además', english: 'besides', hard: true, showEnglish: false },
        { foreign: 'entender', english: 'understand' },
        { foreign: 'escribir', english: 'to write' },
        { foreign: 'escuchar', english: 'to hear / to listen to' },
        { foreign: 'leer', english: 'to read' },
        { foreign: 'Buena suerte.', english: 'Good luck.' },
      ],
    },
    chapter15: {
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
    chapter16: {
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
        {
          foreign: 'A ella le gusta bastante pintar.',
          english: 'She quite likes painting.',
        },
        {
          foreign: 'A Cristina le gusta caminar por la montaña.',
          english: 'Cristina likes to walk in the mountains.',
          hard: true,
        },
        {
          foreign: 'Señora, le importa decirme su nombre?',
          english: 'Madam, would you mind telling me your name?',
          hard: true,
        },
        {
          foreign: 'No me asustan las tormentas. Me parecen muy bonitas.',
          english: 'I’m not afraid of storms. I think they’re very beautiful.',
          hard: true,
        },
        {
          foreign: 'Qué les pasa a los niños? Están nerviosos porque tienen un examen.',
          english: 'What’s wrong with the children? They’re nervous because they have an exam.',
          hard: true,
        },
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
        { foreign: 'inglés', english: 'English (language)' },
        {
          foreign: '¡Disculpe!',
          english: 'Excuse me! (for getting attention or interrupting) (formal)',
          workingOn: true,
        },
        {
          foreign: '¡Disculpa!',
          english: 'Excuse me! (for getting attention or interrupting) (informal)',
          workingOn: true,
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
        {
          foreign: 'Hablo un poco de español.',
          english: 'I speak a little bit of Spanish.',
        },
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
        {
          foreign: '¿De dónde es usted?',
          english: 'Where are you from? (formal)',
        },
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
      lesson6: [
        {
          foreign: 'Me encanta Chile en primavera.',
          english: 'I love Chile in spring.',
        },
        { foreign: 'Me encanta.', english: 'I love it.' },
        { foreign: 'Me encanta la primavera.', english: 'I love spring.' },
        {
          foreign: 'Chile es frío en invierno.',
          english: 'Chile is cold in winter.',
          hard: true,
        },
        { foreign: '¿Es verano?', english: 'Is it summer?' },
        {
          foreign: '¿Es verano en Argentina?',
          english: 'Is it summer in Argentina?',
        },
        {
          foreign: 'Me encanta México en enero.',
          english: 'I love Mexico in January.',
        },
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
        {
          foreign: 'Se llaman Carlos y María.',
          english: 'Their names are Carlos and María.',
        },
        { foreign: 'Soy John.', english: 'I’m John.' },
        {
          foreign: 'No soy María. Me llamo Juana.',
          english: 'I’m not Maria. My name is Juana.',
        },
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
        {
          foreign: 'Mi esposo habla italiano.',
          english: 'My husband speaks Italian.',
        },
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
        {
          foreign: 'Gusto conocerlo.',
          english: 'Pleasure to meet you. (formal) (to a male)',
        },
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
        {
          foreign: 'Mi esposo es policía.',
          english: 'My husband is a police officer.',
        },
        { foreign: 'Él es policía.', english: 'He’s a police officer.' },
        {
          foreign: 'Mi hermana es policía.',
          english: 'My sister is a police officer.',
        },
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
        { foreign: 'periodista', english: 'journalist' },
        {
          foreign: 'Me llamo Juan. Soy periodista.',
          english: 'My name is Juan. I’m a journalist.',
        },
        { foreign: 'empleado', english: 'employee' },
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
          workingOn: true,
        },
        { foreign: 'haces', english: '(you) do (informal)' },
        { foreign: '¿Qué haces tú?', english: 'What do you do? (informal)', workingOn: true },
        {
          foreign: 'Mi esposa y yo somos periodistas. ¿Qué haces tú?',
          english: 'My wife and I are journalists. What do you do? (informal)',
          workingOn: true,
        },
      ],
    },
  },
};

/*
        { foreign: '', english: '' },
*/
