---
title: .DS_Store以外の隠しファイルを.gitignoreするやり方
tags: Git gitignore
date: 2017-07-24
author: yamanoku
---

小ネタ。

## きっかけ
会社の作業用macのHDDが圧迫してきたのでSSD拡張を導入しました。こちらに作業ディレクトリなどを移管して作業していたのですが、ファイルを作成する毎に隠しファイルが生成されるという事態に遭遇。

例えば`dist/`以下に`config.json`なるファイルを作成したとします。その時に`git status`で管理ファイルを確認すると、、、

```bash
Untracked files:
  (use "git add <file>..." to include in what will be committed)

    dist/config.json
    dist/._config.json
```
と、上記のように隠しファイル版の`config.json`まで作成されてしまうことがあります。

ターミナルコマンドとか`.gitignore_global`などで`.DS_Store`は消せる、管理しないのはあるのですが`._`始まりのファイルの制御ができなくてしんどかったです。いちいち消すのも面倒くさい…

## 解決策

以下を設定（できれば`.gitignore_global`が良い）

```.gitignore
._*.*
```

改めてステータスを確認

```bash
git status
```

```bash
Untracked files:
  (use "git add <file>..." to include in what will be committed)

    dist/config.json
```

やったぜ。

## 留意点

いわずもがなですが、あくまでGit管理下から見えなくしているだけなので、ファイル自体は残ってます。要らなかったらそこは各自コマンドなりアプリなりで消しておいてください。
