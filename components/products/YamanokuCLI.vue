<template>
  <article id="yamanoku_cli">
    <h4 class="anchor-heading">
      <a class="anchor" href="#yamanoku_cli">
        <anchor-icon />
      </a>
      {{ $t("product.yamanokuCli") }}
    </h4>
    <p>{{ $t("product.description.yamanokuCli") }}</p>
    <ul role="list">
      <li role="listitem">
        <a href="https://www.npmjs.com/package/yamanoku" target="_blank" rel="noopener">
          {{ $t("product.yamanokuCli") }}
          <npm-icon />
        </a>
      </li>
    </ul>
    <h5>{{$t("heading.techStack")}}</h5>
    <ul role="list">
      <li role="listitem">React.js</li>
      <li role="listitem">ink</li>
      <li role="listitem">prettier</li>
    </ul>
  </article>
</template>
