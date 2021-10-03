import { createComponent, withStyles } from "https://cdn.skypack.dev/ficusjs@3";
import {
  html,
  renderer
} from "https://cdn.skypack.dev/@ficusjs/renderers@3/uhtml";

createComponent(
  "alert-one-year-text",
  withStyles({
    renderer,
    props: {
      lang: {
        type: String,
        default: "ja"
      }
    },
    computed: {
      alertText() {
        const lang = this.props.lang;
        let text =
          "この記事は公開から1年以上が経過しています。内容が一部古い箇所があります。";
        if (lang === "en") {
          text =
            "This article has been published for more than a year. Some parts of the content are outdated.";
        }
        return text;
      }
    },
    styles() {
      return `
        alert-one-year-text > div {
          margin: var(--y-rhythm-3) 0;
        }
      `;
    },
    render() {
      return html`
        <div>
          <strong>${this.alertText}</strong>
        </div>
      `;
    }
  })
);
