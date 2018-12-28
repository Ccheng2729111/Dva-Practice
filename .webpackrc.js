const path = require('path');

export default {
  entry: 'src/index.js',
  extraBabelPlugins: [['import', { libraryName: 'antd', libraryDirectory: 'es', style: true }]],
  theme:{
    "@primary-color": "#1DA57A"
  },
  // proxy: {
  //   "/api": {
  //     "target": "http://jsonplaceholder.typicode.com/",
  //     "changeOrigin": true,
  //     "pathRewrite": { "^/api" : "" }
  //   }
  // },
  es5ImcompatibleVersions: true,
  hash:true,
  manifest: {
    "basePath": "/app/"
  }
};

