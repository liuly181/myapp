var gulp=require('gulp');
var connect=require('gulp-connect');//本地服务模块
var respond=require('gulp-respond');
var fs=require('fs');

gulp.task('connect',function(){ //启动本地服务
    connect.server({
      root:["src","./bower_components"],
      port:"8066",
      livereload:true,  //修改网页源代码后帮你自动刷新浏览器
      middleware:function(){//本地server中间件，完成本地动态编译
        return [function(req,res,next){
          next();
        },function(req,res){
          var path=req.url.split("?").shift();
          path=path=='/' ? '/index.html' :path;
          url='src'+path ;
          if(!fs.existsSync(url)){
            url='bower_components'+path;
          }
          gulp.src(url)
          .pipe(respond(res))
        }]

      }
    })
})
