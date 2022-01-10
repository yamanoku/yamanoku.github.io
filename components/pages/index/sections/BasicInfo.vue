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
    <global-list-component
      aria-labelledby="job_heading"
      :list-array="jobListItem"
    />
  </section>
</template>

<script>
export default {
  name: "IndexSectionsBasicInfo",
  data() {
    return {
      jobListItem: [
        {
          title: this.$t("jobs.job01")
        },
        {
          title: this.$t("jobs.job02")
        },
        {
          title: this.$t("jobs.job03")
        }
      ]
    };
  }
};
</script>
