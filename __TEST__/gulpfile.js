const gulp = require('gulp');

const ava = require('gulp-ava');

gulp.task('default', () =>
    gulp.src('tests/ssr.js')
    // `gulp-ava` needs filepaths, so you can't have any plugins before it
        .pipe(ava({verbose: true}))
);