const themeConfig = require('./config/themeConfig.js')

module.exports = {
    icons: "/imgs/icon.svg",
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
                flowchart: true,
                mermaid: true,
                presentation: true,
                tasklist: true,
                footnote: true,
                mark: true
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
        ],
        [
            'vuepress-plugin-helper-live2d', {
                // 是否开启控制台日志打印(default: false)
                log: false,
                live2d: {
                    // 是否启用(关闭请设置为false)(default: true)
                    enable: true,
                    // 模型名称(default: hibiki)>>>取值请参考：
                    // https://github.com/JoeyBling/hexo-theme-yilia-plus/wiki/live2d%E6%A8%A1%E5%9E%8B%E5%8C%85%E5%B1%95%E7%A4%BA
                    model: 'hibiki',
                    display: {
                        position: "right", // 显示位置：left/right(default: 'right')
                        width: 135, // 模型的长度(default: 135)
                        height: 300, // 模型的高度(default: 300)
                        hOffset: 65, //  水平偏移(default: 65)
                        vOffset: 0, //  垂直偏移(default: 0)
                    },
                    mobile: {
                        show: false // 是否在移动设备上显示(default: false)
                    },
                    react: {
                        opacity: 0.95 // 模型透明度(default: 0.8)
                    }
                }
            }
        ]
    ],
}
