import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "DevOps学习园地",
  description: "专业的DevOps技术文档，提供完整的DevOps环境配置、资源管理和问题解决方案",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '连接设置', link: '/connection-setup' },
      { text: '资源池管理', link: '/resource-pools' },
      { text: '常见问题', link: '/faq' }
    ],

    sidebar: [
      {
        text: 'DevOps文档',
        items: [
          { text: '连接设置', link: '/connection-setup' },
          { text: '资源池管理', link: '/resource-pools' },
          { text: '常见问题', link: '/faq' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
