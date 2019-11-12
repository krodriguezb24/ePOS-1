import dotenv from 'dotenv';
import getManifest from '../getManifest';

dotenv.config();
const ENV = process.env.NODE_ENV;
const isProd = ENV === 'production';
const files = getManifest();

const render = (html, preloadedState) => {
  return (`
    <!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>ePOS</title>
        <link rel="stylesheet" href="${isProd ? files['main.css'] : './assets/app.css'}" type="text/css"></link>
        <script src="https://kit.fontawesome.com/473d269aa9.js"></script>
    </head>
    <body>
        <div id="app">
            ${html}
        </div>
        <script>
          // WARNING: See the following for security issues around embedding JSON in HTML:
          // http://redux.js.org/recipes/ServerRendering.html#security-considerations
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(
      /</g,
      '\\u003c',
    )}
        </script>
        <script src="${isProd ? files['main.js'] : './assets/app.js'}" type="text/javascript"></script>
        <script src="${isProd ? files['vendors.js'] : './assets/vendor.js'}" type="text/javascript"></script>
    </body>
    </html>
    `);
};

export default render;
