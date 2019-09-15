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
    const A11Y_TOKEN = process.env.A11YREPO_API_TOKEN
    const a11y_url = `https://api.github.com/repos/yamanoku/accessibility_book-issues/issues?access_token=${A11Y_TOKEN}`
    const a11y_data = await this.$axios.get(a11y_url).then(response => {
      return response.data;
    });
    const a11y = a11y_data.filter(issue => !issue.pull_request);
    ctx.commit("SET_A11Y_ISSUES", a11y);
    const READ_TOKEN = process.env.READINGREPO_API_TOKEN
    const read_url = `https://api.github.com/repos/yamanoku/reading/issues?access_token=${READ_TOKEN}`
    const read_data = await this.$axios.get(read_url).then(response => {
      return response.data;
    });
    const reading = read_data.filter(issue => !issue.pull_request);
    ctx.commit("SET_READ_ISSUES", reading);
    const VUE_TOKEN = process.env.VUEREPO_API_TOKEN
    const vue_url = `https://api.github.com/repos/yamanoku/vue_portfolio_template/issues?access_token=${VUE_TOKEN}`
    const vue_data = await this.$axios.get(vue_url).then(response => {
      return response.data;
    });
    const vuePortfolio = vue_data.filter(issue => !issue.pull_request);
    ctx.commit("SET_VUE_ISSUES", vuePortfolio);
  }
}
