---
title: JavaScriptでの配列ランダム配置
description: JavaScriptでの配列をランダムで配置する方法について
date: 2019-05-10
author: yamanoku
---

## フィッシャーイェーツのシャッフル


```js
const data = [0, 1, 2, 3, 4];
let j;
let temp;
for(let i = data.length - 1; i > 0; i--) {
  j = Math.floor(Math.random() * (i + 1));
  tmp = data[i];
  data[i] = data[j];
  data[j] = tmp;
}
```

有限集合からランダムな順列を生成するアルゴリズム

1. 1 から N までの数字を書く。
2. まだ消されてない数字の数を数え、1 からその数以下までのランダムな数字 k を選ぶ。
3. 残っている数字から k 番目の数字を消し、別の場所にその数字を書き出す。
4. すべての数字が消されるまで手順 2, 3 を繰り返す。
5. 手順3で書かれた数列が元の数値からのランダム順列となる。