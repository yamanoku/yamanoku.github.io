<template>
  <section id="career" aria-labelledby="career-heading">
    <global-heading-component
      id="career-heading"
      :heading-level="2"
      :heading-text="$t('heading.career')"
    />
    <p>{{ $t("career.desc01") }}</p>
    <p>{{ $t("career.desc02") }}</p>
    <p>{{ $t("career.desc03") }}</p>
    <global-heading-component
      id="related:career-heading"
      :heading-level="3"
      :heading-text="$t('heading.relatedList')"
    />
    <global-list-component
      aria-labelledby="related:career-heading"
      :list-array="careerListItem"
    />
  </section>
</template>

<script>
export default {
  name: "IndexSectionsCareerInfo",
  data() {
    return {
      careerListItem: [
        {
          title: this.$t("career.curriculumVitae"),
          url: "https://github.com/yamanoku/Curriculum-Vitae/blob/main/README.md",
          isExternal: true,
          isGitHubLink: true
        },
        {
          title: this.$t("career.experiencedSkills"),
          url: "https://scrapbox.io/yamanoku/%E7%B5%8C%E9%A8%93%E3%81%AE%E3%81%82%E3%82%8B%E6%8A%80%E8%A1%93",
          isExternal: true
        },
        {
          title: this.$t("career.wantedly"),
          url: "https://www.wantedly.com/id/okutooyama",
          isExternal: true
        },
        {
          title: this.$t("career.lapras"),
          url: "https://lapras.com/public/ZQJMZYO",
          isExternal: true
        },
        {
          title: this.$t("career.youtrust"),
          url: "https://youtrust.jp/users/57ea573ffca186c3b339f1739915f40b",
          isExternal: true
        }
      ]
    };
  }
};
</script>
