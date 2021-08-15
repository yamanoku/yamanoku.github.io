import { createComponent, withStyles } from "https://cdn.skypack.dev/ficusjs@3";
import {
  html,
  renderer
} from "https://cdn.skypack.dev/@ficusjs/renderers@3/uhtml";

createComponent(
  "switch-rhythm",
  withStyles({
    renderer,
    styles() {
      return `
        switch-rhythm {
          --y-rhythm-1_05: calc(var(--y-rhythm-base) * 1.05);
          --y-rhythm-1_25: calc(var(--y-rhythm-base) * 1.25);
          --y-rhythm-1_75: calc(var(--y-rhythm-base) * 1.75);
          --y-rhythm-5_25: calc(var(--y-rhythm-base) * 5.25);
        }
        switch-rhythm button {
          background: none;
          border: none;
          display: block;
          font-size: inherit;
          margin: var(--y-rhythm-3) 0;
          line-height: var(--y-rhythm-3);
          padding: 0;
          position: relative;
          text-align: left;
          transition: box-shadow 0.2s ease-in-out;
          width: 100%;
          cursor: pointer;
          user-select: none;
          -webkit-tap-highlight-color: transparent;
        }
        @media (prefers-color-scheme: dark) {
          switch-rhythm button {
            color: var(--y-white-low);
          }
        }
        switch-rhythm button:active {
          color: inherit;
        }

        switch-rhythm button span:before,
        switch-rhythm button span:after {
          border: 1px solid var(--y-black-base);
          content: "";
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
        }

        switch-rhythm button span:after {
          background: #fff;
          border-radius: 100%;
          height: var(--y-rhythm-1_75);
          right: var(--y-rhythm-1_25);
          transition: right 0.1825s ease-in-out;
          width: var(--y-rhythm-1_75);
        }

        switch-rhythm button span:before {
          background: var(--y-white-low);
          border-radius: var(--y-rhythm-3);
          height: var(--y-rhythm-3);
          right: 0.25em;
          transition: background 0.2s ease-in-out;
          width: 2.75em;
        }

        switch-rhythm button span {
          pointer-events: none;
        }

        switch-rhythm button[aria-checked="true"] span:after {
          right: var(--y-rhythm-1_05);
        }

        switch-rhythm button[aria-checked="true"] span:before {
          background: var(--y-blue-medium);
        }

        switch-rhythm button .show-labels:before {
          color: var(--y-black-base);
          line-height: 1.6;
          text-indent: 1.625em;
          width: 3.5em;
        }

        switch-rhythm button[aria-checked="false"] .show-labels:after {
          right: var(--y-rhythm-5_25);
        }

        @media screen and (-ms-high-contrast: active) {
          switch-rhythm button span:after {
            background-color: windowText;
          }
        }
      `;
    },
    render() {
      return html`
        <button role="switch" type="button" aria-checked="false">
          Vertical Rhythm Line
          <span aria-hidden="true" class="show-labels"></span>
        </button>
      `;
    }
  })
);
