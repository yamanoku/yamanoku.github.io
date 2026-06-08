export function highlightjsTags(rootPath) {
  return `<link rel="stylesheet" href="${rootPath}hljs-a11y-dark.css">
        <style>code{font-family:SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;font-size:1em;}pre code.hljs{padding:var(--y-rhythm-3)}</style>`;
}
