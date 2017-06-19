import gulp from 'gulp'
import del from 'del'
import browserSync from 'browser-sync'
import babel from 'gulp-babel'
import concat from 'gulp-concat'
import uglify from 'gulp-uglify'
import sass from 'gulp-sass'
import sourcemaps from 'gulp-sourcemaps'
import autoprefixer from 'gulp-autoprefixer'
import cleanCSS from 'gulp-clean-css'
import nunjucks from 'gulp-nunjucks-render'
import svgSprite from 'gulp-svg-sprite'
import imagemin from 'gulp-imagemin'
import environments from 'gulp-environments'

import { paths } from './config'

const development = environments.development;
const production = environments.production;

/**
 * SASS compiling with sourcemaps and autoprefixer
 */
export const styles = () => {
  return gulp.src(paths.styles.src)
    .pipe(sass())
    .pipe(sourcemaps.init())
    .pipe(autoprefixer())
    .pipe(sourcemaps.write())
    .pipe(cleanCSS())
    .pipe(gulp.dest(paths.styles.dest))
    .pipe(browserSync.stream())
}

/**
 * Dead simple babel transpiler and uglification
 */
export const scripts = () => {
  return gulp.src(paths.scripts.src, { sourcemaps: true })
    .pipe(babel())
    .pipe(production(uglify()))
    .pipe(concat('main.min.js'))
    .pipe(gulp.dest(paths.scripts.dest))
}

/**
 * Injects each page into main layout template. Use partials to specify global objects
 */
export const views = () => {
  return gulp.src(paths.views.src)
    .pipe(nunjucks({
      path: ['templates/', 'public/'] // Public is required for SVG icons referrence
    }))
    .pipe(gulp.dest('./'))
}

/**
 * SVG sprite minification and optimization
 */
export const svgIcons = () => {
  del([ paths.icons.dest ])
  return gulp.src(paths.icons.src)
    .pipe(svgSprite({
      mode: {
        symbol: { 
          render: {
            css: false,
            scss: false
          },
          dest: paths.icons.dest,
          prefix: '.svg--%s',
          sprite: 'sprite.svg',
          example: true
        }
      }
    }))
    .pipe(gulp.dest('.'))
}

/**
 * Image minification with default settings. For more options, visit https://github.com/sindresorhus/gulp-imagemin
 */
export const imageMinification = () => {
  del([ paths.images.dest ])
  return gulp.src(paths.images.src)
		.pipe(imagemin())
		.pipe(gulp.dest(paths.images.dest))
}