const gulp = require('gulp');
const ava = require('gulp-ava');


gulp.task('default', ['test:ssr', 'test:rest-api']);


gulp.task('test:ssr', () =>
    gulp.src('tests/ssr.js')
    // `gulp-ava` needs filepaths, so you can't have any plugins before it
        .pipe(ava({verbose: true}))
);


gulp.task('test:rest-api', () =>
    gulp.src('tests/rest-api.js')
    // `gulp-ava` needs filepaths, so you can't have any plugins before it
        .pipe(ava({verbose: true}))
);