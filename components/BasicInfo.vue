<template>
  <section id="basic">
    <h3>
      <a class="anchor" aria-hidden="true" href="#basic">
        <anchor-icon />
      </a>
      {{ $t("heading.basic") }}
    </h3>
    <ul role="list">
      <li role="listitem">
        <time datetime="1989-10-30">{{birthday}}</time>
        <a
          href="https://www.city.noshiro.akita.jp/"
          target="_blank"
          rel="noopener"
        >{{ $t("info.birth") }}</a>
      </li>
      <li role="listitem">{{ $t("info.sex") }}</li>
      <li role="listitem">
        <time datetime="2008">{{translateYear(2008)}}</time>
        {{ $t("info.2008.before") }}
        <ul role="list">
          <li role="listitem">
            {{ $t("info.bfa") }}
            <ul role="list">
              <li role="listitem">{{ $t("info.bfa01") }}</li>
              <li role="listitem">{{ $t("info.bfa02") }}</li>
            </ul>
          </li>
          <li role="listitem">
            <a
              href="https://jinsha.iwate-u.ac.jp/curriculum/hscs/arts-and-culture"
              target="_blank"
              rel="noopener"
            >{{ $t("info.2008.now") }}</a>
          </li>
        </ul>
      </li>
      <li role="listitem">
        <time datetime="2014">{{translateYear(2014)}}</time>
        {{ $t("info.2014") }}
      </li>
      <li role="listitem">
        <time datetime="2016">{{translateYear(2016)}}</time>
        {{ $t("info.2016") }}
        <ul role="list">
          <li role="listitem">
            <span role="img" :aria-label="emoji01">👨‍👩‍👧</span>
            <span role="img" :aria-label="emoji02">🐈</span>
            <span role="img" :aria-label="emoji02">🐈</span>
            <span role="img" :aria-label="emoji02">🐈</span>
          </li>
        </ul>
      </li>
      <li role="listitem">
        <a
          href="https://www.city.kamagaya.chiba.jp/"
          target="_blank"
          rel="noopener"
        >{{ $t("info.live") }}</a>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  computed: {
    birthday() {
      if (this.$i18n.locale === "ja") {
        return "1989年10月30日";
      } else {
        return "1989/10/30";
      }
    },
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
  },
  methods: {
    translateYear(year) {
      if (this.$i18n.locale === "ja") {
        return year + "年";
      } else {
        return year;
      }
    }
  }
};
</script>
