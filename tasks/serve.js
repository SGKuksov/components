const { series, watch } = require('gulp');
const browserSync = require('browser-sync').create();
const { scss } = require('./scss');
const { twig } = require('./twig');
const { javascript } = require('./javascript');
// const { svgsprite } = require('./svgsprite');
// const { svgspritehtml } = require('./svgspritehtml');
const config = require('./config');

const serve = () => {
  browserSync.init({
    server: config.output,
    startPath: 'index.html',
    open: false,
    port: 8081,
  });

  watch(config.templates.watch).on('add', series(twig, browserSync.reload));
  watch(config.templates.watch).on('change', series(twig, browserSync.reload));
  watch(config.templates.watch).on('unlink', series(twig, browserSync.reload));

  watch(config.styles.watch).on('add', series(scss, browserSync.reload));
  watch(config.styles.watch).on('change', series(scss, browserSync.reload));
  watch(config.styles.watch).on('unlink', series(scss, browserSync.reload));

  watch(config.scripts.watch).on('add', series(javascript, browserSync.reload));
  watch(config.scripts.watch).on('change', series(javascript, browserSync.reload));

  // TODO Fix this
  // watch(config.svgsprite.input).on('add', series(svgsprite, svgspritehtml, browserSync.reload));
  // watch(config.svgsprite.input).on('change', series(svgsprite, svgspritehtml, browserSync.reload));
};

exports.serve = serve;
