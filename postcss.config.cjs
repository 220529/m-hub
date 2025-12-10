module.exports = {
  plugins: {
    'postcss-px-to-viewport-8-plugin': {
      viewportWidth: 750, // 设计稿宽度（2倍图）
      unitPrecision: 5, // 转换精度
      viewportUnit: 'vw', // 转换单位
      selectorBlackList: ['no-vw'], // 不转换的类名（带 no-vw 的不转换）
      minPixelValue: 1, // 小于 1px 不转换
      mediaQuery: false, // 媒体查询中不转换
      exclude: [/node_modules/], // 排除 node_modules
    },
  },
};
