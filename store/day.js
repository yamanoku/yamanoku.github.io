import dayjs from "dayjs"
import { portfolio_token } from "../static/config"

export const state = () => {
  return {
    currentYear: "",
    pushTime: "",
    createTime: ""
  }
}

export const mutations = {
  GET_CURRENT_YEAR(state, year) {
    state.currentYear = year
  },
  SET_PUSH_TIME(state, time) {
    state.pushTime = time
  },
  SET_CREATE_TIME(state, time) {
    state.createTime = time
  }
}

export const actions = {
  async setDay(ctx) {
    ctx.commit("GET_CURRENT_YEAR", dayjs().year())
    const portfolioURL = `https://api.github.com/repos/yamanoku/yamanoku.github.io?access_token=${portfolio_token}`
    const portfolioData = await this.$axios.get(portfolioURL).then(response => {
      return response.data
    })
    ctx.commit("SET_PUSH_TIME", portfolioData.updated_at)
    ctx.commit("SET_CREATE_TIME", portfolioData.created_at)
  }
}
