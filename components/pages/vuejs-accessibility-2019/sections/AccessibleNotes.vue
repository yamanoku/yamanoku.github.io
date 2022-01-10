<template>
  <section id="web-accessibility-notes:about-accessibility-with-vuejs-2019">
    <global-heading-component
      :heading-level="2"
      :heading-text="$t('vueA11yPage2019.heading.a11yNote')"
    />
    <p>
      {{ $t("vueA11yPage2019.a11yNote.desc01") }}
    </p>
    <i18n tag="h3" path="vueA11yPage2019.subHeading.a11yNote.note01">
      <template v-slot:div>
        <code>div</code>
      </template>
    </i18n>
    <i18n tag="p" path="vueA11yPage2019.a11yNote.desc02">
      <template v-slot:strong01>
        <strong>{{ $t("vueA11yPage2019.a11yNote.strong01") }}</strong>
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
        {{ $t("vueA11yPage2019.a11yNote.quote01") }}
      </p>
      <global-link-component :link-object="wcagNoteLink" />
    </blockquote>
    <i18n tag="p" path="vueA11yPage2019.a11yNote.desc03">
      <template v-slot:div>
        <code>div</code>
      </template>
    </i18n>
    <highlightjs lang="html" :code="buttonMarkupBefore" />
    <i18n tag="p" path="vueA11yPage2019.a11yNote.desc04">
      <template v-slot:button>
        <code>button</code>
      </template>
    </i18n>
    <highlightjs lang="html" :code="buttonMarkupAfter" />
    <global-heading-component
      :heading-level="3"
      :heading-text="$t('vueA11yPage2019.subHeading.a11yNote.note02')"
    />
    <p>
      {{ $t("vueA11yPage2019.a11yNote.desc05") }}
    </p>
    <p>
      {{ $t("vueA11yPage2019.a11yNote.desc06") }}
    </p>
    <p>
      {{ $t("vueA11yPage2019.a11yNote.desc07") }}
    </p>
    <global-link-component lang="en" :link-object="vueAccessibleModalLink" />
    <global-heading-component
      :heading-level="3"
      :heading-text="$t('vueA11yPage2019.subHeading.a11yNote.note03')"
    />
    <i18n tag="p" path="vueA11yPage2019.a11yNote.desc08">
      <template v-slot:abbr01>
        <abbr>{{ $t("vueA11yPage2019.a11yNote.abbr01") }}</abbr>
      </template>
    </i18n>
    <i18n tag="p" path="vueA11yPage2019.a11yNote.desc09">
      <template v-slot:ariaLive>
        <code>aria-live</code>
      </template>
      <template v-slot:vueAnnouncer>
        <global-link-component lang="en" :link-object="vueAnnouncerLink" />
      </template>
    </i18n>
    <global-heading-component
      :heading-level="3"
      :heading-text="$t('vueA11yPage2019.subHeading.a11yNote.note04')"
    />
    <i18n tag="p" path="vueA11yPage2019.a11yNote.desc10">
      <template v-slot:nuxtConfigJs>
        <code>nuxt.config.js</code>
      </template>
      <template v-slot:htmlAttrs>
        <code>htmlAttrs</code>
      </template>
    </i18n>
    <highlightjs lang="javascript" :code="nuxtJS" />
    <i18n tag="p" path="vueA11yPage2019.a11yNote.desc11">
      <template v-slot:en>
        <code>en</code>
      </template>
    </i18n>
    <i18n tag="p" path="vueA11yPage2019.a11yNote.desc12">
      <template v-slot:small01>
        <small>{{ $t("vueA11yPage2019.a11yNote.small01") }}</small>
      </template>
    </i18n>
    <global-heading-component
      :heading-level="3"
      :heading-text="$t('vueA11yPage2019.subHeading.a11yNote.note05')"
    />
    <global-heading-component
      lang="en"
      :heading-level="4"
      heading-text="vue-axe"
    />
    <i18n tag="p" path="vueA11yPage2019.a11yNote.desc13">
      <template v-slot:axeCore>
        <global-link-component lang="en" :link-object="axeCoreLink" />
      </template>
      <template v-slot:LightHouse>
        <global-link-component :link-object="lighthouseLink" />
      </template>
    </i18n>
    <figure>
      <picture>
        <source
          srcset="~/assets/img/vue-a11y-2019-vueaxe.webp"
          type="image/webp"
        />
        <img
          src="~/assets/img/vue-a11y-2019-vueaxe.png"
          height="96"
          :alt="$t('vueA11yPage2019.a11yNote.imgAlt01')"
        />
      </picture>
    </figure>
    <p>{{ $t("vueA11yPage2019.a11yNote.desc14") }}</p>
    <highlightjs lang="shell" :code="vueAxeInstall" />
    <highlightjs lang="javascript" :code="vueAxeSetting" />
    <global-heading-component :heading-level="4" heading-text="Storybook" />
    <i18n tag="p" path="vueA11yPage2019.a11yNote.desc15">
      <template v-slot:storybookAddonA11y>
        <global-link-component :link-object="storybookAddonLink" />
      </template>
    </i18n>
    <figure>
      <img
        src="https://raw.githubusercontent.com/storybookjs/storybook/HEAD/addons/a11y/docs/screenshot.png"
        height="360"
        :alt="$t('vueA11yPage2019.a11yNote.imgAlt02')"
      />
    </figure>
    <global-heading-component
      lang="en"
      :heading-level="4"
      heading-text="eslint-plugin-vuejs-accessibility"
    />
    <p>{{ $t("vueA11yPage2019.a11yNote.desc16") }}</p>
    <i18n tag="p" path="vueA11yPage2019.a11yNote.desc17">
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
    <p>{{ $t("vueA11yPage2019.a11yNote.desc18") }}</p>
    <global-heading-component
      :heading-level="4"
      :heading-text="$t('vueA11yPage2019.subHeading.a11yNote.test.test04')"
    />
    <p>{{ $t("vueA11yPage2019.a11yNote.desc19") }}</p>
    <global-link-component :link-object="govUkLink" />
    <p>{{ $t("vueA11yPage2019.a11yNote.desc20") }}</p>
    <i18n tag="p" path="vueA11yPage2019.a11yNote.desc21">
      <template v-slot:abbr02>
        <abbr>Web Content Accessibility Guidelines</abbr>
      </template>
    </i18n>
    <global-link-component :link-object="guidelineLink01" />
    <p>{{ $t("vueA11yPage2019.a11yNote.desc22") }}</p>
    <global-link-component :link-object="guidelineLink02" />
  </section>
</template>

<script>
export default {
  name: "VueA11y2019AccessibleNotes",
  data() {
    return {
      wcagNoteLink: {
        title: this.$t("vueA11yPage2019.a11yNote.quote02.text"),
        url: this.$t("vueA11yPage2019.a11yNote.quote02.link"),
        isExternal: true
      },
      vueAccessibleModalLink: {
        title: "vue-accessible-modal - CodeSandbox",
        url: "https://codesandbox.io/s/vue-accessible-modal-9m474",
        isExternal: true
      },
      vueAnnouncerLink: {
        title: "vue-announcer",
        url: "https://github.com/vue-a11y/vue-announcer",
        isExternal: true,
        isGitHubLink: true
      },
      axeCoreLink: {
        title: "axe-core",
        url: "https://github.com/dequelabs/axe-core",
        isExternal: true,
        isGitHubLink: true
      },
      lighthouseLink: {
        title: "Lighthouse",
        url: "https://developers.google.com/web/tools/lighthouse/",
        isExternal: true
      },
      storybookAddonLink: {
        title: "storybook-addon-a11y",
        url: "https://www.npmjs.com/package/@storybook/addon-a11y",
        isExternal: true
      },
      govUkLink: {
        title:
          "What we found when we tested tools on the world’s least-accessible webpage - Accessibility in government",
        url: "https://accessibility.blog.gov.uk/2017/02/24/what-we-found-when-we-tested-tools-on-the-worlds-least-accessible-webpage/",
        isExternal: true
      },
      guidelineLink01: {
        title: "Web Content Accessibility Guidelines (WCAG) 2.1",
        url: "https://waic.jp/docs/WCAG21/",
        isExternal: true
      },
      guidelineLink02: {
        title: "Ameba Accessibility Guidelines",
        url: "https://openameba.github.io/a11y-guidelines/",
        isExternal: true
      },
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
</style>
