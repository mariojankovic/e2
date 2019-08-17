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
    dest: '.'
  },
  fonts: {
    src: 'assets/fonts/**/*.ttf',
    dest: 'public/fonts'
  },
  images: {
    src: 'assets/images/**/*',
    dest: 'public/images'
  },
  icons: {
    src: 'assets/icons/**/*',
    dest: 'public/icons'
  },
  raw: {
    woff: {
      src: 'assets/fonts/**/*.{woff,woff2}',
      dest: 'public/fonts'
    }
  }
}
