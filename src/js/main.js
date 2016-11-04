window.onload=function(){
	/*var myScroll;
		function loaded(){
		    myScroll = new iScroll('main');
		}
		document.addEventListener('touchmove', function(e){
		    e.preventDefault();
		}, false);
		document.addEventListener('DOMContentLoaded', function(){
		    setTimeout(loaded, 200);
		}, false);*/
	




	var main=new iScroll('main',{
				hScrollbar:false,
				vScrollbar:false,
				onBeforeScrollStart:function(e){
					var tar=e.target || e.srcElement,
						tog=tar.nodeName.toLowerCase();
					if(tog!='input' && tog!='select' && tog!='button' && tog!='textarea'){
						e.preventDefault();
					}
				}

	})
	document.addEventListener('DOMContentLoaded', function(){
		    setTimeout(main, 200);
		}, false);


		
		var swiper = new Swiper('.swiper-container', {
	       autoplay:1000,
	       loop:true
	        
		});


}
