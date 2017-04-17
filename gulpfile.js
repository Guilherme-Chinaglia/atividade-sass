const gulp 		= require("gulp");
const sass 		= require("gulp-sass");
const notify 	= require("gulp-notify");

var browserSync = require('browser-sync').create();


// Static server
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

/*

  Task responsável por recuperar todos arquivos no formato .scss e .sass
  e retornar para pasta css que será criada automaticamente.

*/

gulp.task("sass", function(){
	return gulp.src(['./scss/style.scss'])
				.pipe(sass())
				.on("error", notify.onError({title:"erro ao compilar", message:"<%= error.message %>"}))
				.pipe(gulp.dest("./css"))
});

/*

	Task responsável por executar de fundo todas a mudanças que houver nos arquivos

*/

gulp.task("sass:watch", function(){
	gulp.watch('./scss/**/*.scss',['sass']);
});

/*
  Task default para iniciar apenas com o comando "gulp" no terminal
*/

gulp.task("default",['sass:watch']);