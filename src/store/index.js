import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    locale: 'no-NB',
    home2: {
      MAIN_TITLE: 'Europa-quiz',
      SUB_TITLE: 'Kan du navnet på alle landene i Europa?',
      START_GAME: 'Start spill',
      BEST_RESULTS: 'Beste resultater',
      SETTINGS: 'Innstillinger',
    },
    play2: {
      POINTS: 'Poeng',
      CORRECT: 'Riktige',
      FINISHED: 'Ferdig',
      MAP: 'Kart',
      LIST: 'Liste',
      ENTER_COUNTRY: 'Skriv land',
      ANSWER: 'Svar',
    },
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
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
})
