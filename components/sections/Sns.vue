<template>
  <section id="sns">
    <h2 class="anchor-heading">
      <a class="anchor" href="#sns">
        <anchor-icon />
      </a>
      {{ $t("heading.sns") }}
    </h2>
    <ul role="list">
      <li role="listitem">
        <a
          href="https://twitter.com/yamanoku"
          target="_blank"
          rel="noopener"
        >{{ $t("sns.twitter") }}</a>
      </li>
      <li role="listitem">
        <a
          href="https://facebook.com/yamanoku"
          target="_blank"
          rel="noopener"
        >{{ $t("sns.facebook") }}</a>
      </li>
      <li role="listitem">
        {{ $t("sns.tumblr.tumblr") }}
        <ul role="list">
          <li role="listitem">
            <a
              href="https://yamanoku.tumblr.com"
              target="_blank"
              rel="noopener"
            >{{ $t("sns.tumblr.tumblog") }}</a>
          </li>
          <li role="listitem">
            <a
              href="https://yamagraph.tumblr.com"
              target="_blank"
              rel="noopener"
            >{{ $t("sns.tumblr.artworks") }}</a>
          </li>
        </ul>
      </li>
      <li role="listitem">
        <a href="https://github.com/yamanoku" target="_blank" rel="noopener">{{ $t("sns.github") }}</a>
      </li>
      <li role="listitem">
        <a href="https://qiita.com/yamanoku" target="_blank" rel="noopener">{{ $t("sns.qiita") }}</a>
      </li>
      <li role="listitem">
        <a href="https://mstdn.jp/@yamanoku" target="_blank" rel="noopener">{{ $t("sns.mstdn") }}</a>
      </li>
      <li role="listitem">
        <a
          href="https://www.instagram.com/yamanoku/"
          target="_blank"
          rel="noopener"
        >{{ $t("sns.instagram") }}</a>
      </li>
      <li role="listitem">
        <a
          href="http://profile.hatena.ne.jp/cardboarder/"
          target="_blank"
          rel="noopener"
        >{{ $t("sns.hatena") }}</a>
      </li>
      <li role="listitem">
        <a
          href="http://steamcommunity.com/id/yamanoku/"
          target="_blank"
          rel="noopener"
        >{{ $t("sns.steam") }}</a>
      </li>
    </ul>
  </section>
</template>
