<template>
  <section id="section:accessibility-relationship">
    <h2>アクセシビリティ対応と必要性について</h2>
    <p>webアクセシビリティについて、Vue.js開発におけるアクセシビリティの関わり方についてを紹介しました。興味をもっていただいたところで、この節では様々なアクセシビリティ対応、そして何が必要となるかについてを紹介します。</p>
    <h3>Vue.jsとアクセシビリティ対応</h3>
    <p>まずはVue.jsにまつわるアクセシビリティ対応を紹介します。</p>
    <h4>アクセシビリティのドキュメントがない</h4>
    <p>Vue.jsが日本で爆発的な人気を誇った要因の１つとして公式ドキュメントが日本語訳されていたことがあると思っています。私自身、ドキュメントの日本語訳があることで非常に取り組みやすかったです。</p>
    <p>ところでそんなVue.jsの公式ドキュメントでアクセシビリティについてどれだけ言及されているか皆さんはご存知でしょうか。</p>
    <p>実はアクセシビリティに言及されたドキュメントはなく、一部のドキュメント内で軽く触れているだけなのです。</p>
    <blockquote>
      <p>
        As we develop our &lt;blog-post&gt; component, some features may require communicating back up to the parent. For example, we may decide to include an
        <b>accessibility</b> feature to enlarge the text of blog posts, while leaving the rest of the page its default size:
      </p>
      <a
        href="https://vuejs.org/v2/guide/components.html#Listening-to-Child-Components-Events"
        target="_blank"
        rel="noopener"
      >Components Basics — Listening-to-Child-Components-Events — Vue.js</a>
    </blockquote>
    <blockquote>
      <p>
        You can use this base icon as is- the only thing you might need to update is the viewBox depending on the viewBox of your icons. In the base, we’re making the width, height, iconColor, and name of the icon props so that it can be dynamically updated with props. The name will be used for both the &lt;title&gt; content and its id for
        <b>accessibility</b>.
      </p>
      <a
        href="https://vuejs.org/v2/cookbook/editable-svg-icons.html#Base-Example"
        target="_blank"
        rel="noopener"
      >Editable SVG Icon Systems — Base Example — Vue.js</a>
    </blockquote>
    <p>ReactとAngularは公式ドキュメントにアクセシビリティの項目があり、開発における留意点などをまとめています。</p>
    <ul>
      <li>
        <a
          href="https://ja.reactjs.org/docs/accessibility.html"
          target="_blank"
          rel="noopener"
        >アクセシビリティ – React</a>
      </li>
      <li>
        <a
          href="https://angular.io/guide/accessibility"
          target="_blank"
          rel="noopener"
        >Angular - Accessibility in Angular</a>
      </li>
    </ul>
    <p>私はReactやAngularと同様にアクセシビリティの項目を設けても良いと感じています。Vue.jsのIssueを調べてみたところCallum Macra氏がドキュメントを作成を進めていたようなのですが、現在Pull Requestは止まっている状態です。</p>
    <ul>
      <li>
        <a
          href="https://github.com/vuejs/vuejs.org/issues/974"
          target="_blank"
          rel="noopener"
        >Accessibility docs · Issue #974 · vuejs/vuejs.org</a>
      </li>
      <li>
        <a
          href="https://github.com/callumacrae/vuejs.org/blob/a11y-docs/src/v2/guide/accessibility.md"
          target="_blank"
          rel="noopener"
        >vuejs.org/accessibility.md at a11y-docs · callumacrae/vuejs.org</a>
      </li>
    </ul>
    <p>私はこの内容についてを理解したいと思い、現在編集が進んでいるドキュメントを翻訳をしてみました。まだ途中ではありますがwebアクセシビリティを理解するにとても良くまとまっている内容でしたので、皆さんにも見ていただきたいです。</p>
    <a
      href="https://gist.github.com/yamanoku/73176671e3d7d093b1635f37e0776fe8"
      target="_blank"
      rel="noopener"
    >vuejs.org アクセシビリティに関するドキュメント（作業途中） の日本語訳</a>
    <h4>Vue a11y</h4>
    <p>公式ドキュメントでのアクセシビリティ項目の作成はまだですが、代わりにVue.jsのアクセシビリティコミュニティは作られています。</p>
    <figure>
      <img src="~/assets/img/vuefesjapan2019-vuea11y.png" height="360" alt="Vue a11yサイトのスクリーンショット" />
      <figcaption>
        <a href="https://vue-a11y.com/" target="_blank" rel="noopener">Vue a11y</a>
      </figcaption>
    </figure>
    <p>まだ作られて間もないコミュニティですが、さきほど紹介したvue-announcerのようなアクセシビリティライブラリもいくつか作成しており、私も何かしら寄与できたらいいなと思っております。</p>
    <h3>カンファレンスとアクセシビリティ対応</h3>
    <p>次はカンファレンスの視点でのアクセシビリティの付き合い方についても考えてみましょう。</p>
    <h4>カンファレンスのアクセシビリティ方針</h4>
    <p>今年の11月30日から12月1日まで日本でも開催されるJSConfですが、これまでのイベントではアクセシビリティページが用意されています。</p>
    <figure>
      <img
        src="~/assets/img/vuefesjapan2019-jsconfeu.png"
        height="336"
        alt="JSConf EU2019のアクセシビリティページのスクリーンショット"
      />
      <figcaption>
        <a
          href="https://2019.jsconf.eu/accessibility/"
          target="_blank"
          rel="noopener"
        >Accessibility - JSConf EU</a>
      </figcaption>
    </figure>
    <p>会場はバリアフリーな施設であるか、案内は看板など視覚的な誘導はあるか、発表でキャプション表示や手話対応はあるか、託児所のような子どもを預かれる場所はあるか等、考えればキリはないのですが、配慮がまったく無いことは何らかの障壁がある参加者を排除してしまっていることにも繋がってしまいます。</p>
    <p>9月に開催された技術書典7では車椅子・ベビーカーでの来場を可能にして、託児サービスもはじめていました。今後は Vue Fes Japan も含めてカンファレンスや勉強会・イベントで、こういった配慮が少しずつでもできるようになればいいなと思っております。</p>
    <a
      href="https://blog.techbookfest.org/2019/09/12/wchair-baby-car/"
      target="_blank"
      rel="noopener"
    >技術書典7へ車椅子・ベビーカー・お子様連れでご来場の皆さまへ - 技術書典ブログ</a>
    <h4>通訳・翻訳</h4>
    <p>今回の Vue Fes Japan では Evan You 氏、ほか海外ゲストのセッションが同時通訳されます。私自身英語の聞き取りには自信が無いのでこういった配慮は大変ありがたいです。</p>
    <p>では日本語で発表する内容は海外の方が聞くときに通訳されているでしょうか。日本でのカンファレンスなのだから必要はないと感じるかもしれませんが、日本語は分からないけどどういったセッションなのかを知りたい人はいるかもしれません。</p>
    <p>国際化といった翻訳や通訳は対応コストがかかるもので容易なことではありませんが、どこかが一方通行にならないように情報を提供する取り組みも必要だと感じています。</p>
    <h3>日本とアクセシビリティ対応</h3>
    <p>次は Vue Fes Japan が開催されているこの日本でのどのようなアクセシビリティが必要になってるかをお話します。</p>
    <h4>超高齢化社会</h4>
    <p>日本は世界トップクラスの長寿国である一方、人類がこれまで経験したことのない超高齢化社会にも突入しています。</p>
    <p>15歳以上65歳未満の生産年齢人口が今後減っていく中、誰もが参加することのできるアクセシビリティ対応をしていくことは、社会意義としても重要になってくることでしょう。</p>
    <h4>3.11以降の対応</h4>
    <p>2011年3月11日、東日本大震災という大きな災害が発生しました。あれから8年が経とうとしていますが、皆さんの記憶には鮮明に残っていることでしょう。</p>
    <p>震災発生以後、聴覚障害者のための対応が増えたということはあまり知られていないかもしれません。</p>
    <p>防災無線が聞こえなかったせいで聴覚障害者の死亡率が健常者と比較して2倍だったことや、避難生活ではコミュニケーションを取ることができず孤立化したり、障害者を支援する措置が不足していたりなど問題が浮き彫りとなっていたからです。</p>
    <figure>
      <div class="youtube-frame">
        <iframe
          src="https://www.youtube.com/embed/fdduYVInSA8"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      </div>
      <figcaption>
        <a
          href="https://www.jfd.or.jp/2014/03/11/pid11787"
          target="_blank"
          rel="noopener"
        >全日本ろうあ連盟 » 東日本大震災から3年を迎えて 3.11声明</a>
      </figcaption>
    </figure>
    <h4>東京オリンピックと東京パラリンピック</h4>
    <p>2020年には東京でオリンピックが56年ぶりに開催されます。大会の基本コンセプトの一つに「多様性と調和」を挙げています。</p>
    <p>公式サイトでは web アクセシビリティの遵守はもちろんのこと、すべての人々にとってアクセシブルでインクルーシブな大会とするためのアクセシビリティ・ガイドラインも制定しています。</p>
    <p>パラリンピックでの選手の活躍を見る以外にも、国際的な大会で日本がどういうアクセシビリティな取り組みをしているのかを見てみるのもよいかもしれません。</p>
    <h3>アクセシビリティをより理解するには</h3>
    <h4>参加する</h4>
    <p>アクセシビリティをやっていくにあたり1人で1から初めていくことは非常に困難なことです。まずは日本のアクセシビリティグループのA11YJの Slack Team に入ってみることをオススメします。</p>
    <p>アクセシビリティ初心者の方から、web アクセシビリティを高めていくために必要な基盤構築の活動をする web アクセシビリティ基盤委員会のメンバー、web 以外でアクセシビリティにまつわる取り組みをされている方たちが居ます。アクセシビリティにまつわる情報共有、実装で困ったことやどういう解決策が良いのか質問することができます。</p>
    <a href="https://a11yj.herokuapp.com/" target="_blank" rel="noopener">a11yj-slack-team</a>
    <p>そのほか、渋谷を中心としたアクセシビリティ勉強会グループの CA11Y 、神戸市で2015年から毎年開催されているアクセシビリティの祭典、今年の7月に開催された Japan Accessibility Conference などアクセシビリティにまつわるイベントも開催されています。</p>
    <ul>
      <li>
        <a href="https://ca11y.connpass.com/" target="_blank" rel="noopener">CA11Y</a>
      </li>
      <li>
        <a href="https://accfes.com/" target="_blank" rel="noopener">アクセシビリティの祭典</a>
      </li>
      <li>
        <a
          href="https://japan-a11y-conf.com/"
          target="_blank"
          rel="noopener"
        >Japan Accessibility Conference</a>
      </li>
    </ul>
    <h4>知る</h4>
    <p>web アクセシビリティを知っていくにあたり、参考文献が必要になると思います。まずはデザイニング web アクセシビリティを読んでみることをおすすめします。技術的なことよりかは、web アクセシビリティの概念を理解するために最適な一冊です。</p>
    <a
      href="https://www.amazon.co.jp/dp/4862462650/"
      target="_blank"
      rel="noopener"
    >デザイニングwebアクセシビリティ: アクセシブルな設計やコンテンツ制作のアプローチ</a>
    <p>そのほか、 A11YJ の有志によって作り上げた web アクセシビリティ参考資料まとめサイトの accrefs 、web アクセシビリティの「すべき/すべからず」を参照できるポスターの Access Needs Posters 、公的機関での web アクセシビリティ方針策定と試験結果表示の実態調査まとめも参考になります。</p>
    <ul>
      <li>
        <a href="https://accrefs.jp/" target="_blank" rel="noopener">accrefs - webアクセシビリティの参考資料まとめ</a>
      </li>
      <li>
        <a
          href="https://github.com/UKHomeOffice/posters/blob/master/accessibility/dos-donts/posters_ja/PDF/accessibility-posters-set_ja.pdf"
          target="_blank"
          rel="noopener"
        >Access Needs Posters（日本語版）</a>
      </li>
      <li>
        <a
          href="https://waic.jp/resource/report/"
          target="_blank"
          rel="noopener"
        >実態調査 | webアクセシビリティ基盤委員会（WAIC）</a>
      </li>
    </ul>
  </section>
</template>

<style scoped>
.youtube-frame {
  padding-top: 50.726%;
  position: relative;
}
.youtube-frame iframe {
  border: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}
</style>
