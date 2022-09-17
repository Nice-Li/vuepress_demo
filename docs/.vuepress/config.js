// v2 版本  ts
import { defaultTheme } from 'vuepress'

export default {
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
}