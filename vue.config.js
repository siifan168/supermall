module.exports = {
  configureWebpack: {
    resolve: { //配置别名
      alias: {
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        // 'router': '@/router',
        // 'stote': '@/stote',
        'views': '@/views',
      }
    }
  }
}