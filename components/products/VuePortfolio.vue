<template>
  <article id="product:vue-portfolio-template" aria-describedby="product:vue-portfolio-template_heading">
    <h3 class="anchor-heading" id="product:vue-portfolio-template_heading">
      <a class="anchor" href="#vue-portfolio-template">
        <anchor-icon />
      </a>
      {{ $t("product.vuePortfolio") }}
    </h3>
    <p>{{ $t("product.description.vuePortfolio") }}</p>
    <ul role="list">
      <li role="listitem">
        <a href="https://vue-portfolio.yamanoku.net/" target="_blank" rel="noopener">
          {{ $t("product.vuePortfolio") }}
          <open-new-icon />
        </a>
      </li>
      <li role="listitem">
        <a
          href="https://www.figma.com/file/4yN9uOXGISbSTocH23EX8O/Style?node-id=0%3A1"
          target="_blank"
          rel="noopener"
        >
          {{ $t("product.designFigma") }}
          <image-icon />
        </a>
      </li>
    </ul>
    <h4>{{$t("heading.techStack")}}</h4>
    <ul role="list">
      <li role="listitem">Vue.js</li>
      <li role="listitem">vue-cli</li>
      <li role="listitem">vue-router</li>
      <li role="listitem">webpack</li>
      <li role="listitem">PostCSS</li>
      <li role="listitem">Netlify</li>
    </ul>
    <h4 aria-describedby="vue_portfolio_issue">{{ $t("heading.todoList") }}</h4>
    <ul role="list" id="vue_portfolio_issue">
      <li role="listitem" v-for="issue in vuePortfolioIssue" :key="issue.id">
        <a :href="issue.html_url" target="_blank" rel="noopener" lang="en">
          {{issue.title}}
          <github-icon />
        </a>
      </li>
    </ul>
  </article>
</template>

<script>
export default {
  data() {
    return {
      vuePortfolioIssue: this.$store.state.github.vue_issues
    };
  }
};
</script>
