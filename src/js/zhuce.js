;(function($){
document.documentElement.style.fontSize=document.documentElement.clientWidth/7.5+'px';
var myIscroll=new IScroll("#main",{
	click:true
});
//点击关闭返回首页
$(".close").on("click",function(){
	location.href="./index.html"
})
//点击登录进入首页
	$("#txt").on("blur",function(){
		var msg=$("#txt").val();
		// |[0-9A-Z]{1,}@[163|qq|126]\.com
		var reg=/^1[13578]{1}[0-9]{9}$/;
			if(!reg.test(msg)){
				$("#show").show();
			}
	})
	$("#pass").on("blur",function(){
		var pas=$("#pass").val();
		
	
		if(pas!="12345"){
			$("#show2").show();
		}
	})
	$("#btn").on("click",function(){
		location.href="./chunqiu.html";
	})
	

})(Zepto);