const gulp = require("gulp");
const concat = require('gulp-concat');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');
const minify = require('gulp-minify');


gulp.task('minify', () => {
  return gulp.src([
        'src/header.js',
        'src/defaults.js',
        'src/utils.js',
        'src/simpledraw.js',
        'src/rangemap.js',
        'src/interact.js',
        'src/base.js',
        'src/chart-line.js',
        'src/chart-bar.js',
        'src/chart-tristate.js',
        'src/chart-discrete.js',
        'src/chart-bullet.js',
        'src/chart-pie.js',
        'src/chart-box.js',
        'src/vcanvas-base.js',
        'src/vcanvas-canvas.js',
        'src/vcanvas-vml.js',
        'src/footer.js'
    ], { allowEmpty: true })
    .pipe(concat('dist/jquery.sparkline.js'))
    .pipe(minify({noSource: true}))
    .pipe(rename('jquery.sparkline.min.js'))
    .pipe(gulp.dest('dist/'))
})

gulp.task('default', gulp.series(['minify']));
