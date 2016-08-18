(function () {
  "use strict";
  
	var gulp = require('gulp');//initialization of the plugin
	var autoprefixer = require('gulp-autoprefixer');
	var concat = require('gulp-concat');
	var argv = require('yargs').argv;
	var gulpif = require('gulp-if');
	var cssmin = require('gulp-cssmin');
	var htmlmin = require('gulp-htmlmin');
	var livereload = require('gulp-livereload');
	var uglify = require('gulp-uglify');
	var combineMq = require('gulp-combine-mq');
	var uncss = require('gulp-uncss');
	const imagemin = require('gulp-imagemin');
	const pngquant = require('imagemin-pngquant');
	var csso = require('gulp-csso');


	var paths = {
		src:{
			html: './*.html',
			css:['./stylesheets/vendors/normalize.css','./stylesheets/base.css'],
			images: './images/*',
			fonts: './stylesheets/fonts/*',
			js:'./src/js/base.js'
		},
		build:{
			root:'./_build',
			css:'./_build/css',
			images: './_build/images',
			fonts: './_build/css/fonts',
			js: './_build/js',
		}
	};

	function cssTask(){
		gulp.src(paths.src.css)
			.pipe(uncss({
				html: ['index.html']
			}))
			.pipe(concat('base.min.css'))
			.pipe(combineMq({
				beautify: false
			}))
			.pipe(gulpif((argv.prod), cssmin()))
			.pipe(csso())
			.pipe(autoprefixer({
			browsers: ['last 2 versions','ie 10']
			}))
			
			.pipe(gulp.dest(paths.build.css))
			.pipe(livereload())
	}

	function htmlTask(){
		gulp.src(paths.src.html)
			.pipe(gulpif((argv.prod), htmlmin({
				collapseWhitespace: true
			})))
			.pipe(htmlmin())
			.pipe(gulp.dest(paths.build.root))
			.pipe(livereload())
	}

	function defaultTask(){
		livereload({
			start:true
		});

		gulp.watch(paths.src.html,['html']);
		gulp.watch(paths.src.css,['css']);
		gulp.watch(paths.src.fonts,['fonts']);
		gulp.watch(paths.src.images,['images']);
		gulp.watch(paths.src.js,['js']);


	}
	function imagesTask(){
		gulp.src(paths.src.images)
			.pipe(imagemin({
				progressive: true,
				svgoPlugins: [{removeViewBox: false}],
				use: [pngquant()]
			}))
			.pipe(gulp.dest(paths.build.images));
	}
	function fontsTask(){
		gulp.src(paths.src.fonts)
			.pipe(gulp.dest(paths.build.fonts))
			.pipe(livereload());
	}
	function jsTask(){
		gulp.src(paths.src.js)
			.pipe(gulp.dest(paths.build.js))
			.pipe(livereload());
	}

	gulp.task('default',['html','css','images','js','fonts'], defaultTask);
	gulp.task('html',htmlTask);
	gulp.task('css',cssTask);
	gulp.task('images',imagesTask);
	gulp.task('fonts',fontsTask);
	gulp.task('js',jsTask);

}());