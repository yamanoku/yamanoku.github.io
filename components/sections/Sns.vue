<template>
  <section id="sns" aria-labelledby="sns_heading">
    <h2 id="sns_heading">
      {{ $t("heading.sns") }}
    </h2>
    <ul>
      <li>
        <a href="https://twitter.com/okuto_oyama" target="_blank" rel="noopener"
          >{{ $t("sns.twitter") }}<open-new-icon
        /></a>
      </li>
      <li>
        <a href="https://github.com/yamanoku" target="_blank" rel="noopener"
          >{{ $t("sns.github") }}<open-new-icon
        /></a>
      </li>
      <li>
        <a href="https://scrapbox.io/yamanoku/" target="_blank" rel="noopener"
          >{{ $t("sns.scrapbox") }}<open-new-icon
        /></a>
      </li>
      <li>
        <a href="https://facebook.com/okutooyama" target="_blank" rel="noopener"
          >{{ $t("sns.facebook") }}<open-new-icon
        /></a>
      </li>
      <li>
        {{ $t("sns.tumblr.text") }}
        <ul>
          <li>
            <a href="https://yamanoku.tumblr.com" target="_blank" rel="noopener"
              >{{ $t("sns.tumblr.tumblog") }}<open-new-icon
            /></a>
          </li>
          <li>
            <a
              href="https://yamagraph.tumblr.com"
              target="_blank"
              rel="noopener"
              >{{ $t("sns.tumblr.artworks") }}<open-new-icon
            /></a>
          </li>
        </ul>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: "SectionsSns"
};
</script>
