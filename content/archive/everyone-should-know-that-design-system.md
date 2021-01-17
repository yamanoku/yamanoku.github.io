---
title: みんなに知ってもらいたいデザインシステムのこと
description: みんなに知ってもらいたいデザインシステムの説明です
date: 2019-12-15
author: yamanoku
---

[![Image from Gyazo](https://i.gyazo.com/fbb497cbab8715df69b3cdbb47879216.png)](https://gyazo.com/fbb497cbab8715df69b3cdbb47879216)

この記事は[クラウドワークス Advent Calendar 2019](https://qiita.com/advent-calendar/2019/crowdworks) の15日目になります。

みなさんこんにちは。2019年の10月よりクラウドワークスで働いております[@yamanoku](https://twitter.com/yamanoku)です。
普段は勉強会やカンファレンスに行ったり、インターネットを徘徊したり、飲酒をしたり、一児の父をやっていってます。現在はフロントエンドエンジニアとしてデザインシステムを作るチームにジョインしています。

今回はそのデザインシステムについて、どういったときに必要となるのか、エンジニア・デザイナーが知っておくべきこと、みんなに知っておいてほしいこと、をそれぞれ紹介したいと思います。

### デザインシステムについて

「デザインシステム」。フロントエンドのみならずWebに従事する人であればここ最近で耳にすることがあるWordかと思います。今一度認識を揃えるためここでは何なのかという解説をします。

デザインシステムの定義については以下記事より引用します。

> **デザインシステムは、個人、チーム、またはコミュニティによってコードおよびデザインツールとしてドキュメント化されていて、スタイル・コンポーネント・その他の懸念事項のライブラリが用意されているため、製品をより効率的かつ統一的に導入できます。**
>
> A design system offers a library of visual style, components, and other concerns documented and released by an individual, team or community as code and design tools so that adopting products can be more efficient and cohesive.
>
> [Defining Design Systems. Defining design systems seems a… | by Nathan Curtis | EightShapes | Medium](https://medium.com/eightshapes-llc/defining-design-systems-6dd4b03e0ff6)

「ドキュメント化」と「ライブラリ」いうと、UIの色や形に関するルールが載っているスタイルガイドであったり、コンポーネントが様々展開できるようにするパターンライブラリのそれにあたると思われるかも知れません。

ですがデザインシステムでは、スタイルガイドやパターンライブラリでは実現できなかった「**プロダクトを拡張できること**」が差異としてあげられます。

スタイルガイドやパターンライブラリは、一覧性を重視したガイドの機能しかなく、それらを作りきることに完結してしまい、プロダクトの成長に追随することまで考慮されているものではありませんでした。

![デザインシステムがスタイルガイドとパターンライブラリの機能を内包している図](https://d2l930y2yx77uc.cloudfront.net/production/uploads/images/16841088/picture_pc_2ea769e5bb3a5212ef2dcf53a622118e.png)

デザインシステムにおいては、それらを包括した上で、デザイン原則、情報設計、基盤、アクセシビリティ、についても定義されています。これらはガイドやライブラリだけでは分からない、それによって**何が実現できるのか**、**何を解決しうるものなのか**、といったプロダクトのアイデンティティをも体現してくれます。
原理・原則についてもドキュメント化されるので、プロダクトで新たな機能をつくったり、改修を行うにあたり「何を基準にしていけば行えばよいか」がより分かりやすくなります。

プロダクトのアイデンティティを示すものとしてUIコンポーネント以外にも、今年発表されたAdobeのデザインシステムである[Spectrum](https://spectrum.adobe.com/)では「Voice and Tone」「Grammar and mechanics」といった言葉やライティングにおけるスタイルガイドラインも制定されているなど、より広義でのデザインについてもシステム化されています。

![SpectrumのVoice and toneページ](https://d2l930y2yx77uc.cloudfront.net/production/uploads/images/16817816/picture_pc_a0cf0017c583b00ce98e524354c4ccf1.png)

- [Voice and tone - Spectrum](https://spectrum.adobe.com/page/voice-and-tone/)
- [Grammar and mechanics - Spectrum](https://spectrum.adobe.com/page/grammar-and-mechanics/)

更に2017年にはアメリカ合衆国が**国のデザインシステム**を発表し、国単位での一貫性のあるウェブサイトを作る取り組みが行われています。

[USWDS: The United States Web Design System](https://designsystem.digital.gov/)

![United States Web Design Systemサイトのスクリーンショット](https://d2l930y2yx77uc.cloudfront.net/production/uploads/images/16713084/picture_pc_0965a8fe801a09748c28e5b1ae13e59f.png)

また、日本でもさまざまな企業が活用事例をあげるようになってきています。以下はその事例になります。

- [ReX: Rakuten Experience：キャリア採用｜楽天株式会社](https://corp.rakuten.co.jp/careers/topics/creative1/)
- [デザインシステムの勉強会『designsystems.tokyo』を開催しました - freee Developers Blog](https://developers.freee.co.jp/entry/designsystems-tokyo)
- [Our little design system | 僕たちの小さなデザインシステム - eureka design](https://eureka.design/articles/our-little-design-system/)
- [Design Systemへの取り組み 〜Frontend編〜 | メルカリエンジニアリング](https://engineering.mercari.com/blog/entry/2019-08-26-090000/)
- [プロダクト間共通の React コンポーネントライブラリを運用する話 - SmartHR Tech Blog](https://tech.smarthr.jp/entry/2019/08/01/151100)

ちなみに今年の3月より[designsystems.tokyo](https://designsystems.tokyo/)という、事業会社にてデザインシステムに取り組む有志にて、どのように導入していくか検討したり議論するコミュニティが発足して、クラウドワークスもこちらに所属し、各勉強会に参加させていただいております。

[designsystems.tokyo - connpass](https://designsystems.connpass.com/)

### デザインシステムはいつ必要とされるのか

次にそんなデザインシステムについて、いつ必要となってくるものなのかについてを紹介します。

こう言ってしまうと元も子もありませんが、それを構築する必要性を感じなければ（コミュニケーションなどで解決できるなど）無理にやる必要はありません。デザインシステムに限らず、なんとなく始まってしまうものほど怖いものはありません。

[結局デザインシステムは何なのか](https://yasuhisa.com/could/article/what-is-design-system/)

ですが高度な要件定義を求められたり、その中で高速にリリースしていく必要がでてきたとしたら、デザインシステムなしでそれらに立ち向かうのは困難なようにも思えます。なぜなら、デザイナーとエンジニアの協業をより潤滑にしたり、サービスが拡大してもその品質を一定維持した開発ができるようになるからです。

> **事業利益に貢献するデザインとユーザー満足度に貢献するデザインを各々評価する**
>
> （中略）
>
> 当然ですが、どれだけユーザー満足度が高くても事業利益が上がらなければ、サービスは潰れます。逆にどれだけ短期の事業利益が上がっていてもユーザーが満足していないサービスはいづれユーザーが離れていくので、やはりサービスは潰れます。
> この両者を高い品質で成立させるようにデザインすることは難しいですが、サービスが大きく成長しながら長く生き残るためには必須です。

[Story-Assured Design - 未来の改善スピードのためのデザインワークフロー | ygoto3.com](https://ygoto3.com/posts/story-assured-design/)

新規事業をはじめるにあたり、１から新しく作るUIが適正に評価できるかはわかりません。ですが、デザインシステムでは一貫した体験を提供できるコンポーネント開発がされています。
それらを的確に組み合わせることで、小規模のチームであったとしても、品質を維持できた状態で効率的にプロダクト開発ができるとされています。

更にコンポーネントの混在化を防ぎ統一性をもたせるため、車輪の再開発といわれる無駄な工程を削減できます。

> もしあなたの企業に25のチームが存在していて、 それぞれのチームがボタンを作っている場合、 優れたボタンを作るのに100万ドルかかります。
> ー ネイサン・カーティス

以前こうしたコンポーネントの機能面とビジュアル面の関係性を確立するための**100万ドル案件**と呼ばれていた会議が弊社でおこなわれていたようです。

[デザインシステムの基本の基を考えていくお仕事をしています。｜みーた｜note](https://note.com/earlgray_mk/n/n67edfbc1073b)

以上を踏まえた上で次は、エンジニアとデザイナーの視点から考慮していく必要があることについてを紹介します。

### エンジニアに知ってもらいたいこと

デザイナーとの間でコミュニケーションが必要なものは、言葉における「**状態の表現**」だと思っています。

ボタン（button）というコンポーネントを例にとって考えてみます。
通常のとき、フォーカスされたとき、アクティブになっているとき、操作不能になったとき、とボタン１つにしても状態が色々と存在します。

![ボタンの操作状態について。通常、フォーカス、アクティブ、利用不能の図](https://d2l930y2yx77uc.cloudfront.net/production/uploads/images/16747503/picture_pc_b6dc796079e9c304756df14c2fa4adf4.png)

またボタン自体がリンク（aタグ）であるときはその状態とはまた違った定義をしないといけません（disabledは使えない等）。

これらは実装者であればイメージしやすいかもしれませんが、そのコンポーネントがもてる状態についてを明記していないと、デザインする際に漏れが発生しかねませんので、明文化していく必要があります。

また、デザインシステムには**Design Tokens**というものがあります。これは定義されたトークンを使うことでそれらの値を一括で置き換えることができるものです。
デザインシステムが担保しうる機能としてSingle source of truth（信頼できる唯一の情報源）というものがあり、それに当たるものです。
使い方としては[CSS Custom Properties](https://developer.mozilla.org/ja/docs/Web/CSS/--*)やSassにおける変数のようなものとイメージしてもらえれば良いと思います。

```css
$brand-primary: rgb(21, 137, 238);
$brand-primary-active: rgb(0, 122, 221);
$brand-primary-transparent: rgba(21, 137, 238, 0.1);
```

トークンを定義する際も、その言葉自体が「**どういった状態を示すのか**」「**どこまで責務をもつものか**」を、デザインシステムを作る際に考慮しておくべきでしょう。
言葉の定義で混乱を招いてしまうことは、今後の設計が破綻してしまうのを招きかねません。

[Design Tokensを考える前に俺たちは変数名について考え直すことがあるのではないか - yamaScrapbox](https://scrapbox.io/yamanoku/Design_Tokens%E3%82%92%E8%80%83%E3%81%88%E3%82%8B%E5%89%8D%E3%81%AB%E4%BF%BA%E3%81%9F%E3%81%A1%E3%81%AF%E5%A4%89%E6%95%B0%E5%90%8D%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6%E8%80%83%E3%81%88%E7%9B%B4%E3%81%99%E3%81%93%E3%81%A8%E3%81%8C%E3%81%82%E3%82%8B%E3%81%AE%E3%81%A7%E3%81%AF%E3%81%AA%E3%81%84%E3%81%8B)

### デザイナーに知ってもらいたいこと

デザイナーは視覚表現を担当領域とすることが多いのですが、作った人以外が「それが何故そういう表現をしているのか」を理解できるようにする必要があります。

Shopifyのデザインシステム「[Polaris](https://polaris.shopify.com/)」の例をあげると、国際化対応において各国の文化の違いを汲み取る、というのがあります。

![ShopifyのデザインシステムPolarisでの国際化対応における正しいUIと間違っているUIを説明する図](https://d2l930y2yx77uc.cloudfront.net/production/uploads/images/16755821/picture_pc_22193c04007fdb5f4547abf8fa613434.png)

日本であればCountryにつづいてPrefecture（都道府県）の入力項目を追加してあげたり、名前入力を北米式のような姓名入力フォームで設置しないようにするといった例を上げています。こうした例を示すことで、何故そうしたデザインになっているかの理解に大いに役立ちます。

[Internationalization - Shopify Polaris](https://polaris.shopify.com/foundations/internationalization#section-plan-for-cultural-differences)

デザインにおいては使用するツールについても厳選していかなければなりません。
Sketch、Figma、Invision、Storybookなどデザイナーが他業種と協業していくために様々なツールがあります。しかし「これを使うと出来る」といった明確な正解はありません。それよりもそのツールたちがどういった世界を実現しようとしているかという思想をもとに使っていくほうが良いと思っています。

その中でもFigmaがデザインシステムを構築する際で利便性を感じられるのは、横断的に連携して使えるだけではなく、**アナリティクスでデータを可視化**をしてくれたり、オンボーディングなど使う際の**デザインデータを制限する**など、より実践的に使える点だと思っています。

[Design, manage, and deploy your design systems with Figma](https://www.figma.com/design-systems/)

協業に関して、Sketchでも同時編集機能が搭載される発表がありました。今後はツールのアップデート動向をチェックしてみるのと良いでしょう。

### すべての人に知ってもらいたいこと

最後は、より包括的に、役職を限定しないデザインシステムにまつわるすべての人に知ってもらいたいことになります。

１つのプロダクトしてデザインシステムを作っていくにあたり、完成というものはあるのか？　という問いが出てくるかも知れません。それに対しての答えは「**NO**」になります。

先述したようにデザインシステムは拡張していく・誰もが維持された品質でデザインできることを前提としています。
そのため０か１かといった明確な答えがないことを前提に、拡張できることに耐えうるための運用をしていくことが必要となります。

> **デザインシステムは生き物。少しずつ育てて行こう。**
>
> デザインシステムを作るなら、あらゆるパターンに対応した、より完璧なものを作りたいと思うものです。でも、デザインシステムに完璧なんてないことに気づきました。
> プロダクトや組織の成長や変化とともに、デザインシステムも変化し続けます。デザインシステムは生き物なのです。

[デザインシステムのプロジェクトの実践で学んだ3つの大切なノウハウ｜カナコ | UIデザイナー｜note](https://note.com/nanohanako/n/n11fd65cc4b6e)

デザインシステムも１つのプロダクトであるゆえ、失敗することもあります。
失敗について解説した記事では、組織的支援やコミュニケーションの不足や初期投資できていないこと、そもそも使ってもらえない等の例を上げています。
2017年に書かれた記事とはいえ、今でも十分に通じる内容となっています。

[Why Design Systems Fail ◆ 24 ways](https://24ways.org/2017/why-design-systems-fail/)

持続性と発展が不可欠であり、それを欠くことは失敗ないしデザインの悪循環を招きかねません。しっかりとした受け入れ体制をもっておこなうことが望まれます。

デザインシステムが間違った方向のまま進んでしまうと、結果として悪いものを生んでしまいかねません。デザインによっては人を傷つけたり、ある層を排除することもできてしまうので、自分たちのプロダクトは**何を目的としているのか？どのような未来を描こうとしているのか？**といった視点を持つことも忘れてはいけません。

[Amazon.co.jp： 悲劇的なデザイン　あなたのデザインが誰かを傷つけたかもしれないと考えたことはありますか？ eBook: ジョナサン・シャリアート, シンシア・サヴァール・ソシエ, 高崎 拓哉: Kindleストア](https://www.amazon.co.jp/dp/B078LX5GQV)

### おわりに

以上、デザインシステムについて知ってもらいたいことの紹介でした。

デザインシステムを用いることで、一定の品質を維持しながら柔軟にクリエイティブを発揮できるようになれるのですが、実施するにあたり明確な目的意識や何をしてはならないかを理解しないまま進めると、正しくないデザインが広まってしまう恐れがあります。

去年から発足されたフロントエンドチームでは、クラウドワークスでのデザインシステムのあり方についても、試行錯誤しながら、ひとつずつ整えていっている段階です。
今はまだ内部に閉じているのですが、いずれ皆さんにお披露目できればいいなと思っております。

ここまでご覧いただき、ありがとうございました。
明日（12/16）の担当はクラウドワークスの[アクセシビリティやっていき隊長](https://designer.crowdworks.co.jp/entry/proclaim-a11y)、みーた氏です。

### English Version

[I want everyone to know about the design system. - DEV Community](https://dev.to/yamanoku/i-want-everyone-to-know-about-the-design-system-370k)

### 参考

- [「Atomic Design & Design Systems」をお話させて頂きました](https://yory.design/note/dmm-designsystems/)
- [デザインシステムの資料を作る時に参考にしたリンク集](https://yory.design/note/designsystems-link-collection/)
- [デザインシステムとは？](https://circl.co.jp/jp/views/design/what-is-design-system/)

