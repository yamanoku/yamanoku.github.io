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
          <ruby>大<rt>おお</rt>山<rt>やま</rt></ruby
          ><ruby>奥<rt>おく</rt>人<rt>と</rt></ruby>
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
