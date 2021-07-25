<template>
  <section
    id="about:color-contrast"
    aria-labelledby="about:color-contrast_heading"
  >
    <h3 id="about:color-contrast_heading">
      {{ $t("aboutPage.subHeading.contrast") }}
    </h3>
    <p>{{ $t("aboutPage.contrast.desc01") }}</p>
    <details>
      <summary>
        {{ $t("details.summary") }}
      </summary>
      <p>{{ $t("aboutPage.contrast.desc02") }}</p>
      <dl aria-labelledby="about:color-contrast_heading">
        <div
          v-for="token in baseTokens"
          :key="token.name"
          :style="'background-color:' + token.value"
        >
          <dt :style="token.colorWhiteFlag ? 'color: #fff' : ''">
            {{ token.name }}
          </dt>
          <dd :style="token.colorWhiteFlag ? 'color: #fff' : ''">
            {{ token.value }}
          </dd>
        </div>
      </dl>
      <p>{{ $t("aboutPage.contrast.desc03") }}</p>
    </details>
  </section>
</template>

<script>
export default {
  data() {
    return {
      baseTokens: [
        {
          name: "var(--y-black-base)",
          value: "rgb(21, 32, 43)",
          colorWhiteFlag: true
        },
        {
          name: "var(--y-white-base)",
          value: "rgb(255, 255, 255)",
          colorWhiteFlag: false
        },
        {
          name: "var(--y-white-low)",
          value: "rgb(210, 210, 210)",
          colorWhiteFlag: false
        },
        {
          name: "var(--y-white-medium)",
          value: "rgba(163, 163, 163)",
          colorWhiteFlag: false
        },
        {
          name: "var(--y-blue-low)",
          value: "rgb(90, 190, 255)",
          colorWhiteFlag: false
        },
        {
          name: "var(--y-blue-medium)",
          value: "rgb(18, 122, 200)",
          colorWhiteFlag: true
        },
        {
          name: "var(--y-purple-medium)",
          value: "rgb(220, 100, 220)",
          colorWhiteFlag: false
        }
      ]
    };
  }
};
</script>

<style scoped>
dl {
  padding: var(--y-rhythm-3);
  margin: 0 calc(-1 * var(--y-rhythm-3));
  color: var(--y-black-base);
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, auto));
  background-color: var(--y-white-base);
}
dl > div {
  padding: calc(var(--y-rhythm-base) * 1.5);
  background-color: var(--y-body-background);
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
</style>
