<template>
  <section id="in-conclusion">
    <h2>{{ $t("vueA11yPage.heading.conclusion") }}</h2>
    <p>
      {{ $t("vueA11yPage.conclusion.desc01") }}
    </p>
    <figure>
      <img
        src="https://live.staticflickr.com/8221/8314288381_ebc4c1b074_c.jpg"
        width="220"
        height="240"
        style="max-width: 220px;"
        :alt="$t('vueA11yPage.conclusion.imgAlt01')"
      />
      <figcaption>
        <a
          href="https://www.w3.org/History/1989/proposal.html"
          target="_blank"
          rel="noopener"
          >The original proposal of the WWW, HTMLized<open-new-icon
        /></a>
      </figcaption>
    </figure>
    <blockquote>
      <p lang="en">
        The power of the Web is in its universality. Access by everyone
        regardless of disability is an essential aspect.
      </p>
      <a
        href="https://www.w3.org/Press/IPO-announce/"
        target="_blank"
        rel="noopener"
        lang="en"
        >Press Release: W3C Launches International Program Office for WAI<open-new-icon
      /></a>
    </blockquote>
    <p>
      {{ $t("vueA11yPage.conclusion.desc02") }}
    </p>
    <blockquote>
      <p lang="en">
        Whatever the device you use for getting your information out, it should
        be the same information.
      </p>
      <a
        href="https://www.wired.com/1999/10/interview-with-the-webs-creator/"
        target="_blank"
        rel="noopener"
        lang="en"
        >Interview with the Web’s Creator | WIRED<open-new-icon
      /></a>
    </blockquote>
    <p>
      {{ $t("vueA11yPage.conclusion.desc03") }}
    </p>
    <p>
      {{ $t("vueA11yPage.conclusion.desc04") }}
    </p>
    <i18n tag="p" path="vueA11yPage.conclusion.desc05">
      <template v-slot:link01>
        <a
          href="https://www.digima-japan.com/knowhow/world/15167.php"
          target="_blank"
          rel="noopener"
        >
          {{ $t("vueA11yPage.conclusion.link01") }}
          <open-new-icon />
        </a>
      </template>
    </i18n>
    <p>
      {{ $t("vueA11yPage.conclusion.desc06") }}
    </p>
    <blockquote>
      <p>
        {{ $t("vueA11yPage.conclusion.quote01") }}
      </p>
      <p>
        {{ $t("vueA11yPage.conclusion.quote02") }}
      </p>
      <p>
        {{ $t("vueA11yPage.conclusion.quote03") }}
      </p>
      <a
        :href="$t('vueA11yPage.conclusion.quote04.link')"
        target="_blank"
        rel="noopener"
      >
        {{ $t("vueA11yPage.conclusion.quote04.text") }}
        <open-new-icon
      /></a>
    </blockquote>
    <h3>{{ $t("vueA11yPage.subHeading.conclusion") }}</h3>
    <p>
      {{ $t("vueA11yPage.conclusion.desc07") }}
    </p>
    <p>
      {{ $t("vueA11yPage.conclusion.desc08") }}
    </p>
    <blockquote>
      <p lang="ja">
        “Start Small, Start
        Now（小さく初めていこう、でも、できることから今やりましょう）”と呼びかけていきたいし、自分自身も肝に銘じておきたい。
      </p>
      <a
        href="https://code.kzakza.com/2019/03/start-small-start-now/"
        target="_blank"
        rel="noopener"
        >アクセシビリティは "Start Small, Start Now" でいこう |
        kzakza<open-new-icon
      /></a>
    </blockquote>
    <p>
      {{ $t("vueA11yPage.conclusion.desc09") }}
    </p>
    <p>
      {{ $t("vueA11yPage.conclusion.desc10") }}
    </p>
  </section>
</template>
