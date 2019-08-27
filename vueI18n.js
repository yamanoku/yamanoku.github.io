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
        birth: "Born in Noshiro, Akita, Japan",
        sex: "Sex - Man",
        2008: {
          before : " - Get into Iwate University of Art and Culture Course.",
          now : "Now - Art and Culture Course in Faculty of Humanities and Sociology",
        },
        2014: " - Get married.",
        2016: " - Daughter is born",
        bfa: "Bachelor of Art and Culture Course.（BFA）",
        bfa01: "Fine Arts",
        bfa02: "Engineering and Design",
        live: "Live in Kamagaya, Chiba, Japan"
      },
      career: {
        skillSet: "Set of Skills",
        wantedly: "Wantedly",
        curriculumVitae: "Curriculum Vitae"
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
          glitch: "A glitch expression tool using JavaScript. To adjust. You can upload and change the image. Glitched images can also be saved.",
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
          JPFont: "About Japanese fonts",
          fontSize: "Font size",
          contrast: "Color contrast",
          maxWidth: "About the greatest amount of content",
          verticalRhythm: "Vertical rhythm",
        },
        markup: {
          desc01: "Semantic markup implementation to realize information design of human-readable (Human can understand) and machine-readable (Be understood by the machine).",
          desc01: "We are also implementing WAI-ARIA (Web Accessibility Initiative - Accessible Rich Internet Applications) for elements that are not needed by people using assistive technology so that they do not block access.",
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
        JPFont: {
          desc01: "The UD font Minna no Moji ® WEB font is used.",
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
      heading: {
        basic: "Basic Info",
        job: "Job Info",
        career: "Career Info",
        productList: "Product List",
        todoList: "TODO List",
        techStack: "Technology Stack",
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
      },
      career: {
        skillSet: "スキルセット",
        wantedly: "Wantedly",
        curriculumVitae: "職務経歴書"
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
          glitch: "JavaScriptによるグリッチ表現ツールです。で調整できます。アップロードして画像を変更できます。グリッチした画像を保存も可能です。",
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
      aboutPage: {
        title: "yamanoku.netについて",
        description: "yamanoku.netは、yamanokuこと大山奥人のポータルサイトです。",
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
          JPFont: "日本語フォントについて",
          fontSize: "文字サイズ",
          contrast: "カラーコントラスト",
          maxWidth: "最大幅について",
          verticalRhythm: "バーティカルリズム",
        },
        markup: {
          desc01: "ヒューマンリーダブル（人が理解できる）とマシンリーダブル（機械が理解できる）となる情報設計を実現するためにセマンティクスなマークアップ実装しています。",
          desc01: "支援技術を使用する人には不要となる要素について、WAI-ARIA（Web Accessibility Initiative - Accessible Rich Internet Applications）を使用して閲覧を阻害しないようにする実装も行っています。",
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
        JPFont: {
          desc01: "UDフォントであるみんなの文字®WEBフォントを使用しています。",
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
      heading: {
        basic: "基本情報",
        job: "職業",
        career: "職歴",
        productList: "制作物一覧",
        todoList: "やること一覧",
        techStack: "利用技術",
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
        birth: "Né à Noshiro, Akita, Japon",
        sex: "Sexe - Homme",
        2008: {
          before : " - Mettez-vous dans Iwate University of Art et culture Cours.",
          now : "À présent - Cours d'art et de culture à la Faculté des sciences humaines et de sociologie",
        },
        2014: " - se marier.",
        2016: " - Fille est né",
        bfa: "Baccalauréat en Art et culture Cours. (BFA)",
        bfa01: "Beaux-Arts",
        bfa02: "Ingénierie et Design",
        live: "Vivre à Kamagaya, Chiba, Japon"
      },
      career: {
        skillSet: "Ensemble de compétences",
        wantedly: "Wantedly",
        curriculumVitae: "Reprendre"
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
          glitch: "Un outil d'expression de pépin utilisant JavaScript. Pour ajuster. Vous pouvez télécharger et modifier l'image. Les images glitched peuvent également être enregistrées.",
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
          JPFont: "A propos des polices japonaises",
          fontSize: "Taille du texte",
          contrast: "Contraste de couleur",
          maxWidth: "A propos de la largeur de contenu maximale",
          verticalRhythm: "Rythme vertical",
        },
        markup: {
          desc01: "Mise en oeuvre du balisage sémantique pour réaliser la conception de l'information de lisibles par l'homme (On peut comprendre) et lisibles par la machine (Être compris par la machine).",
          desc01: "Nous mettons également en oeuvre WAI-ARIA (Web Accessibility Initiative - Accessible Rich Internet Applications) pour les éléments qui ne sont pas nécessaires aux personnes qui utilisent des technologies d'assistance pour ne pas bloquer l'accès.",
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
        JPFont: {
          desc01: "Nous utilisons la police Minna no Moji ® WEB qui est une police UD (conception universelle).",
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
      heading: {
        basic: "Informations de base",
        job: "Infos emploi",
        career: "Infos carrière",
        productList: "Liste de produits",
        todoList: "Liste de choses à faire",
        techStack: "Pile technologique",
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
      multilingual: "Multilingue page",
      backTop: "Revenir à la page supérieure",
      onlyJPText: "Désolé, texte japonais seulement"
    },
  }
};
