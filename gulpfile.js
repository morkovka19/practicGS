const gulp = require('gulp'),
    gutil = require('gulp-util'),
    del = require('del'),
    sourcemaps = require('gulp-sourcemaps'),
    autoprefixer = require('gulp-autoprefixer'),
    sass = require('gulp-sass')(require('sass')),
    sync = require('browser-sync')


const path = {
    build: {
        html: 'build/',
        css: 'build/css/',
        img: 'build/img/',
        fonts: 'build/fonts/',
        js: 'build/.js/',
    },
    src: {
        html: 'src/*.*',
        css: 'src/styles/*.scss',
        img: 'src/img/*.*',
        fonts: 'src/fonts/*.*',
        js: 'src/js/*.js'
    },
    watch: {
        html: 'src/*.*',
        css: 'src/styles/*.scss',
        img: 'src/img/*.*',
        fonts: 'src/fonts/*.*',
        js: 'src/js/*.js'
    },
    clean: 'build',
};
const buildHtml = () =>
    gulp
        .src(path.src.html)
        .on('error', function (e) {
            gutil.log(e.plugin, gutil.colors.red(e.message));
        })
        .pipe(gulp.dest(path.build.html));

const clean = () => del(path.clean);


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
    sync({
        server: {
            baseDir: ['build', 'src'],
        },
        tunnel: false,
        host: 'localhost',
        port: 3000,
    });
const watchFunction = () => {
    gulp.watch([path.watch.html], gulp.series(buildHtml));
    gulp.watch([path.watch.css], gulp.series(buildCSS));
    gulp.watch([path.watch.js], gulp.series(buildJs));
    gulp.watch([path.watch.img], gulp.series(buildImg));
};

exports.build = buildFunction();
exports.dev = gulp.parallel(buildFunction, watchFunction, serverFunction);
