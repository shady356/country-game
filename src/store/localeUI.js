export function getLocale(code) {
  switch (code) {
    case 'no': return {
      home: {
        MAIN_TITLE: 'Europa-quiz',
        SUB_TITLE: 'Kan du navnet på alle landene i Europa?',
        START_GAME: 'Start spill',
        BEST_RESULTS: 'Beste resultater',
        SETTINGS: 'Innstillinger',
      },
      play: {
        POINTS: 'Poeng',
        CORRECT: 'Riktige',
        FINISHED: 'Ferdig',
        MAP: 'Kart',
        LIST: 'Liste',
        ENTER_COUNTRY: 'Skriv land',
        ANSWER: 'Svar',
      },
    }
    case 'dk': return {
      home: {
        MAIN_TITLE: 'Europa-quiz',
        SUB_TITLE: 'Kan du navnet på alle landene i Europa?',
        START_GAME: 'Start spil',
        BEST_RESULTS: 'Bedste resultater',
        SETTINGS: 'Indstillinger',
      },
      play: {
        POINTS: 'Point',
        CORRECT: 'Rigtige',
        FINISHED: 'Færdig',
        MAP: 'Kort',
        LIST: 'Liste',
        ENTER_COUNTRY: 'Skriv land',
        ANSWER: 'Svar',
      },
    }
  }
}
