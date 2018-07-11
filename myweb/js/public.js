$(function() {
	//定义函数设置cookie
	function setCookie(key,value,expires){
		expires = expires || 1;
		var milliseconds = Date.now()+24*60*60*1000*expires;
		var date = new Date(milliseconds);
		document.cookie = key+"="+value+";"+"expires=" + date + ";";
	}
	
	//定义函数获取cookie值
	function getCookie(name){
		var str = document.cookie;
		var obj = {};
		var arr = str.split("; ")
		for(var i=0; i<arr.length; i++){
			arr[i] = arr[i].split("=");
			obj[arr[i][0]] = arr[i][1];
		}
		return obj[name];
	}
	
	//清除cookie
	function cleanCookie(name){
		setCookie(name,"",-1);
	};
	
	//测试代码
//	setCookie("id",12345);
//	console.log(document.cookie);
//	console.log(getCookie("goods"));
//	cleanCookie("id");
//	console.log(document.cookie);
	
	//设置登录
	(function(){
		//判断在cookie上是否存在用户名
		var username = getCookie("username");
		if(username){
			var $li = $("#head_ul").children("li");
			var value1 = $li.eq(0).html();
			var value2 = $li.eq(1).html();
			$li.eq(0).text(username);
			$li.eq(1).html("<a href='#'id='exit'>退出</a>");
			//为退出注册点击事件
			$("#exit").click(function(){
				$li.eq(0).html(value1);
				$li.eq(1).html(value2);
				//清理cookie
				cleanCookie("username");
			});
		}
	}());
	
	
	//给top下的li注册鼠标进入事件
	(function(){
		//获取top下的ul下的li
		var $li = $(".top_ul").children("li");
		//给所有的li注册鼠标移上事件
		$li.mouseenter(function() {
			$(this).children("div").stop().slideDown();
		}).mouseleave(function() {
			$(this).children("div").stop().slideUp()
		})
	}());
	
	

})