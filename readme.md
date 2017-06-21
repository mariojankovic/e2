![logo](https://github.com/mariojankovic/e2/blob/master/assets/images/e2.png?raw=true)

# GULP Sass/Nunjacks setup
Static site workflow using GULP 4 with Sass, Imagemin, SVG sprites and Nunjucks.

## The project
- `public` contains all the compiled `css` and `js` files.
- `pages` and `templates` contain all the nunjucks layout files and partials. Any new view should be added to `pages`.

## Installation
1. Run `npm install`
2. Run `gulp`
3. ???
4. PROFIT!

## Usage
- Production ready files can be built using `gulp --env production`
- Building image files or SVG sprites can be done using either `gulp images` or `gulp icons`

## TODO:
- ☑️ Add Yarn
- ️️☑️ Document all mixins
- ☑️ Set-up basic grid