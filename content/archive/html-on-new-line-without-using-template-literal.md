---
title: テンプレートリテラルつかわずに改行してHTML表示する方法
description: テンプレートリテラルつかわずに改行してHTML表示する方法です
date: 2018-02-19
author: yamanoku
---

ちょっとビビった。たしかにそういうやり方があるにはあるのだが。

```js
 template: [
   '<div>',
     '<transition-group name="fade" tag="ul">',
       '<li v-for="post in posts" v-bind:key="post.title.rendered">',
         '<a :href="post.slug" @click.prevent="onclick(post)">{{post.title.rendered}}</a>',
       '</li>',
     '</transition-group>',
     '<button @click="loadMore">load more</button>',
   '</div>'
 ].join('\n')
```

参照：https://qiita.com/nanonum/items/a335ba09fc2c2c4e3d5e#htmlcssjs%E4%B8%B8%E3%81%94%E3%81%A8%E3%82%B3%E3%83%BC%E3%83%89

配列にして改行を`join`だと…！　その手は思いつかなかった…！

**だがテンプレートリテラルを使え**