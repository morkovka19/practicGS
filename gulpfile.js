const browserSync = require('browser-sync');
const gulp = require('gulp'),
    gutil = require('gulp-util')
    del = require('del'),
    sourcemaps = require('gulp-sourcemaps'),
    autoprefixer = require('gulp-autoprefixer'),
    sass = require('gulp-sass')(require('sass'));

const path = {
    build: {
        html: 'build/',
        css: 'build/css/',
        js: 'build/js/',
        img: 'build/img/',
        fonts: 'build/fonts/'
    },
    src: {
        html: 'src/*.*',
        css: 'src/styles/*.scss',
        js: 'src/js/index.js',
        img: 'src/img/',
        fonts: 'src/fonts/'
    },
    clean: 'build',
};

const clean = () => del(path.clean);

const buildHtml = () =>
    gulp
        .src(path.src.html)
        .on('error', function (e) {
        gutil.log(e.plugin, gutil.colors.red(e.message));
        })
        .pipe(gulp.dest(path.build.html));

const buildCSS = () =>
    gulp
        .src(path.src.css)
        .pipe(sourcemaps.init())
        .pipe(
            sass({
                errLogToConsole: true,
            }).on('error', sass.logError)
        )
        .pipe(
            autoprefixer({
                cascade: false,
                remove: true,
            })
        )
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(path.build.css));



const buildJs = () =>
    gulp
        .src(path.src.js)
        .on('error', function (e) {
            gutil.log(e.plugin, gutil.colors.red(e.message));
        })
        .pipe(gulp.dest(path.build.js));


const buildImg = () => gulp.src(path.src.img).pipe(gulp.dest(path.build.img));

const buildFonts = () =>
        gulp.src(path.src.fonts).pipe(gulp.dest(path.build.fonts));


const buildFunction = () =>
    gulp.series(clean, buildHtml, buildCSS, buildJs, buildImg, buildFonts);






const serverFunction = () =>
    browserSync({
        server: {
            baseDir: ['build', 'src'],
        },
        tunnel: false,
        host: 'localhost',
        port: 3000,
    });


const watchFunction = () => {
    gulp.watch([path.src.html], gulp.series(buildHtml));
    gulp.watch([path.src.css], gulp.series(buildCSS));
    gulp.watch([path.src.js], gulp.series(buildJs));
    gulp.watch([path.src.img], gulp.series(buildImg));
};

exports.dev = gulp.parallel(buildFunction, watchFunction, serverFunction);
exports.build = buildFunction();
