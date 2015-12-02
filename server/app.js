/** Module dependencies. */
import express    from 'express';
import bodyParser from 'body-parser';
import path       from 'path';
import logger     from 'morgan';
import routes     from './routes';

const port = process.env.PORT || 3000;

// configure the express server
const app = express();

// if we're developing, use webpack middleware for module hot reloading
if (process.env.NODE_ENV !== 'production') {
  console.log('==> 🌎 using webpack');

  // load and configure webpack
  const webpack = require('webpack');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const config = require('../webpack/dev.config');

  // setup middleware
  const compiler = webpack(config);
  app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }));
  app.use(webpackHotMiddleware(compiler));
}

app.set('port', port);
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.resolve(__dirname, '../public')));
app.use('/', routes);

/** Start her up, boys */
app.listen(app.get('port'), () => {
  console.log('Express server listening on port ' + app.get('port'));
});
