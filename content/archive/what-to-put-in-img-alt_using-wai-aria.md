---
title: imgのalt何入れるか問題（WAI-ARIA回避編）
description: imgのaltに何を入れるか、その時にWAI-ARIAで回避するという話です
date: 2017-11-21
author: yamanoku
---

altに文字画像とかあれば入れるのは常なんだが、たとえば商品画像とかがそのままポンと置いてあると説明しづらい。

headingなりで紹介してあるとスクリーンリーダーなどで読み取るので画像自体に大きな意味はないとは思うけど、特に見出しもなく（altに詳細を入れずに済む）、ただ文章で説明している箇所もありけりな場合どうするかを回避する方法。

```html
<img src="/img/product_001.jpg" alt="製品画像01" aria-describedby="description01">
<p id="description01">製品画像に関する説明についてあれこれ</p>
```

こうかな。WAI-ARIA使えなかったら詰みっぽいです。

参考：https://www.w3.org/WAI/tutorials/images/complex/#description-containing-textual-information