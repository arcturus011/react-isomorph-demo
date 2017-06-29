const gulp = require('gulp');
const ava = require('gulp-ava');
const spawnNpm = require('cross-npm-spawn');


gulp.task('default', ['test:ssr', 'test:rest-api']);


gulp.task('test:ssr', ['build-ssr-bundle'], () =>
    gulp.src('tests/ssr.js')
    // `gulp-ava` needs filepaths, so you can't have any plugins before it
        .pipe(ava({verbose: true}))
);


gulp.task('test:rest-api', () =>
    gulp.src('tests/rest-api.js')
    // `gulp-ava` needs filepaths, so you can't have any plugins before it
        .pipe(ava({verbose: true}))
);

gulp.task('build-ssr-bundle', () => {
    return spawnNpm('run', {_: ['dist-ssr-bundle']}).then((result) => {
        console.log('Stderr : ', result.stderr);
    }).catch((reason) => {
        console.log('编译失败！.', reason);
    });
});