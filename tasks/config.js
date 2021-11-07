const notify = require('gulp-notify');
const { resolve } = require('path');

const dist = resolve(__dirname, '../dist');

module.exports = {
  output: dist,
  notify: {
    errorHandler: (err) => {
      notify.onError({
        title: 'Error',
        message: err.message,
      })(err);
    },
  },
  server: {
    watch: `dist`,
  },
  scripts: {
    app: resolve(__dirname, '../src/app.ts'),
    modal: resolve(__dirname, '../src/modal/Modal.ts'),
    watch: [`src/**/*.{js,ts}`],
    output: resolve(__dirname, '../dist'),
    todo: {
      input: [`src/**/*.{js,ts}`],
      output: `todos`,
      name: `js.todo.md`,
    },
  },
  styles: {
    input: `src/**/index.scss`,
    watch: [`src/**/*.scss`],
    output: `dist/`,
    todo: {
      input: [`src/**/*.scss`],
      output: `todos`,
      name: `css.todo.md`,
    },
  },
  templates: {
    input: `src/**/index.twig`,
    watch: [`src/**/*.twig`],
    temp: `temp`,
    output: `dist/`,
    todo: {
      input: [`src/**/*.twig`],
      output: `todos`,
      name: `html.todo.md`,
    },
  },

  // TODO
  // svg: {
  //   input: `src/components/**/*.svg`,
  //   output: `dist/icons/`,
  // },
  // svgsprite: {
  //   input: `src/img/sprite/svg/*.svg`,
  //   output: `dist/img/sprite/`,
  //   viewhtml: `dist/`,
  //   watch: [`src/img/sprite/svg/*.svg`],
  // },

  NODE_ENV: process.env.NODE_ENV || 'development', // or production
  isProduction: this.NODE_ENV === 'production',
};
