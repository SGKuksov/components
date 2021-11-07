const { series, parallel } = require("gulp");
const { clean } = require("./tasks/clean");
const { scss } = require("./tasks/scss");
const { twig } = require("./tasks/twig");
const { javascript } = require("./tasks/javascript");
const { serve } = require("./tasks/serve");

// const { todoScripts, todoStyles, todoTwig } = require('./tasks/todo');
// const { svgsprite } = require("./tasks/svgsprite");
// const { svgspritehtml } = require("./tasks/svgspritehtml");
// const { copyStatic } = require("./tasks/static");

const isDev = process.env.NODE_ENV === "development";

if (isDev) {
  exports.default = series(
    clean,
    // TODO[@sgkuksov] Fix gulp-todo
    // parallel(todoScripts, todoStyles, todoTwig),
    parallel(
      // svgsprite,
      javascript,
      scss
    ),
    twig,
    // copyStatic,
    // svgspritehtml,
    serve
  );
} else {
  exports.default = series(
    clean,
    parallel(
      // svgsprite,
      javascript,
      scss
    ),
    // twig
    // copyStatic,
    // svgspritehtml
  );
}
