export function render(data) {
  const ogpImage = `<meta name="og:image" content="https://yamanoku.net/tskaigi-2026/images/ogp-image-${data.lang === 'ja' || data.lang === 'ko' ? data.lang : 'en'}.png">`;
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
        <link rel="stylesheet" href="https://unpkg.com/yama-normalize@2.6.1">
        <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.11.1/highlight.min.js"></script>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.11.1/styles/a11y-dark.min.css">
        <script type="module">hljs.highlightAll();</script>
        <script src="https://cdn.jsdelivr.net/npm/baseline-status@1/baseline-status.min.js" type="module"></script>
        <style>code{font-family:SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;font-size:1em;}pre code.hljs{padding:var(--y-rhythm-3)}</style>
      </head>
      <body>
        <main id="main">
          <h1>${this.budoux(data.title)}</h1>
          ${data.content}
        </main>
        <footer>
          <p>Copyright ${this.year()}, Okuto Oyama</p>
          <p>Source : <a href="https://github.com/yamanoku/tskaigi-2026/" target="_blank">yamanoku/tskaigi-2026</a></p>
        </footer>
      </body>
    </html>
  `;
};
