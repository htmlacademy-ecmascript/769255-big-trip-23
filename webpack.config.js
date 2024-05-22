const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/main.js', // Точка входа
  output: {
    filename: 'bundle.[contenthash].js', // Имя бандла
    path: path.resolve(__dirname, 'build'), // Директория для файлов сборки
    clean: true, // Удаляем предыдущую сборку перед созданием новой
  },
  devtool: 'source-map', // Генерируем карту исходного кода
  plugins: [ // Подключаем плагины
    new CopyPlugin({ //Плагин для Webpack, который за нас будет копировать файлы из /public в /build и туда же подкладывать бандл
      patterns: [
        {
          from: 'public',
          globOptions: {
            ignore: ['**/index.html'],
          },
        },
      ],
    }),
    new HtmlPlugin({
      template: 'public/index.html',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/, //webpack возьмет все js-файлы и прогонит через babel-loader, используя пресет @babel/preset-env
        exclude: /(node_modules)/, //исключены файлы из node-modules
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          },
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      },
    ],
  },
};
