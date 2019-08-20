module.exports = (ctx) => {
  return ctx.store.dispatch("qiita/fetchArticles");
}
