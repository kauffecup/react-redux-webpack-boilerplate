# React / Redux / Webpack / Hot-Reloading Boilerplate

## Understanding, Configuring, and Building

There are a few pre-configured npm scripts:

  - `npm run build` uses webpack to build `bundle.js` and places it under the
    `public` directory. This bundle contains both the js and css for the app.
  - `npm run start` starts in "production mode" (no hot reloading). This simply
    spins up the server under `server/app.js`, which right now only serves
    what's in the public directory. There's an example route under
    `server/routes.js` to help ya get started.
  - `npm run dev` is where the magic happens. This introduces the webpack dev
    and hot middleware (the correct environment variables are set via `npm
    better run`), which rebuilds the bundle on css or js changes and injects it
    into the browser using magic. No reloading necessary!

Thus, to run in production:

```sh
npm install
npm run build
npm run start
```

To run in dev mode:

```sh
npm install
npm run dev
```

To handle the discrepancies between running the client code in "dev mode" or
"production mode", there are two helpers provided - `containers/Root.js` and
`store/configureStore.js`. These modules conditionally load the `.dev` or
`.prod` extension of their respective file depending on the environment
variables when webpack is running. The only difference in the respective
versions are loading the necessary tooling for the dev/debugging redux
awesomeness. In dev mode, the `DevTools` react component loads and renders which
provides a visual history of all the actions and allows you to go forwards and
backwards in time. It also logs all the state changes.

## Server Code Structure

All server code goes under the `server/src` directory.

The main `app` module currently only configures the Express server and sets up
the routes.

I prefer keeping the routes code separate from the rest of the server code. This
allows for easier maintainability as you add different endpoints to your
application. Right now the only route renders the home page.

## Client Code Structure

All client code goes under the `client` directory.

This boilerplate is set up using the [Redux](http://redux.js.org/) architecture.
It's pretty magical.

The main React entry point is `client/index`. This will load in the other app
components and manage state throughout the application. It also loads the main
reducer from `reducers/myApp` and configures the store.

`actions/actions`, `constants/Constants`, and `reducers/myApp` all show how these
classes are intended to be used.
