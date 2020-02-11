module.exports = ctx => {
  return ctx.store.dispatch("github/fetchIssues")
}
