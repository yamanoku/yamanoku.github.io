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
          v-for="color in colors"
          :key="color.name"
          :style="'background-color:' + color.value"
        >
          <dt :style="color.colorWhiteFlag ? 'color: #fff' : ''">
            {{ color.name }}
          </dt>
          <dd :style="color.colorWhiteFlag ? 'color: #fff' : ''">
            {{ color.value }}
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
      colors: [
        {
          name: "var(--black)",
          value: "rgb(21, 32, 43)",
          colorWhiteFlag: true
        },
        {
          name: "var(--white)",
          value: "rgb(210, 210, 210)",
          colorWhiteFlag: false
        },
        {
          name: "var(--gray)",
          value: "rgba(70, 70, 70, 0.5)",
          colorWhiteFlag: false
        },
        {
          name: "var(--blue)",
          value: "rgb(90, 190, 255)",
          colorWhiteFlag: false
        },
        {
          name: "var(--purple)",
          value: "rgb(220, 100, 220)",
          colorWhiteFlag: false
        },
        {
          name: "var(--linkBlue)",
          value: "rgb(18, 122, 200)",
          colorWhiteFlag: true
        },
        {
          name: "var(--linkVisited)",
          value: "rgb(21, 32, 43)",
          colorWhiteFlag: true
        }
      ]
    };
  }
};
</script>

<style scoped>
dl {
  padding: calc(var(--rhythm) * 3);
  margin: 0 calc(-3 * var(--rhythm));
  color: var(--black);
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, auto));
  background-color: #fff;
}
dl > div {
  padding: calc(var(--rhythm) * 1.5);
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
</style>
