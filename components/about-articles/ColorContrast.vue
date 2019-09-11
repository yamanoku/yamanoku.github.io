<template>
  <article id="about:color-contrast" aria-labelledby="about:color-contrast_heading">
    <h3 class="anchor-heading" id="about:color-contrast_heading">
      <a class="anchor" href="#about:color-contrast">
        <anchor-icon />
      </a>
      {{$t("aboutPage.subHeading.contrast")}}
    </h3>
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
</template>

<script>
export default {
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
      ]
    };
  }
};
</script>

<style scoped>
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
</style>
