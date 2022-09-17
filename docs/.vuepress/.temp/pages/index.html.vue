<template><div><h1 id="main" tabindex="-1"><a class="header-anchor" href="#main" aria-hidden="true">#</a> Main</h1>
<p><a href="https://v2.vuepress.vuejs.org/zh/guide/" target="_blank" rel="noopener noreferrer">v2 版本<ExternalLinkIcon/></a></p>
<h2 id="install" tabindex="-1"><a class="header-anchor" href="#install" aria-hidden="true">#</a> install</h2>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token number">1</span>. <span class="token function">mkdir</span> site

<span class="token number">2</span>. <span class="token function">git</span> init 
  // or 
  <span class="token function">yarn</span> init

<span class="token number">3</span>. <span class="token function">yarn</span> <span class="token function">add</span> vuepress@next <span class="token parameter variable">-D</span>
  // or
   <span class="token function">npm</span> <span class="token function">install</span> vuepress@next <span class="token parameter variable">-D</span>

<span class="token number">4</span>. // <span class="token keyword">in</span> package.json add:

  <span class="token string">"scripts"</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">"dev"</span><span class="token builtin class-name">:</span> <span class="token string">"vuepress dev docs"</span>,
    <span class="token string">"build"</span><span class="token builtin class-name">:</span> <span class="token string">"vuepress build docs"</span>
  <span class="token punctuation">}</span>

<span class="token number">5</span>. <span class="token function">mkdir</span> docs

<span class="token number">6</span>. <span class="token function">yarn</span> dev 
  // or 
  <span class="token function">npm</span> run dev

<span class="token number">7</span>. <span class="token function">mkdir</span> .vuepress
  <span class="token builtin class-name">cd</span> .vuepress
  <span class="token builtin class-name">echo</span> config.ts  // 可能存在编码问题
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="config-ts" tabindex="-1"><a class="header-anchor" href="#config-ts" aria-hidden="true">#</a> config.ts</h2>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineUserConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vuepress'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineUserConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  base<span class="token operator">:</span><span class="token string">'/'</span><span class="token punctuation">,</span>  
  lang<span class="token operator">:</span> <span class="token string">'zh-CN'</span><span class="token punctuation">,</span>
  title<span class="token operator">:</span> <span class="token string">'Admin'</span><span class="token punctuation">,</span>
  description<span class="token operator">:</span> <span class="token string">'VuePress static page Test'</span><span class="token punctuation">,</span>
  head<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">[</span><span class="token string">'link'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> rel<span class="token operator">:</span> <span class="token string">'icon'</span><span class="token punctuation">,</span> href<span class="token operator">:</span> <span class="token string">''</span> <span class="token punctuation">}</span><span class="token punctuation">]</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  locales<span class="token operator">:</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>

  theme<span class="token operator">:</span> <span class="token function">defaultTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token comment">// 默认主题配置</span>
    navbar<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        text<span class="token operator">:</span> <span class="token string">'首页'</span><span class="token punctuation">,</span>
        link<span class="token operator">:</span> <span class="token string">'/'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        text<span class="token operator">:</span> <span class="token string">'About'</span><span class="token punctuation">,</span>
        link<span class="token operator">:</span> <span class="token string">'/about/'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>

  <span class="token comment">// dev</span>
  host<span class="token operator">:</span><span class="token string">'0.0.0.0'</span><span class="token punctuation">,</span>
  port<span class="token operator">:</span><span class="token number">8080</span><span class="token punctuation">,</span>
  open<span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token comment">// templateDev:'@vuepress/client/templates/dev.html',</span>

  <span class="token comment">// Build</span>
  <span class="token comment">// shouldPreload:true,</span>
  <span class="token comment">// shouldPrefetch:true,</span>
  <span class="token comment">// templateBuild:'@vuepress/client/templates/build.html',</span>

  <span class="token comment">// Markdown</span>
  <span class="token comment">// markdown:{},   // 可以接收 markdown-it 的所有配置项，以及下列额外的配置项。</span>


  <span class="token comment">// plugins</span>
  <span class="token comment">// plugins:</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="frontmatter" tabindex="-1"><a class="header-anchor" href="#frontmatter" aria-hidden="true">#</a> Frontmatter</h2>
<div class="language-txt ext-txt line-numbers-mode"><pre v-pre class="language-txt"><code>---
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="内置组件" tabindex="-1"><a class="header-anchor" href="#内置组件" aria-hidden="true">#</a> 内置组件</h2>
<div class="language-txt ext-txt line-numbers-mode"><pre v-pre class="language-txt"><code>&lt;ClientOnly/>  # 该组件和它的子元素只会在客户端被渲染。也就是说，它不会在构建 (SSR) 过程中被渲染到 HTML 内。

&lt;Content/>   # 该组件会渲染页面的 Markdown 内容。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="路由" tabindex="-1"><a class="header-anchor" href="#路由" aria-hidden="true">#</a> 路由</h2>
<table>
<thead>
<tr>
<th>相对路径</th>
<th>路由路径</th>
</tr>
</thead>
<tbody>
<tr>
<td>/README.md</td>
<td>/</td>
</tr>
<tr>
<td>/contributing.md</td>
<td>/contributing.html</td>
</tr>
<tr>
<td>/guide/README.md</td>
<td>/guide/index.html</td>
</tr>
</tbody>
</table>
<h2 id="emoji" tabindex="-1"><a class="header-anchor" href="#emoji" aria-hidden="true">#</a> Emoji</h2>
<p>你可以在你的 Markdown 内容中输入 <code v-pre>:EMOJICODE:</code> 来添加 Emoji 表情。</p>
<p><a href="https://github.com/ikatyang/emoji-cheat-sheet" target="_blank" rel="noopener noreferrer">Emoji<ExternalLinkIcon/></a></p>
<h2 id="目录" tabindex="-1"><a class="header-anchor" href="#目录" aria-hidden="true">#</a> 目录</h2>
<p>把当前页面的目录添加到 Markdown 内容中，你可以使用 <code v-pre>[[toc]]</code> 语法。</p>
<div class="language-markdown ext-md line-numbers-mode"><pre v-pre class="language-markdown"><code>[[toc]]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="代码块" tabindex="-1"><a class="header-anchor" href="#代码块" aria-hidden="true">#</a> 代码块</h2>
<p>对应行高亮</p>
<ul>
<li>行数范围： {5-8}</li>
<li>多个单行： {4,7,9}</li>
<li>组合： {4,7-13,16,23-27,40}</li>
</ul>
<div class="language-markdown ext-md line-numbers-mode"><pre v-pre class="language-markdown"><code> ```js{1,6-8}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-markdown ext-md line-numbers-mode"><pre v-pre class="language-markdown"><code>不启用行号
  ```js:no-line-numbers
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>为了避免你的代码块被 Vue 编译， VuePress 默认会在你的代码块添加 v-pre 指令。这一默认行为可以在配置中关闭。</p>
<div class="language-markdown ext-md line-numbers-mode"><pre v-pre class="language-markdown"><code>```md
<span class="token comment">&lt;!-- 默认情况下，这里会被保持原样 --></span>
1 + 2 + 3 = {{ 1 + 2 + 3 }}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-markdown ext-md line-numbers-mode"><pre v-pre class="language-markdown"><code>```md:no-v-pre
<span class="token comment">&lt;!-- 这里会被 Vue 编译 --></span>
1 + 2 + 3 = {{ 1 + 2 + 3 }}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-markdown ext-md line-numbers-mode"><pre v-pre class="language-markdown"><code>```js:no-v-pre
// 由于 JS 代码高亮，这里不会被正确编译
const onePlusTwoPlusThree = {{ 1 + 2 + 3 }}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="静态资源" tabindex="-1"><a class="header-anchor" href="#静态资源" aria-hidden="true">#</a> 静态资源</h2>
<p>默认的 Public 目录是<code v-pre>.vuepress/public</code>，可以通过 public 配置项来修改。</p>
<div class="language-markdown ext-md line-numbers-mode"><pre v-pre class="language-markdown"><code><span class="token url"><span class="token operator">!</span>[<span class="token content">图片</span>](<span class="token url">./image.png</span>)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-markdown ext-md line-numbers-mode"><pre v-pre class="language-markdown"><code>这里实际就是<span class="token code-snippet code keyword">`.vuepress/public/images/hero.png`</span>
<span class="token url"><span class="token operator">!</span>[<span class="token content">VuePress Logo</span>](<span class="token url">/images/hero.png</span>)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


