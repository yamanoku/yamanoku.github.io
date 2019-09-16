<template>
  <article id="product:yamanoku-cli" aria-labelledby="product:yamanoku-cli_heading">
    <h3 id="product:yamanoku-cli_heading">{{ $t("product.yamanokuCli") }}</h3>
    <figure
      aria-labelledby="product:yamanoku-cli_heading"
      aria-describedby="product:yamanoku-cli_caption"
    >
      <img src="~/assets/img/product-yamanoku-cli.png" alt />
      <figcaption id="product:yamanoku-cli_caption">{{ $t("product.description.yamanokuCli") }}</figcaption>
    </figure>
    <ul role="list">
      <li role="listitem">
        <a href="https://www.npmjs.com/package/yamanoku" target="_blank" rel="noopener">
          {{ $t("product.yamanokuCli") }}
          <npm-icon />
        </a>
      </li>
    </ul>
    <h4>{{$t("heading.techStack")}}</h4>
    <ul role="list">
      <li role="listitem">React.js</li>
      <li role="listitem">ink</li>
      <li role="listitem">prettier</li>
    </ul>
  </article>
</template>
