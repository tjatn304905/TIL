// 여러개의 jsx파일을 하나로 합쳐서 html에서 쓸 수 있게 해줌
const path = require('path'); // 노드에서 경로 조작을 하도록 해주는 것
const RefreshjWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const LoaderOptionsPlugin = require('webpack/lib/LoaderOptionsPlugin');
const { webpack } = require('webpack');



module.exports = {
  name: 'wordrelay-setting',
  mode: 'development', // 실서비스: production
  devtool: 'eval',
  resolve: {
    extensions: ['.js', '.jsx'],
  },

  entry: {
    // app: ['./client.jsx'],
    app: ['./client'], // resolve의 extensions 넣은 이후
  }, // 입력

  module: {
    rules: [{
      test: /\.jsx?/,
      loader: 'babel-loader',
      options: {
        presets: [
          ['@babel/preset-env', {
            targets: {
              browsers: ['> 5% in KR', 'last 2 chrome versions'],
            },
            debug: true,
          }],
          '@babel/preset-react'
        ],
        plugins: [
          '@babel/plugin-proposal-class-properties',
          'react-refresh/babel',
        ],
      },
    }],
  },
  plugins: [
    new LoaderOptionsPlugin({ debug:true }),
    new RefreshjWebpackPlugin(),
  ],
  output: {
    path: path.join(__dirname, 'dist'), // 현재 폴더 안에 있는 dist 폴더라는 뜻, 원래는 'C:users\multicampus\....' 이렇게 다 써야함
    filename: 'app.js',
    publicPath: '/dist/',
  }, // 출력
  devServer: {
    publicPath: '/dist/',
    hot: true,
  },
};