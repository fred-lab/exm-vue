/**
 * Import Vuex
 */
import Vue from 'vue';
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    quiz:{
      'question1':{
        'id': 1,
        'type' : 'multiple',
        'question': 'Question 1 (choix multiples)',
        'answers' : [
          {
            'id': 1,
            'title': 'Ceci est une mauvaise réponse',
            'value' : false
          },{
            'id': 2,
            'title': 'Ceci est une bonne réponse, mais ce n\'est pas la seule',
            'value' : true
          },
          {
            'id': 3,
            'title': 'Ceci est une mauvaise réponse',
            'value' : false
          },{
            'id': 4,
            'title': 'Ceci est une bonne réponse, mais ce n\'est pas la seule',
            'value' : true
          }
        ]
      },
      'question2':{
        'id': 2,
        'type' : 'single',
        'question': 'Question 2 (choix unique)',
        'answers' : [
          {
            'id': 1,
            'title': 'Ceci est une mauvaise réponse',
            'value' : false
          },{
            'id': 2,
            'title': 'Ceci est une bonne réponse, et c\'est la seule',
            'value' : true
          },
          {
            'id': 3,
            'title': 'Ceci est une mauvaise réponse',
            'value' : false
          },{

            'id': 4,
            'title': 'Ceci est une mauvaise réponse',
            'value' : false
          }
        ]
      },
      'question3':{
        'id': 3,
        'type' : 'single',
        'question': 'Question 3 (choix unique)',
        'answers' : [
          {
            'id': 1,
            'title': 'Ceci est une mauvaise réponse',
            'value' : false
          },{
            'id': 2,
            'title': 'Ceci est une bonne réponse, et c\'est la seule',
            'value' : true
          },
          {
            'id': 3,
            'title': 'Ceci est une mauvaise réponse',
            'value' : false
          },{
            'id': 4,
            'title': 'Ceci est une mauvaise réponse',
            'value' : false
          }
        ]
      },
      'question4':{
        'id': 4,
        'type' : 'multiple',
        'question': 'Question 4 (choix multiples)',
        'answers' : [
          {
            'id': 1,
            'title': 'Ceci est une mauvaise réponse',
            'value' : false
          },{
            'id': 2,
            'title': 'Ceci est une bonne réponse, mais ce n\'est pas la seule',
            'value' : true
          },
          {
            'id': 3,
            'title': 'Ceci est une mauvaise réponse',
            'value' : false
          },{
            'id': 4,
            'title': 'Ceci est une bonne réponse, mais ce n\'est pas la seule',
            'value' : true
          }
        ]
      },
      'question5':{
        'id': 5,
        'type' : 'single',
        'question': 'Question 5 (choix unique)',
        'answers' : [
          {
            'id': 1,
            'title': 'Ceci est une mauvaise réponse',
            'value' : false
          },{
            'id': 2,
            'title': 'Ceci est une bonne réponse, et c\'est la seule',
            'value' : true
          },
          {
            'id': 3,
            'title': 'Ceci est une mauvaise réponse',
            'value' : false
          },{
            'id': 4,
            'title': 'Ceci est une mauvaise réponse',
            'value' : false
          }
        ]
      }
    },
    answers:[],
    score: 0,
    visibility: 1,
    displayResults: false
  },
  getters:{
    getQuiz: state => state.quiz,
    getQuizLength: state => Object.keys(state.quiz).length,
    getVisibility: state => state.visibility,
    getScore: (state, getters) => (state.score * 100) / (getters.getQuizLength*20),
    getResults: state => state.displayResults
  },
  mutations:{
    SET_ANSWER(state, array){
      state.answers.push(array)
    },
    SET_SCORE(state, value){
      state.score += value
    },
    SET_VISIBILITY(state){
      if(state.visibility < Object.keys(state.quiz).length){
        state.visibility++
      }
    },
    SHOW_RESULTS(state){
      if(state.visibility == Object.keys(state.quiz).length){
        state.displayResults = true
      }
    }
  },
  actions: {
    setAnswers({commit}, array){
      commit('SET_ANSWER', array)
    },
    setScore({commit}, value){
      commit('SET_SCORE', value)
    },
    setVisibility({commit}){
      commit('SET_VISIBILITY')
    },
    showResults({commit, getters}){
      commit('SHOW_RESULTS')
      return getters.getResults
    }
  }
})
