// All used modules.
var gulp = require('gulp');
var babel = require('gulp-babel');
var runSeq = require('run-sequence');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var livereload = require('gulp-livereload');

// Development tasks
// --------------------------------------------------------------

// Live reload business.
gulp.task('reload', function () {
    livereload.reload();
});

gulp.task('reloadCSS', function () {
    return gulp.src('./public/style.css').pipe(livereload());
});

gulp.task('buildJS', function () {
    return gulp.src(['./browser/js/app.js', './browser/js/**/*.js'])
        .pipe(concat('main.js'))
        .pipe(babel())
        .pipe(gulp.dest('./public'));
});

gulp.task('buildCSS', function () {

    var sassCompilation = sass();
    sassCompilation.on('error', console.error.bind(console));

    return gulp.src('./browser/css/main.scss')
        .pipe(sassCompilation)
        .pipe(rename('style.css'))
        .pipe(gulp.dest('./public'));
});

// Production tasks
// --------------------------------------------------------------

gulp.task('buildCSSProduction', function () {
    return gulp.src('./browser/css/main.scss')
        .pipe(sass())
        .pipe(rename('style.css'))
        .pipe(gulp.dest('./public'))
});

gulp.task('buildJSProduction', function () {
    return gulp.src(['./browser/js/app.js', './browser/js/**/*.js'])
        .pipe(concat('main.js'))
        .pipe(babel())
        .pipe(gulp.dest('./public'));
});

gulp.task('buildProduction', ['buildCSSProduction', 'buildJSProduction']);

// Composed tasks
// --------------------------------------------------------------

gulp.task('build', function () {
    if (process.env.NODE_ENV === 'production') {
        runSeq(['buildJSProduction', 'buildCSSProduction']);
    } else {
        runSeq(['buildJS', 'buildCSS']);
    }
});

gulp.task('default', function () {

    gulp.start('build');

    // Run when anything inside of browser/js changes.
    gulp.watch('browser/js/**', function () {
        runSeq('buildJS', 'reload');
    });

    // Run when anything inside of browser/scss changes.
    gulp.watch('browser/css/**', function () {
        runSeq('buildCSS', 'reloadCSS');
    });

    // Reload when a template (.html) file changes.
    gulp.watch(['*.html', 'browser/js/*.html'], ['reload']);

    livereload.listen();

});
