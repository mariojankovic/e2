export const paths = {
  styles: {
    src: 'assets/sass/**/*.scss',
    dest: 'public/css/'
  },
  scripts: {
    src: 'assets/js/**/*.js',
    dest: 'public/js/'
  },
  views: {
    src: 'pages/**/*.nunjucks',
    path: [
      'pages/**/*.nunjucks',
      'templates/**/*.nunjucks'
    ],
    dest: '.'
  },
  images: {
    src: 'assets/images/**/*',
    dest: 'public/images'
  },
  icons: {
    src: 'assets/icons/**/*',
    dest: 'public/icons'
  }
}