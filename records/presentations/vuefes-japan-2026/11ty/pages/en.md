---
layout: layout
title: The Right Way to Protect Your HTML, Revisited from Vue SFC
description: yamanoku's presentation materials for Vue Fes Japan 2026
lang: en
---

![Slide title: The Right Way to Protect Your HTML, Revisited from Vue SFC](../images/title-en.png)

[日本語ページ](../ja/) / [English page](../en/)

## Slides

[Slide deck](https://records.yamanoku.net/vuefes-japan-2026/slide/)

---

## Introduction

Hello, everyone. I'm yamanoku.

I'm a parent of one child, and I worked as a company employee through this October. I'm also involved as core staff for Vue Fes Japan 2026.

This year I also organized HTML-related events: [HTML Night in Tokyo](https://connpass.com/event/399762/) and [HTML Day 2026 in Tokatsu](https://htmlday2026.toukatsu.dev/).

At Vue Fes Japan 2025, I spoke about generative AI and accessibility improvements, and I'm speaking again this year.

One personal project I'd like to mention: I run [Vue Fes Japan Speakers](https://vuefes-japan-speakers.yamanoku.net/), a site that lists speakers from 2018 through this year. It is built with Vue.js and hosted on Cloudflare.

Looking myself up there, I've spoken six times over these four years, including panel discussions. I'm thinking of pausing conference talks for a while within this year, so this Vue Fes is intended to be my last talk for now. Thank you again for the speaking opportunities so far.

As the title says, this talk focuses on HTML. Since the days of the HTML5 Conference, I feel we have heard fewer conference talks centered on HTML itself. But as Ikeda-san's talk also showed, HTML keeps being updated. I wanted to reintroduce HTML itself, tied to Vue SFCs, and that is why I proposed this theme.

HTML appeared in 1991 and turns 35 this year. It spread as markup for documents; then decorative elements were added, and forms and interactive controls grew.

As separation of concerns with CSS and JavaScript progressed, the UI libraries we use in frontend work still implement UI with that HTML. Angular and Svelte let you build components with HTML elements; React and Solid use HTML-like expressions inside JSX.

Today it can express more than Markdown, so it is also used as AI output. And the HTML specification continues to be updated as the [HTML Living Standard](https://html.spec.whatwg.org/).

It is common knowledge that Vue SFCs let you write HTML in a `<template>` block. It looks like HTML at that point, but it is ultimately transformed into JavaScript.

```html
<script setup>
  import { ref } from "vue";
  const count = ref(2026);
  const addYear = () => {
    count.value++;
  };
</script>

<template>
  <h1>Vue Fes Japan {{count}} へようこそ！</h1>
  <button type="button" class="btn" @click="addYear">+1</button>
</template>

<style scoped>
/* ... */
</style>
```

HTML “correctness” is part of today's main topic. When you develop with Vue.js, can you explain how you verify that correctness? Today's talk aims to help everyone who hears this become able to answer that question.

Here is the conclusion of the talk up front:

- HTML parse errors → **detected**
- HTML element combinations → **warned in development**
- Concrete HTML element usage → **not involved**

Inside a Vue SFC `<template>`, mistaken HTML parsing is reported as an error. When element nesting differs from what is allowed, you get a development-time warning, but it is not a hard compile error. And for concrete element usage, the compiler is not involved at all.

Today I will cover the Vue compiler's limits, and how we support those limits.

Here is today's agenda:

1. What “correct HTML” is
2. How the compiler interprets it, and how far it looks
3. How to protect it with static analysis

---

## What is “correct HTML”

First, I want to align with you on what “correct HTML” means—the phrase in today's title.

To compare correct and incorrect cases, let's mark up a sentence from the site blurb: “Japan's largest frontend conference, Vue Fes Japan.”

If you only need to show the text, you would start with a paragraph. Next, “Japan's largest frontend conference” is important, so you emphasize it. Then make “Japan's largest” the strongest emphasis. With those requirements in place, think about how you would mark it up.

Written as intended, it looks like this:

```html
<p>
  <em><strong>日本最大級の</strong>フロントエンドカンファレンス</em> Vue Fes Japan
</p>
```

In the browser, that HTML displays like this:

![Browser DevTools showing a correctly nested em and strong tree matching the author's intent](../images/example-html-parse-ok.png)

And the HTML the browser ends up with looks like this:

```html
<p>
  <em>
    <strong>日本最大級の</strong>
    フロントエンドカンファレンス
  </em>
  Vue Fes Japan
</p>
```

What happens if the closing tags for `<em>` and `<strong>` are mismatched? Let's render that markup in the browser.

```html
<p>
  <em><strong>日本最大級の</em>フロントエンドカンファレンス</strong> Vue Fes Japan
</p>
```

![Browser DevTools showing mismatched closing tags repaired by the browser into a DOM that differs from the author's intent](../images/example-html-parse-error.png)

Compared with the earlier example, “frontend conference” also looks bold. Looking at how the browser actually expresses that as HTML, “Japan's largest” is roughly as intended, but then “frontend conference” is treated as part of the strongest emphasis as well.

```html
<p>
  <em>
    <strong>日本最大級の</strong>
  </em>
  <strong>フロントエンドカンファレンス</strong>
  Vue Fes Japan
</p>
```

So the resulting HTML ends up different from what you first expected.

Even when HTML syntax is wrong, there is no way to stop it as such—browsers self-interpret and display it anyway. Incorrect HTML can still cause problems in document structure, style application, SSR, and accessibility.

There is no single correct markup for every case. Instead, HTML has rules you must follow. Getting HTML to parse correctly—as in the example above—is one of them. In this talk, keeping “HTML correctness” means thoroughly following those rules.

Correct HTML brings benefits such as:

First, semantic code carries intent, and becomes more robust and maintainable than writing everything with meaningless `<div>` and `<span>`.

Second, when it is expressed in a Web browser, both people and user agents can interpret and handle it correctly.

Third, HTML's own accessibility requirements become usable, so you can protect a baseline of accessibility in the browser.

Finally, it helps prevent SSR hydration mismatches in advance and keep the application working normally.

Next, I'll introduce the rules that protect that correctness.

There are three kinds of rules for keeping HTML correct:

1. **Lexical rules**
2. **Vocabulary rules**
3. **Semantic rules**

Let's look at them in order.

### Lexical rules

Lexical rules concern matching start and end tags, and how attributes are written. Violations can make the parser error and prevent a correct DOM tree.

```html
<!-- NG: mismatched end tags / broken attribute value quoting -->
<div>
  <p>text
</div>
```

WHATWG explains why such syntax is non-conforming in the [Syntax errors](https://html.spec.whatwg.org/dev/introduction.html#syntax-errors) chapter.

### Vocabulary rules

Next are vocabulary rules: which elements and attributes you may use, and nesting rules from the content model. These are trickier than lexical rules—the parser may not complain, but the DOM is still undesirable. Even when tag pairing is fine, wrong nesting between elements can produce a broken DOM. For example, placing a `<div>` inside a `<p>`.

```html
<!-- NG: block elements must not appear inside <p> -->
<p>
  <div>block</div>
</p>
```

The specification organizes this under [Restrictions on content models and on attribute values](https://html.spec.whatwg.org/dev/introduction.html#restrictions-on-content-models-and-on-attribute-values).

### Content models

The content model is the core of vocabulary rules: what may appear inside which element. For example, `<p>`'s content model is Phrasing content, so a flow-only element like `<div>` is not allowed. Vocabulary rules are defined by which categories each element belongs to—you can check that on MDN and similar references.

Here are example content-model violations:

| Parent | Child elements | Why it's NG |
| --- | --- | --- |
| `<p>` | `<div>`, `<p>`, `<ul>` | Blocks cannot go inside a paragraph |
| `<label>` | `<div>`, `<p>` | Outside the label content model |
| `<a>` | `<a>` | Nested links are not allowed |
| `<ul>` / `<ol>` | `<div>` | Children should basically be `<li>` |

### Semantic rules

Finally, semantic rules—the part often called “semantics.” Using an element for a purpose other than what it is for is a violation. Markup can be grammatically fine and still communicate the wrong meaning. For example, using `<h1>` only for appearance, or building a button with `<a>`.

```html
<!-- NG: using a heading only for appearance -->
<h1 class="title-like">I just want bigger text</h1>

<!-- NG: building a button with an <a> -->
<a href="#" onclick="submitForm()">Submit</a>
```

Tools cannot catch everything here; human review is also needed. Handling semantics connects directly to making use of accessibility—one of HTML's strengths.

---

## How the compiler interprets it, and how far it looks

Next, we'll look at how the Vue compiler interprets the inside of a Vue SFC `<template>`, starting from the mechanisms.

Again, Vue uses HTML as a DSL. It looks like HTML, but it is ultimately transformed into JavaScript.

```html
<script setup>
  import { ref } from "vue";
  const count = ref(2026);
  const addYear = () => {
    count.value++;
  };
</script>

<template>
  <h1>Vue Fes Japan {{count}} へようこそ！</h1>
  <button type="button" class="btn" @click="addYear">+1</button>
</template>
```

Vue SFC compilation has three stages:

1. **Parse** — build an AST from the SFC contents
2. **Transform** — apply Vue directives and optimizations to the AST
3. **Generate** — finally emit JavaScript

At Parse time, broken HTML writing can be detected and reported as errors. That is the lexical-rule coverage.

### Can `<div />` be parsed?

Quiz time. Can a self-closing `<div>` be parsed?

The answer: yes. In Vue, a self-closing tag is interpreted as a `<div>` with matching start and end tags. Custom Elements and Vue components can also use self-closing tags; detection uses whether `isSelfClosing` is present on the AST, and they are expressed as start and end tags.

- `<div v-text="Vue Fes Japan" />` renders as `<div>Vue Fes Japan</div>`
- `<div />Vue Fes Japan` becomes `<div></div>Vue Fes Japan`

But as HTML, a self-closing `<div>` is not valid. That gap between Vue's parser and the HTML specification is important to understand.

A short digression on self-closing tags outside Vue: Prettier formats with self-closing tags. There has been talk of revisiting that, but note that it cannot be changed. Biome's formatter lets you change the behavior; the default is not to use self-closing tags (`--html-formatter-self-close-void-elements=<always|never>`). In Svelte, Rich Harris revisited a misunderstanding around self-closing tags and a migration tool was created (`npx svelte-migrate self-closing-tags`). Conventions differ by library and framework—worth remembering.

### Content models get warnings

So does Vue do nothing beyond lexical rules? Not quite. From Vue 3.4 onward, `compiler-dom`'s `validateHtmlNesting` warns about invalid nesting in development.

![Editor screen showing Vue template warnings when h1 or li is placed inside p, flagged as nesting that violates the HTML specification](../images/vue-nesting-warning.png)

It is welcome DX aimed partly at preventing SSR hydration mismatches. But it is only a development-time warning, not a hard compile error. Ignore the warning and it still runs.

So Vue's compiler coverage looks like this:

| Rule | Vue compiler coverage |
| --- | --- |
| Lexical | 〇 (self-closing tags have Vue's own interpretation) |
| Vocabulary (element usage) | △ (development-time warnings only) |
| Semantic | ✕ |

Lexical rules are covered in the sense that parsing catches broken writing—aside from self-closing tag interpretation. Vocabulary rules are only development-time warnings, so “fully covered” is a stretch. Semantic rules are not covered at all. Vocabulary and semantic rules need another mechanism—the static analysis we cover next.

### Why do we need static analysis?

Before introducing the static analysis tools, I also want to touch on why we need static analysis at all.

In last year's talk, I introduced that zero-shot prompts can already produce reasonably accessible code. With today's models, couldn't vibe coding keep HTML correctness on its own?

My answer to that doubt is: static analysis is still needed. We should give AI agents deterministic judgments to work from.

Most people today develop with AI agents. Judgment by AI alone is non-deterministic. Even capable models depend on the model, so certainty and reproducibility stay thin.

Static analysis is also needed to prove deterministically that HTML is structurally correct and consistent with intent, so AI agents can decide faster from that deterministic information. On that basis, we should mass-produce correct code without hesitation. That is how “correctness” gains certainty and reproducibility.

---

## How to protect it with static analysis

So next I'll introduce how far, and how, static analysis ecosystems can protect HTML correctness that the compiler alone cannot keep.

### ESLint

First up is ESLint. For Vue, [eslint-plugin-vue](https://eslint.vuejs.org/) is the well-known plugin.

[`vue/no-parsing-error`](https://eslint.vuejs.org/rules/no-parsing-error.html) can report syntax errors inside `<template>`. It catches many lexical WHATWG HTML syntax errors and is included in essential-style presets. Checks specific to self-closing tags alone are disabled by default. This is a lexical rule, and catching it from code alone—without going through the runtime—is an advantage.

I have not found rules in this plugin that cover vocabulary rules. On the semantic side, something like [`vue/html-button-has-type`](https://eslint.vuejs.org/rules/html-button-has-type.html), which forces a `type` on `<button>`, is about the only candidate.

[eslint-plugin-vuejs-accessibility](https://vue-a11y.github.io/eslint-plugin-vuejs-accessibility/) protects semantics through an accessibility lens. For example, [`form-control-has-label`](https://vue-a11y.github.io/eslint-plugin-vuejs-accessibility/rules/form-control-has-label.html) lets you name label and control components.

```json
{
  "rules": {
    "vuejs-accessibility/form-control-has-label": [
      "error",
      {
        "labelComponents": ["CustomLabel"],
        "controlComponents": ["CustomInput"]
      }
    ]
  }
}
```

### Biome

Next is Biome: a toolchain that combines linter and formatter. It supports many languages and libraries, including Vue.

It can do partial vocabulary checks such as whether `<li>` is used under an appropriate parent ([`noMisplacedListElements`](https://biomejs.dev/linter/rules/no-misplaced-list-elements/)), check duplicate attributes ([`noDuplicateAttributes`](https://biomejs.dev/linter/rules/no-duplicate-attributes/)), flag obsolete HTML elements ([`noObsoleteTags`](https://biomejs.dev/linter/rules/no-obsolete-tags/)), and do semantic-leaning checks ([`useSemanticElements`](https://biomejs.dev/linter/rules/use-semantic-elements/)).

Biome is also advancing HTML super-language support. From v2.3.0, Vue / Svelte / Astro work out of the box for formatting and linting HTML / CSS / JavaScript inside those files. It is still experimental, so you need to enable it explicitly, but it has reached a usable level.

### Oxc

I'll also mention Oxc as another toolchain option. [OxLint](https://oxc.rs/) is the linter: Vue-specific rules are strong, but there is currently no deep mechanism for HTML inside `<template>`. If [RFC: Embedded Framework Support for Oxlint (Language Plugins)](https://github.com/oxc-project/oxc/discussions/21936) moves forward, support may become clearer—something to watch.

So ESLint and Biome / Oxc are mainly strong on lexical and syntax-oriented checks, or parts of vocabulary. The layer that looks deeply at content models and conformance was thin.

### Markuplint

The linter I point to for filling that gap is [Markuplint](https://markuplint.dev/). Markuplint's strength is broad Living Standard–based validation. For Vue, `@markuplint/vue-parser` and `@markuplint/vue-spec` are available.

[`permitted-contents`](https://markuplint.dev/docs/rules/permitted-contents) validates content models from specification data. A `<div>` directly under `<ul>` is invalid; `<li>` is fine. Here we finally get full vocabulary-rule checking.

```html
<!-- incorrect -->
<ul>
  <div>Not allowed DIV element</div>
</ul>

<!-- correct -->
<ul>
  <li>List item</li>
  <li>List item</li>
</ul>
```

As the name suggests, Markuplint lints markup—so it also includes many semantic-leaning rules.

[`no-pseudo-list`](https://markuplint.dev/docs/rules/no-pseudo-list) stops bullet characters used as fake lists and asks for `<ul>` / `<li>`.

```html
<!-- incorrect -->
<div>
  •Apple<br />
  •Banana
</div>

<!-- correct -->
<ul>
  <li>Apple</li>
  <li>Banana</li>
</ul>
```

There are also [`no-consecutive-br`](https://markuplint.dev/docs/rules/no-consecutive-br) (consecutive `<br>`) and [`no-skipped-heading-level`](https://markuplint.dev/docs/rules/no-skipped-heading-level) (no skipped heading levels).

```html
<!-- incorrect: no-consecutive-br -->
<p>
  A...<br />
  <br />
  B...
</p>

<!-- correct -->
<p>A...</p>
<p>B...</p>
```

```html
<!-- incorrect: no-skipped-heading-level -->
<h1>Heading 1</h1>
<h3>Heading 3<!-- SKIPPED --></h3>
<h4>Heading 3</h4>

<!-- correct -->
<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
```

An excellent Markuplint feature is [Pretenders](https://markuplint.dev/docs/guides/beyond-html#pretenders): an option to treat Vue components as the HTML elements they render. For example, map a `FileList` Vue component → `<ul>` and a `FileListItem` Vue component → `<li>` to evaluate content models. 

```json
{
  "pretenders": [
    {
      "selector": "FileList",
      "as": "ul"
    },
    {
      "selector": "FileListItem",
      "as": "li"
    }
  ]
}
```

From Markuplint v5, experimental automatic component scanning is available, so you can detect issues without listing components by hand.

```json
{
  "pretenders": {
    "scan": [
      {
        "files": "./src/components/**/*.vue"
      }
    ]
  }
}
```

With Markuplint, we can check content models and check semantics.

### Vize

Further along that line is a newer tool: [Vize](https://vizejs.dev/).

It is a Rust-based Vue toolchain by ubugeeei. Its linter separates HTML conformance from Vue-specific rules and accessibility.

- Vue: [https://vizejs.dev/rules/vue/index.html](https://vizejs.dev/rules/vue/index.html)
- HTML: [https://vizejs.dev/rules/html/index.html](https://vizejs.dev/rules/html/index.html)
- a11y: [https://vizejs.dev/rules/accessibility/index.html](https://vizejs.dev/rules/accessibility/index.html)

Content-model checks like Markuplint's are also available via the `vue/permitted-contents` rule.

Especially strong in Vize's linter is `html/cross-component-nesting`. Markup that is fine in a single file can still go wrong when combined with components, and that can be stopped across files. `vize lint --cross-file` enables cross-file checks.

For example, if `App.vue` places `InfoCard` inside a `<p>`, and `InfoCard`'s root is a `<div>`, each file alone is legal, but the composed result is effectively a `<div>` inside a `<p>`—invalid.

```html
<!-- App.vue -->
<template>
  <p>Summary <InfoCard /></p>
</template>

<!-- InfoCard.vue -->
<template>
  <div class="card"><slot /></div>
</template>
```

I think Vize's strength is that this “after composition” check is available by default.

Vize can also replace Vue's compiler. With the `templateSyntax` option, the compiler side can warn when self-closing tags appear, and you can switch modes to error or ignore.

```js
import vize from "@vizejs/vite-plugin";

export default {
  plugins: [
    vize({
      templateSyntax: "standard",
    }),
  ],
};
```

Vize is a multi-purpose toolchain beyond linting. ubugeeei also speaks at 15:05 on the Wellness × hacomono track—please go listen if you're interested.

---

## Closing

Finally, a summary of this talk:

1. Grasp HTML “correctness” (lexical, vocabulary, and semantic rules)
2. Understand how the Vue compiler interprets templates, and how far it looks
3. Use static analysis to cover what the compiler does not see

Combine the static analysis tools that fit each person's environment.

Use this talk as a reference, and let's realize robust markup and accessible HTML output with Vue.js.

That concludes the talk. Thank you for listening.

## References

- [HTML Standard](https://html.spec.whatwg.org/)
- [WHATWG: Non-conforming features](https://html.spec.whatwg.org/#non-conforming-features)
- [Vue: validateHtmlNesting](https://github.com/vuejs/core/blob/main/packages/compiler-dom/src/transforms/validateHtmlNesting.ts)
- [eslint-plugin-vue](https://eslint.vuejs.org/rules/)
- [eslint-plugin-vuejs-accessibility](https://vue-a11y.github.io/eslint-plugin-vuejs-accessibility/)
- [Biome](https://biomejs.dev/)
- [Oxlint | The JavaScript Oxidation Compiler](https://oxc.rs/docs/guide/usage/linter.html)
- [Markuplint](https://markuplint.dev/)
- [Vize](https://vizejs.dev/index.html)
