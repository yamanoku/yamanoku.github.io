<template>
  <article id="product:qiita-code-style-before" aria-labelledby="product:qiita-code-style-before_heading">
    <h3 id="product:qiita-code-style-before_heading">
      {{ $t("product.qiitaCode") }}
    </h3>
    <p>{{ $t("product.description.qiitaCode") }}</p>
    <h4 id="related:qiita-code-style-before_heading">{{$t("heading.relatedList")}}</h4>
    <ul role="list" aria-labelledby="related:qiita-code-style-before_heading">
      <li role="listitem">
        <a
          href="https://github.com/yamanoku/Qiita_Code-Style_Before"
          target="_blank"
          rel="noopener"
        >
          {{ $t("product.qiitaCode") }}
          <github-icon />
        </a>
      </li>
      <li role="listitem">
        <a
          href="https://qiita.com/yamanoku/items/da159c2c12aa68f7586f"
          target="_blank"
          rel="noopener"
          lang="ja"
        >
          Qiita記事のコードスタイル部分を以前のやつに戻すChrome Extension作った
          <article-icon />
        </a>
      </li>
    </ul>
  </article>
</template>
