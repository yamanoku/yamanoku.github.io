# Explaining on the design of a portfolio site
Inclusive design designed for easy viewing by all users.

## Don't overdesign.
Too much decoration can prevent you from getting the information you want. It is designed with the default style of the browser, that is, the standard image in mind.

It's also the semantic markup of the design makes it possible to arrive at the information without feeling out of place, even with the default style in browser.

- [Motherfucking Website](https://motherfuckingwebsite.com/)

## Font size
The basic setting is 16 px, and the size ratio can be maintained even if the page is enlarged by rem.

## Color contrast
All colors are set to have a contrast ratio of at least **4.5:1** with the background, but they are not pure black and white, but instead are balanced with fewer shades of gray.

<details>
<summary>Details</summary>

It is specified using the following custom properties (CSS Variables) for common use:

| design_token | value |
| ------------ | ----- |
| var(--y-black-base) | rgb(21, 32, 43) |
| var(--y-white-base) | rgb(255, 255, 255) |
| var(--y-white-low) | rgb(210, 210, 210) |
| var(--y-white-medium) | rgba(163, 163, 163) |
| var(--y-blue-low) | rgb(90, 190, 255) |
| var(--y-blue-medium) | rgb(18, 122, 200) |
| var(--y-purple-medium) | rgb(220, 100, 220) |

It also supports dark mode (Gentle dark tones of the eyes), depending on the OS settings.
</details>

## About the greatest amount of content
The maximum width of the main content is set to 80ch. ch is called a chain and is a variable unit depending on the size of the character.

The advantage of this setting is that it can support users with dyslexia who cannot read long sentences, and it is less likely that some text will become unreadable as the character size increases.

## Vertical rhythm
We use vertical rhythm that emphasizes consistency throughout the page. The margins and margins are set relative to the line spacing of 24px.

Cognitively impaired users can read text more easily if the words are evenly spaced.
