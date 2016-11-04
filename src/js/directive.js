angular.module("myapp")
		.directive("pageTitle",pageTitle)
		.directive("addUrl",addUrl)
		.directive("reFresh",reFresh)
		

		function pageTitle($rootScope){
			return {
				restrict : "A",
				link:function(scope,element){
					$rootScope.$on('$stateChangeStart',function(event,toState){
						var tit="旅游网--";
						if(toState.data && toState.data.title){
							tit+=toState.data.title
						}
						element.text(tit)
					})
				}
			}
		}
		function addUrl($rootScope){
			return {
				restrict : "A",
				link:function(scope,element){
					$rootScope.$on('$stateChangeStart',function(event,toState){
						scope.cssUrl=toState.data.css;
						scope.jsUrl=toState.data.js;

					})
				}
			}
		}

		function reFresh($rootScope){

			return {
				restrict : "A",
				link:function(scope,element){
					$rootScope.$on('$stateChangeStart',function(event,toState){
						
							setTimeout(function(){
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
							},100)
						
							scope.swiper = new Swiper('.swiper-container', {
						       autoplay:1000,
						       loop:true
						        
							});
					})
				}
			}
			
	}	
		
		