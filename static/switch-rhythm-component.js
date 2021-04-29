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
        switch-rhythm button {
          background: none;
          border: none;
          display: block;
          font-size: inherit;
          margin: calc(var(--rhythm) * 3) 0;
          line-height: calc(var(--rhythm) * 3);
          padding: 0;
          position: relative;
          text-align: left;
          transition: box-shadow 0.2s ease-in-out;
          width: 100%;
          cursor: pointer;
        }
        @media (prefers-color-scheme: dark) {
          switch-rhythm button {
            color: var(--white);
          }
        }
        switch-rhythm button:active {
          color: inherit;
        }

        switch-rhythm button span:before,
        switch-rhythm button span:after {
          border: 1px solid var(--black);
          content: "";
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
        }

        switch-rhythm button span:after {
          background: #fff;
          border-radius: 100%;
          height: calc(var(--rhythm) * 1.75);
          right: calc(var(--rhythm) * 1.25);
          transition: right 0.1825s ease-in-out;
          width: calc(var(--rhythm) * 1.75);
        }

        switch-rhythm button span:before {
          background: var(--white);
          border-radius: calc(var(--rhythm) * 3);
          height: calc(var(--rhythm) * 3);
          right: 0.25em;
          transition: background 0.2s ease-in-out;
          width: 2.75em;
        }

        switch-rhythm button span {
          pointer-events: none;
        }

        switch-rhythm button[aria-checked="true"] span:after {
          right: calc(var(--rhythm) * 1.05);
        }

        switch-rhythm button[aria-checked="true"] span:before {
          background: var(--linkBlue);
        }

        switch-rhythm button .show-labels:before {
          color: var(--black);
          line-height: 1.6;
          text-indent: 1.625em;
          width: 3.5em;
        }

        switch-rhythm button[aria-checked="false"] .show-labels:after {
          right: calc(var(--rhythm) * 5.25);
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
