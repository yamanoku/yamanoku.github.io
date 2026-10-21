<script setup lang="ts">
import { ref } from "vue";

type CategoryId =
  | "flow"
  | "heading"
  | "sectioning"
  | "metadata"
  | "interactive"
  | "phrasing"
  | "embedded";

type Category = {
  id: CategoryId;
  label: string;
  labelJa: string;
  description: string;
  elements: string[];
  note?: string;
};

const categories: Category[] = [
  {
    id: "flow",
    label: "Flow content",
    labelJa: "フロー・コンテンツ",
    description:
      "ドキュメントの本文を構成する要素の大半が属する、もっとも広いカテゴリです。",
    elements: [
      "a",
      "article",
      "aside",
      "blockquote",
      "div",
      "footer",
      "form",
      "h1–h6",
      "header",
      "main",
      "nav",
      "p",
      "section",
      "table",
      "ul",
      "…",
    ],
  },
  {
    id: "heading",
    label: "Heading content",
    labelJa: "見出しコンテンツ",
    description:
      "セクションの見出しを定義します（明示的なセクショニング要素、または見出し自体による暗示）。",
    elements: ["h1", "h2", "h3", "h4", "h5", "h6", "hgroup"],
  },
  {
    id: "sectioning",
    label: "Sectioning content",
    labelJa: "セクショニング・コンテンツ",
    description:
      "header / footer のスコープを定義する、文書の区画を表す要素です。",
    elements: ["article", "aside", "nav", "section"],
  },
  {
    id: "metadata",
    label: "Metadata content",
    labelJa: "メタデータ・コンテンツ",
    description:
      "文書全体の体裁・振る舞い・他文書との関係など、本文外の情報を設定します。",
    elements: [
      "base",
      "link",
      "meta",
      "noscript",
      "script",
      "style",
      "template",
      "title",
    ],
  },
  {
    id: "interactive",
    label: "Interactive content",
    labelJa: "インタラクティブ・コンテンツ",
    description: "ユーザー操作を想定した要素です。",
    elements: [
      "a*",
      "audio*",
      "button",
      "details",
      "embed",
      "iframe",
      "img*",
      "input*",
      "label",
      "object*",
      "select",
      "textarea",
      "video*",
    ],
    note: "* 条件付き（仕様の prose を参照）",
  },
  {
    id: "phrasing",
    label: "Phrasing content",
    labelJa: "フレージング・コンテンツ",
    description:
      "文書のテキストと、段落内レベルでそのテキストをマークアップする要素です。連続すると段落を形成します。",
    elements: [
      "a*",
      "abbr",
      "b",
      "br",
      "button",
      "code",
      "em",
      "img",
      "input",
      "label",
      "span",
      "strong",
      "Text*",
      "…",
    ],
    note: "* 条件付き（仕様の prose を参照）",
  },
  {
    id: "embedded",
    label: "Embedded content",
    labelJa: "埋め込みコンテンツ",
    description:
      "別リソースを文書に取り込む、または別語彙の内容を挿入する要素です。",
    elements: [
      "audio",
      "canvas",
      "embed",
      "iframe",
      "img",
      "math",
      "object",
      "picture",
      "svg",
      "video",
    ],
  },
];

const activeId = ref<CategoryId>("flow");

function select(id: CategoryId) {
  activeId.value = id;
}

function isActive(id: CategoryId) {
  return activeId.value === id;
}
</script>

<template>
  <div class="content-venn">
    <div class="content-venn__diagram" aria-hidden="true">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="-250 -150 520 288">
        <g
          class="region"
          :class="{ 'is-active': isActive('flow') }"
          transform="translate(2, -3)"
          @click="select('flow')"
          @mouseenter="select('flow')"
        >
          <ellipse rx="244" ry="132" />
          <text x="10" y="-94">Flow</text>
        </g>
        <g
          class="region"
          :class="{ 'is-active': isActive('heading') }"
          transform="translate(127, -48.5)"
          @click="select('heading')"
          @mouseenter="select('heading')"
        >
          <ellipse rx="75" ry="42.5" />
          <text x="2" y="6">Heading</text>
        </g>
        <g
          class="region"
          :class="{ 'is-active': isActive('sectioning') }"
          transform="translate(125, 42)"
          @click="select('sectioning')"
          @mouseenter="select('sectioning')"
        >
          <ellipse rx="75" ry="42.5" />
          <text x="1" y="5">Sectioning</text>
        </g>
        <g
          class="region"
          :class="{ 'is-active': isActive('metadata') }"
          transform="translate(-113, 78)"
          @click="select('metadata')"
          @mouseenter="select('metadata')"
        >
          <ellipse rx="117" ry="47" transform="rotate(-15)" />
          <text x="-4" y="8">Metadata</text>
        </g>
        <g
          class="region"
          :class="{ 'is-active': isActive('interactive') }"
          transform="translate(-128, -34)"
          @click="select('interactive')"
          @mouseenter="select('interactive')"
        >
          <ellipse rx="94" ry="51" />
          <text x="-36" y="5">Interactive</text>
        </g>
        <g
          class="region"
          :class="{ 'is-active': isActive('phrasing') }"
          transform="translate(-40.5, -5)"
          @click="select('phrasing')"
          @mouseenter="select('phrasing')"
        >
          <ellipse rx="76.5" ry="80" />
          <text x="0" y="-39.5">Phrasing</text>
        </g>
        <g
          class="region"
          :class="{ 'is-active': isActive('embedded') }"
          transform="translate(-42, -7)"
          @click="select('embedded')"
          @mouseenter="select('embedded')"
        >
          <ellipse rx="68" ry="22.5" />
          <text x="0" y="7">Embedded</text>
        </g>
      </svg>
    </div>

    <div class="content-venn__panels">
      <div
        v-for="category in categories"
        :key="category.id"
        class="content-venn__panel"
        :class="{ 'is-active': isActive(category.id) }"
        role="region"
        :aria-label="category.label"
        :aria-hidden="isActive(category.id) ? undefined : 'true'"
      >
        <p class="content-venn__label">
          <span class="content-venn__label-en">{{ category.label }}</span>
          <span class="content-venn__label-ja">{{ category.labelJa }}</span>
        </p>
        <p class="content-venn__desc">{{ category.description }}</p>
        <ul class="content-venn__elements">
          <li v-for="el in category.elements" :key="el">
            <code>{{ el }}</code>
          </li>
        </ul>
        <p v-if="category.note" class="content-venn__note">{{ category.note }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.content-venn {
  display: grid;
  grid-template-columns: minmax(0, 1.1fr) minmax(0, 1fr);
  gap: 1.25rem;
  align-items: center;
  font-size: 1rem;
  line-height: 1.4;
}

.content-venn__diagram {
  min-width: 0;
}

.content-venn__diagram svg {
  display: block;
  width: 100%;
  height: auto;
  max-height: 16rem;
  font: bold 18px sans-serif;
  text-anchor: middle;
  cursor: pointer;
}

.content-venn__diagram ellipse {
  fill: #3c790a;
  stroke: #000;
  stroke-width: 1.5;
  opacity: 0.55;
  transition:
    opacity 0.15s ease,
    stroke-width 0.15s ease;
}

.content-venn__diagram text {
  fill: #fff;
  pointer-events: none;
  paint-order: stroke fill;
  stroke: rgba(0, 0, 0, 0.35);
  stroke-width: 2px;
}

.content-venn__diagram .region.is-active ellipse {
  opacity: 0.9;
  stroke-width: 4;
}

/* 全パネルを同セルに重ね、非表示もレイアウトに残して最大高さで揃える */
.content-venn__panels {
  display: grid;
  min-width: 0;
}

.content-venn__panel {
  grid-area: 1 / 1;
  min-width: 0;
  padding: 0.75rem 1rem;
  border: 2px solid rgba(60, 121, 10, 0.45);
  border-radius: 0.5rem;
  background: rgba(60, 121, 10, 0.06);
  visibility: hidden;
}

.content-venn__panel.is-active {
  visibility: visible;
}

.content-venn__label {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 0.5rem 0.75rem;
  margin: 0 0 0.4rem;
  font-weight: 700;
  line-height: 1.2;
}

.content-venn__label-en {
  font-size: 1.35rem;
}

.content-venn__label-ja {
  font-size: 1rem;
  font-weight: 600;
  opacity: 0.75;
}

.content-venn__desc {
  margin: 0 0 0.6rem;
  font-size: 0.95rem;
  opacity: 0.9;
}

.content-venn__elements {
  display: flex;
  flex-wrap: wrap;
  gap: 0.25rem 0.5rem;
  margin: 0;
  padding: 0;
  list-style: none;
  font-size: 0.85rem;
}

.content-venn__elements code {
  font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
  color: #ce3c05;
}

.content-venn__note {
  margin: 0.5rem 0 0;
  font-size: 0.75rem;
  font-style: italic;
  opacity: 0.7;
}

html.dark .content-venn__panel {
  border-color: rgba(120, 190, 80, 0.5);
  background: rgba(60, 121, 10, 0.18);
}

html.dark .content-venn__diagram ellipse {
  fill: #5a9e2a;
  stroke: #e8e8e8;
}

html.dark .content-venn__elements code {
  color: #ff8a5c;
}
</style>
