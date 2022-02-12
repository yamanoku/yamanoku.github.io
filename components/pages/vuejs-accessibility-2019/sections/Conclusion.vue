<template>
  <section id="in-conclusion:about-accessibility-with-vuejs-2019">
    <global-heading-component
      :heading-level="2"
      :heading-text="$t('vueA11yPage2019.heading.conclusion')"
    />
    <p>
      {{ $t("vueA11yPage2019.conclusion.desc01") }}
    </p>
    <figure>
      <img
        src="https://live.staticflickr.com/8221/8314288381_ebc4c1b074_c.jpg"
        width="220"
        height="240"
        style="max-width: 220px"
        :alt="$t('vueA11yPage2019.conclusion.imgAlt01')"
        decoding="async"
      />
      <figcaption>
        <global-link-component :link-object="proposalLink" />
      </figcaption>
    </figure>
    <blockquote lang="en">
      <p>
        The power of the Web is in its universality. Access by everyone
        regardless of disability is an essential aspect.
      </p>
      <global-link-component :link-object="pressReleaseLink" />
    </blockquote>
    <p>
      {{ $t("vueA11yPage2019.conclusion.desc02") }}
    </p>
    <blockquote lang="en">
      <p>
        Whatever the device you use for getting your information out, it should
        be the same information.
      </p>
      <global-link-component :link-object="wiredLink" />
    </blockquote>
    <p>
      {{ $t("vueA11yPage2019.conclusion.desc03") }}
    </p>
    <p>
      {{ $t("vueA11yPage2019.conclusion.desc04") }}
    </p>
    <i18n tag="p" path="vueA11yPage2019.conclusion.desc05">
      <template v-slot:link01>
        <global-link-component :link-object="digimaJapanLink" />
      </template>
    </i18n>
    <p>
      {{ $t("vueA11yPage2019.conclusion.desc06") }}
    </p>
    <blockquote>
      <p>
        {{ $t("vueA11yPage2019.conclusion.quote01") }}
      </p>
      <p>
        {{ $t("vueA11yPage2019.conclusion.quote02") }}
      </p>
      <p>
        {{ $t("vueA11yPage2019.conclusion.quote03") }}
      </p>
      <global-link-component :link-object="forTheWebLink" />
    </blockquote>
    <global-heading-component
      :heading-level="3"
      :heading-text="$t('vueA11yPage2019.subHeading.conclusion')"
    />
    <p>
      {{ $t("vueA11yPage2019.conclusion.desc07") }}
    </p>
    <p>
      {{ $t("vueA11yPage2019.conclusion.desc08") }}
    </p>
    <blockquote lang="ja">
      <p>
        “Start Small, Start
        Now（小さく初めていこう、でも、できることから今やりましょう）”と呼びかけていきたいし、自分自身も肝に銘じておきたい。
      </p>
      <global-link-component :link-object="kzakzaLink" />
    </blockquote>
    <p>
      {{ $t("vueA11yPage2019.conclusion.desc09") }}
    </p>
    <p>
      {{ $t("vueA11yPage2019.conclusion.desc10") }}
    </p>
  </section>
</template>

<script>
export default {
  name: "VueA11y2019Conclusion",
  data() {
    return {
      proposalLink: {
        title: "The original proposal of the WWW, HTMLized",
        url: "https://www.w3.org/History/1989/proposal.html",
        isExternal: true
      },
      pressReleaseLink: {
        title:
          "Press Release: W3C Launches International Program Office for WAI",
        url: "https://www.w3.org/Press/IPO-announce",
        isExternal: true
      },
      wiredLink: {
        title: "Interview with the Web’s Creator | WIRED",
        url: "https://www.wired.com/1999/10/interview-with-the-webs-creator/",
        isExternal: true
      },
      digimaJapanLink: {
        title: this.$t("vueA11yPage2019.conclusion.link01"),
        url: "https://www.digima-japan.com/knowhow/world/15167.php",
        isExternal: true
      },
      forTheWebLink: {
        title: this.$t("vueA11yPage2019.conclusion.quote04.text"),
        url: this.$t("vueA11yPage2019.conclusion.quote04.link"),
        isExternal: true
      },
      kzakzaLink: {
        title: "アクセシビリティは “Start Small, Start Now” でいこう | kzakza",
        url: "https://code.kzakza.com/2019/03/start-small-start-now/",
        isExternal: true
      }
    };
  }
};
</script>
