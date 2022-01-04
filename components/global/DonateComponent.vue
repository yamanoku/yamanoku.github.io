<template>
  <article id="donate" aria-labelledby="donate_heading">
    <div>
      <em id="donate_heading">
        {{ $t("heading.donate") }}
      </em>
    </div>
    <p>
      {{ $t("donate.desc01") }}
    </p>
    <ul>
      <template v-for="donateLink in donateLinkList">
        <li :key="donateLink.title">
          <a
            :href="donateLink.url"
            target="_blank"
            rel="noopener"
            >{{ donateLink.title }}<open-new-icon
          /></a>
        </li>
      </template>
    </ul>
  </article>
</template>

<script>
export default {
  data() {
    return {
      donateLinkList: [
        {
          title: "GitHub Sponsors",
          url: "https://github.com/sponsors/yamanoku"
        },
        {
          title: "Stripe Payment Links",
          url: "https://buy.stripe.com/00gaEY1Eh5bE7VC8ww"
        },
        {
          title: "Buy me a coffee",
          url: "https://buymeacoffee.com/yamanoku"
        }
      ]
    };
  }
};
</script>

<style scoped>
article {
  border: 1px solid var(--y-arcticle-border-color);
  padding-top: var(--y-rhythm-3);
  padding-left: var(--y-rhythm-3);
  padding-right: var(--y-rhythm-3);
}
article::before {
  display: none;
}
ul {
  margin-bottom: 0;
}
</style>
