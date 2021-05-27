const themeConfig = require('./config/themeConfig.js')

module.exports = {
    icons: "/imgs/favicon.ico",
    title: "PommesPeter's Blog",
    description: "PommesPeter Knowledge Base",
    head: [
        // 注入到页面<head> 中的标签，格式[tagName, { attrName: attrValue }, innerHTML?]
        ['link', { rel: 'icon', href: '/imgs/favicon.ico' }],
        ['meta', { name: 'keywords', content: '深度学习,科研,技术,算法,课程学习' }],
        ['meta', { name: 'theme-color', content: '#11a8cd' }]
    ],
    markdown: {
        lineNumbers: true
    },
    theme: require.resolve('../../theme-vdoing'),
    themeConfig,
    plugins: [
        [
            'one-click-copy',
            {
                // 代码块复制按钮
                copySelector: ['div[class*="language-"] pre', 'div[class*="aside-code"] aside'], // String or Array
                copyMessage: '复制成功', // default is 'Copy successfully and then paste it for use.'
                duration: 1000, // prompt message display time.
                showInMobile: false, // whether to display on the mobile side, default: false.
            },
        ],
        [
            "md-enhance",
            {
                tex: true,
                enableAll: true
            }
        ],
        [
            '@vuepress/last-updated',
            {
                transformer: (timestamp, lang) => {
                    // 不要忘了安装 moment
                    const moment = require('moment')
                    moment.locale(lang)
                    return moment(timestamp).fromNow()
                }
            }
        ]

    ],
}
