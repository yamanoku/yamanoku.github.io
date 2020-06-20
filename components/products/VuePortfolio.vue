<template>
  <article
    id="product:vue-portfolio-template"
    aria-labelledby="product:vue-portfolio-template_heading"
  >
    <h3 id="product:vue-portfolio-template_heading">
      {{ $t("product.vuePortfolio") }}
    </h3>
    <figure
      aria-labelledby="product:vue-portfolio-template_heading"
      aria-describedby="product:vue-portfolio-template_caption"
    >
      <picture>
        <source
          srcset="~/assets/img/product-vue-portfolio-template.webp"
          type="image/webp"
        />
        <img
          src="~/assets/img/product-vue-portfolio-template.png"
          :alt="$t('prefixAlt.screenshot') + $t('product.vuePortfolio')"
        />
      </picture>
      <figcaption id="product:vue-portfolio-template_caption">
        {{ $t("product.description.vuePortfolio") }}
      </figcaption>
    </figure>
    <h4 id="related:vue-portfolio_heading">{{ $t("heading.relatedList") }}</h4>
    <ul role="list" aria-labelledby="related:vue-portfolio_heading">
      <li role="listitem">
        <a
          href="https://vue-portfolio.yamanoku.net/"
          target="_blank"
          rel="noopener"
        >
          {{ $t("product.vuePortfolio") }}
          <open-new-icon />
        </a>
      </li>
      <li role="listitem">
        <a
          href="https://www.figma.com/file/4yN9uOXGISbSTocH23EX8O/vue_portfolio_template-Style?node-id=0%3A1"
          target="_blank"
          rel="noopener"
        >
          {{ $t("product.designFigma") }}
          <image-icon />
        </a>
      </li>
    </ul>
    <h4 id="tech-stack:vue-portfolio_heading">{{ $t("heading.techStack") }}</h4>
    <ul role="list" aria-labelledby="tech-stack:vue-portfolio_heading">
      <li role="listitem">Vue.js</li>
      <li role="listitem">vue-cli</li>
      <li role="listitem">vue-router</li>
      <li role="listitem">webpack</li>
      <li role="listitem">PostCSS</li>
      <li role="listitem">Netlify</li>
    </ul>
  </article>
</template>
