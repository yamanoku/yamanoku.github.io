<template>
  <section id="sns" aria-labelledby="sns_heading">
    <h2 id="sns_heading">
      {{ $t("heading.sns") }}
    </h2>
    <ul role="list">
      <li role="listitem">
        <a href="https://twitter.com/yamanoku" target="_blank" rel="noopener"
          >{{ $t("sns.twitter") }}<open-new-icon
        /></a>
      </li>
      <li role="listitem">
        <a href="https://github.com/yamanoku" target="_blank" rel="noopener"
          >{{ $t("sns.github") }}<open-new-icon
        /></a>
      </li>
      <li role="listitem">
        <a href="https://scrapbox.io/yamanoku/" target="_blank" rel="noopener"
          >{{ $t("sns.scrapbox") }}<open-new-icon
        /></a>
      </li>
      <li role="listitem">
        <a href="https://facebook.com/yamanoku" target="_blank" rel="noopener"
          >{{ $t("sns.facebook") }}<open-new-icon
        /></a>
      </li>
      <li role="listitem">
        {{ $t("sns.tumblr.text") }}
        <ul role="list">
          <li role="listitem">
            <a href="https://yamanoku.tumblr.com" target="_blank" rel="noopener"
              >{{ $t("sns.tumblr.tumblog") }}<open-new-icon
            /></a>
          </li>
          <li role="listitem">
            <a
              href="https://yamagraph.tumblr.com"
              target="_blank"
              rel="noopener"
              >{{ $t("sns.tumblr.artworks") }}<open-new-icon
            /></a>
          </li>
        </ul>
      </li>
    </ul>
  </section>
</template>
