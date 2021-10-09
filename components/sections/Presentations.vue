<template>
  <section id="presentations" aria-labelledby="presentations_heading">
    <h2 id="presentations_heading">
      {{ $t("heading.presentations.title") }}
    </h2>
    <template v-if="this.$i18n.locale !== 'ja'">
      <em>{{ $t("onlyJPText") }}</em>
    </template>
    <h3 id="presentations-stage">
      {{ $t("heading.presentations.stage") }}
    </h3>
    <global-slide-list :listArray="listStage" />
    <h3 id="presentations-write">
      {{ $t("heading.presentations.write") }}
    </h3>
    <global-slide-list :listArray="listWrite" />
    <i18n tag="p" path="archivePage.externalLink">
      <template v-slot:title>
        <a href="https://archives.yamanoku.net" target="_blank" rel="noopener"
          >{{ $t("archivePage.title") }}<open-new-icon />
        </a>
      </template>
    </i18n>
  </section>
</template>

<script>
export default {
  data() {
    return {
      listStage: [
        {
          title:
            "HTML だけで UI を作る限界、あるいは無理なくユースケースと向き合っていくためには",
          url: "https://docs.google.com/presentation/d/e/2PACX-1vRfZCfZpjvKndrrHZYH4QQsMM8JwcRYCbYlgeIaJxEQdvz5BbWFx2pKv2ctZ1KT8CTztpC-hR1n6vIO/pub?start=false&loop=false&delayms=3000",
          datetime: "2021-09-15T21:38:00.000Z"
        },
        {
          title: "PWA版Twitterをスクリーンリーダー検証してみる",
          url: "https://scrapbox.io/yamanoku/PWA%E7%89%88Twitter%E3%82%92%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%83%AA%E3%83%BC%E3%83%80%E3%83%BC%E6%A4%9C%E8%A8%BC%E3%81%97%E3%81%A6%E3%81%BF%E3%82%8B",
          datetime: "2021-06-26T18:50:00.000Z"
        },
        {
          title: "これからもつづけるWebアクセシビリティ",
          url: "https://docs.google.com/presentation/d/e/2PACX-1vRIhRTjYc1yxxNRSE0-PbTHTyvSHh07pkuVapbek_-0wkYyF0scZ5XU0danIEky5YJToE0W3AwUCDXc/pub?start=false&loop=false&delayms=3000",
          datetime: "2021-01-12T19:30:00.000Z"
        },
        {
          title: "Vue3 からはじめるWebアクセシビリティ",
          url: "https://docs.google.com/presentation/d/e/2PACX-1vR-hRI-IEV5PUCLg1XTDlMGsDyZ4OhGBgXM8o3yaI1VKBOXSOEk6qwT8YFuzwsOpmyDIvjr2T_aYCWV/pub?start=false&loop=false&delayms=3000",
          datetime: "2020-12-08T20:30:00.000Z"
        },
        {
          title: "Web_UIの実装で考えていることと気をつけたいこと",
          url: "https://scrapbox.io/yamanoku/Web_UI%E3%81%AE%E5%AE%9F%E8%A3%85%E3%81%A7%E8%80%83%E3%81%88%E3%81%A6%E3%81%84%E3%82%8B%E3%81%93%E3%81%A8%E3%81%A8%E6%B0%97%E3%82%92%E3%81%A4%E3%81%91%E3%81%9F%E3%81%84%E3%81%93%E3%81%A8",
          datetime: "2020-09-29T15:00:00.000Z"
        },
        {
          title: "PWA is Progressive Web Accessibility",
          url: "https://docs.google.com/presentation/d/e/2PACX-1vROD7gIsTh1BF1q5LVec0pZSGXVtLBD_DjNonbuwdR8zfRNH_qgRazaIG0oU-Zte6EgqaKoIyfoRfpA/pub?start=false&loop=false&delayms=3000",
          datetime: "2020-05-19T15:00:00.000Z"
        },
        {
          title: "PWA RTA in Japan",
          url: "https://docs.google.com/presentation/d/e/2PACX-1vQZjI7M2w1vNnEPpTfNhom2frtIlC7gMFLa1ptt6hRFvifRBv6dn5bYJY3b8Th6gYbCuj6iAxd3B45-/pub?start=false&loop=false&delayms=3000",
          datetime: "2020-01-31T15:00:00.000Z"
        }
      ],
      listWrite: [
        {
          title: "markuplintをプロダクトに導入してみた",
          url: "https://engineer.crowdworks.jp/entry/using-markuplint",
          datetime: "2021-10-07T13:00:00.000Z"
        },
        {
          title: "生まれ変わったログインページにまつわるフロントエンド開発の話",
          url: "https://engineer.crowdworks.jp/entry/renewal-login",
          datetime: "2021-08-18T18:00:00.000Z"
        },
        {
          title: "UI の実装で考えていること, 気をつけたいこと",
          url: "https://zenn.dev/yamanoku/articles/c69decedfb1699",
          datetime: "2020-12-09T18:00:00.000Z"
        },
        {
          title:
            "クラウドワークス #accessibility チャンネル 気になる話題 Pickup 2020",
          url: "https://zenn.dev/yamanoku/scraps/443087a170fcbe",
          datetime: "2020-12-07T00:00:00.000Z"
        },
        {
          title: "クラウドワークスのフロントエンド活動を振り返る 2020",
          url: "https://engineer.crowdworks.jp/entry/crowdworks_frontend_2020",
          datetime: "2020-12-01T09:00:00.000Z"
        },
        {
          title: "クラウドワークスのWebアクセシビリティチェックを始めてみた",
          url: "https://engineer.crowdworks.jp/entry/product_accessibility_check",
          datetime: "2020-09-17T00:00:00.000Z"
        },
        {
          title:
            "東京都 新型コロナウイルス対策サイトにアクセシビリティ視点でコントリビュートしてみた",
          url: "https://engineer.crowdworks.jp/entry/covid-19_site_a11y_contribute",
          datetime: "2020-03-25T03:00:00.000Z"
        }
      ]
    };
  }
};
</script>

<style scoped>
svg {
  width: 12px;
  height: 12px;
  margin: 0 0 -1px 4px;
}
</style>
