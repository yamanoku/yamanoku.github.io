module.exports = {
  head: {
    title: "ʏᴀᴍᴀɴᴏᴋᴜ",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Okuto Oyama Portfolio Site."
      },
      {
        hid: "og:image",
        name: "og:image",
        content: "https://yamanoku.net/iam.jpg"
      },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@yamanoku" },
      { name: "twitter:title", content: "ʏᴀᴍᴀɴᴏᴋᴜ" },
      { name: "twitter:description", content: "Okuto Oyama Portfolio Site" },
      { name: "twitter:image", content: "https://yamanoku.net/iam.jpg" },
      { name: "twitter:image:alt", content: "Portrait for Okuto Oyama" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  css: ["modern-normalize"],
  build: {
    extend(config, { isDev }) {
      if (isDev && process.client) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        });
      }
    }
  },
  modules: [
    "@nuxtjs/pwa",
    [
      "nuxt-i18n",
      {
        seo: false,
        baseUrl: "https://yamanoku.net",
        locales: [
          {
            code: "en",
            iso: "en-US",
            name: "English Page"
          },
          {
            code: "ja",
            iso: "ja",
            name: "日本語ページ"
          }
        ],
        defaultLocale: "ja",
        vueI18n: {
          fallbackLocale: "ja",
          messages: {
            en: {
              name: "Okuto Oyama a.k.a. Oyama Michinoku, yamanoku.",
              job: {
                1: "FrontEnd Designer",
                2: "UI Designer",
                3: "Writter",
                4: "Document Translater",
                5: "Internet Watcher"
              },
              info: {
                birth: "1989/10/30 Born in Noshiro, Akita, Japan",
                sex: "Sex - Man",
                2008: "2008 - Get into Iwate University of Art and Culture Course.",
                2014: "2014 - Get married.",
                2016: "2016 - Daughter is born",
                bfa: "Bachelor of Art and Culture Course.（BFA）",
                bfa01: "Fine Arts",
                bfa02: "Engineering and Design",
                live: "Live in Kamagaya, Chiba, Japan"
              },
              career: {
                scrapbox: "Scrapbox",
                wantedly: "Wantedly",
                curriculumVitae: "Curriculum Vitae (GitHub)"
              },
              product: {
                wafb: {
                  title: "Web Accessibility for Beginners.",
                  boothLink: "Sales page on Booth",
                  noteLink: "Sales page on note"
                },
                slackprimoji: "slack-reaction-primoji",
                yamanokuCli: "yamanoku CLI",
                reading: "Reading...",
                vuePortfolio: "Vue Portfolio Templete",
                birthdayCount: "Birthday Countdown",
                glicth: "glicthrange",
                qiitaCode: "Qiita Code Style Before"
              },
              sns: {
                tumblr: {
                  tumblr: "Tumblr",
                  tumblog: "tumblog",
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
              heading: {
                basic: "Basic Info",
                job: "Job Info",
                career: "Career Info",
                productList: "Product List",
                sns: "Social Service",
                contact: "Contact"
              },
              multilingual: "Multilingual Page"
            },
            ja: {
              name: "大山奥人 a.k.a. おおやまみちのく, yamanoku.",
              job: {
                1: "フロントエンドデザイナー",
                2: "UIデザイナー",
                3: "ライター",
                4: "ドキュメント翻訳",
                5: "インターネットウォッチャー"
              },
              info: {
                birth: "1989年10月30日 秋田県能代市生まれ",
                sex: "性別 男",
                2008: "2008年 岩手大学教育学部芸術文化課程入学",
                2014: "2014年 結婚",
                2016: "2016年 娘が産まれる",
                bfa: "学士（美術）",
                bfa01: "芸術",
                bfa02: "デザインエンジニアリング",
                live: "千葉県鎌ケ谷市在住"
              },
              career: {
                scrapbox: "Scrapbox",
                wantedly: "Wantedly",
                curriculumVitae: "職務経歴書（GitHub）"
              },
              product: {
                wafb: {
                  title: "これからはじめるWebアクセシビリティ",
                  boothLink: "Booth 販売ページ",
                  noteLink: "note 販売ページ"
                },
                slackprimoji: "slack-reaction-primoji",
                yamanokuCli: "yamanoku CLI",
                reading: "Reading...",
                vuePortfolio: "Vue Portfolio Templete",
                birthdayCount: "Birthday Countdown",
                glicth: "glicthrange",
                qiitaCode: "Qiita Code Style Before"
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
              heading: {
                basic: "基本情報",
                job: "職業",
                career: "職歴情報",
                productList: "制作物一覧",
                sns: "ソーシャルサービス",
                contact: "連絡先"
              },
              multilingual: "多言語ページ"
            }
          }
        }
      }
    ]
  ],
  workbox: {
    dev: true
  },
  manifest: {
    name: "ʏᴀᴍᴀɴᴏᴋᴜ",
    short_name: "ʏᴀᴍᴀɴᴏᴋᴜ",
    title: "ʏᴀᴍᴀɴᴏᴋᴜ",
    "og:title": "ʏᴀᴍᴀɴᴏᴋᴜ",
    description: "Okuto Oyama Portfolio Site.",
    "og:description": "Okuto Oyama Portfolio Site.",
    lang: "en",
    theme_color: "#36465d",
    background_color: "#36465d"
  }
};
