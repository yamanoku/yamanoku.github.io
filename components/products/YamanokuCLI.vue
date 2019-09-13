<template>
  <article id="product:yamanoku-cli" aria-labelledby="product:yamanoku-cli_heading">
    <h3 id="product:yamanoku-cli_heading">
      {{ $t("product.yamanokuCli") }}
    </h3>
    <p>{{ $t("product.description.yamanokuCli") }}</p>
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
