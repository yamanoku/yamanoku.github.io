<template>
  <article id="donate" aria-labelledby="donate_heading">
    <h2 id="donate_heading">
      {{ $t("heading.donate") }}
    </h2>
    <p>
      {{ $t("donate.desc01") }}
    </p>
    <ul role="list">
      <template v-for="donateLink in donateLinkList">
        <li role="listitem" :key="donateLink.title">
          <a
            :href="donateLink.url"
            target="_blank"
            rel="noopener"
            :lang="donateLink.lang"
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
          lang: "en",
          url: "https://github.com/sponsors/yamanoku"
        },
        {
          title: "Stripe Payment Links",
          lang: "en",
          url: "https://buy.stripe.com/00gaEY1Eh5bE7VC8ww"
        },
        {
          title: "Buy me a coffee",
          lang: "en",
          url: "https://buymeacoffee.com/yamanoku"
        }
      ]
    };
  }
};
</script>
