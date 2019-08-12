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
          <anchor-icon />
        </a>
        {{ $t("heading.job") }}
      </h3>
      <job-info-component />
      <h3 id="basic">
        <a class="anchor" aria-hidden="true" href="#basic">
          <anchor-icon />
        </a>
        {{ $t("heading.basic") }}
      </h3>
      <basic-info-component />
      <h3 id="career">
        <a class="anchor" aria-hidden="true" href="#career">
          <anchor-icon />
        </a>
        {{ $t("heading.career") }}
      </h3>
      <career-info-component />
      <h3 id="product">
        <a class="anchor" aria-hidden="true" href="#product">
          <anchor-icon />
        </a>
        {{ $t("heading.productList") }}
      </h3>
      <product-list-component />
      <h3 id="slide">
        <a class="anchor" aria-hidden="true" href="#slide">
          <anchor-icon />
        </a>
        {{ $t("heading.slides.title") }}
      </h3>
      <slides-component />
      <h3 id="sns">
        <a class="anchor" aria-hidden="true" href="#sns">
          <anchor-icon />
        </a>
        {{ $t("heading.sns") }}
      </h3>
      <sns-component />
      <h3 id="contact">
        <a class="anchor" aria-hidden="true" href="#contact">
          <anchor-icon />
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
