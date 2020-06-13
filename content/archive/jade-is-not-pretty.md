---
title: Jadeのprettyはアテにならなかった話（と今更ですがPugについて）
decription: JadeのprettyがアテにならなかったこととPugに関することの言及
date: 2016-09-23
author: yamanoku
---

## 経緯

Jadeは通常何もせずコンパイルするとこうなる

[![Image from Gyazo](https://i.gyazo.com/563bc6760d5125424917c4e02c58e7fe.png)](https://gyazo.com/563bc6760d5125424917c4e02c58e7fe)

そこでgulpとかのオプションでこう設定するとインデント維持して見やすくなる

```js
var jade = require("gulp-jade");
 .pipe(jade({
   pretty: '\t',
 }))
```

[![Image from Gyazo](https://i.gyazo.com/30defae4fd7b99b4d65a98cb6d674034.png)](https://gyazo.com/30defae4fd7b99b4d65a98cb6d674034)

だいたいはこれでよい。

ただコーディングガイドラインで「インデント除去してください」みたいな指示が来た時困る。

## 問題点

prettyに関する情報が少ないのでひとまず勘で「\t」としているところを「\v」にしてみた。

[![Image from Gyazo](https://i.gyazo.com/441b01291ab65adee69b3e148aaaa85b.png)](https://gyazo.com/441b01291ab65adee69b3e148aaaa85b)

ブラウザでパッとみた感じは良さそう。だが、

[![Image from Gyazo](https://i.gyazo.com/835d6fd26a9f95400e5702be14cc2017.png)](https://gyazo.com/835d6fd26a9f95400e5702be14cc2017)

ソースは文字化けしとるやないかい。

## 対応策

良さ気な情報ないしJadeのオプションに頼るのはもうやめよう。そうだnpmだ。

[https://www.npmjs.com/package/gulp-outdent](https://www.npmjs.com/package/gulp-outdent)


```js
var gulp = require('gulp');
var jade = require("gulp-jade");
var outdent = require("gulp-outdent");
gulp.task('jade', function(){
  gulp.src('*.jade')
    .pipe(jade({
      pretty: '\t'
    }))
    .pipe(outdent())
    .pipe(gulp.dest("/"));
});
```

[![Image from Gyazo](https://i.gyazo.com/cfacd1a878e004c26bda4c72908dad7e.png)](https://gyazo.com/cfacd1a878e004c26bda4c72908dad7e)

これでOKでしょ。npmパッケージで柔軟に対応できる男になりたい

## Pug

[![Image from Gyazo](https://i.gyazo.com/e586eae5f8d6ff3a2ad00c8bf96a3a04.png)](https://gyazo.com/e586eae5f8d6ff3a2ad00c8bf96a3a04)

上記インデントの件とは別ですが、Jadeが既存の商標と衝突してたみたいでPugに改名していたそうです（最近知った）

去年の12月…

[Renaming jade -> pug · Issue #2184 · pugjs/pug](https://github.com/pugjs/pug/issues/2184)

Jade特に考えずに使うならそのままでいいけど、ほどよいタイミングでPugに乗り換えましょう。拡張子以外書き方はだいたい今まで通り。

こちらからは以上です。

[![Image from Gyazo](https://i.gyazo.com/3437e2d12d2868747a1e3b005c7ee4a7.png)](https://gyazo.com/3437e2d12d2868747a1e3b005c7ee4a7)