<template>
  <article
    id="product:vue-portfolio-template"
    aria-labelledby="product:vue-portfolio-template_heading"
  >
    <h3 id="product:vue-portfolio-template_heading">{{ $t("product.vuePortfolio") }}</h3>
    <figure
      aria-labelledby="product:vue-portfolio-template_heading"
      aria-describedby="product:vue-portfolio-template_caption"
    >
      <img src="~/assets/img/product-vue-portfolio-template.png" :alt="$t('prefixAlt.screenshot') + $t('product.vuePortfolio')" />
      <figcaption
        id="product:vue-portfolio-template_caption"
      >{{ $t("product.description.vuePortfolio") }}</figcaption>
    </figure>
    <h4 id="related:vue-portfolio_heading">{{$t("heading.relatedList")}}</h4>
    <ul role="list" aria-labelledby="related:vue-portfolio_heading">
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
    <h4 id="tech-stack:vue-portfolio_heading">{{$t("heading.techStack")}}</h4>
    <ul role="list" aria-labelledby="tech-stack:vue-portfolio_heading">
      <li role="listitem">Vue.js</li>
      <li role="listitem">vue-cli</li>
      <li role="listitem">vue-router</li>
      <li role="listitem">webpack</li>
      <li role="listitem">PostCSS</li>
      <li role="listitem">Netlify</li>
    </ul>
    <template v-if="vuePortfolioIssue.length">
      <h4 id="todo:vue-portfolio_heading">{{ $t("heading.todoList") }}</h4>
      <ul role="list" aria-labelledby="todo:vue-portfolio_heading">
        <li role="listitem" v-for="issue in vuePortfolioIssue" :key="issue.id">
          <a :href="issue.html_url" target="_blank" rel="noopener" lang="en">
            {{issue.title}}
            <github-icon />
          </a>
        </li>
      </ul>
    </template>
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
