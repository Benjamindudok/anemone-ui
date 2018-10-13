module.exports = {
    title: 'Anemone-UI',
    description: 'A library of scss and Vue.js 2.0 UI components and utility helpers. This project is currently nowhere near release/production worthy, so please don\'t expect it to be.',
    themeConfig: {
        sidebarDepth: 1,
        sidebar: [
            ['/', 'Home'],
            {
                title: 'Components',
                collapsable: true,
                children: [
                    '/components/badge',
                    '/components/button',
                    '/components/overlay',
                    '/components/pagination',
                    '/components/transitions'
                ]
            }
        ],
        displayAllHeaders: false,
        nav: [
            { text: 'Github', link: 'https://github.com/Benjamindudok/anemone-ui' },
        ]
    },
    chainWebpack: config => {
        config.module.rule('ts')
            .test(/\.ts$/)
            .use('ts-loader')
            .loader('ts-loader')
            .options({
                transpileOnly: true,
                appendTsSuffixTo: [
                    '\\.vue$'
                ],
                happyPackMode: false
            })
            .end()

    }
};
