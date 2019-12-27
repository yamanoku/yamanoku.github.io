import { a11y_token, read_token, vue_token } from "../static/config";

export const state = () => {
  return {
    a11y_issues: [],
    read_issues: [],
    vue_issues: []
  }
}

export const mutations = {
  SET_A11Y_ISSUES (state, issues) {
    state.a11y_issues = issues
  },
  SET_READ_ISSUES (state, issues) {
    state.read_issues = issues
  },
  SET_VUE_ISSUES (state, issues) {
    state.vue_issues = issues
  }
}

export const actions = {
  async fetchIssues (ctx) {
    const a11y_url = `https://api.github.com/repos/yamanoku/accessibility_book-issues/issues?access_token=${a11y_token}`
    const a11y_data = await this.$axios.get(a11y_url).then(response => {
      return response.data;
    });
    const a11y = a11y_data.filter(issue => !issue.pull_request);
    ctx.commit("SET_A11Y_ISSUES", a11y);
    const read_url = `https://api.github.com/repos/yamanoku/reading/issues?access_token=${read_token}`
    const read_data = await this.$axios.get(read_url).then(response => {
      return response.data;
    });
    const reading = read_data.filter(issue => !issue.pull_request);
    ctx.commit("SET_READ_ISSUES", reading);
    const vue_url = `https://api.github.com/repos/yamanoku/vue_portfolio_template/issues?access_token=${vue_token}`
    const vue_data = await this.$axios.get(vue_url).then(response => {
      return response.data;
    });
    const vuePortfolio = vue_data.filter(issue => !issue.pull_request);
    ctx.commit("SET_VUE_ISSUES", vuePortfolio);
  }
}
