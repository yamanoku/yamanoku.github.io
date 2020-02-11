<template>
  <section id="basic" aria-labelledby="basic-heading">
    <h2 id="basic-heading">{{ $t("heading.basic") }}</h2>
    <template v-if="this.$i18n.locale === 'ja'">
      大山奥人
      <small>（おおやまおくと）</small>
      。{{ $t("info.caption") }}
    </template>
    <template v-else>Okuto Oyama. {{ $t("info.caption") }}</template>
    <h3 id="job_heading">{{ $t("heading.job") }}</h3>
    <ul role="list" aria-labelledby="job_heading">
      <li role="listitem">{{ $t("job.1") }}</li>
      <li role="listitem">{{ $t("job.2") }}</li>
      <li role="listitem">{{ $t("job.3") }}</li>
    </ul>
  </section>
</template>
