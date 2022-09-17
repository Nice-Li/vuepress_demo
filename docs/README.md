# Main

[v2 版本](https://v2.vuepress.vuejs.org/zh/guide/)
## install
```sh
1. mkdir site

2. git init 
  // or 
  yarn init

3. yarn add vuepress@next -D
  // or
   npm install vuepress@next -D

4. // in package.json add:

  "scripts": {
    "dev": "vuepress dev docs",
    "build": "vuepress build docs"
  }

5. mkdir docs

6. yarn dev 
  // or 
  npm run dev

7. mkdir .vuepress
  cd .vuepress
  echo config.ts  // 可能存在编码问题
```
## config.ts
```ts
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  base:'/',  
  lang: 'zh-CN',
  title: 'Admin',
  description: 'VuePress static page Test',
  head: [
    ['link', { rel: 'icon', href: '' }]
  ],
  locales:{},

  theme: defaultTheme({
    // 默认主题配置
    navbar: [
      {
        text: '首页',
        link: '/',
      },
      {
        text: 'About',
        link: '/about/',
      },
    ],
  }),

  // dev
  host:'0.0.0.0',
  port:8080,
  open:true,
  // templateDev:'@vuepress/client/templates/dev.html',

  // Build
  // shouldPreload:true,
  // shouldPrefetch:true,
  // templateBuild:'@vuepress/client/templates/build.html',

  // Markdown
  // markdown:{},   // 可以接收 markdown-it 的所有配置项，以及下列额外的配置项。


  // plugins
  // plugins:
})
```

## Frontmatter
```txt
---
title:'string'
date:'string'
description:'string'
head:
  - - meta
    - name: foo
      content: yaml 数组语法
  - [meta, { name: bar , content: 方括号语法 }]
  - - link
      - rel: canonical
        href: foobar
  - - script
    - {}
    - console.log('hello from frontmatter');


lang:'string'
layout:'string'
permalink:'string'
# 符合 yyyy-MM-dd-foobar.md 或 yyyy-MM-foobar.md 日期格式的文件名。
permalinkPattern: :year/:month/:day/:slug.html
---
```

## 内置组件

```txt
<ClientOnly/>  # 该组件和它的子元素只会在客户端被渲染。也就是说，它不会在构建 (SSR) 过程中被渲染到 HTML 内。

<Content/>   # 该组件会渲染页面的 Markdown 内容。
```

## 路由

| 相对路径 | 路由路径 |
| ------| -----------|
| /README.md   | / |
| /contributing.md | /contributing.html |
| /guide/README.md    | /guide/index.html |



## Emoji

你可以在你的 Markdown 内容中输入 `:EMOJICODE:` 来添加 Emoji 表情。

[Emoji](https://github.com/ikatyang/emoji-cheat-sheet)

## 目录

把当前页面的目录添加到 Markdown 内容中，你可以使用 `[[toc]]` 语法。

```md
[[toc]]
```


## 代码块
对应行高亮
- 行数范围： {5-8}
- 多个单行： {4,7,9}
- 组合： {4,7-13,16,23-27,40}

```md
 ```js{1,6-8}
```

```md
不启用行号
  ```js:no-line-numbers
```
为了避免你的代码块被 Vue 编译， VuePress 默认会在你的代码块添加 v-pre 指令。这一默认行为可以在配置中关闭。
```md
```md
<!-- 默认情况下，这里会被保持原样 -->
1 + 2 + 3 = {{ 1 + 2 + 3 }}
```
```md
```md:no-v-pre
<!-- 这里会被 Vue 编译 -->
1 + 2 + 3 = {{ 1 + 2 + 3 }}
```
```md
```js:no-v-pre
// 由于 JS 代码高亮，这里不会被正确编译
const onePlusTwoPlusThree = {{ 1 + 2 + 3 }}
```

## 静态资源
默认的 Public 目录是` .vuepress/public `，可以通过 public 配置项来修改。

```md
![图片](./image.png)
```

```md
这里实际就是`.vuepress/public/images/hero.png`
![VuePress Logo](/images/hero.png)
```