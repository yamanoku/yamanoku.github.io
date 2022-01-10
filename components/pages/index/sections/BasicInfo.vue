<template>
  <section id="basic" aria-labelledby="basic-heading">
    <global-heading-component
      id="basic-heading"
      :heading-level="2"
      :heading-text="$t('heading.basic')"
    />
    <template v-if="this.$i18n.locale === 'ja'">
      大山奥人
      <small>（おおやまおくと）</small>
      。{{ $t("info.caption") }}
    </template>
    <template v-else>Okuto Oyama. {{ $t("info.caption") }}</template>
    <h3 id="job_heading">{{ $t("heading.job") }}</h3>
    <ul aria-labelledby="job_heading">
      <li>{{ $t("jobs.job01") }}</li>
      <li>{{ $t("jobs.job02") }}</li>
      <li>{{ $t("jobs.job03") }}</li>
    </ul>
  </section>
</template>

<script>
export default {
  name: "IndexSectionsBasicInfo"
};
</script>
