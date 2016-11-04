function config($stateProvider,$urlRouterProvider,$ocLazyLoadProvider){
		$urlRouterProvider.otherwise('guide')
		$stateProvider
					.state('main',{
						url:'/main',
						templateUrl:'views/main.html',
						data: {
								title:"main页面",
								css:"styles/main.css"	
						}
					})
					.state('login',{
						url:'/login',
						templateUrl:'views/login.html'
					})
					.state('mudi',{
						url:'/mudi',
						templateUrl:'views/mudi.html',
						data: {
								title:"mudi页面",
								css:"styles/mudi.css"
								
						}

					})
					.state('lianxi',{
						url:'/lianxi',
						templateUrl:'views/lianxi.html',
						controller:"lianxi",
						data: {
								title:"lianxi页面",
								css:"styles/lianxi.css",
								js:"js/main.js"
						}
					})
					.state('chunqiu',{
						url:'/chunqiu',
						templateUrl:'views/chunqiu.html',
						controller:"lianxi",
						data: {
								title:"chunqiu页面",
								css:"styles/chunqiu.css",
								js:"js/main.js"
						}

					})
					.state('chujingyou',{
						url:'/chujingyou',
						templateUrl:'views/chujingyou.html',
						data: {
								title:"chujingyou页面",
								css:"styles/chujingyou.css",
								js:"js/main.js"
						}
					})
					.state('guoneiyou',{
						url:'/guoneiyou',
						templateUrl:'views/guoneiyou.html',
						data: {
								title:"guoneiyou页面",
								css:"styles/guoneiyou.css",
								js:"js/main.js"
						}
					})
					.state('jipiao',{
						url:'/jipiao',
						templateUrl:'views/jipiao.html',
						data: {
								title:"jipiao页面",
								css:"styles/jipiao.css",
								js:"js/main.js"
						}
					})
					.state('youlun',{
						url:'/youlun',
						templateUrl:'views/youlun.html',
						controller:"youlun",
						data: {
								title:"youlun页面",
								css:"styles/youlun.css"
								
						}
					})
					.state('zhoubianyou',{
						url:'/zhoubianyou',
						templateUrl:'views/zhoubianyou.html',
						
						data: {
								title:"zhoubianyou页面",
								css:"styles/zhoubianyou.css"
								
						}
					})
					.state('menpiao',{
						url:'/menpiao',
						templateUrl:'views/menpiao.html',
						data: {
								title:"menpiao页面",
								css:"styles/menpiao.css",
								js:"js/main.js"
						}
					})
					.state('zijaiyou',{
						url:'/zijaiyou',
						templateUrl:'views/zijaiyou.html',
						data: {
								title:"zijaiyou页面",
								css:"styles/zijiayou.css",
								js:"js/main.js"
						}
					})
					.state('mudidisousu',{
						url:'/mudidisousu',
						templateUrl:'views/mudidisousu.html',

						data: {
								title:"目的搜素页面",
								css:"styles/mudidisousu.css",
								js:"js/main.js"
						}
					})
					.state('ribenyou',{
						url:'/ribenyou',
						templateUrl:'views/ribenyou.html',
						controller: "riben",
						data: {
								title:"日本游页面",
								css:"styles/ribenyou.css",
								js:"js/main.js"
						}
					})
					.state('hanguoyou',{
						url:'/hanguoyou',
						templateUrl:'views/hanguoyou.html',
						controller: "hanguo",
						data: {
								title:"韩国游页面",
								css:"styles/hanguoyou.css",
								js:"js/main.js"
						}
					})
					.state('taiguo',{
						url:'/taiguo',
						templateUrl:'views/taiguo.html',
						controller: "taiguo",
						data: {
								title:"泰国游页面",
								css:"styles/taiguo.css",
								js:"js/main.js"
						}
					})
					.state('fayiyou',{
						url:'/fayiyou',
						templateUrl:'views/fayiyou.html',
						controller: "fayiyou",
						data: {
								title:"法意游页面",
								css:"styles/fayiyou.css",
								js:"js/main.js"
						}
					})
					.state('guide',{
						url:'/guide',
						templateUrl:'views/guide.html',
						controller:"guide",
						data: {
								title:"guide页面",
								css:"styles/guide.css",
								js:"js/guide.js"
						}
					})
}
angular.module("myapp")
		.config(config)