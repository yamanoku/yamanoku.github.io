<template>
  <article id="web_accessibility_for_beginner">
    <h4>
      <a class="anchor" aria-hidden="true" href="#web_accessibility_for_beginner">
        <anchor-icon />
      </a>
      {{ $t("product.wafb.title") }}
    </h4>
    <p>{{ $t("product.description.wafb") }}</p>
    <template v-if="this.$i18n.locale !== 'ja'">
      <p>
        <em>{{ $t("onlyJPText") }}</em>
      </p>
    </template>
    <ul role="list">
      <li role="listitem">
        <a
          href="https://techbookfest.org/event/tbf05/circle/41130001"
          target="_blank"
          rel="noopener"
        >
          {{ $t("product.wafb.circleDetail") }}
          <open-new-icon />
        </a>
      </li>
      <li role="listitem">
        <a href="https://booth.pm/ja/items/1044446" target="_blank" rel="noopener">
          {{ $t("product.wafb.boothLink") }}
          <shopping-icon />
        </a>
      </li>
      <li role="listitem">
        <a href="https://note.mu/yamanoku/n/n3487a344ff84" target="_blank" rel="noopener">
          {{ $t("product.wafb.noteLink") }}
          <shopping-icon />
        </a>
      </li>
    </ul>
    <h5 aria-describedby="a11ybook_issue">{{ $t("heading.todoList") }}</h5>
    <ul role="list" id="a11ybook_issue">
      <li role="listitem" v-for="issue in a11ybookIssue" :key="issue.id">
        <a :href="issue.html_url" target="_blank" rel="noopener" lang="en">
          {{issue.title}}
          <github-icon />
        </a>
      </li>
    </ul>
  </article>
</template>

<script>
export default {
  data() {
    return {
      a11ybookIssue: this.$store.state.github.a11y_issues
    };
  }
};
</script>
