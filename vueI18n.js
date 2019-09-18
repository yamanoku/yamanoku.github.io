export default {
  fallbackLocale: "ja",
  messages: {
    en: {
      name: "Name - Okuto Oyama",
      nickname: "Nickname - Oyama Michinoku, yamanoku",
      job: {
        1: "FrontEnd Designer",
        2: "Accessibility Advocator",
        3: "UI Designer",
        4: "Writer",
        5: "Document Translater",
        6: "Internet Watcher"
      },
      info: {
        caption: "I'm active on the Internet under the name of Oyama-Michinoku, yamanoku. My birthday is October 30, 1989. I was born in Noshiro City, Akita Prefecture. I'm male. Currently, I lives in Kamagaya City, Chiba Prefecture. One daughter's father and three cat owners.",
        birth: "Born in Noshiro, Akita, Japan",
        sex: "Sex - Man",
        2008: {
          before : "Get into Iwate University of Art and Culture Course.",
          now : "Now - Art and Culture Course in Faculty of Humanities and Sociology",
        },
        2014: "Get married.",
        2016: "Daughter is born",
        bfa: "Bachelor of Art and Culture Course.（BFA）",
        bfa01: "Fine Arts",
        bfa02: "Engineering and Design",
        live: "Live in Kamagaya, Chiba, Japan",
        photo: {
          alt: "Photo Okuto Oyama",
          caption: "Author's near shadow"
        }
      },
      career: {
        skillSet: "Set of Skills",
        wantedly: "Wantedly",
        lapras: "LAPRAS",
        curriculumVitae: "Curriculum Vitae",
        desc01: "I started my career as a Web designer, not as an engineer.",
        desc02: "I changed my job as an engineer to concentrate on programming because I thought that I could not understand the basics of what I could and could not do on the browser and could not make expressions and feature proposals that would be pleasing to users, rather than the influence of my previous career when I was in charge of all direction-design programming.",
        desc03: "I began my career as a markup engineer, taking basic coding and gradually moving into the frontend engineer space, including jQuery, Ajax communication, task runners, CSS design, and the use of frameworks.",
        desc04: "When I aim to become an engineer, there are some things that I want to achieve that I create “A product that has been used for a long time with a strong design”. We believe that we can achieve this not only through engineering, but also through UI design, user experience, and consideration for wider use. It's a difficult task, but I want to do it one by one so that everyone can enjoy better things.",
      },
      product: {
        wafb: {
          title: "Web Accessibility for Beginners.",
          circleDetail: "Circle details | Scarlet dog",
          boothLink: "Sales page on Booth",
          noteLink: "Sales page on note"
        },
        slackprimoji: "slack-reaction-primoji",
        yamanokuCli: "yamanoku CLI",
        reading: "Reading...",
        vuePortfolio: "Vue Portfolio Template",
        crowding: "Crowding - Coding works",
        birthdayCount: "Birthday Countdown",
        glitch: "glitchrange",
        browserCrash: "canvas_browser-crash.js",
        sushi: "rolling-sushi",
        qiitaCode: "Qiita Code Style Before",
        designFigma: "Product Design - Figma",
        updateInfo: "Update Information",
        releaseInfo: "Release Information",
        description: {
          wafb: "Presented in the 5th technical book fest. I would like to ask not only engineers but also all people involved with the web to see what kind of measures are available for web accessibility, such as machine-readable web pages, human-readable web pages, and WAI-ARIA web pages.",
          reading: "I came up with the idea of accumulating and visualizing information about what would happen if I collected and summarized the news that I always watch. It incorporates PWA technology so that it can also be viewed as an offline application.",
          vuePortfolio: "Portfolio template made by Vue.js. This is the first SPA created from vue cli. I used the Vue 1.0 versions at first, but now I can upgrade it to the Vue 2.0 versions.",
          yamanokuCli: "This is a simple self-introduction tool that can be checked with the CLI. Fork is from sindresorhus.",
          slackprimoji: "Convert Pri-para character lines into Slack reaction emoji. The original story is from slack-reaction-decomoji produced by oti.",
          qiitaCode: "A Chrome extension that restores Qiita's code style to the previous one. Not published to the store. Therefore, add it in developer mode.",
          birthdayCount: "Counting down to yamanoku's birthday. Amazon's wish list will be released on that day. The next day, it will be reset and counted down again. This product uses TypeScript.",
          glitch: "A glitch expression tool using JavaScript. To adjust <input type='range'>. You can upload and change the image. Glitched images can also be saved.",
          browserCrash: "Represents on canvas the situation that is likely to happen when the browser becomes heavy on Windows OS. The browser is drawn indefinitely by moving the cursor. There is no illegality in this JavaScript.",
          sushi: "Rotating sushi using CSS3 animation."
        }
      },
      sns: {
        tumblr: {
          tumblr: "Tumblr",
          tumblog: "Blog",
          artworks: "art works"
        },
        twitter: "Twitter",
        facebook: "Facebook",
        github: "Github",
        qiita: "Qiita",
        mstdn: "mstdn.jp",
        instagram: "Instagram",
        hatena: "Hatena",
        steam: "Steam"
      },
      home: {
        title: "Home"
      },
      aboutPage: {
        title: "About yamanoku.net",
        description: "yamanoku.net is a portal site of Okuto Oyama called yamanoku.",
        heading: {
          toc: "Table of Contents",
          implementation: "Explaining site implementation",
          design: "Explaining site design",
        },
        subHeading: {
          markup: "Markup",
          components: "Component oriented design",
          pwa: "PWA (Progressive Web Application)",
          i18n: "Internationalization",
          overdesign: "Don't overdesign.",
          fontSize: "Font size",
          contrast: "Color contrast",
          maxWidth: "About the greatest amount of content",
          verticalRhythm: "Vertical rhythm",
        },
        markup: {
          desc01: "Semantic markup implementation to realize information design of human-readable (Human can understand) and machine-readable (Be understood by the machine).",
          desc02: "It also implements content completion using WAI-ARIA (Web Accessibility Initiative - Accessible Rich Internet Applications).",
          caption: "Assist users as they move from article to article by tying aria-labelledby to article elements."
        },
        components: {
          desc01: "For example, the slide list uses the following components to render:",
          desc02: "You need to format the API you get for display, but managing it as a single component simplifies source code, allows multiple uses, and simplifies information design.",
          desc03: "In addition, we set the Store to call each API to prevent the depth of Props in component-oriented development.",
        },
        pwa: {
          desc01: "When browsing in Google Chrome, you can use desktop PWA from your PC or PWA from your mobile device.",
          desc02: "You can launch it as a native app without going through a browser, use the cache to get a fast page experience, or download it once and view it offline.",
        },
        i18n: {
          desc01: "Since we are developing on Nuxt.js, we have introduced a tool called nuxt-18n. In addition to internationalization, rendering can also be done for specific languages.",
          desc02: "I support Japanese and English as standard, but we plan to support other languages.",
        },
        designDescription: "Inclusive design designed for easy viewing by all users.",
        overdesign: {
          desc01: "Too much decoration can prevent you from getting the information you want. It is designed with the default style of the browser, that is, the standard image in mind.",
          desc02: "It's also designed with semantic markup, so you can get to the information without getting stylized or leaving the default style.",
        },
        fontSize: {
          desc01: "The basic setting is 16 px, and the size ratio can be maintained even if the page is enlarged by rem."
        },
        contrast: {
          desc01: "All colors are set to have a contrast ratio of at least 4.5: 1 with the background, but they are not pure black and white, but instead are balanced with fewer shades of gray.",
          desc02: "It is specified using the following custom properties (CSS Variables) for common use:",
          desc03: "It also supports dark mode (Gentle dark tones of the eyes), depending on the OS settings.",
        },
        maxWidth: {
          desc01: "The maximum width of the main content is set to 80ch. ch is called a chain and is a variable unit depending on the size of the character.",
          desc02: "The advantage of this setting is that it can support users with dyslexia who cannot read long sentences, and it is less likely that some text will become unreadable as the character size increases.",
        },
        verticalRhythm: {
          desc01: "We use vertical rhythm that emphasizes consistency throughout the page. The margins and margins are set relative to the line spacing of 24px.",
          desc02: "Cognitively impaired users can read text more easily if the words are evenly spaced.",
        }
      },
      privacyPage: {
        title: "Privacy Policy",
        description: "yamanoku.net privacy policy page. Provides information about access analysis tools.",
        analytics: {
          heading: "About Access Analysis Tools",
          desc01: "yamanoku.net uses Google's access analysis tool “Google Analytics”.",
          desc02: "This Google Analytics server uses cookies to collect access information. This access information is collected anonymously and is not personally identifiable.",
          desc03: "Google Analytics cookies on this site will be retained for 26 months. This feature can be rejected by disabling cookies, so please check your browser settings.",
          link01: {
            title: "Google Analytics Terms of Service",
            url: "https://www.google.com/analytics/terms/us.html",
          },
          link02: {
            title: "How Google uses information from sites or apps that use our services",
            url: "https://policies.google.com/technologies/partner-sites?hl=en",
          }
        }
      },
      heading: {
        basic: "Basic Info",
        job: "Job Info",
        career: "Career Info",
        productList: "Product List",
        todoList: "TODO List",
        techStack: "Technology Stack",
        relatedList: "Related Links List",
        slides: {
          title: "Slides",
          stage: "Stage",
          study: "Study Meeting",
          write: "Writing",
          lt: "Lightning Talk",
        },
        sns: "Social Service",
        contact: "Contact"
      },
      error: {
        404: {
          text01: "Couldn't find the page you were looking for.",
          text02: "We apologize for the inconvenience, but please access the relevant page from the site map.",
        },
        500: {
          text01: "A server error has occurred. Please wait for a while and try again.",
          text02: "If it is still not recovered, please contact us via the email address.",
        },
        sitemap: {
          title: "Find on site map"
        }
      },
      prefixAlt: {
        photo: "Photo: ",
        thumbnail: "Thumbnail: ",
        screenshot: "ScreenShot: ",
      },
      multilingual: "Multilingual Page",
      backTop: "Return to the top page",
      onlyJPText: "Sorry, Japanese text only"
    },
    ja: {
      name: "名前 - 大山奥人",
      nickname: "ニックネーム - おおやまみちのく, yamanoku",
      job: {
        1: "フロントエンドデザイナー",
        2: "アクセシビリティ啓蒙家",
        3: "UIデザイナー",
        4: "ライター",
        5: "ドキュメント翻訳",
        6: "インターネットウォッチャー"
      },
      info: {
        caption: "Je suis actif sur Internet comme Oyama-Michinoku, yamanoku. Mon anniversaire est le 30 octobre 1989. Je suis né à Noshiro City, dans la préfecture d'Akita . Mon sexe est masculin. Je vis actuellement à Kamagaya City, dans la préfecture de Chiba . Un père de fille et trois propriétaires de chats.",
        caption: "ネット上では、おおやまみちのく、yamanokuと名乗って活動しています。誕生日は1989年10月30日。秋田県能代市生まれ。性別は男性。現在千葉県鎌ケ谷市在住。一児（娘）の父と3匹の猫の飼い主。",
        birth: " 秋田県能代市生まれ",
        sex: "性別 - 男性",
        2008: {
          before : "岩手大学教育学部芸術文化課程入学",
          now : "現 人文社会学部芸術文化専修プログラム",
        },
        2014: " 結婚",
        2016: " 娘が産まれる",
        bfa: "学士（美術）",
        bfa01: "芸術",
        bfa02: "デザインエンジニアリング",
        live: "千葉県鎌ケ谷市在住",
        photo: {
          alt: "写真 大山奥人",
          caption: "著者近影"
        }
      },
      career: {
        skillSet: "スキルセット",
        wantedly: "Wantedly",
        lapras: "LAPRAS",
        curriculumVitae: "職務経歴書",
        desc01: "自分のキャリアのスタートはWebデザイナーとしてで、エンジニアから始まったわけではありません。",
        desc02: "これまでのキャリアの中でディレクション・デザイン・プログラミングをすべて担当する業務に就いた影響より、ブラウザ上のできること・できないことの根幹の理解をせず、ユーザにとって喜ばれる表現や機能提案は出来ないのだと思い、プログラミングに専任するためエンジニアとして転職しました。",
        desc03: "最初はマークアップエンジニアとして業務を通じ基礎的なコーディングを取得し、jQuery、Ajax通信、タスクランナー、CSS設計、フレームワークの使用など徐々にフロントエンドエンジニアという領域にも踏み入れていきました。",
        desc04: "私がエンジニアを目指すにあたり実現していきたいことの中に「強固な設計で長く使われてるプロダクト」を作っていくことがあります。それはエンジニアリングだけでは達成できることではなくUIデザインやユーザーの体験、幅広い層に使ってもらうための考慮なども必要となると考えています。難易度が高いことではありますがより良きものを皆が享受できるよう１つずつ課題をこなしていきたいと思っています。",
      },
      product: {
        wafb: {
          title: "これからはじめるWebアクセシビリティ",
          circleDetail: "サークル詳細 | こんのいぬ",
          boothLink: "Booth 販売ページ",
          noteLink: "note 販売ページ"
        },
        slackprimoji: "slack-reaction-primoji",
        yamanokuCli: "yamanoku CLI",
        reading: "Reading...",
        vuePortfolio: "Vue Portfolio Template",
        crowding: "Crowding - コーディング小作品",
        birthdayCount: "Birthday Countdown",
        glitch: "glitchrange",
        browserCrash: "canvas_browser-crash.js",
        sushi: "rolling-sushi",
        qiitaCode: "Qiita Code Style Before",
        designFigma: "Product Design - Figma",
        updateInfo: "更新情報",
        releaseInfo: "リリース情報",
        description: {
          wafb: "技術書典5にて発表。ウェブアクセシビリティはどういった対応があるのか、マシンリーダブルとヒューマンリーダブル、WAI-ARIAについて、求められるアクセシビリティを意識したウェブページなど、エンジニアだけでなくウェブに関わるすべての人に見てもらいたい一冊です。（アクセシビリティとは、近づきやすさやアクセスのしやすさのこと）",
          reading: "いつも自分が見ているニュースを集めてまとめてみたらどうなるだろうか、情報の蓄積・見える化というものを考え作りました。オフラインアプリケーションとしても閲覧できるようPWA技術を取り入れています。",
          vuePortfolio: "Vue.js製のポートフォリオテンプレートです。vue-cliから作成したSPA処女作です。はじめはVue1.0系で作ってましたが、Vue2.0系にバージョンアップ対応しています。",
          yamanokuCli: "CLIで確認できる簡易自己紹介ツールです。 fork元は sindresorhus氏より。",
          slackprimoji: "プリパラキャラのセリフをSlackのリアクション用絵文字に変換。元ネタはoti氏制作の slack-reaction-decomojiより。",
          qiitaCode: "Qiitaのcodeスタイルを以前のものに戻すChrome拡張機能。ストアに公開していません。そのため、デベロッパーモードにて追加して使用してください。",
          birthdayCount: "yamanokuの誕生日までをカウントダウンしています。当日になったらAmazonの欲しい物リストが公開されます。翌日にはリセットされてふたたびカウントダウンされます。TypeScriptを使用しています。",
          glitch: "JavaScriptによるグリッチ表現ツールです。<input type='range'>で調整できます。アップロードして画像を変更できます。グリッチした画像を保存も可能です。",
          browserCrash: "WindowsOSでブラウザが重くなったときにおこりそうな状況をcanvas上で表現。カーソルを動かすことによりブラウザが無限に描画されます。 このJavaScriptには違法性はまったくありません。",
          sushi: "CSS3 animationを使用して寿司を回転させてみました。"
        }
      },
      sns: {
        tumblr: {
          tumblr: "Tumblr",
          tumblog: "ブログ",
          artworks: "アートワーク"
        },
        twitter: "Twitter",
        facebook: "Facebook",
        github: "Github",
        qiita: "Qiita",
        mstdn: "mstdn.jp",
        instagram: "Instagram",
        hatena: "Hatena",
        steam: "Steam"
      },
      home: {
        title: "ホーム"
      },
      aboutPage: {
        title: "yamanoku.netについて",
        description: "yamanoku.netは、yamanokuこと大山奥人のポータルサイトです。",
        heading: {
          toc: "目次",
          implementation: "ページ実装の解説",
          design: "ページデザインの解説",
        },
        subHeading: {
          markup: "マークアップ",
          components: "コンポーネント指向設計",
          pwa: "PWA (Progressive Web Application)",
          i18n: "国際化対応",
          overdesign: "オーバーデザインしすぎない",
          fontSize: "文字サイズ",
          contrast: "カラーコントラスト",
          maxWidth: "最大幅について",
          verticalRhythm: "バーティカルリズム",
        },
        markup: {
          desc01: "ヒューマンリーダブル（人が理解できる）とマシンリーダブル（機械が理解できる）となる情報設計を実現するためにセマンティクスなマークアップの実装しています。",
          desc02: "また、WAI-ARIA（Web Accessibility Initiative - Accessible Rich Internet Applications）を使用して、コンテンツの補完をするための実装も行っています。",
          caption: "aria-labelledbyとarticle要素を紐付けることで記事間を移動するときにユーザーを支援します。"
        },
        components: {
          desc01: "たとえばスライド一覧のリストでは以下コンポーネントを使ってレンダリングしています。",
          desc02: "表示のために得るAPIを整形する必要がありますが、1つのコンポーネントで管理することで、ソースコードの簡略化・複数での使い回しや情報設計の効率化を図ることができます。",
          desc03: "その他、コンポーネント指向開発でPropsが深くなってしまわないように、Storeから各APIを呼び出すように設定しています。",
        },
        pwa: {
          desc01: "Google Chromeで閲覧している場合、PCからはデスクトップPWA、モバイル端末からはPWAとして利用することができます。",
          desc02: "ブラウザを通さずにネイティブアプリとして起動できたり、キャッシュを活用した早いページ体験、1度ダウンロードするとオフラインで閲覧することもできます。",
        },
        i18n: {
          desc01: "Nuxt.jsで開発しているのでnuxt-18nというツールを導入しています。国際化対応ほか、特定の言語のみに表示する場合などのレンダリング処理も可能となっています。",
          desc02: "日本語と英語を標準で対応しておりますが、その他の言語対応も予定しています。",
        },
        designDescription: "あらゆる層の方が見やすいようにインクルーシブデザインを取り入れています。",
        overdesign: {
          desc01: "過剰な装飾をしすぎることは目的の情報にたどり着く阻害に成り得ます。ブラウザのデフォルトスタイル、つまり標準の姿を意識したデザインにしています。",
          desc02: "また、セマンティクスなマークアップで設計していることで、スタイルを外してもデフォルトスタイルのままでも違和感なく情報にたどり着けるようにも繋がります。",
        },
        fontSize: {
          desc01: "基本16pxになるように設定しており、ページを拡大してもサイズ比を維持したremで指定しています。"
        },
        contrast: {
          desc01: "使用しているカラーはいずれも、背景とのコントラスト比が最低でも4.5:1となるように設定されていますが、純粋な白黒ではなく、濃淡を抑えてバランスをとったカラーとなっています。",
          desc02: "共通で使用できるよう、以下カスタム・プロパティ（CSS変数）を使用して指定しています。",
          desc03: "また、OSの設定によりますが、ダークモード（目に優しい暗い色調）にも対応しています。",
        },
        maxWidth: {
          desc01: "メインコンテンツの最大幅は80chに設定しています。chはチェーンと呼ばれ、文字のサイズによって可変する単位です。",
          desc02: "この設定にすることのメリットとして、長文が読めない読字障害の利用者のサポートができたり、文字サイズが大きくなるに従ってテキストの一部が欠けて読めなくなるような事態も発生しにくくなります。",
        },
        verticalRhythm: {
          desc01: "ページ全体の一貫性を重視したバーティカルリズムを採用しています。24pxの行間を基準としてマージンや余白などを設定しています。",
          desc02: "認知障害がある利用者は、単語と単語の間隔が均一になっていると、テキストをより容易に読めるようになります。",
        }
      },
      privacyPage: {
        title: "プライバシーポリシー",
        description: "yamanoku.netのプライバシーポリシーページです。アクセス解析ツールについての説明が載っています。",
        analytics: {
          heading: "アクセス解析ツールについて",
          desc01: "yamanoku.net（以下、当サイト）では、Googleによるアクセス解析ツール「Googleアナリティクス」を利用しています。",
          desc02: "このGoogleアナリティクスはアクセス情報の収集のためにCookieを使用しています。このアクセス情報は匿名で収集されており、個人を特定するものではありません。",
          desc03: "当サイトでのGoogleアナリティクスのCookieは、26ヶ月間保持されます。この機能はCookieを無効にすることで収集を拒否することが出来ますので、お使いのブラウザの設定をご確認ください。",
          link01: {
            title: "Googleアナリティクスの利用規約",
            url: "https://www.google.com/analytics/terms/jp.html",
          },
          link02: {
            title: "Googleのサービスを使用するサイトやアプリから収集した情報のGoogleによる使用",
            url: "https://policies.google.com/technologies/partner-sites?hl=jp",
          }
        }
      },
      heading: {
        basic: "基本情報",
        job: "職業",
        career: "職歴",
        productList: "制作物一覧",
        todoList: "やること一覧",
        techStack: "利用技術",
        relatedList: "関連リンク一覧",
        slides: {
          title: "スライド一覧",
          stage: "登壇",
          study: "勉強会",
          write: "執筆",
          lt: "ライトニングトーク",
        },
        sns: "ソーシャルサービス",
        contact: "連絡先"
      },
      error: {
        404: {
          text01: "お探しのページが見つかりませんでした。",
          text02: "お手数をおかけしますが、以下サイトマップより対象のページへアクセスしてください。",
        },
        500: {
          text01: "サーバエラーが発生しました。恐れ入りますがしばらくお待ちいただいた後再度アクセスしてください。",
          text02: "それでも復旧していない場合は、お手数をおかけしますが以下メールよりご連絡ください。",
        },
        sitemap: {
          title: "サイトマップから探す"
        }
      },
      prefixAlt: {
        photo: "写真: ",
        thumbnail: "サムネイル: ",
        screenshot: "スクリーンショット: ",
      },
      multilingual: "多言語ページ",
      backTop: "トップページに戻る"
    },
    fr: {
      name: "Nom - Okuto Oyama",
      nickname: "Surnom - Oyama Michinoku, yamanoku",
      job: {
        1: "Concepteur frontal",
        2: "accessibilité advocator",
        3: "Concepteur d'interface utilisateur",
        4: "écrivain",
        5: "document Traductrice",
        6: "Veille Internet"
      },
      info: {
        caption: "Je suis actif sur Internet comme Oyama-Michinoku, yamanoku. Mon anniversaire est le 30 octobre 1989. Je suis né à Noshiro City, dans la préfecture d'Akita. Mon sexe est masculin. Je vis actuellement à Kamagaya City, dans la préfecture de Chiba. Un père de fille et trois propriétaires de chats.",
        birth: "Né à Noshiro, Akita, Japon",
        sex: "Sexe - Homme",
        2008: {
          before : "Mettez-vous dans Iwate University of Art et culture Cours.",
          now : "À présent - Cours d'art et de culture à la Faculté des sciences humaines et de sociologie",
        },
        2014: "se marier.",
        2016: "Fille est né",
        bfa: "Baccalauréat en Art et culture Cours. (BFA)",
        bfa01: "Beaux-Arts",
        bfa02: "Ingénierie et Design",
        live: "Vivre à Kamagaya, Chiba, Japon",
        photo: {
          alt: "Photo Okuto Oyama",
          caption: "Ombre proche de l'auteur"
        }
      },
      career: {
        skillSet: "Ensemble de compétences",
        wantedly: "Wantedly",
        lapras: "LAPRAS",
        curriculumVitae: "Reprendre",
        desc01: "J'ai commencé ma carrière de concepteur Web, pas d'ingénieur.",
        desc02: "J'ai changé mon travail d'ingénieur pour me concentrer sur la programmation parce que je pensais que je ne pouvais pas comprendre les bases de ce que je pouvais et ne pouvais pas faire sur le navigateur et ne pouvais pas faire d'expressions et de propositions de fonctionnalités qui seraient plaisantes pour les utilisateurs, plutôt que l'influence de ma carrière précédente, lorsque j'étais responsable de tous les programmes de conception de direction.",
        desc03: "J'ai commencé en tant qu'ingénieur de balisage, j'ai obtenu le codage de base à travers mon travail, et je me suis progressivement déplacé dans l'espace de l'ingénieur frontal, y compris jQuery, Ajax communication, les exécutants de tâches, la conception CSS, et l'utilisation de cadres.",
        desc04: "Quand je veux devenir ingénieur, il y a des choses que je veux réaliser que je crée “Un produit qui a été utilisé depuis longtemps avec un design solide”. Nous croyons que nous pouvons y parvenir non seulement par l'ingénierie, mais aussi par la conception de l'assurance-chômage, l'expérience des utilisateurs et la prise en compte d'une utilisation plus large. C'est une tâche difficile, mais je veux le faire un par un pour que tout le monde puisse apprécier de meilleures choses.",
      },
      product: {
        wafb: {
          title: "L'accessibilité du Web pour les débutants.",
          circleDetail: "Détails du cercle | Chien écarlate",
          boothLink: "page de vente sur Booth",
          noteLink: "page de vente sur note"
        },
        slackprimoji: "slack-réaction-primoji",
        yamanokuCli: "yamanoku Interface de ligne de commande",
        reading: "En train de lire...",
        vuePortfolio: "Vue Portefeuille Modèle",
        crowding: "Foule - Travaux de codage",
        birthdayCount: "Anniversaire Compte à rebours",
        glitch: "pépinintervalle",
        browserCrash: "canvas_crash-navigateur.js",
        sushi: "sushi-roulant",
        qiitaCode: "Qiita code style avant",
        designFigma: "Conception de projet - Figma",
        updateInfo: "Mettre à jour les informations",
        releaseInfo: "Divulguer des renseignements",
        description: {
          wafb: "Annoncé dans le livre technique 5. C’est un livre que tout le monde sur le Web, et pas seulement les ingénieurs, souhaite voir comment l’accessibilité au Web est prise en charge, telle que lisible par machine, lisible par l’homme et WAI-ARIA.",
          reading: "J'ai pensé et créé un stockage d'informations et une visualisation pour voir ce qui se passerait si je rassemblais toujours et rassemblais les nouvelles que je regardais. Intègre la technologie PWA afin qu’elle puisse être visualisée en tant qu’application hors ligne.",
          vuePortfolio: "Modèle de portfolio créé par Vue.js. Ceci est un travail vierge SPA créé à partir de vue-cli. Au début, il était fabriqué avec la série Vue1.0, mais sa version est compatible avec la série Vue2.0.",
          yamanokuCli: "Il s’agit d’un outil simple d’introduction automatique qui peut être vérifié à l’aide de la CLI. Fork est de sindresorhus.",
          slackprimoji: "Convertissez les lignes de caractères pri-para en emoji de réaction lâche. L'histoire originale est tirée de slack-reaction-decomoji produit par oti.",
          qiitaCode: "Une extension Chrome qui restaure le style de code de Qiita au précédent. Non publié dans le magasin. Par conséquent, ajoutez-le en mode développeur.",
          birthdayCount: "Compte à rebours pour l'anniversaire de Yamanoku. La liste de souhaits d'Amazon sera publiée ce jour-là. Le lendemain, il sera réinitialisé et décompté à nouveau. Ce produit utilise TypeScript.",
          glitch: "Un outil d'expression de pépin utilisant JavaScript. Pour ajuster <input type='range'>. Vous pouvez télécharger et modifier l'image. Les images glitched peuvent également être enregistrées.",
          browserCrash: "Représente sur la toile la situation susceptible de se produire lorsque le navigateur devient lourd sous Windows. Le navigateur est dessiné indéfiniment en déplaçant le curseur. Ce JavaScript n'est pas illégal du tout.",
          sushi: "Pivoter les sushis en utilisant une animation CSS3."
        }
      },
      sns: {
        tumblr: {
          tumblr: "Tumblr",
          tumblog: "Blog",
          artworks: "œuvres d'art"
        },
        twitter: "Twitter",
        facebook: "Facebook",
        github: "Github",
        qiita: "Qiita",
        mstdn: "mstdn.jp",
        instagram: "Instagram",
        hatena: "Hatena",
        steam: "Steam"
      },
      home: {
        title: "Accueil"
      },
      aboutPage: {
        title: "A propos de yamanoku.net",
        description: "yamanoku.net est un portail d'Okuto Oyama appelé yamanoku.",
        heading: {
          toc: "Table des matières",
          implementation: "Description de l'implémentation du site",
          design: "Description de la conception du site",
        },
        subHeading: {
          markup: "Mise en oeuvre du balisage",
          components: "Conception orientée composants",
          pwa: "PWA (Progressive Web Application)",
          i18n: "Internationalisation",
          overdesign: "Ne surconcevez pas.",
          fontSize: "Taille du texte",
          contrast: "Contraste de couleur",
          maxWidth: "A propos de la largeur de contenu maximale",
          verticalRhythm: "Rythme vertical",
        },
        markup: {
          desc01: "Mise en oeuvre du balisage sémantique pour réaliser la conception de l'information de lisibles par l'homme (On peut comprendre) et lisibles par la machine (Être compris par la machine).",
          desc02: "Il met également en oeuvre la réalisation de contenu en utilisant WAI-ARIA (Web Accessibility Initiative - Accessible Rich Internet Applications).",
          caption: "Aider les utilisateurs à passer d'un article à l'autre en liant aria-labelledby à des éléments d'article."
        },
        components: {
          desc01: "Par exemple, la liste des diapositives utilise les composants suivants pour effectuer le rendu:",
          desc02: "Vous devez formater l'API que vous obtenez pour affichage, mais la gestion de celle-ci en tant que composant unique simplifie le code source, permet de multiples utilisations et simplifie la conception des informations.",
          desc03: "De plus, nous avons configuré le Store pour appeler chaque API afin d'empêcher la profondeur de Props dans le développement orienté composants.",
        },
        pwa: {
          desc01: "Lorsque vous naviguez dans Google Chrome, vous pouvez utiliser PWA de bureau à partir de votre PC ou PWA à partir de votre appareil mobile.",
          desc02: "Vous pouvez le lancer en tant qu'application native sans passer par un navigateur, utiliser le cache pour obtenir une expérience rapide de la page, ou le télécharger une fois et l'afficher hors ligne.",
        },
        i18n: {
          desc01: "Depuis que nous développons sur Nuxt.js, nous avons introduit un outil appelé nuxt-18 n. En plus de l'internationalisation, le rendu peut aussi être fait pour des langues spécifiques.",
          desc02: "Nous supportons le japonais et l'anglais comme langue de base, mais nous prévoyons de soutenir d'autres langues.",
        },
        designDescription: "Le design inclusif est incorporé pour faciliter la visualisation de toutes les couches.",
        overdesign: {
          desc01: "Trop de décoration peut vous empêcher d'obtenir l'information que vous voulez. Il est conçu avec le style par défaut du navigateur, c'est-à-dire l'image standard en tête.",
          desc02: "Il est également implémenté dans un balisage sémantique, de sorte que vous pouvez accéder à l'information sans être stylisé ou laisser le style par défaut.",
        },
        fontSize: {
          desc01: "Le paramètre de base est 16 px, et le rapport taille est maintenu lorsque la page est agrandie par rem."
        },
        contrast: {
          desc01: "Toutes les couleurs ont un rapport de contraste d'au moins 4,5 : 1 avec le fond, mais ils ne sont pas de noir et blanc pur, mais sont plutôt équilibrés avec moins de nuances de gris.",
          desc02: "Il est spécifié à l'aide des propriétés personnalisées suivantes (variables CSS) pour une utilisation commune:",
          desc03: "Il supporte également le mode sombre (Doux teintes foncées des yeux), selon les paramètres du système d'exploitation.",
        },
        maxWidth: {
          desc01: "La largeur maximale du contenu principal est de 80ch. ch est appelé chaîne et est une unité variable selon la taille du caractère.",
          desc02: "L'avantage de ce paramètre est qu'il peut prendre en charge les utilisateurs atteints de dyslexie qui ne peuvent pas lire de longues phrases, et il est moins probable que certains textes deviennent illisibles à mesure que la taille des caractères augmente.",
        },
        verticalRhythm: {
          desc01: "Nous utilisons un rythme vertical qui met l'accent sur la cohérence dans toute la page. Les marges et les marges sont définies par rapport à l'espacement des lignes de 24px.",
          desc02: "Les utilisateurs souffrant d'une déficience cognitive peuvent lire le texte plus facilement si les mots sont espacés de façon uniforme.",
        }
      },
      privacyPage: {
        title: "Politique de confidentialité",
        description: "page de politique de confidentialité de yamanoku.net. Fournit des informations sur les outils d'analyse d'accès.",
        analytics: {
          heading: "A propos des outils d'analyse d'accès",
          desc01: "yamanoku.net utilise l'outil d'analyse d'accès de Google “Google Analytics”.",
          desc02: "Ce serveur Google Analytics utilise des cookies pour collecter des informations d'accès. Ces informations d'accès sont collectées anonymement et ne sont pas personnellement identifiables.",
          desc03: "Les cookies de Google Analytics sur ce site seront conservés pendant 26 mois. Cette fonctionnalité peut être rejetée en désactivant les cookies, donc veuillez vérifier les paramètres de votre navigateur.",
          link01: {
            title: "Conditions d'utilisation de Google Analytics",
            url: "https://www.google.com/analytics/terms/fr.html",
          },
          link02: {
            title: "Comment utilisons-nous les informations collectées via les sites ou applications qui font appel à nos services ?",
            url: "https://policies.google.com/technologies/partner-sites?hl=fr",
          }
        }
      },
      heading: {
        basic: "Informations de base",
        job: "Infos emploi",
        career: "Infos carrière",
        productList: "Liste de produits",
        todoList: "Liste de choses à faire",
        techStack: "Pile technologique",
        relatedList: "Liste de liens connexes",
        slides: {
          title: "Glissades",
          stage: "Scène",
          study: "Réunion d'étude",
          write: "Écriture",
          lt: "Conversation éclair",
        },
        sns: "Service social",
        contact: "Contact"
      },
      error: {
        404: {
          text01: "Je n'ai pas pu trouver la page que vous cherchiez.",
          text02: "Nous vous prions de bien vouloir nous excuser pour les inconvénients, mais veuillez visiter la page cible à partir de la carte du site.",
        },
        500: {
          text01: "Une erreur de serveur s'est produite. Veuillez patienter un moment et réessayer.",
          text02: "S'il n'a toujours pas été récupéré, veuillez nous contacter par email ci-dessous.",
        },
        sitemap: {
          title: "Trouver sur la carte du site"
        }
      },
      prefixAlt: {
        photo: "Photo: ",
        thumbnail: "Miniatures: ",
        screenshot: "Capture d'écran: ",
      },
      multilingual: "Multilingue page",
      backTop: "Revenir à la page supérieure",
      onlyJPText: "Désolé, texte japonais seulement"
    },
  }
};
