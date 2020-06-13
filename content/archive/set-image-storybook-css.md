---
title: StorybookでCSSに画像を指定をしたい時
description: storybook CSS package.json
date: 2017-08-30
author: yamanoku
---

小ネタ。

CSSでの画像指定の仕方がイマイチわからずwebpack上でなんとかするのかと思っていました。

## 解決法

単純に**「静的ディレクトリから参照してくる」**というのを設定してあげればいいだけの話でした。

### 指定方法

https://storybook.js.org/configurations/default-config/#image-and-static-file-support

> storybook also has a way to mention static directories via the -s option of the start-storybook and build-storybook commands.

```bash
-s {static directories}
```

`-s`オプションを追加して指定の静的ディレクトリを指定してあげるだけ。ね、簡単でしょ。

#### `./dist` がoutput先だとしている場合

```json
"scripts" {
   "storybook": "start-storybook -p 6006 -s ./dist"
}
```
こんな感じになります。

### 動かしてみる

```zsh
yarn storybook
```
動かしてみて、以下ルートのディレクトリから画像を取得すると想定します。

```
dist/
└── img/
    └── ic-arrow_right.png  < これ
```

#### コード例

```tsx
import * as React from 'react';

export class Hogehoge extends React.Component {
  render() {
    return (
      <div className="hogehoge">画像が見れる</div>
    );
  }
}

```

```css
.hogehoge {
  width: 100%;
  height: 30px;
  background-image: url('/img/ic-arrow_back.png'); /* 画像指定 */
}
```

#### 結果

[![https://gyazo.com/e8336990759c1b762050251c0c7fe510](https://i.gyazo.com/e8336990759c1b762050251c0c7fe510.png)](https://gyazo.com/e8336990759c1b762050251c0c7fe510)

ちなみに `<img>` のsrc読み込みでも同じこと出来ます。


```tsx
import * as React from 'react';

export class Hogehoge extends React.Component {
  render() {
    return (
      <div className="hogehoge">
        <img src="/img/ic-arrow_back.png" />画像が見れる
      </div>
    );
  }
}

```

[![https://gyazo.com/c5174a5a6a99b4d7570ca7c5e8080ecf](https://i.gyazo.com/c5174a5a6a99b4d7570ca7c5e8080ecf.png)](https://gyazo.com/c5174a5a6a99b4d7570ca7c5e8080ecf)

### 参考URL
- https://storybook.js.org/configurations/serving-static-files/#2-via-a-directory
- https://github.com/storybooks/storybook/issues/37#issuecomment-205744157
