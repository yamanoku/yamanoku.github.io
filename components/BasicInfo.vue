<template>
  <ul>
    <li>{{ $t("info.birth") }}</li>
    <li>{{ $t("info.sex") }}</li>
    <li>
      {{ $t("info.2008") }}
      <ul>
        <li>
          {{ $t("info.bfa") }}
          <ul>
            <li>{{ $t("info.bfa01") }}</li>
            <li>{{ $t("info.bfa02") }}</li>
          </ul>
        </li>
      </ul>
    </li>
    <li>{{ $t("info.2014") }}</li>
    <li>
      {{ $t("info.2016") }}
      <ul>
        <li>
          <span role="img" :aria-label="emoji01">👨‍👩‍👧</span>
          <span role="img" :aria-label="emoji02">🐈</span>
          <span role="img" :aria-label="emoji02">🐈</span>
          <span role="img" :aria-label="emoji02">🐈</span>
        </li>
      </ul>
    </li>
    <li>{{ $t("info.live") }}</li>
  </ul>
</template>

<script>
export default {
  computed: {
    emoji01() {
      if (this.$i18n.locale === "en") {
        return "Family: Man, Woman, Girl";
      } else if (this.$i18n.locale === "fr") {
        return "Famille: homme, femme, fille";
      } else {
        return "家族構成: 私と妻と娘";
      }
    },
    emoji02() {
      if (this.$i18n.locale === "en") {
        return "Cat";
      } else if (this.$i18n.locale === "fr") {
        return "Chat";
      } else {
        return "猫";
      }
    }
  }
}
</script>
