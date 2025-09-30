# 功能丰富的文档网站生成

这类工具很多，不能一一遍及。

从古老的sgml、docbook，到新一点的chm、gitbook，再到现在的docsify、vite press工具层出不穷。

只选择几个代表性的来进行演示。

## 试验环境和需求

环境

1. 有网络
2. node构建环境：node 22.14.0(npm 10.9.2 )
3. 或者ubuntu 24+apt源
4. 要支持预览

需求：
5. 要支持多个手册的展现
6. 每个有手册由多个章节组成
7. 每个小节可以一个文件编写或者多个文件编写

# 01-docsify

安装了有200个包，约36MB。

```bash
pnpm install docsify-cli
node_modules/.bin/docsify docsify init .
node_modules/.bin/docsify serve .
```

docsify 采用的是在浏览器中转换md为html的方法，功能简单。

# 02-vitepress

安装了有127个包，约90M。

```bash
pnpm add -D vitepress
npx vitepress init
pnpm docs:dev
pnpm docs:build
```

vite press有自己的主题和布局系统，支持更复杂的文档结构和定制化需求。

# 03-docusaurus

安装了有1146个包，约299M
```bash
npx create-docusaurus@latest 03-docusaurus classic --skip-install
pnpm install
pnpm build
pnpm serve
```
docusaurusy有一个漂亮的首页。


# 04-asciidoc-antora

安装有199个包，约47M

```bash
pnpm install
pnpm dev
```

## 小结

| 方案 | 依赖大小 | 有独立首页 | 输出方法 |
|------|----------|------------|----------|
| 01-docsify | 200 个包，约 36MB | 否 | 浏览器端渲染 |
| 02-vitepress | 127 个包，约 90M | 有 | 构建时转换 |
| 03-docusaurus | 1146 个包，约 299M | 有 | 构建时转换 |
| 04-asciidoc-antora | 199 个包，约 47M | 否 | 构建时转换 |
