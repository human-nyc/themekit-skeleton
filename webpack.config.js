const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

let config = {
  entry: {
    "404": "./scripts/templates/404.js",
    "article": "./scripts/templates/article.js",
    "blog": "./scripts/templates/blog.js",
    "cart": "./scripts/templates/cart.js",
    "collection": "./scripts/templates/collection.js",
    "customers.account": "./scripts/templates/customers/account.js",
    "customers.activate_account": "./scripts/templates/customers/activate_account.js",
    "customers.addresses": "./scripts/templates/customers/addresses.js",
    "customers.login": "./scripts/templates/customers/login.js",
    "customers.order": "./scripts/templates/customers/order.js",
    "customers.register": "./scripts/templates/customers/register.js",
    "customers.reset_password": "./scripts/templates/customers/reset_password.js",
    "order": "./scripts/templates/order.js",
    "gift_card": "./scripts/templates/gift_card.js",
    "index": "./scripts/templates/index.js",
    "list-collections": "./scripts/templates/list-collections.js",
    "page": "./scripts/templates/page.js",
    "password": "./scripts/templates/password.js",
    "product": "./scripts/templates/product.js",
    "search": "./scripts/templates/search.js",
    "layout.theme": "./scripts/layout/theme.js"
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: ['vue-loader']
      },
      {
        test: /\.(js|jsx)$/,
        exclude: function (file) {
          return (
            /node_modules/.test(file) &&
            !/\.vue\.js/.test(file)
          )
        },
        use: ['babel-loader']
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ],
  resolve: {
    alias: {
      vue$: 'vue/dist/vue.esm.js',
    },
    extensions: ['*', '.js', '.json', '.jsx', '.vue']
  },
  output: {
    filename: '[name].js',
    path: `${__dirname}/theme/assets`
  },
};

module.exports = (env, argv) => {
  if (argv.mode === 'development') return { ...config, mode: 'development' };

  if (argv.mode === 'production') return { ...config, mode: 'production' };
};
