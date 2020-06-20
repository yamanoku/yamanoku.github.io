export const state = () => ({
  toggleRhythm: false
})

export const mutations = {
  TOGGLE_RHYTHM(state) {
    state.toggleRhythm = !state.toggleRhythm
  }
}

export const actions = {
  toggleRhythm({ commit }) {
    commit("TOGGLE_RHYTHM")
  }
}

export const getters = {
  toggleRhythm: state => state.toggleRhythm
}
