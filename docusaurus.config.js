module.exports = {
  title: 'Wordup - Documentation',
  tagline: 'The fully integrated development platform for WordPress.',
  url: 'https://docs.wordup.dev',
  baseUrl: '/',
  favicon: 'img/favicon.png',
  organizationName: 'wordup-dev', // Usually your GitHub org/user name.
  projectName: 'wordup-docs', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Documentation',
      logo: {
        alt: 'Wordup Logo',
        src: 'img/logo.svg',
      },
      links: [
        {
          to: 'docs/setup/introduction',
          activeBasePath: 'docs/setup',
          label: 'Getting started',
          position: 'left',
        },
        {
          to: 'docs/development/init',
          activeBasePath: 'docs/development',
          label: 'Development',
          position: 'left',
        },
        {
          to: 'docs/publishing/builds',
          activeBasePath: 'docs/publishing',
          label: 'Publishing',
          position: 'left',
        },
        {
          label: 'GitHub',
          href: 'https://github.com/wordup-dev/wordup-docs',
          position: 'right',
        }
      ],
    },
    footer: {
      style: '',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting started',
              to: 'docs/setup/getting-started',
            },
            {
              label: 'Development',
              to: 'docs/development/init',
            },
            {
              label: 'Publishing',
              to: 'docs/publishing/builds',
            },
          ],
        },
        {
          title: 'Wordup',
          items: [
            {
              label: 'Console',
              href: 'https://console.wordup.dev',
            },
            {
              label: 'Website',
              href: 'https://wordup.dev',
            },
          ],
        },
        {
          title: 'Social',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/wordup-dev/',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/wordup_dev',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Wordup. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/wordup-dev/wordup-docs/edit/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
