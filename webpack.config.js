const path = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');

const getBaseConfig = (development) => ({
  entry: './src/dastruct.ts',
  devtool: development ? 'inline-source-map' : false,
  mode: development ? 'development' : 'production',
  resolve: {
    extensions: ['.ts'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'ts-loader'],
      },
    ],
  },
  plugins: [new ESLintPlugin({extensions: ['ts']})],
});

module.exports = [
  ({ development }) => ({
    ...getBaseConfig(development),
    output: {
      filename: 'dastruct.js',
      path: path.resolve(__dirname, 'dist'),
      library: 'dastruct',
      libraryExport: 'default',
      libraryTarget: 'umd',
      umdNamedDefine: true,
      globalObject: 'typeof self === \'undefined\' ? this : self',
    }
  })
];
