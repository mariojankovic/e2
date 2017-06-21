import gulp from 'gulp'
import browserSync from 'browser-sync'
import del from 'del'

import { paths } from './tasks/config'
import environments from 'gulp-environments'

const development = environments.development;
const production = environments.production;

/**
 * Import theme specific tasks
 */
import { styles } from './tasks/template'
import { scripts } from './tasks/template'
import { views } from './tasks/template'
import { imageMinification } from './tasks/template'
import { svgIcons } from './tasks/template'

/**
 *  Start the engine 🚙
 */
const server = () => {
  browserSync.init({
    server: {
      baseDir: "./"
    },
    browser: "google chrome"
  })
}

const reload = (done) => {
  browserSync.reload();
  done();
}

const watch = () => {
  gulp.watch(paths.scripts.src, gulp.series(scripts, reload))
  gulp.watch(paths.styles.src, styles)
  gulp.watch(paths.views.src, gulp.series(views, reload))
}

/**
 * Wipe assets (sounds way too dirty)
 */
const clean = () => del([ 'public' ])

/**
 * Build icons and images
 */
export const images = gulp.series(imageMinification)
export const icons = gulp.series(svgIcons)

/**
 * Custom environments
 */
const dev = gulp.series(clean, gulp.parallel(server, icons, images, scripts, styles, views, watch))
const prod = gulp.series(clean, gulp.series(clean, icons, images, scripts, styles, views))

var build = production() ? prod : dev

export default build