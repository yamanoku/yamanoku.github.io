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
        <meta name="og:image" content="https://records.yamanoku.net/jsconfjp-2021/images/top.jpeg">
        <meta name="twitter:card" content="summary_large_image">
        <meta name="twitter:site" content="@yamanoku">
        <meta name="twitter:image:alt" content="${data.title}">
        <meta property="og:locale" content="${data.lang}">
        ${this.baseStyleTags()}
      </head>
      <body>
        <main id="main">
          <h1>${this.budoux(data.title)}</h1>
          ${data.content}
        </main>
        <footer>
          <p>Copyright 2021, Okuto Oyama</p>
        </footer>
      </body>
    </html>
  `;
}
