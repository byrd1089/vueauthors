import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  count: 0,
  appTitle: "Author's Application",
  appVersion: '0.0.1',
  people: [],
  person: {}
}

const getters = {
  people: state => { return state.people },
  person: state => { return state.person }
}

const actions = {
  SET_PEOPLE_LIST: function ({ commit }) {
    const peopleList = [
      { id: 1, fname: 'J.R.R', lname: 'Tolkein', email: 'tolkein@middleearth.com' },
      { id: 2, fname: 'Raymond', lname: 'Fiest', email: 'raymond.fiest@midkemia.net' },
      { id: 3, fname: 'Daivd', lname: 'Eddings', email: 'david.eddings@belgariad.org' },
      { id: 4, fname: 'George', lname: 'Lucas', email: 'george.jucas@starwars.com' }
    ]
    commit('SET_PERSON_LIST', peopleList)
  },
  SET_NEW_PERSON: function ({ commit }) {
    commit('SET_NEW_PERSON')
  },
  SET_CURRENT_PERSON: function ({ commit }) {
    commit('SET_CURRENT_PERSON')
  },
  EDIT_PERSON: function({ commit }, event){
    commit('EDIT_PERSON', event)
  },
  SAVE_PERSON: function({ commit }){
    commit('SAVE_PERSON')
  },
  DELETE_PERSON: function({ commit }, id){
    commit('DELETE_PERSON', id)
  },

  incrementAsync ({commit}) {
    setTimeout(() => {
      commit('INCREMENT')
    }, 200)
  }
}

const mutations = {
  INCREMENT (state) { state.count++ },
  SET_PERSON_LIST (state, list) {
    if (state.people.length === 0) {
      state.people = list
    }
  },
  SET_CURRENT_PERSON (state) {
    if (state.route.name === 'new') {
      state.person = {
        // the current person is a new person
        id: null,
        fname: '',
        lname: '',
        email: ''
      }
    } else {
      // the current person is a clone of the target person
      let routeId = Number(state.route.params.id)
      let targetIdx = state.people.map((item) => { return item.id }).indexOf(routeId)
      let targetPerson = state.people[ targetIdx ]
      let clone = (JSON.parse(JSON.stringify(targetPerson)));
      state.person = clone
    }
  },
  EDIT_PERSON (state, event) {
    let field = event.target.id
    let value = event.target.value
    // console.log('EDIT_PERSON', field, value)
    state.person[field] = value
  },
  DELETE_PERSON (state, id) {
    let targetId = Number(id)
    state.people.splice(state.people.map((item) => { return item.id }).indexOf(targetId), 1)
    state.person = {}
  },
  SAVE_PERSON (state) {
    if(state.person.id) {  // if the current person has an id, update the people list
      let targetIdx = state.people.map((item) => { return item.id }).indexOf(state.person.id)
      state.people[ targetIdx ] = state.person
    } else { // this is a new person, assign an id and add to the list
      let len = state.people.length
      // if the list is empty, the index is 1, else, increment the last id
      let lastId = len === 0 ? 0 : state.people[state.people.length - 1].id
      state.person.id = lastId + 1
      state.people.push(state.person)
    }
  },
  SET_ACTIVE_PERSON (state, person) {
    state.person = person
  }
}

const store = new Vuex.Store({
  getters,
  state,
  mutations,
  actions
})

export default store
