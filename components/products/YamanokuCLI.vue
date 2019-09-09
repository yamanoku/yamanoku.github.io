<template>
  <article id="yamanoku-cli" aria-describedby="product:yamanoku-cli_heading">
    <h3 class="anchor-heading" id="product:yamanoku-cli_heading">
      <a class="anchor" href="#yamanoku-cli">
        <anchor-icon />
      </a>
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
