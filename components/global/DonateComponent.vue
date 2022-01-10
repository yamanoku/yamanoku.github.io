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
    <global-list-component :list-array="donateLinkList" />
  </article>
</template>

<script>
export default {
  data() {
    return {
      donateLinkList: [
        {
          title: "GitHub Sponsors",
          url: "https://github.com/sponsors/yamanoku",
          isExternal: true,
          isGitHubLink: true
        },
        {
          title: "Stripe Payment Links",
          url: "https://buy.stripe.com/00gaEY1Eh5bE7VC8ww",
          isExternal: true
        },
        {
          title: "Buy me a coffee",
          url: "https://buymeacoffee.com/yamanoku",
          isExternal: true
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
