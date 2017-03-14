const path = require('path');
const autoprefixer = require('autoprefixer');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');

const precss = require('precss');
const postCssNested = require('postcss-nested');
const postCssApply = require('postcss-apply');
const postCssVariables = require('postcss-css-variables');
const postCssImport = require('postcss-import');
const postCssMath = require('postcss-math');
const postCssExtend = require('postcss-extend');

const DEBUG = process.env.NODE_ENV !== 'production';

exports.setupJs = () => ({
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel-loader'],
        exclude: /node_modules/,
      },
    ],
    node: {
      net: 'empty',
      tls: 'empty',
      dns: 'empty',
    },
    resolve: {
      packageAlias: 'browser',
    },
  },
});

const options = {
  localIdentName: DEBUG ? '[local]__[path][name]__[hash:base64:5]' : '[hash:base64]',
};

exports.setupCss = () => ({
  module: {
    loaders: [
      {
        test: /\.scss/,
        loaders: [
          'nebo15-isomorphic-style-loader',
          `css?localIdentName=${options.localIdentName}&modules&importLoaders=1&sourceMap`,
          'postcss',
        ],
      },
      {
        test: /\.css/,
        loaders: [
          'nebo15-isomorphic-style-loader',
          'css',
          'postcss',
        ],
      },
    ],
  },
  postcss(webpackObj) {
    return [
      postCssImport({
        addDependencyTo: webpackObj,
        path: [
          path.resolve(`${__dirname}/../assets/styles`),
        ],
      }),
      precss,
      autoprefixer,
      postCssNested,
      postCssVariables,
      postCssMath,
      postCssApply,
      postCssExtend,
    ];
  },
});

exports.setupFontGen = () => ({
  module: {
    loaders: [
      {
        test: /\.font\.(js|json)$/,
        loaders: [
          'nebo15-isomorphic-style-loader',
          `css?localIdentName=${options.localIdentName}&modules&importLoaders=1&sourceMap`,
          'fontgen?embed',
        ],
      },
    ],
  },
});

exports.setupFont = () => ({
  module: {
    loaders: [
      {
        test: /\.(woff|woff2|eot|ttf)(\?.*$|$)/,
        loader: 'file',
      },
    ],
  },
});

exports.setupImages = () => ({
  module: {
    loaders: [
      {
        test: /.*\.(gif|png|svg|jpe?g)$/i,
        loaders: [
          'file?name=[hash].[ext]',
        ],
      },
    ],
  },
});

exports.setupJson = () => ({
  module: {
    loaders: [
      {
        test: /\.json/i,
        loader: 'json-loader',
      },
    ],
  },
});

exports.setupI18n = () => ({
  module: {
    loaders: [
      {
        test: /\.po$/,
        loaders: [
          'i18next-po-loader',
        ],
      },
    ],
  },
});

exports.setupProduction = () => ({
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.DedupePlugin(),
  ],
});

exports.setupHotReload = (config, port = 3030) => {
  const resConfig = webpackMerge({
    module: {
      loaders: [
        {
          test: /\.js$/,
          loaders: ['react-hot-loader/webpack'],
          exclude: /node_modules/,
        },
      ],
    },
  }, config, {
    output: {
      publicPath: `http://0.0.0.0:${port}${config.output.publicPath}`,
    },
    plugins: [
      new webpack.optimize.OccurenceOrderPlugin(),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin(),
    ],
  });

  Object.keys(config.entry).forEach((key) => {
    resConfig.entry[key] = [
      'react-hot-loader/patch',
      `webpack-dev-server/client?http://0.0.0.0:${port}`, // WebpackDevServer host and port
      'webpack/hot/only-dev-server',
    ].concat(config.entry[key]);
  });
  return resConfig;
};
