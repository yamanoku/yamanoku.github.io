<template>
  <section id="vuejs-and-web-accessibility">
    <h2>Vue.jsとWebアクセシビリティ</h2>
    <p>
      アクセシビリティについて何かを知っていただいたとことで、本題でもあるVue.jsとアクセシビリティにまつわる話をしていきたいと思います。
    </p>
    <h3>アクセシビリティのドキュメントがない</h3>
    <p>
      Vue.jsが日本で爆発的な人気を誇った要因の１つとして公式ドキュメントが日本語訳されていたことがあると思っています。私自身、ドキュメントの日本語訳があることで非常に取り組みやすかったです。
    </p>
    <p>
      ところでそんなVue.jsの公式ドキュメントでアクセシビリティについてどれだけ言及されているか皆さんはご存知でしょうか。
    </p>
    <p>
      実はアクセシビリティに言及されたドキュメントはなく、一部のドキュメント内で軽く触れているだけなのです。
    </p>
    <blockquote lang="en">
      <p>
        As we develop our &lt;blog-post&gt; component, some features may require
        communicating back up to the parent. For example, we may decide to
        include an
        <b>accessibility</b> feature to enlarge the text of blog posts, while
        leaving the rest of the page its default size:
      </p>
      <a
        href="https://vuejs.org/v2/guide/components.html#Listening-to-Child-Components-Events"
        target="_blank"
        rel="noopener"
        >Components Basics — Listening-to-Child-Components-Events —
        Vue.js<open-new-icon
      /></a>
    </blockquote>
    <blockquote lang="en">
      <p>
        You can use this base icon as is- the only thing you might need to
        update is the viewBox depending on the viewBox of your icons. In the
        base, we’re making the width, height, iconColor, and name of the icon
        props so that it can be dynamically updated with props. The name will be
        used for both the &lt;title&gt; content and its id for
        <b>accessibility</b>.
      </p>
      <a
        href="https://vuejs.org/v2/cookbook/editable-svg-icons.html#Base-Example"
        target="_blank"
        rel="noopener"
        >Editable SVG Icon Systems — Base Example — Vue.js<open-new-icon
      /></a>
    </blockquote>
    <p>
      ReactとAngularは公式ドキュメントにアクセシビリティの項目があり、開発における留意点などをまとめています。
    </p>
    <ul>
      <li>
        <a
          href="https://ja.reactjs.org/docs/accessibility.html"
          target="_blank"
          rel="noopener"
          >アクセシビリティ – React<open-new-icon
        /></a>
      </li>
      <li>
        <a
          href="https://angular.io/guide/accessibility"
          target="_blank"
          rel="noopener"
          >Angular - Accessibility in Angular<open-new-icon
        /></a>
      </li>
    </ul>
    <p>
      私はReactやAngularと同様にアクセシビリティの項目を設けても良いと感じています。Vue.jsのIssueを調べてみたところCallum
      Macra氏がドキュメントを作成を進めていたようなのですが、現在Pull
      Requestは止まっている状態です。
    </p>
    <a
      href="https://github.com/vuejs/vuejs.org/issues/974"
      target="_blank"
      rel="noopener"
      >Accessibility docs · Issue #974 · vuejs/vuejs.org<open-new-icon
    /></a>
    <p>
      まだ途中ではありますが、現在編集が進んでいるドキュメントではWebアクセシビリティを理解するにとても良くまとまっている内容でした。英語のドキュメントですが、皆さんにも見ていただきたいです。
    </p>
    <a
      href="https://github.com/callumacrae/vuejs.org/blob/a11y-docs/src/v2/guide/accessibility.md"
      target="_blank"
      rel="noopener"
      >vuejs.org/accessibility.md at a11y-docs ·
      callumacrae/vuejs.org<open-new-icon
    /></a>
    <h3>Vue a11y</h3>
    <p>
      公式ドキュメントでのアクセシビリティ項目の作成はまだですが、代わりにVue.jsのアクセシビリティコミュニティは作られています。
    </p>
    <figure>
      <picture>
        <source
          srcset="~/assets/img/vue-a11y-vuea11ycom.webp"
          type="image/webp"
        />
        <img
          src="~/assets/img/vue-a11y-vuea11ycom.png"
          height="360"
          alt="Vue a11yサイトのスクリーンショット"
          loading="lazy"
        />
      </picture>
      <figcaption>
        <a href="https://vue-a11y.com/" target="_blank" rel="noopener"
          >Vue a11y<open-new-icon
        /></a>
      </figcaption>
    </figure>
    <p>
      まだ作られて間もないコミュニティですが、Vue.js製のアクセシビリティライブラリもいくつか作成しており、私も何かしら寄与できたらいいなと思っております。
    </p>
  </section>
</template>
