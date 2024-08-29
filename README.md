# micro-frontends-examples

From the article ["Exploring micro-frontends"](https://medium.com/@benjamin.d.johnson/exploring-micro-frontends-87a120b3f71c)

Wraps several "micro-frontends" in an app and renders them via [Web Components](https://developer.mozilla.org/en-US/docs/Web/API/Web_components).

It also shows how events can be communicated from one app to another via dispatches & listeners.

It's set to install / run via [npm workspaces](https://docs.npmjs.com/cli/v8/using-npm/workspaces).

## Try it out

1. From the project root

      ```shell
      npm i
      npm run dev
      ```

2. Navigate your browser to http://localhost:{PORT}, with `{PORT}` equal to the port defined in [`/app/.env`](/app/.env)
