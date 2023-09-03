module.exports = {
  publicPath: `/http-cat-game/`,
  chainWebpack: config => {
    config.plugin('html').tap(args => {
      args[0].title = 'Http Cat';
      return args;
    });
  },
  transpileDependencies: true
};
