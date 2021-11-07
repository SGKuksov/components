const { src, dest } = require('gulp');
const plumber = require('gulp-plumber');
const prettyHtml = require('gulp-pretty-html');
const twing = require('gulp-twing');
const gulpif = require('gulp-if');
const { reload } = require('browser-sync').create();
const path = require('path');
const critical = require('critical').stream;
const { TwingEnvironment, TwingLoaderRelativeFilesystem } = require('twing');
const criticalConfig = require('./critical.config');
const config = require('./config');

const env = new TwingEnvironment(new TwingLoaderRelativeFilesystem());
const isDev = process.env.NODE_ENV === 'development';

const compileTwig = () => {
  const prettyHtmlConfig = {
    indent_size: 4,
    indent_char: ' ',
    unformatted: ['code', 'em', 'strong', 'span', 'i', 'b', 'br'],
    content_unformatted: [],
  };

  return src(config.templates.input)
    .pipe(plumber(config.notify))
    .pipe(twing(env, {}))
    .pipe(gulpif(isDev, prettyHtml(prettyHtmlConfig)))
    // TODO Remove critical
    // .pipe(
    //   gulpif(
    //     !isDev,
    //     critical(
    //       criticalConfig({
    //         css: [path.join(config.styles.output.path, config.styles.output.name)],
    //       })
    //     )
    //   )
    // )
    .pipe(dest(config.templates.output))
    .pipe(reload({ stream: true }));
};

exports.twig = compileTwig;
