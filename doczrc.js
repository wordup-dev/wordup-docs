export default {
    title: 'Wordup documentation',
    description: 'The documentation for the WordPress developer tools',
    menu: ['Getting Started','Development', 'Configuration','Tools', 'Commands'],
    dest:'/build',
    src: "./src",
    public: './src/public',
    htmlContext: {
        favicon: '/public/favicon.ico'
    },
    themeConfig: {
        logo: {
          src: '/public/logo_landscape.png',
          width: '100%',
        },
        colors: {
            primary:'#8b35f4'
        }
    }
}