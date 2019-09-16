<template>
  <article id="product:slack-reaction-primoji" aria-labelledby="product:slack-reaction-primoji_heading">
    <h3 id="product:slack-reaction-primoji_heading">
      {{ $t("product.slackprimoji") }}
    </h3>
    <p>{{ $t("product.description.slackprimoji") }}</p>
    <h4 id="related:slack-reaction-primoji_heading">{{$t("heading.relatedList")}}</h4>
    <ul role="list" aria-labelledby="related:slack-reaction-primoji_heading">
      <li role="listitem">
        <a href="https://github.com/yamanoku/slack-reaction-primoji" target="_blank" rel="noopener">
          {{ $t("product.slackprimoji") }}
          <github-icon />
        </a>
      </li>
    </ul>
  </article>
</template>
