var gulp = require('gulp'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    cssvars = require('postcss-simple-vars'),
    nested = require('postcss-nested'),
    cssImport = require('postcss-import'),
    mixins = require('postcss-mixins')
    plumber= require('gulp-plumber');

    gulp.task('styles',function(){
        return gulp.src('./app/assets/styles/style.css')
            .pipe(postcss([cssImport,mixins,cssvars,nested,autoprefixer]))
            .pipe(plumber())
            .pipe(gulp.dest('./app/temp/styles'));
    });