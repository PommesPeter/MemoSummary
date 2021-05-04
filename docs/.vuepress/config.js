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
    themeConfig
}
