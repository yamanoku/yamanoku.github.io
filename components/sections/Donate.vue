<template>
  <section id="donate" aria-labelledby="donate_heading">
    <h2 id="donate_heading">
      {{ $t("heading.donate") }}
    </h2>
    <p>
      {{ $t("donate.desc01") }}
    </p>
    <ul role="list">
      <template v-for="donateLink in donateLinkList">
        <li role="listitem" :key="donateLink">
          <a
            :href="donateLink.url"
            target="_blank"
            rel="noopener"
            :lang="donateLink.lang"
            >{{ donateLink.title }}</a
          >
        </li>
      </template>
    </ul>
  </section>
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
          title: "Buy me a coffee",
          lang: "en",
          url: "https://buymeacoffee.com/yamanoku"
        }
      ]
    };
  }
};
</script>
