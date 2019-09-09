<template>
  <article id="web-accessibility-for-beginner" aria-describedby="product:web-accessibility-for-beginner_heading">
    <h3 class="anchor-heading" id="product:web-accessibility-for-beginner_heading">
      <a class="anchor" href="#web-accessibility-for-beginner">
        <anchor-icon />
      </a>
      {{ $t("product.wafb.title") }}
    </h3>
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
    <h4 aria-describedby="a11ybook_issue">{{ $t("heading.todoList") }}</h4>
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
