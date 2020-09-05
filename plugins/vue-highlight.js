import Vue from "vue";
import VueHighlightJS from "vue-highlight.js";

import css from "highlight.js/lib/languages/css";
import javascript from "highlight.js/lib/languages/javascript";
import vue from "vue-highlight.js/lib/languages/vue";

import "highlight.js/styles/a11y-dark.css";

Vue.use(VueHighlightJS, {
  languages: {
    css,
    javascript,
    vue
  }
});
