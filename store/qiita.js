import axios from "axios";

export const state = () => {
  return {
    articles: [],
  }
}

export const mutations = {
  SET_ARTICLES (state, issues) {
    state.articles = issues
  },
}

export const actions = {
  async fetchArticles (ctx) {
    const qiita_url = "https://qiita.com/api/v2/users/yamanoku/items"
    const qiita_data = await axios.get(qiita_url, {
      params: {
        page: 1,
        per_page: 10
      }
    }).then(response => {
      return response.data;
    });
    const qiita = qiita_data.filter(issue => !issue.pull_request);
    ctx.commit("SET_ARTICLES", qiita);
  }
}
