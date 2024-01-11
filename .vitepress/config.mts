import { defineConfig } from 'vitepress';

export default defineConfig({
  title: 'How to',
  description: 'guides, tips',
  // lang: 'en-US',
  // locales: {
  //   root: {
  //     label: 'English',
  //     lang: 'en',
  //     link: '/en/'
  //   },
  //   ua: {
  //     label: 'Ukrainian',
  //     lang: 'ua',
  //     link: '/ua/'
  //   },
  //   ru: {
  //     label: 'Russian',
  //     lang: 'ru',
  //     link: '/ru/'
  //   },

  // },
  head: [
    [
      'script',
      { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=G-3MW19HW638' }
    ],
    [
      'script',
      {},
      `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-3MW19HW638');`
    ]
  ],
  locales: {
      root: {
        label: 'English',
        lang: 'en',
        themeConfig: {
          nav: [
            { text: 'Home', link: '/en/' },
            { text: 'Linux', link: '/en/linux/' },
            { text: 'Windows', link: '/en/windows/' },
            { text: 'Others', link: '/en/others/' },
          ]
        }
      },
      ua: {
        label: 'Ukraine',
        lang: 'ua',
        themeConfig: {
          nav: [
            { text: 'Home', link: '/ua/' },
            { text: 'Linux', link: '/ua/linux/' },
            { text: 'Windows', link: '/ua/windows/' },
            { text: 'Others', link: '/ua/others/' },
          ]}
      },
    },
      
  themeConfig: {
    lastUpdated: {
      text: 'Updated at',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    },
    // editLink: {
    //   pattern: 'https://github.com/Wonkiest29/mannual/edit/production/:path',
    //   text: 'Edit this page on GitHub'
    // },
    search: {
      provider: 'local'
    },
    // locales: {},

    // nav: {
        // '/en/': [
        //   { text: 'Home', link: '/en/' },
        // ],
        // '/ua/': [
          // { text: 'Home', link: '/ua/' },
        // ],
        // '/ru/': [
          // { text: 'Home', link: '/ru/' },]
        // },
      // { text: 'Home', link: '/' },
      // { text: 'Linux', link: '/linux/' },
      // { text: 'Windows', link: '/windows/' },
    //   { text: 'Minecraft', link: '/minecraft/' },
    //   // Other navigation links
    // ],
      // {
        // text: 'Others',
        // items: [
          // { text: 'Item A', link: '/item-1' },
          // { text: 'Item B', link: '/item-2' },
          // { text: 'Item C', link: '/item-3' }
        // ]
    sidebar: {
      '/linux/': [
        { text: 'SSH Connect', link: '/linux/ssh_connect' },
        { text: 'SSH Key', link: '/linux/ssh_key' },
        // ... other pages or sections
      ],
      '/windows/': [
        { text: 'windows 1', link: '/windows/page1' },
        { text: 'windows 2', link: '/windows/page2' },
      ],
      '/minecraft/': [
        { text: 'minecraft 1', link: '/minecraft/page1' },
        { text: 'minecraft 2', link: '/minecraft/page2' },
      ],
      // Other sidebars for different routes
    },
  },

  // Other general settings
});
