<template>
  <section id="web-accessibility-notes:about-accessibility-with-vuejs">
    <h2>{{ $t("vueA11yPage.heading.a11yNote") }}</h2>
    <p>
      {{ $t("vueA11yPage.a11yNote.desc01") }}
    </p>
    <i18n tag="h3" path="vueA11yPage.subHeading.a11yNote.1">
      <template v-slot:div>
        <code>div</code>
      </template>
    </i18n>
    <i18n tag="p" path="vueA11yPage.a11yNote.desc02">
      <template v-slot:strong01>
        <strong>{{ $t("vueA11yPage.a11yNote.strong01") }}</strong>
      </template>
      <template v-slot:div>
        <code>div</code>
      </template>
      <template v-slot:span>
        <code>span</code>
      </template>
    </i18n>
    <blockquote>
      <p>
        {{ $t("vueA11yPage.a11yNote.quote01") }}
      </p>
      <a
        :href="$t('vueA11yPage.a11yNote.quote02.link')"
        target="_blank"
        rel="noopener"
        >{{ $t("vueA11yPage.a11yNote.quote02.text") }}<open-new-icon
      /></a>
    </blockquote>
    <i18n tag="p" path="vueA11yPage.a11yNote.desc03">
      <template v-slot:div>
        <code>div</code>
      </template>
    </i18n>
    <highlightjs lang="html" :code="buttonMarkupBefore" />
    <i18n tag="p" path="vueA11yPage.a11yNote.desc04">
      <template v-slot:button>
        <code>button</code>
      </template>
    </i18n>
    <highlightjs lang="html" :code="buttonMarkupAfter" />
    <h3>{{ $t("vueA11yPage.subHeading.a11yNote.2") }}</h3>
    <p>
      {{ $t("vueA11yPage.a11yNote.desc05") }}
    </p>
    <p>
      {{ $t("vueA11yPage.a11yNote.desc06") }}
    </p>
    <p>
      {{ $t("vueA11yPage.a11yNote.desc07") }}
    </p>
    <a
      href="https://codesandbox.io/s/vue-accessible-modal-9m474]"
      target="_blank"
      rel="noopener"
      lang="en"
      >vue-accessible-modal - CodeSandbox<open-new-icon />
    </a>
    <h3>{{ $t("vueA11yPage.subHeading.a11yNote.3") }}</h3>
    <i18n tag="p" path="vueA11yPage.a11yNote.desc08">
      <template v-slot:abbr01>
        <abbr>{{ $t("vueA11yPage.a11yNote.abbr01") }}</abbr>
      </template>
    </i18n>
    <i18n tag="p" path="vueA11yPage.a11yNote.desc09">
      <template v-slot:ariaLive>
        <code>aria-live</code>
      </template>
      <template v-slot:vueAnnouncer>
        <a
          href="https://github.com/vue-a11y/vue-announcer"
          target="_blank"
          rel="noopener"
          lang="en"
          >vue-announcer<open-new-icon
        /></a>
      </template>
    </i18n>
    <h3>{{ $t("vueA11yPage.subHeading.a11yNote.4") }}</h3>
    <i18n tag="p" path="vueA11yPage.a11yNote.desc10">
      <template v-slot:nuxtConfigJs>
        <code>nuxt.config.js</code>
      </template>
      <template v-slot:htmlAttrs>
        <code>htmlAttrs</code>
      </template>
    </i18n>
    <highlightjs lang="javascript" :code="nuxtJS" />
    <i18n tag="p" path="vueA11yPage.a11yNote.desc11">
      <template v-slot:en>
        <code>en</code>
      </template>
    </i18n>
    <i18n tag="p" path="vueA11yPage.a11yNote.desc12">
      <template v-slot:small01>
        <small>{{ $t("vueA11yPage.a11yNote.small01") }}</small>
      </template>
    </i18n>
    <h3>{{ $t("vueA11yPage.subHeading.a11yNote.5") }}</h3>
    <h4 lang="en">vue-axe</h4>
    <i18n tag="p" path="vueA11yPage.a11yNote.desc13">
      <template v-slot:axeCore>
        <a
          href="https://github.com/dequelabs/axe-core"
          target="_blank"
          rel="noopener"
          lang="en"
          >axe-core<open-new-icon
        /></a>
      </template>
      <template v-slot:LightHouse>
        <a
          href="https://developers.google.com/web/tools/lighthouse/"
          target="_blank"
          rel="noopener"
          lang="en"
          >Lighthouse<open-new-icon
        /></a>
      </template>
    </i18n>
    <figure>
      <picture>
        <source srcset="~/assets/img/vue-a11y-vueaxe.webp" type="image/webp" />
        <img
          src="~/assets/img/vue-a11y-vueaxe.png"
          height="96"
          :alt="$t('vueA11yPage.a11yNote.imgAlt01')"
        />
      </picture>
    </figure>
    <p>{{ $t("vueA11yPage.a11yNote.desc14") }}</p>
    <highlightjs :code="vueAxeInstall" />
    <highlight lang="javascript" :code="vueAxeSetting" />
    <h4 lang="en">Storybook</h4>
    <i18n tag="p" path="vueA11yPage.a11yNote.desc15">
      <template v-slot:storybookAddonA11y>
        <a
          href="https://www.npmjs.com/package/@storybook/addon-a11y"
          target="_blank"
          rel="noopener"
          >storybook-addon-a11y<open-new-icon
        /></a>
      </template>
    </i18n>
    <figure>
      <img
        src="https://raw.githubusercontent.com/storybookjs/storybook/HEAD/addons/a11y/docs/screenshot.png"
        height="360"
        :alt="$t('vueA11yPage.a11yNote.imgAlt02')"
      />
    </figure>
    <h4 lang="en">eslint-plugin-vuejs-accessibility</h4>
    <p>{{ $t("vueA11yPage.a11yNote.desc16") }}</p>
    <i18n tag="p" path="vueA11yPage.a11yNote.desc17">
      <template v-slot:img>
        <code>img</code>
      </template>
      <template v-slot:alt>
        <code>alt</code>
      </template>
      <template v-slot:label>
        <code>label</code>
      </template>
    </i18n>
    <highlightjs lang="html" :code="eslintEmoji" />
    <p>{{ $t("vueA11yPage.a11yNote.desc18") }}</p>
    <h4>{{ $t("vueA11yPage.subHeading.a11yNote.test.4") }}</h4>
    <p>{{ $t("vueA11yPage.a11yNote.desc19") }}</p>
    <a
      href="https://accessibility.blog.gov.uk/2017/02/24/what-we-found-when-we-tested-tools-on-the-worlds-least-accessible-webpage/"
      target="_blank"
      rel="noopener"
      lang="en"
      >What we found when we tested tools on the world’s least-accessible
      webpage - Accessibility in government<open-new-icon
    /></a>
    <p>{{ $t("vueA11yPage.a11yNote.desc20") }}</p>
    <i18n tag="p" path="vueA11yPage.a11yNote.desc21">
      <template v-slot:abbr02>
        <abbr lang="en">Web Content Accessibility Guidelines</abbr>
      </template>
    </i18n>
    <a
      href="https://waic.jp/docs/WCAG21/"
      target="_blank"
      rel="noopener"
      lang="en"
      >Web Content Accessibility Guidelines (WCAG) 2.1<open-new-icon
    /></a>
    <p>{{ $t("vueA11yPage.a11yNote.desc22") }}</p>
    <a
      href="https://openameba.github.io/a11y-guidelines/"
      target="_blank"
      rel="noopener"
      lang="en"
      >Ameba Accessibility Guidelines<open-new-icon
    /></a>
  </section>
</template>

<script>
export default {
  data() {
    return {
      buttonMarkupBefore: `
        <template>
          <div role="button" tabindex="0" @click="handleClick" @keyup="handleKeyUp">button</div>
        </template>
      `,
      buttonMarkupAfter: `
        <template>
          <button type="button">button</button>
        </template>
      `,
      nuxtJS: `
        module.exports = {
            head: {
              htmlAttrs: {
                lang: 'ja'
              }
            }
        }
      `,
      vueAxeInstall: `
        # NPM
        $ npm install -D axe-core vue-axe

        # Yarn
        $ yarn add -D axe-core vue-axe
      `,
      vueAxeSetting: `
        import Vue from 'vue'

        if (process.env.NODE_ENV !== 'production') { // development environment
          const VueAxe = require('vue-axe').default
          const AXE_LOCALE_JA = require('axe-core/locales/ja.json') // locale setting

          Vue.use(VueAxe, {
            config: {
              locale: AXE_LOCALE_JA
            },
            clearConsoleOnUpdate: false // Clears the console each time vue-axe runs
          })
        }
      `,
      eslintEmoji: `
        <!-- Fail -->
        <span>🐼</span>
        <!-- Good -->
        <span role="img" aria-label="Panda">🐼</span>
      `
    };
  }
};
</script>

<style>
code:not(.hljs) {
  line-height: 1;
  padding: 0;
}
iframe.vue-accessible-modal {
  width: 100%;
  height: 500px;
  border: 0;
  border-radius: 4px;
  overflow: hidden;
}
</style>
