;(function($){
document.documentElement.style.fontSize=document.documentElement.clientWidth/7.5+'px';
	var myIscroll=new iScroll('main',{
			onBeforeScrollStart:function(e){
				var tar=e.target || e.srcElement,
					tog=tar.nodeName.toLowerCase();
				if(tog!='input' && tog!='select' && tog!='button' && tog!='textarea'){
					e.preventDefault();
				}
			}
	})
	var swiper = new Swiper('.swiper-container', {
       autoplay:1000
        
	});


})(Zepto);