<template>
  <article id="product:reading" aria-labelledby="product:reading_heading">
    <h3 id="product:reading_heading">{{ $t("product.reading") }}</h3>
    <figure aria-labelledby="product:reading_heading" aria-describedby="product:reading_caption">
      <img src="~/assets/img/product-reading.png" alt />
      <figcaption id="product:reading_caption">{{ $t("product.description.reading") }}</figcaption>
    </figure>
    <h4 id="related:reading_heading">{{$t("heading.relatedList")}}</h4>
    <ul role="list" aria-labelledby="related:reading_heading">
      <li role="listitem">
        <a href="https://reading.yamanoku.net" target="_blank" rel="noopener">
          {{ $t("product.reading") }}
          <open-new-icon />
        </a>
      </li>
      <li role="listitem">
        <a
          href="https://scrapbox.io/yamanoku/Reading%E2%80%A6#5b1f8344c2cd3f000095e9c0"
          target="_blank"
          rel="noopener"
        >
          {{ $t("product.updateInfo") }}
          <article-icon />
        </a>
      </li>
      <li role="listitem">
        <a
          href="https://www.figma.com/file/IHsJKRaJXepsqcbX91iQ6YNV/Components?node-id=44%3A23"
          target="_blank"
          rel="noopener"
        >
          {{ $t("product.designFigma") }}
          <image-icon />
        </a>
      </li>
    </ul>
    <h4 id="teck-stack:reading_heading">{{$t("heading.techStack")}}</h4>
    <ul role="list" aria-labelledby="teck-stack:reading_heading">
      <li role="listitem">Nuxt.js</li>
      <li role="listitem">Nuxt PWA</li>
      <li role="listitem">vue-paginate</li>
      <li role="listitem">axios</li>
      <li role="listitem">modern-normalize</li>
      <li role="listitem">AWS API Gateway</li>
      <li role="listitem">AWS Lambda Function</li>
      <li role="listitem">Netlify</li>
      <li role="listitem">CircleCI</li>
    </ul>
    <template v-if="readingIssue.length">
      <h4 id="todo:reading_heading">{{ $t("heading.todoList") }}</h4>
      <ul role="list" aria-labelledby="todo:reading_heading">
        <li role="listitem" v-for="issue in readingIssue" :key="issue.id">
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
      readingIssue: this.$store.state.github.read_issues
    };
  }
};
</script>
