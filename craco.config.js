const CracoLessPlugin = require('craco-less');
module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {'@primary-color': '#D1D1D1'},
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
