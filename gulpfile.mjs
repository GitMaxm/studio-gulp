import gulp from 'gulp';
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import autoprefixer from 'gulp-autoprefixer';
import sourcemaps from 'gulp-sourcemaps';
import terser from 'gulp-terser';
import rename from 'gulp-rename';
import browserSync from 'browser-sync';

const sass = gulpSass(dartSass);
const server = browserSync.create();

const paths = {
  styles: {
    src: 'scss/main.scss',
    dest: 'css',
  },
  scripts: {
    src: 'js/index.js',
    dest: 'js',
  },
};

export function styles() {
  return gulp
    .src(paths.styles.src)
    .pipe(sourcemaps.init())
    .pipe(
      sass({ outputStyle: 'expanded' }).on('error', sass.logError),
    )
    .pipe(autoprefixer())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(paths.styles.dest))
    .pipe(server.stream());
}

export function scripts() {
  return gulp
    .src(paths.scripts.src)
    .pipe(terser())
    .pipe(
      rename({
        basename: 'index',
        suffix: '.bundle',
      }),
    )
    .pipe(gulp.dest(paths.scripts.dest))
    .pipe(server.stream());
}

export const build = gulp.parallel(styles, scripts);

export function serve() {
  server.init({
    server: {
      baseDir: './',
    },
  });

  gulp.watch('scss/**/*.scss', styles);
  gulp.watch('js/index.js', scripts);
  gulp.watch('index.html').on('change', server.reload);
}

export default gulp.series(build, serve);
