# React - Node - Browserify Boilerplate

## Understanding, Configuring, and Building

There are a few pre-configured gulp tasks:

  - `gulp browserify` will create a minified bundle and place it in
    `public/bundle.js`. Browserify is already configured with babelify for use
    with jsx and es6.
  - `gulp less` will create an auto-prefixed, minified, css file and place it in
    `public/style.css`
  - `gulp build` runs `browserify` and `less`
  - 'gulp build-server' transpiles the server code from `server/src` to
    `server/lib`
  - `gulp node-dev` runs `build-server` and kicks off a server. It also starts a
    watch on `server/src` that transpiles every time there's a change. When this
    happens it will restart the server (using the magic of nodeDev).
  - `gulp dev` creates an unminified bundle with source maps for easy debugging
    and use with the Chrome dev tools. It also kicks off a watchify which will
    rebuild a subset of the bundle when a file changes, and kicks off a watch
    for changes in the main style.less file. It double also kicks off
    `node-dev`. It triple also kicks off `browserSync`.

There are three pre-configured npm scripts:

  - `npm run start` kicks off a server at localhost:3000 and serves
    `public/index.html` (which loads in the bundle.js and style.css created
    from either `gulp build` or `gulp dev`)
  - `npm run build` kicks off the gulp build. This is necessary if you don't
    want to globally install gulp on a machine (useful when creating a build
    pipeline)
  - `npm run dev` starts up the server (at localhost:3000), kicks off a watchify
    (for the unminified bundle with sourcemaps), and watches for changes in
    style.less and rebuilds the css upon changes. This, as the name suggests, is
    perfect for devlopment.

## Server Code Structure

All server code goes under the `server` directory.

The main `app` module currently only configures the Express server and sets up
the routes.

I prefer keeping the routes code separate from the rest of the server code. This
allows for easier maintainability as you add different endpoints to your
application. Right now the only route renders the home page.

## Client Code Structure

All client code goes under the `client` directory.

This boilerplate is set up using the [Flux](https://facebook.github.io/flux/)
architecture.

The main React entry point is `client/main`. This will load in the other app
components and manage state throughout the application.

A `_Store` base class is provided that handles adding change listeners, removing
change listeners, and emitting a change event.

`Actions`, `constants/Constants`, and `stores/ExampleStore` all show how these
classes are intented to be used.
