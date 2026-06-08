const HIGHLIGHTJS_VERSION = "11.11.1";

export function highlightjsTags() {
  return `<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/${HIGHLIGHTJS_VERSION}/highlight.min.js"></script>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/${HIGHLIGHTJS_VERSION}/styles/a11y-dark.min.css">
        <script type="module">hljs.highlightAll();</script>
        <style>code{font-family:SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;font-size:1em;}pre code.hljs{padding:var(--y-rhythm-3)}</style>`;
}
