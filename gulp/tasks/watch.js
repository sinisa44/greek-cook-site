var gulp= require('gulp'),
    watch = require('gulp-watch'),
    browserSync = require('browser-sync').create();


    gulp.task('watch',function(){
        browserSync.init({
            notify:true,
            server:{
                baseDir: "./"
            }
        });

        watch('./index.html',function(){
            browserSync.reload();
        }),

        watch('./app/assets/styles/**/*.css', function(errorInfo){
            console.log(errorInfo.toString());
            gulp.start('cssInject');
        });
    });

    gulp.task('cssInject',['styles'],function(){
        return gulp.src('./app/temp/styles/style.css')
        .pipe(browserSync.stream());
    });