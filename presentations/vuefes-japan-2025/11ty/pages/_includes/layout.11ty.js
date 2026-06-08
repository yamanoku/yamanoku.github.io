import { highlightjsTags } from "../../../../shared/highlightjs.js";

export function render(data) {
  const ogpImage = data.lang === 'ja' ? `<meta name="og:image" content="https://yamanoku.net/vuefes-japan-2025/images/ogp-image-ja.png">` : `<meta name="og:image" content="https://yamanoku.net/vuefes-japan-2025/images/ogp-image-en.png">`;
  return `
    <!doctype html>
    <html lang="${data.lang}">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${data.title}</title>
        <meta name="og:title" content="${data.title}">
        <meta name="og:description" content="${data.description}">
        ${ogpImage}
        <meta name="twitter:card" content="summary_large_image">
        <meta name="twitter:site" content="@yamanoku">
        <meta name="twitter:image:alt" content="${data.title}">
        <meta property="og:locale" content="${data.lang}">
        <link rel="stylesheet" href="${this.rootPath()}yama-normalize.css">
        ${highlightjsTags(this.rootPath())}
        <style>.footnote-item > p {margin: 0;}</style>
      </head>
      <body>
        <main id="main">
          <h1>${this.budoux(data.title)}</h1>
          ${data.content}
        </main>
        <footer>
          <p>Copyright ${this.year()}, Okuto Oyama</p>
        </footer>
      </body>
    </html>
  `;
};
