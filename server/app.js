/** Module dependencies. */
const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const routes = require('./routes');
const paths = require('../config/paths');

const port = process.env.PORT || 3000;

// configure the express server
const app = express();

// if we're developing, use webpack middleware for module hot reloading
if (process.env.NODE_ENV === 'development') {
  console.log('==> 🌎 using webpack');

  // load and configure webpack
  const webpack = require('webpack');
  const chalk = require('chalk');
  const clearConsole = require('react-dev-utils/clearConsole');
  const formatWebpackMessages = require('react-dev-utils/formatWebpackMessages');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const config = require('../config/webpack.config.dev');

  // setup middleware
  const compiler = webpack(config);
  app.use(webpackDevMiddleware(compiler, {
    clientLogLevel: 'none',
    contentBase: paths.appPublic,
    hot: true,
    quiet: true,
    publicPath: config.output.publicPath,
    watchOptions: {
      ignored: /node_modules/,
    },
  }));
  app.use(webpackHotMiddleware(compiler));

  // "invalid" event fires when you have changed a file
  compiler.plugin('invalid', () => {
    clearConsole();
    console.log('Compiling...');
  });

  // "done" event fires when Webpack has finished recompiling the bundle
  compiler.plugin('done', (stats) => {
    clearConsole();

    // We have switched off the default Webpack output in WebpackDevServer
    // options so we are going to "massage" the warnings and errors and present
    // them in a readable focused way.
    const messages = formatWebpackMessages(stats.toJson({}, true));
    if (!messages.errors.length && !messages.warnings.length) {
      console.log(`${chalk.green('Compiled successfully!')}\n`);
    }

    // If errors exist, only show errors.
    if (messages.errors.length) {
      console.log(chalk.red('Failed to compile.\n'));
      messages.errors.forEach((message) => {
        console.log(`${message}\n`);
      });
      return;
    }

    // Show warnings if no errors were found.
    if (messages.warnings.length) {
      console.log(chalk.yellow('Compiled with warnings.\n'));
      messages.warnings.forEach((message) => {
        console.log(`${message}\n`);
      });
    }
  });
}

app.set('port', port);
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(paths.appBuild));
app.use('/', routes);

/** Start her up, boys */
app.listen(app.get('port'), () => {
  console.log(`Express server listening on port ${app.get('port')}`);
});
