module.exports = {
  chainWebpack: config => {
    config.plugin('html').tap(args => {
      args[0].title = 'Http Cat';
      return args;
    });
  },
  transpileDependencies: true
};
