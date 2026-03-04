// docusaurus.config.ts
import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'FlexBans Wiki',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.ico',

  url: 'https://neocle.github.io',
  baseUrl: '/FlexBansWiki/',
  organizationName: 'Neocle',
  projectName: 'FlexBansWiki',
  deploymentBranch: 'gh-pages',

  headTags: [
    {
      tagName: 'meta',
      attributes: {
        name: 'algolia-site-verification',
        content: '07B562C932CA591A',
      },
    },
  ],

  onBrokenLinks: 'throw',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  stylesheets: [
    {
      href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css',
      crossorigin: 'anonymous',
    }
  ],

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/Neocle/FlexBansWiki/tree/main/docs/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'FlexBans Wiki',
      logo: {
        alt: 'FlexBans Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'https://github.com/Neocle/FlexBansAPI',
          position: 'left',
          label: 'More Plugins'
        },
        {
          to: 'https://github.com/Neocle/FlexBansAPI',
          position: 'left',
          label: 'Donate',
          
        },
        {
          href: 'https://discord.gg/inv',
          position: 'right',
          className: 'navbar__icon navbar__discord',
          html: '<i class="fa-brands fa-discord"></i>',
                'aria-label': 'Discord',
        },
        {
          href: 'https://github.com/Neocle/FlexBansAPI',
          position: 'right',
          className: 'navbar__icon navbar__github',
          html: '<i class="fa-brands fa-github"></i>',
                'aria-label': 'GitHub',
        },
      ],
    },
    footer: {
      copyright: `Copyright © ${new Date().getFullYear()} FlexBans, Neocle`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    algolia: {
      appId: '3VFWTJMVOX',
      apiKey: 'b9a8131acfc3eadd180f2e703fcb7e7d',
      indexName: 'FlexBans Wiki',
      contextualSearch: true,
      searchParameters: {},
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
