/*******************************************************************************
1. DEPENDENCIES
*******************************************************************************/
 
const gulp = require('gulp');                             // gulp core
    less = require('gulp-less'),                        // less compiler
    sass = require('gulp-sass'),
    uglify = require('gulp-uglify'),                    // uglifies the js
    rename = require("gulp-rename");                    // rename files
    concat = require('gulp-concat'),                    // concatinate js
    minifycss = require('gulp-clean-css'),              // minify the css files
    browserSync = require('browser-sync'),              // inject code to all devices
    autoprefixer = require('gulp-autoprefixer'),        // sets missing browserprefixes
    imagemin = require('gulp-imagemin'),                // optimize images
    spritesmith = require('gulp.spritesmith'),          // generate sprites
    stripDebug = require('gulp-strip-debug'),           // remove debug log
    cache = require('gulp-cache'),                      // cache gulp tasks
    newer = require('gulp-newer');                      // check files for changes
    var plumber = require('gulp-plumber');
    var notify = require("gulp-notify");
    var babel = require("gulp-babel");
    var postcss = require('gulp-postcss');
    var postcssFlexbugsFixes = require('postcss-flexbugs-fixes');
    var gcmq = require('gulp-group-css-media-queries');
    var combineMq = require('gulp-combine-mq');

    
/*******************************************************************************
2. FILE DESTINATIONS (RELATIVE TO ASSSETS FOLDER)
*******************************************************************************/
 
var target = {
    less_src : 'less/main.less',                        // all less files
    sass_src : 'sass/bootstrap.scss',
    css_dest : 'css',                                   // where to put minified css
    js_lint_src : [                                     // all js that should be linted
        'js/build/app.js',
        'js/build/custom/switch.js',
        'js/build/custom/scheme-loader.js'
    ],
    js_uglify_src : [                                   // all js files that should not be concatinated
        'js/jquery.colorbox.js'
    ],
    js_concat_src : [                                   // all js files that should be concatinated
        'js/_functions.js',
        'js/main.js'
    ],
    js_dest : 'js',                                     // where to put minified js
    img : 'img/**/*'                                    // src to images
};
var other = {                                           // other js files to be concatinated and minified
    carusel: [
        'js/_functions.js',
        'js/main.js'
    ],
    carusel2: [
        'js/_functions.js',
        'js/main.js'
    ]
}

var currentSprite = 'payment';

var plugins = [
    postcssFlexbugsFixes
  ];
 
/*******************************************************************************
3. LESS TASK
*******************************************************************************/
var beep = function() {
var exec = require('child_process').exec;
	exec('canberra-gtk-play --file=/usr/share/sounds/freedesktop/stereo/dialog-error.oga');
}


gulp.task('less', function() {
    gulp.src(target.less_src)                           // get the files
	.pipe(plumber({errorHandler: notify.onError({
		title: 'test',
		message: "<%= error.message %>"
		})}))
        .pipe(less())                                   // compile all less
		.on('error', beep)
        .pipe(autoprefixer({                             // complete css with correct vendor prefixes
        	// browsers: ['last 2 versions'],
        	browsers: [
	        'Chrome >= 35',
	        'Firefox >= 38',
	        'Edge >= 12',
	        'Explorer >= 10',
	        'iOS >= 8',
	        'Safari >= 8',
	        'Android 2.3',
	        'Android >= 4',
	        'Opera >= 12'
      		]
        }))
        // .pipe(minifycss({specialComments:0}))
        .pipe(gulp.dest(target.css_dest))               // where to put the file
        .pipe(browserSync.reload({stream:true, once: true}));
});


gulp.task('sass', function() {
    gulp.src(target.sass_src)                           // get the files
	.pipe(plumber({errorHandler: notify.onError({
		title: 'Sass',
		message: "<%= error.message %>"
		})}))
        .pipe(sass())                                   // compile all less
		.on('error', beep)
        .pipe(autoprefixer({
        	browsers: ['last 2 versions'],
        //     browsers: [
	       //  'Chrome >= 35',
	       //  'Firefox >= 38',
	       //  'Edge >= 12',
	       //  'Explorer >= 10',
	       //  'iOS >= 8',
	       //  'Safari >= 8',
	       //  'Android 2.3',
	       //  'Android >= 4',
	       //  'Opera >= 12'
      		// ],
            cascade: false
        }))
        // .pipe(postcss(plugins))
        .pipe(gcmq())
        .pipe(minifycss({specialComments:0}))
        .pipe(gulp.dest(target.css_dest))               // where to put the file
        .pipe(browserSync.reload({stream:true, once: true}));
});


gulp.task('cmq', function () {
  gulp.src('css/bootstrap.css')
    .pipe(gcmq())
    .pipe(minifycss({keepSpecialComments:0}))
    .pipe(gulp.dest('dist'));
});
 
 
/*******************************************************************************
4. JS TASKS
**********************main.css*********************************************************/

// minify all js files that should not be concatinated
gulp.task('js-uglify', function() {
    gulp.src(target.js_uglify_src)                      // get the files
        .pipe(stripDebug())                             // remove logging
        .pipe(uglify())                                 // uglify the files
        .pipe(rename(function(path){                    // give the files a min suffix
            path.basename += ".min";
        }))
        .pipe(gulp.dest(target.js_dest));               // where to put the files
});
 
// minify & concatinate main js files
gulp.task('js-concat', function() {
    gulp.src(target.js_concat_src)                      // get the files
        .pipe(plumber({errorHandler: notify.onError({
            title: 'JS error',
            message: "<%= error.message %>"
        })}))
        // .pipe(stripDebug())                             // remove logging
        // .pipe(uglify())                                 // uglify the files
        .pipe(newer('js/common.js'))                    // only changed files
        .pipe(concat('common.js'))                      // concatinate to one file
        .pipe(babel({
            presets: ['es2015']
        }))
        .on('error', beep)
        .pipe(gulp.dest(target.js_dest))                // where to put the files
        .pipe(browserSync.reload({stream:true, once: true}));
});

// minify & concatinate all other js
gulp.task('js-other', function() {
    gulp.src(other.carusel)                             // get the files
        .pipe(stripDebug())                             // remove logging
        .pipe(uglify())                                 // uglify the files
        .pipe(newer('js/carusel.js'))                   // only changed files
        .pipe(concat('carusel.js'))                     // concatinate to one file        
        .pipe(gulp.dest(target.js_dest));               // where to put the files
});

/*******************************************************************************
5. BROWSER SYNC
*******************************************************************************/

gulp.task('browser-sync', function() {
    browserSync.init(null, {        // files to inject
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('browser-sync-proxy', function() {
    browserSync.init(null, {        // files to inject
        proxy: "test-project.loc"
    });
});

// Reload all Browsers
gulp.task('bs-reload', function () {
    browserSync.reload();
});

/*******************************************************************************
6. Images
*******************************************************************************/

gulp.task('image-min', function() {
    gulp.src(target.img)                                // get the files
        .pipe(cache(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true })))
        .pipe(gulp.dest('img/'))                       // where to put the files
	.pipe(notify({ message: 'Images task complete',onLast: true }));
});

/*******************************************************************************
7. Sprites
*******************************************************************************/

gulp.task('sprite', function () {
  var spriteData = gulp.src('img/sprites/'+currentSprite+'/*.png').pipe(spritesmith({
    imgName: currentSprite+'.png',
    cssName: currentSprite+'.less',
    engine: 'pngsmith',
    algorithm: 'binary-tree',
    cssTemplate: 'stylus.template.mustache',
    // cssVarMap: function(sprite) {
    //     sprite.name = 's-' + sprite.name
    // }
    padding: 1
  }));
  spriteData.img.pipe(gulp.dest('img/'));
  spriteData.css.pipe(gulp.dest('less/sprites/'));
});


/*******************************************************************************
1. GULP TASKS
*******************************************************************************/

gulp.task('watch', function () {
    gulp.watch('less/**/*.less',['less']);
    gulp.watch('sass/**/*.scss',['sass']);
    gulp.watch(target.js_concat_src, ['js-concat']);
    gulp.watch(["*.html",'*.php'], ['bs-reload']);
});

gulp.task('default', [/*'js-uglify', */'js-concat'/*, 'js-other'*/, 'less']);
gulp.task('dev', ['js-concat', 'less', 'browser-sync', 'watch']);
gulp.task('build', ['js-concat', 'less', 'browser-sync-proxy', 'watch']);
gulp.task('images', ['image-min']);
gulp.task('sprites', ['sprite']);
gulp.task('wp', ['image-resize']);
