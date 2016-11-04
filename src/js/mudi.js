;(function($){
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
/*var myScroll = new IScroll('#main', {

	    scrollX: true,

	    scrollY: false,

	    momentum: false,

	    snap: true,

	    snapSpeed: 400,

	    keyBindings: true,

	    indicators: {

	        el: document.getElementById('indicator'),

	        resize: false

	    }

});

*/


})(Zepto);