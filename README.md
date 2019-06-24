# NextJS Sandbox

Just trying to see what NextJS is capable of.

## NextJS has

- Out the box SSR
- Fast dev environment

## NextJS Advantages

- Webpack (with HMR) and Babel always running in the background.
- All React components are SSR by default
- All JS files in `./pages` are routes by default that will get rendered and processed.
- Server is using Node and you are free to use node tools (i.e. Express)
- App has automatic code-splitting so unecessary code isn't loaded.
- Fetching data is simple with `getInitialProps`.
- Everything is relatively configureable in `next.config.js`, `_app.js` and `_document.js`

## NextJS Disadvantages

- Magic Babel and Webpack may not be a good thing when it comes to understanding how things work.
- Abstracted router is another learning step for developers used to the control provided by React Router
- Configurations have limits and when you find yourself overriding too many NextJS configuration then there may not be a point in binding yourself to a framework - this could lead to issues in the future.
- Complex applications often require low level customizations which may not be easy to accomplish inside a framework.
- If we have webpack/babel experts on the team, NextJS seems more of a hinderance than a benefit - i.e. https://github.com/catamphetamine/universal-webpack
