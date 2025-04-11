import {defineConfig} from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    srcDir: './src',
    lang: 'zh-Hans',
    title: "iSharkFly 文档和手册",
    description: "iSharkFly - Docs",
    head: [
        [
            'script',
            {},
            `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-W3NL9V');`
        ]
    ],

    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            {text: '主页', link: '/'},
            {text: 'iSharkFly', link: 'https://www.isharkfly.com'}
        ],
        footer: {
            message: '基于 MIT 许可发布',
            copyright: `版权所有 © 2019-${new Date().getFullYear()} iSharkFly.COm`
        },
        sidebar: [
            {
                text: '计算机相关技术',
                items: [
                    {
                        text: '程序语言',
                        collapsed: true,
                        items: [
                            {
                                text: 'Java', link: '/programming-language/java/', collapsed: true,
                                items: [
                                    {text: '核心编程', link: '/programming-language/java/core/'},

                                ]
                            },
                            {text: 'Python', link: '/programming-language/python/'},
                            {text: 'Mumps', link: '/programming-language/mumps/'}
                        ]
                    },
                ]
            },
            {
                text: '面试和职场',
                collapsed: true,
                items: [
                    {text: '面试', link: '/work/interview/'},
                    {text: '职场', link: '/work/workplace/'}

                ]
            }
        ],

        socialLinks: [
            {icon: 'github', link: 'https://github.com/iSharkFly-Docs/docs-isharkfly-com.git'}
        ]
    }
})
