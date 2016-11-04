angular.module("myapp")
		.controller("lianxi",lianxi)
		.controller("search",search)
		.controller("riben",riben)
		.controller("hanguo",hanguo)
		.controller("taiguo",taiguo)
		.controller("fayiyou",fayiyou)
		.controller("youlun",youlun)
		.controller("mudi",mudi)
		.controller("guide",guide)
		


	/*function login($scope,$location,apiService){
		apiService.login("/data/user.json",{key:123,name:"zhangsan"},"POST")
			  .success(function(res){
			  	console.log(res)
		})
		$scope.sub=function(){
			$location.url('/main')
		}	
	}*/

	function lianxi($scope,$location,$http,apiService){
			
		apiService.login("./data/login.json", {
				username: $scope.username,
				userpwd: $scope.userpwd
			}, "post")
			.success(function(res) {
				
				$scope.sub=function(){
					
					if($scope.username==res.username && $scope.userpwd==res.userpwd){
						console.log($scope.username)
						$location.url("/main");

					}else{
						alert("密码错误")
						$scope.username="";
						$scope.userpwd="";

					}
						
				}	
			});
				

			
		
		
	}

	function search($scope,$location){
		$scope.sub=function(){
			$location.url('/mudidisousu')
		}		
	}
	function guide($scope,$location){
		$scope.sub=function(){
			$location.url('/chunqiu')
		}		
	}

	function riben($scope,$http){
		$http({ //请求
			url:"../data/riben.json",
			method:"get"

		})
		.success(function(res){
			$scope.data=res.riben;
		})
		
	}
	function hanguo($scope,$http){
		$http({ //请求
			url:"../data/hanguo.json",
			method:"get"

		})
		.success(function(res){
			$scope.data=res.hanguo;
		})
		
	}	
	function taiguo($scope,$http){
		$http({ //请求
			url:"../data/taiguo.json",
			method:"get"

		})
		.success(function(res){
			$scope.data=res.taiguo;
		})
		
	}	

	function fayiyou($scope,$http){
		$http({ //请求
			url:"../data/taiguo.json",
			method:"get"

		})
		.success(function(res){
			$scope.data=res.taiguo;
		})
		
	}

	function youlun($scope,$http){
		$http({ //请求
			url:"../data/youlun.json",
			method:"get"

		})
		.success(function(res){
			$scope.data=res.youlun;
		})
		
	}	

	function mudi($scope,$http){
		$http({ //请求
			url:"../data/mudi.json",
			method:"get"

		})
		.success(function(res){
			$scope.data=res.mudi;
		})
		
	}	
	