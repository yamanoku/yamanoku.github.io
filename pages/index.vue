<template>
  <div>
    <header-component />
    <main>
      <h2 v-if="this.$i18n.locale === 'ja'">
        大山奥人
        <small>（おおやまおくと）</small>
        {{ $t("name") }}
      </h2>
      <h2 v-else>{{ $t("name") }}</h2>
      <h3 id="job">
        <a class="anchor" aria-hidden="true" href="#job">
          <svg
            class="octicon octicon-link"
            viewBox="0 0 16 16"
            version="1.1"
            width="16"
            height="16"
          >
            <path
              fill-rule="evenodd"
              d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
            />
          </svg>
        </a>
        {{ $t("heading.job") }}
      </h3>
      <job-info-component />
      <h3 id="basic">
        <a class="anchor" aria-hidden="true" href="#basic">
          <svg
            class="octicon octicon-link"
            viewBox="0 0 16 16"
            version="1.1"
            width="16"
            height="16"
          >
            <path
              fill-rule="evenodd"
              d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
            />
          </svg>
        </a>
        {{ $t("heading.basic") }}
      </h3>
      <basic-info-component />
      <h3 id="career">
        <a class="anchor" aria-hidden="true" href="#career">
          <svg
            class="octicon octicon-link"
            viewBox="0 0 16 16"
            version="1.1"
            width="16"
            height="16"
          >
            <path
              fill-rule="evenodd"
              d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
            />
          </svg>
        </a>
        {{ $t("heading.career") }}
      </h3>
      <career-info-component />
      <h3 id="product">
        <a class="anchor" aria-hidden="true" href="#product">
          <svg
            class="octicon octicon-link"
            viewBox="0 0 16 16"
            version="1.1"
            width="16"
            height="16"
          >
            <path
              fill-rule="evenodd"
              d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
            />
          </svg>
        </a>
        {{ $t("heading.productList") }}
      </h3>
      <product-list-component />
      <h3 id="slide">
        <a class="anchor" aria-hidden="true" href="#slide">
          <svg
            class="octicon octicon-link"
            viewBox="0 0 16 16"
            version="1.1"
            width="16"
            height="16"
          >
            <path
              fill-rule="evenodd"
              d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
            />
          </svg>
        </a>
        {{ $t("heading.slides.title") }}
      </h3>
      <slides-component />
      <h3 id="sns">
        <a class="anchor" aria-hidden="true" href="#sns">
          <svg
            class="octicon octicon-link"
            viewBox="0 0 16 16"
            version="1.1"
            width="16"
            height="16"
          >
            <path
              fill-rule="evenodd"
              d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
            />
          </svg>
        </a>
        {{ $t("heading.sns") }}
      </h3>
      <sns-component />
      <h3 id="contact">
        <a class="anchor" aria-hidden="true" href="#contact">
          <svg
            class="octicon octicon-link"
            viewBox="0 0 16 16"
            version="1.1"
            width="16"
            height="16"
          >
            <path
              fill-rule="evenodd"
              d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
            />
          </svg>
        </a>
        {{ $t("heading.contact") }}
      </h3>
      <address-component />
    </main>
    <nav>
      <h3>{{ $t("multilingual")}}</h3>
      <ul>
        <li v-for="locale in $i18n.locales" :key="locale.code">
          <nuxt-link :to="switchLocalePath(locale.code)">{{ locale.name }}</nuxt-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import HeaderComponent from "~/components/Header.vue";
import JobInfoComponent from "~/components/JobInfo.vue";
import BasicInfoComponent from "~/components/BasicInfo.vue";
import CareerInfoComponent from "~/components/CareerInfo.vue";
import ProductListComponent from "~/components/ProductList.vue";
import SlidesComponent from "~/components/Slides.vue";
import SnsComponent from "~/components/Sns.vue";
import AddressComponent from "~/components/Address.vue";

export default {
  components: {
    HeaderComponent,
    JobInfoComponent,
    BasicInfoComponent,
    CareerInfoComponent,
    ProductListComponent,
    SlidesComponent,
    SnsComponent,
    AddressComponent
  }
};
</script>

<style>
main {
  max-width: 80ch;
  margin: auto;
  padding: 0 var(--rhythm);
}
h2 {
  margin: var(--rhythm) 0;
  font-size: 2rem;
  font-feature-settings: "palt";
  line-height: calc(var(--rhythm) * 2);
  letter-spacing: 0.025em;
}
h2 small {
  font-size: 1.4rem;
  display: inline-block;
  line-height: 1;
  color: rgba(0, 0, 0, 0.6);
}
@media (prefers-color-scheme: dark) {
  h2 small {
    color: rgba(255, 255, 255, 0.6);
  }
}
h3 {
  margin: var(--rhythm) 0;
  font-size: 1.4rem;
  font-feature-settings: "palt";
  letter-spacing: 0.0125em;
  line-height: var(--rhythm);
  position: relative;
}
h4 {
  margin: var(--rhythm) 0;
  font-size: 1.2rem;
  font-feature-settings: "palt";
  letter-spacing: 0.0125em;
  line-height: var(--rhythm);
  position: relative;
}
.anchor {
  position: absolute;
  left: -24px;
}
@media screen and (max-width: 768px) {
  .anchor {
    display: none;
  }
}
.anchor path {
  fill: rgba(0, 0, 0, 0.6);
}
@media (prefers-color-scheme: dark) {
  .anchor path {
    fill: var(--blue);
  }
}
ul:not([class]) {
  margin: var(--rhythm) 0;
  line-height: 1;
  padding-left: var(--rhythm);
  list-style-type: none;
  position: relative;
}
ul:not([class]) ul {
  margin: 0;
}
ul:not([class]) li {
  line-height: var(--rhythm);
  font-size: 1rem;
}
ul:not([class]) li::before {
  background-color: var(--black);
  border-radius: 50%;
  color: #fff;
  content: "";
  width: 6px;
  height: 6px;
  margin: 9px 0 0;
  position: absolute;
  left: 0;
}
@media (prefers-color-scheme: dark) {
  ul:not([class]) li::before {
    background-color: var(--white);
  }
}
ul:not([class]) li svg {
  width: 12px;
  height: 12px;
  margin: 0 0 -1px 4px;
}
ul:not([class]) li svg path {
  fill: var(--black);
}
@media (prefers-color-scheme: dark) {
  ul:not([class]) li svg path {
    fill: var(--white);
  }
}
ul:not([class]) li svg .npm-1 {
  fill: #c12127;
}
ul:not([class]) li svg .npm-2 {
  fill: #fff;
}
nav {
  max-width: 80ch;
  margin: auto;
  padding: 0 var(--rhythm);
}
address {
  margin: var(--rhythm) 0;
}
</style>
