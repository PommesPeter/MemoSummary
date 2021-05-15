module.exports = [
    // 本地插件
    // [require('./plugins/love-me'), { // 鼠标点击爱心特效
    //   color: '#11a8cd', // 爱心颜色，默认随机色
    //   excludeClassName: 'theme-vdoing-content' // 要排除元素的class, 默认空''
    // }],
    // 可以添加第三方搜索链接的搜索框（原官方搜索框的参数仍可用）

    ['one-click-copy', {
        copySelector: ['div[class*="language-"] pre', 'div[class*="aside-code"] aside'], // String or Array
        copyMessage: 'Copy successfully and then paste it for use.', // default is 'Copy successfully and then paste it for use.'
        duration: 300, // prompt message display time.
        showInMobile: false // whether to display on the mobile side, default: false.
    }], 'vuepress-plugin-latex'
]