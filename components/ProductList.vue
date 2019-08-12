<template>
  <ul role="list">
    <li role="listitem">
      {{ $t("product.wafb.title") }}
      <ul role="list">
        <li role="listitem">
          <a
            href="https://booth.pm/ja/items/1044446"
            target="_blank"
            rel="noopener"
          >{{ $t("product.wafb.boothLink") }}</a>
        </li>
        <li role="listitem">
          <a
            href="https://note.mu/yamanoku/n/n3487a344ff84"
            target="_blank"
            rel="noopener"
          >{{ $t("product.wafb.noteLink") }}</a>
        </li>
        <li role="listitem" v-if="this.$i18n.locale !== 'ja'">
          <em>{{ $t("onlyJPText") }}</em>
        </li>
      </ul>
    </li>
    <li role="listitem">
      <a href="https://reading.yamanoku.net">{{ $t("product.reading") }}</a>
    </li>
    <li role="listitem">
      <a
        href="https://vue-portfolio.yamanoku.net/"
        target="_blank"
        rel="noopener"
      >{{ $t("product.vuePortfolio") }}</a>
    </li>
    <li role="listitem">
      <a href="https://www.npmjs.com/package/yamanoku">
        {{ $t("product.yamanokuCli") }}
        <npm-icon />
      </a>
    </li>
    <li role="listitem">
      {{ $t("product.crowding") }}
      <ul role="list">
        <li role="listitem">
          <a href="/birthday-countdown-js">{{ $t("product.birthdayCount") }}</a>
        </li>
        <li role="listitem">
          <a href="/glitchrange">{{ $t("product.glitch") }}</a>
        </li>
        <li role="listitem">
          <a href="/canvas_browser-crash.js">{{ $t("product.browserCrash") }}</a>
        </li>
        <li role="listitem">
          <a href="/rolling-sushi">{{ $t("product.sushi") }}</a>
        </li>
      </ul>
    </li>
    <li role="listitem">
      <a href="https://github.com/yamanoku/slack-reaction-primoji" target="_blank" rel="noopener">
        {{ $t("product.slackprimoji") }}
        <github-icon />
      </a>
    </li>
    <li role="listitem">
      <a href="https://github.com/yamanoku/Qiita_Code-Style_Before" target="_blank" rel="noopener">
        {{ $t("product.qiitaCode") }}
        <github-icon />
      </a>
    </li>
  </ul>
</template>
