import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'sass-tools',
  description: 'Simple and lightweight mixin library for Sass.',
  themeConfig: {
    nav: [
      { text: 'Guide', link: '/guide/get-started' },
      { text: 'Mixins', link: '/sass/' },
    ],
    sidebar: {
      '/guide/': [
        {
          text: 'Guide',
          items: [
            {
              text: 'Get started',
              link: '/guide/get-started',
            },
            {
              text: 'Configurations',
              link: '/guide/config',
            },
          ],
        },
      ],
      '/sass/': [
        {
          text: 'Typography',
          items: [
            {
              text: 'ellipsis',
              link: '/sass/typography/ellipsis/',
            },
          ],
        },
      ],
    },
  },
})
