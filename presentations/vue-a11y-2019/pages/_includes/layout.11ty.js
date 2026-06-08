import { highlightjsTags } from "../../../_shared/highlightjs.js";

export function render(data) {
  return `
    <!doctype html>
    <html lang="${data.lang}">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${data.title}</title>
        <meta name="og:title" content="${data.title}">
        <meta name="og:description" content="${data.description}">
        <meta name="og:image" content="https://yamanoku.net/vue-a11y-2019/images/ogp.png">
        <meta name="twitter:card" content="summary_large_image">
        <meta name="twitter:site" content="@yamanoku">
        <meta name="twitter:image:alt" content="About accessibility with Vue.js - 2019">
        <meta property="og:locale" content="${data.lang}">
        <link rel="stylesheet" href="${this.rootPath()}yama-normalize.css">
        ${highlightjsTags(this.rootPath())}
      </head>
      <body>
        <main id="main">
          ${data.content}
        </main>
        <footer>
          <p>Copyright 2019, Okuto Oyama</p>
        </footer>
      </body>
    </html>
  `;
};
