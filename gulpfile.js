    const gulp = require('gulp');
    const sass = require('gulp-sass')(require('sass'));

    const paths = {
    scss: 'src/scss/**/*.scss',
    html: 'src/index.html',
    js: 'src/js/**/*.js',
    images: 'src/images/**/*',
    css: 'dist/css',
    jsDist: 'dist/js',
    imgDist: 'dist/images',
    };

    function compileSass() {
    return gulp
        .src(paths.scss)
        .pipe(sass().on('error', sass.logError)) 
        .pipe(gulp.dest(paths.css)); 
    }

    function copyImages() {
    return gulp
        .src(paths.images)
        .pipe(gulp.dest(paths.imgDist));
    }

    function copyJs() {
    return gulp.src(paths.js).pipe(gulp.dest(paths.jsDist));
    }

    gulp.task('default', gulp.parallel(compileSass, copyJs, copyImages));
