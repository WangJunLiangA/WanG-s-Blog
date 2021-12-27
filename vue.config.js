var path=require('path');
module.exports = {
  pluginOptions: {
    i18n: {
      locale: 'y',
      fallbackLocale: 'y',
      localeDir: 'y',
      enableInSFC: true,
      includeLocales: false,
      enableBridge: true
    }
  },
  publicPath: "./", // 构建好的文件输出到哪里
  
  chainWebpack:config=>{
    config.resolve.alias
      .set('@',path.resolve(__dirname,'src')),
    config.module.rule('md')
      .test(/\.md/)
      .use('vue-loader')
      .loader('vue-loader')
      .end()
      .use('vue-markdown-loader')
      .loader('vue-markdown-loader/lib/markdown-compiler')
      .options({
        raw: true
      })
  },  
}
