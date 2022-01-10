<template>
  <section
    id="social-network-services"
    aria-labelledby="social-network-services_heading"
  >
    <global-heading-component
      id="social-network-services_heading"
      :heading-level="2"
      :heading-text="$t('heading.sns')"
    />
    <ul>
      <li>
        <a href="https://twitter.com/okuto_oyama" target="_blank" rel="noopener"
          >{{ $t("sns.twitter") }}<external-link-icon
        /></a>
      </li>
      <li>
        <a href="https://github.com/yamanoku" target="_blank" rel="noopener"
          >{{ $t("sns.github") }}<external-link-icon
        /></a>
      </li>
      <li>
        <a href="https://scrapbox.io/yamanoku/" target="_blank" rel="noopener"
          >{{ $t("sns.scrapbox") }}<external-link-icon
        /></a>
      </li>
      <li>
        <a href="https://facebook.com/okutooyama" target="_blank" rel="noopener"
          >{{ $t("sns.facebook") }}<external-link-icon
        /></a>
      </li>
      <li>
        {{ $t("sns.tumblr.text") }}
        <ul>
          <li>
            <a href="https://yamanoku.tumblr.com" target="_blank" rel="noopener"
              >{{ $t("sns.tumblr.tumblog") }}<external-link-icon
            /></a>
          </li>
          <li>
            <a
              href="https://yamagraph.tumblr.com"
              target="_blank"
              rel="noopener"
              >{{ $t("sns.tumblr.artworks") }}<external-link-icon
            /></a>
          </li>
        </ul>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: "IndexSectionsSocialNetworkServices"
};
</script>
