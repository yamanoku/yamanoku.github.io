<template>
  <section id="basic" aria-labelledby="basic-heading">
    <global-heading-component
      id="basic-heading"
      :heading-level="2"
      :heading-text="$t('heading.basic')"
    />
    <dl>
      <dt>{{ this.$t("info.realName.key") }}</dt>
      <dd>
        <template v-if="this.$i18n.locale === 'ja'">
          <ruby
            >大<rp>(</rp><rt>おお</rt><rp>)</rp>山<rp>(</rp><rt>やま</rt
            ><rp>)</rp></ruby
          ><ruby
            >奥<rp>(</rp><rt>おく</rt><rp>)</rp>人<rp>(</rp><rt>と</rt
            ><rp>)</rp></ruby
          >
        </template>
        <template v-else>Okuto Oyama</template>
      </dd>
      <dt>{{ this.$t("info.hundleName.key") }}</dt>
      <dd>{{ this.$t("info.hundleName.value") }}</dd>
      <dt>{{ this.$t("info.birthday.key") }}</dt>
      <dd>{{ this.$t("info.birthday.value") }}</dd>
      <dt>{{ this.$t("info.sex.key") }}</dt>
      <dd>{{ this.$t("info.sex.value") }}</dd>
      <dt>{{ this.$t("info.birthplace.key") }}</dt>
      <dd>{{ this.$t("info.birthplace.value") }}</dd>
      <dt>{{ this.$t("info.location.key") }}</dt>
      <dd>{{ this.$t("info.location.value") }}</dd>
      <dt>{{ this.$t("info.family.key") }}</dt>
      <dd>{{ this.$t("info.family.value") }}</dd>
    </dl>
  </section>
</template>

<script>
export default {
  name: "IndexSectionsBasicInfo"
};
</script>
