"use strict";

const gulp = require("gulp");
const del = require("del");
const tsc = require("gulp-typescript");
const tslint = require('gulp-tslint');
var exec = require('child_process').exec;
var connect = require('gulp-connect');
const minify = require('gulp-minify');
var connectpm2 = require('gulp-connect-pm2');
const pm2 = require('pm2');



//clean the dist directory
gulp.task('clean', (cb) => {
    return del(["dist"], cb);
});

// linting typescript
gulp.task('tslint', () => {
  return gulp.src("src/**/*.ts").pipe(tslint({formatter: 'prose'})).pipe(tslint.report());
});

//build
gulp.task("build", ["clean", "tslint"] , (cb) => {
  exec('ng build --target production --build-optimizer --vendor-chunk', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
});

// deploy
gulp.task('deploy', function () {
  connect.server({
    root: 'dist',
    host:'0.0.0.0',
    port: 4200,
    livereload: true,
    fallback: 'dist/index.html'
  });
});
