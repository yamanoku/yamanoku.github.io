import { microCMS_key } from "../static/config"

export const state = () => {
  return {
    stage: [],
    study: [],
    write: []
  }
}

export const mutations = {
  SET_STAGE_ARTICLE(state, contents) {
    state.stage = contents
  },
  SET_STUDY_ARTICLE(state, contents) {
    state.study = contents
  },
  SET_WRITE_ARTICLE(state, contents) {
    state.write = contents
  }
}

export const actions = {
  async fetchArticle(ctx) {
    const stage_data = await this.$axios
      .get("https://yamanoku.microcms.io/api/v1/stage", {
        headers: { "X-API-KEY": `${microCMS_key}` }
      })
      .then(response => {
        return response.data.contents
      })
      .catch(() => {
        return []
      })
    ctx.commit("SET_STAGE_ARTICLE", stage_data)
    const study_data = await this.$axios
      .get("https://yamanoku.microcms.io/api/v1/study", {
        headers: { "X-API-KEY": `${microCMS_key}` }
      })
      .then(response => {
        return response.data.contents
      })
      .catch(() => {
        return []
      })
    ctx.commit("SET_STUDY_ARTICLE", study_data)
    const write_data = await this.$axios
      .get("https://yamanoku.microcms.io/api/v1/write", {
        headers: { "X-API-KEY": `${microCMS_key}` }
      })
      .then(response => {
        return response.data.contents
      })
      .catch(() => {
        return []
      })
    ctx.commit("SET_WRITE_ARTICLE", write_data)
  }
}
