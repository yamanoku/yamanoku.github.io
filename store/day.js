import dayjs from 'dayjs'

export const state = () => {
  return {
    currentYear: ""
  }
}

export const mutations = {
  GET_CURRENT_YEAR (state, year) {
    state.currentYear = year;
  }
}

export const actions = {
  async setDay (ctx) {
    ctx.commit("GET_CURRENT_YEAR", dayjs().year());
  }
}
