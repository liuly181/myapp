angular.module("myapp")
	   .service("apiService",apiService)
function apiService($http){
	function toStr(parmas){
		var arr=[];
		for(i in parmas){
			arr.push(i+"="+parmas[i]);
			//console.log(arr.join("&"))
		}
		
		return "?"+arr.join("&")
	}
	function feach(url,parmas,method){
		method=method.toUpperCase();
		if(method=="POST"){
			return $http.post(url,parmas)
		}else if(method=="JSONP"){
			var nUrl=url.split("?")

			var urlPamas=toStr(parmas);
			return $http.jsonp(nUrl[0]+urlPamas+nUrl[1])

		}else{
			var urlPamas=toStr(parmas);

			return $http.get(url+urlPamas)
		}
	}
	this.login=function(url,parmas,method){
		return feach(url,parmas,method)
	}
}