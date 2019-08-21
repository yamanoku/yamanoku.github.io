<template>
  <main>
    <h2>yamanoku.netについて</h2>
    <p>yamanoku.netは、yamanokuこと大山奥人のポートフォリオサイトです。</p>
    <h3>ページデザインの解説</h3>
    <p>あらゆる層の方が見やすいようにインクルーシブを重視したデザインを取り入れています。</p>
    <h4>最大幅について</h4>
    <p>ページの最大幅は80chに設定しています。chはチェーンと呼ばれ、文字のサイズによって可変する単位です。この設定にすることのメリットとして、長文を読めない読字障害をサポートしたり、文字サイズが大きくなるに従ってテキストの一部が欠けて読めなくなるような事態も発生しにくくなります。</p>
    <h4>行間について</h4>
    <p>バーティカルリズムを採用しています。24pxの行間を基準としてマージンや余白などを設定しています。認知障害がある利用者は、単語と単語の間隔が均一になっていると、テキストをより容易に読めるようになります。</p>
    <h3>{{$t("heading.techStack")}}</h3>
    <ul role="list">
      <li role="listitem">
        Nuxt.js
        <ul role="list">
          <li role="listitem">@nuxtjs/pwa</li>
          <li role="listitem">nuxt-i18n</li>
          <li role="listitem">eslint-plugin-vue</li>
          <li role="listitem">eslint-plugin-vue-a11y</li>
        </ul>
      </li>
      <li role="listitem">Vuex （Store）</li>
      <li role="listitem">modern-normalize</li>
    </ul>
    <nuxt-link :to="localePath({ name: 'index'})">トップに戻る</nuxt-link>
  </main>
</template>

