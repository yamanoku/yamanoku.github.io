<template>
  <main>
    <h2>{{$t("aboutPage.title")}}</h2>
    <p>{{$t("aboutPage.description")}}</p>
    <section id="toc">
      <h3>{{$t("aboutPage.heading.toc")}}</h3>
      <ul role="list">
        <li role="listitem">
          <a href="#implementation">{{$t("aboutPage.heading.implementation")}}</a>
          <ul role="list">
            <li role="listitem">
              <a href="#tech-stack">{{$t("heading.techStack")}}</a>
            </li>
            <li role="listitem">
              <a href="#markup">{{$t("aboutPage.subHeading.markup")}}</a>
            </li>
            <li role="listitem">
              <a href="#component-oriented">{{$t("aboutPage.subHeading.components")}}</a>
            </li>
            <li role="listitem">
              <a href="#pwa">{{$t("aboutPage.subHeading.pwa")}}</a>
            </li>
            <li role="listitem">
              <a href="#i18n">{{$t("aboutPage.subHeading.i18n")}}</a>
            </li>
          </ul>
        </li>
        <li role="listitem">
          <a href="#design">{{$t("aboutPage.heading.design")}}</a>
          <ul role="list">
            <li role="listitem">
              <a href="#do-not-over-design">{{$t("aboutPage.subHeading.overdesign")}}</a>
            </li>
            <li role="listitem">
              <a href="#japanese-font-family">{{$t("aboutPage.subHeading.JPFont")}}</a>
            </li>
            <li role="listitem">
              <a href="#font-size">{{$t("aboutPage.subHeading.fontSize")}}</a>
            </li>
            <li role="listitem">
              <a href="#color-contrast">{{$t("aboutPage.subHeading.contrast")}}</a>
            </li>
            <li role="listitem">
              <a href="#max-width">{{$t("aboutPage.subHeading.maxWidth")}}</a>
            </li>
            <li role="listitem">
              <a href="#vertical-rhythm">{{$t("aboutPage.subHeading.verticalRhythm")}}</a>
            </li>
          </ul>
        </li>
      </ul>
    </section>
    <section id="implementation">
      <h3>
        <a class="anchor" aria-hidden="true" href="#implementation">
          <anchor-icon />
        </a>
        {{$t("aboutPage.heading.implementation")}}
      </h3>
      <article id="tech-stack">
        <h4>
          <a class="anchor" aria-hidden="true" href="#tech-stack">
            <anchor-icon />
          </a>
          {{$t("heading.techStack")}}
        </h4>
        <ul role="list">
          <li role="listitem">
            Nuxt.js
            <ul role="list">
              <li role="listitem">@nuxtjs/pwa</li>
              <li role="listitem">@nuxtjs/google-gtag</li>
              <li role="listitem">@nuxtjs/axios</li>
              <li role="listitem">nuxt-i18n</li>
              <li role="listitem">eslint-plugin-vue</li>
              <li role="listitem">eslint-plugin-vue-a11y</li>
            </ul>
          </li>
          <li role="listitem">Vuex （Store）</li>
          <li role="listitem">modern-normalize</li>
          <li role="listitem">Google Fonts</li>
        </ul>
      </article>
      <article id="markup">
        <h4>
          <a class="anchor" aria-hidden="true" href="#markup">
            <anchor-icon />
          </a>
          {{$t("aboutPage.subHeading.markup")}}
        </h4>
        <p>{{$t("aboutPage.markup.desc01")}}</p>
        <p>{{$t("aboutPage.markup.desc02")}}</p>
        <highlight-code id="wai-aria-in-html" lang="html">{{waiAria}}</highlight-code>
        <ul role="list">
          <li role="listitem">
            <a
              href="https://github.com/yamanoku/yamanoku.github.io/blob/nuxt/pages/about.vue#L80-L85"
              target="_blank"
              rel="noopener"
            >
              about.vue
              <github-icon />
            </a>
          </li>
        </ul>
      </article>
      <article id="component-oriented">
        <h4>
          <a class="anchor" aria-hidden="true" href="#component-oriented">
            <anchor-icon />
          </a>
          {{$t("aboutPage.subHeading.components")}}
        </h4>
        <p>{{$t("aboutPage.components.desc01")}}</p>
        <highlight-code id="slide-components" lang="vue">{{slide}}</highlight-code>
        <ul role="list">
          <li role="listitem">
            <a
              href="https://github.com/yamanoku/yamanoku.github.io/blob/nuxt/components/slides/SlideList.vue"
              target="_blank"
              rel="noopener"
            >
              SlideList.vue
              <github-icon />
            </a>
          </li>
        </ul>
        <p>{{$t("aboutPage.components.desc02")}}</p>
        <p>{{$t("aboutPage.components.desc03")}}</p>
        <highlight-code id="api-for-store" lang="javascript">{{api}}</highlight-code>
        <ul role="list">
          <li role="listitem">
            <a
              href="https://github.com/yamanoku/yamanoku.github.io/blob/nuxt/components/products/A11yBeginner.vue#L49-L55"
              target="_blank"
              rel="noopener"
            >
              A11yBeginner.vue
              <github-icon />
            </a>
          </li>
        </ul>
      </article>
      <article id="pwa">
        <h4>
          <a class="anchor" aria-hidden="true" href="#pwa">
            <anchor-icon />
          </a>
          {{$t("aboutPage.subHeading.pwa")}}
        </h4>
        <p>{{$t("aboutPage.pwa.desc01")}}</p>
        <p>{{$t("aboutPage.pwa.desc02")}}</p>
        <ul>
          <li>
            <a
              href="https://developers.google.com/web/fundamentals/codelabs/your-first-pwapp/"
              target="_blank"
              rel="noopener"
              lang="en-US"
            >
              Your First Progressive Web App | Web Fundamentals | Google Developers
              <open-new-icon />
            </a>
          </li>
        </ul>
      </article>
      <article id="i18n">
        <h4>
          <a class="anchor" aria-hidden="true" href="#i18n">
            <anchor-icon />
          </a>
          {{$t("aboutPage.subHeading.i18n")}}
        </h4>
        <p>{{$t("aboutPage.i18n.desc01")}}</p>
        <p>{{$t("aboutPage.i18n.desc02")}}</p>
        <ul role="list">
          <li role="listitem">
            <a
              href="https://github.com/yamanoku/yamanoku.github.io/projects/2"
              target="_blank"
              rel="noopener"
              lang="en-US"
            >
              i18n Project
              <github-icon />
            </a>
          </li>
        </ul>
      </article>
    </section>
    <section id="design">
      <h3>
        <a class="anchor" aria-hidden="true" href="#design">
          <anchor-icon />
        </a>
        {{$t("aboutPage.heading.design")}}
      </h3>
      <p>{{$t("aboutPage.designDescription")}}</p>
      <article id="do-not-over-design">
        <h4>
          <a class="anchor" aria-hidden="true" href="#do-not-over-design">
            <anchor-icon />
          </a>
          {{$t("aboutPage.subHeading.overdesign")}}
        </h4>
        <p>{{$t("aboutPage.overdesign.desc01")}}</p>
        <p>{{$t("aboutPage.overdesign.desc02")}}</p>
        <ul role="list">
          <li role="listitem">
            <a href="//motherfuckingwebsite.com/" target="_blank" rel="noopener" lang="en-US">
              This is a motherfucking website.
              <open-new-icon />
            </a>
          </li>
        </ul>
      </article>
      <article id="japanese-font-family">
        <h4>
          <a class="anchor" aria-hidden="true" href="#japanese-font-family">
            <anchor-icon />
          </a>
          {{$t("aboutPage.subHeading.JPFont")}}
        </h4>
        <p>{{$t("aboutPage.JPFont.desc01")}}</p>
        <ul role="list">
          <li role="listitem">
            <a href="https://minmoji.ucda.jp/pages/webfont/" target="_blank" rel="noopener" lang="ja">
              みんなの文字&reg;WEBフォント
              <open-new-icon />
            </a>
          </li>
        </ul>
      </article>
      <article id="font-size">
        <h4>
          <a class="anchor" aria-hidden="true" href="#font-size">
            <anchor-icon />
          </a>
          {{$t("aboutPage.subHeading.fontSize")}}
        </h4>
        <p>{{$t("aboutPage.fontSize.desc01")}}</p>
      </article>
      <article id="color-contrast">
        <h4>
          <a class="anchor" aria-hidden="true" href="#color-contrast">
            <anchor-icon />
          </a>
          {{$t("aboutPage.subHeading.contrast")}}
        </h4>
        <p>{{$t("aboutPage.contrast.desc01")}}</p>
        <p>{{$t("aboutPage.contrast.desc02")}}</p>
        <dl>
          <div v-for="color in colors" :key="color.name" :style="'background-color:' + color.value">
            <dt
              :style="(color.name === 'var(--black)' || color.name === 'var(--linkBlue)' ? 'color: #fff': '')"
            >{{color.name}}</dt>
            <dd
              :style="(color.name === 'var(--black)' || color.name === 'var(--linkBlue)' ? 'color: #fff': '')"
            >{{color.value}}</dd>
          </div>
        </dl>
        <p>{{$t("aboutPage.contrast.desc03")}}</p>
      </article>
      <article id="max-width">
        <h4>
          <a class="anchor" aria-hidden="true" href="#max-width">
            <anchor-icon />
          </a>
          {{$t("aboutPage.subHeading.maxWidth")}}
        </h4>
        <p>{{$t("aboutPage.maxWidth.desc01")}}</p>
        <p>{{$t("aboutPage.maxWidth.desc02")}}</p>
      </article>
      <article id="vertical-rhythm">
        <h4>
          <a class="anchor" aria-hidden="true" href="#vertical-rhythm">
            <anchor-icon />
          </a>
          {{$t("aboutPage.subHeading.verticalRhythm")}}
        </h4>
        <p>{{$t("aboutPage.verticalRhythm.desc01")}}</p>
        <p>{{$t("aboutPage.verticalRhythm.desc02")}}</p>
        <switch-rhythm-btn />
      </article>
    </section>
    <nuxt-link :to="localePath({ name: 'index'})">{{$t("backTop")}}</nuxt-link>
    <local-switch-component />
  </main>
</template>

<script>
import LocalSwitchComponent from "~/components/common/LocalSwitch.vue";
import SwitchRhythmBtn from "~/components/buttons/SwitchRhythmBtn.vue";
export default {
  head() {
    return {
      title: this.$t("aboutPage.title"),
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.$t("aboutPage.description")
        },
        { name: "twitter:title", content: this.$t("aboutPage.title") },
        {
          name: "twitter:description",
          content: this.$t("aboutPage.description")
        }
      ],
      bodyAttrs: {
        class: this.$store.state.rhythm.toggleRhythm ? "is-rhythm" : ""
      }
    };
  },
  components: {
    LocalSwitchComponent,
    SwitchRhythmBtn
  },
  data() {
    return {
      colors: [
        {
          name: "var(--black)",
          value: "rgb(21, 32, 43)"
        },
        {
          name: "var(--white)",
          value: "rgb(210, 210, 210)"
        },
        {
          name: "var(--gray)",
          value: "rgba(70, 70, 70, 0.5)"
        },
        {
          name: "var(--blue)",
          value: "rgb(90, 190, 255)"
        },
        {
          name: "var(--purple)",
          value: "rgb(220, 100, 220)"
        },
        {
          name: "var(--linkBlue)",
          value: "rgb(18, 122, 200)"
        },
        {
          name: "var(--linkVisited)",
          value: "rgba(70, 70, 70, 0.5)"
        }
      ],
      waiAria: `
<h4 id="markup">
  <a class="anchor" aria-hidden="true" href="#markup"> <!-- Not ignored in the accessibility tree -->
    <anchor-icon />
  </a>
  {{$t("aboutPage.subHeading.markup")}}
</h4>
      `,
      slide: `
<ul role="list">
  <li role="listitem" v-for="list in listItem" :key="list.title">
    <template v-if="list.datetime">
      <time :datetime="list.datetime">
        {{dateReplace(list.datetime)}}
      </time>
      -
    </template>
    <template v-if="list.created_at">
      <time :datetime="list.created_at">
        {{dateCreated(list.created_at)}}
      </time>
      -
    </template>
    <a :href="list.url" target="_blank" rel="noopener" lang="ja">
      {{list.title}}
    </a>
  </li>
</ul>
      `,
      api: `
export default {
  data() {
    return {
      a11ybookIssue: this.$store.state.github.a11y_issues,
    };
  }
};
      `
    };
  }
};
</script>

<style scoped>
h2 + p {
  margin: var(--rhythm) 0;
  font-size: 1rem;
  line-height: var(--rhythm);
}
dl {
  padding: var(--rhythm);
  margin: 0 calc(-1 * var(--rhythm));
  line-height: var(--rhythm);
  color: var(--black);
  display: grid;
  background-color: #fff;
  grid-template-columns: repeat(3, 1fr);
}
@media screen and (max-width: 768px) {
  dl {
    grid-template-columns: repeat(2, 1fr);
  }
}
dl > div {
  padding: calc(var(--rhythm) / 2);
  background-color: #fff;
}
dl dt {
  font-weight: 700;
  font-size: 0.8rem;
}
dl dd {
  margin: 0;
  padding: 0;
  font-weight: 700;
  font-size: 0.8rem;
}
button.btn-rhythm {
  margin: var(--rhythm) 0;
  display: block;
}
</style>
