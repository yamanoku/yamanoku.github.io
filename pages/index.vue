<template>
  <div>
    <header-component />
    <main>
      <h2>yamanoku.net</h2>
      <basic-info-component />
      <job-info-component />
      <career-info-component />
      <product-list-component :a11ybook="a11ybook" :reading="reading" :vuePortfolio="vuePortfolio" />
      <slides-component :qiita="qiita" />
      <sns-component />
      <address-component />
    </main>
    <local-switch-component />
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
import LocalSwitchComponent from "~/components/LocalSwitch.vue";

export default {
  async asyncData({ params, error }) {
    try {
      const QIITAURL =
        "https://qiita.com/api/v2/users/yamanoku/items?page=1&per_page=10";
      const qiita = await fetch(QIITAURL).then(res => {
        return res.json();
      });
      qiita.forEach(e => {
        return e.title;
      });
      const A_ISSUE =
        "https://api.github.com/repos/yamanoku/accessibility_book-issues/issues";
      const A11YIssue = await fetch(A_ISSUE).then(res => {
        return res.json();
      });
      const a11ybook = A11YIssue.filter(issue => !issue.pull_request);
      const R_ISSUE = "https://api.github.com/repos/yamanoku/reading/issues";
      const readingIssue = await fetch(R_ISSUE).then(res => {
        return res.json();
      });
      const reading = readingIssue.filter(issue => !issue.pull_request);
      const V_ISSUE =
        "https://api.github.com/repos/yamanoku/vue_portfolio_template/issues";
      const vueIssue = await fetch(V_ISSUE).then(res => {
        return res.json();
      });
      const vuePortfolio = vueIssue.filter(issue => !issue.pull_request);
      return {
        qiita,
        a11ybook,
        reading,
        vuePortfolio
      };
    } catch (e) {
      error({ statusCode: 404, message: "Connection Error" });
    }
  },
  components: {
    HeaderComponent,
    JobInfoComponent,
    BasicInfoComponent,
    CareerInfoComponent,
    ProductListComponent,
    SlidesComponent,
    SnsComponent,
    AddressComponent,
    LocalSwitchComponent
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
h5 {
  margin: var(--rhythm) 0;
  font-size: 1.2rem;
  font-feature-settings: "palt";
  font-weight: 400;
  letter-spacing: 0.0125em;
  line-height: var(--rhythm);
  position: relative;
}
section {
  display: block;
  margin: calc(var(--rhythm) * 2) 0;
}
article {
  position: relative;
  padding: 0 0 var(--rhythm);
}
article::before {
  content: "";
  width: 100%;
  height: 1px;
  background-color: var(--gray);
  position: absolute;
  bottom: 0;
  left: 0;
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
ul:not([class]) li svg .product-2,
ul:not([class]) li svg .edit-2,
ul:not([class]) li svg .image-1,
ul:not([class]) li svg .shopping-2 {
  fill: none;
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
