define(function() {
	return {
		//定义函数设置cookie
		 setCookie: function (key, value, expires) {
			expires = expires || 1;
			var milliseconds = Date.now() + 24 * 60 * 60 * 1000 * expires;
			var date = new Date(milliseconds);
			document.cookie = key + "=" + value + ";" + "expires=" + date + ";";
		},

		//定义函数获取cookie值
		getCookie:function (name) {
			var str = document.cookie;
			var obj = {};
			var arr = str.split("; ")
			for (var i = 0; i < arr.length; i++) {
				arr[i] = arr[i].split("=");
				obj[arr[i][0]] = arr[i][1];
			}
			return obj[name];
		},

		//清除cookie
		cleanCookie:function (name) {
			this.setCookie(name, "", -1);
		}

		//测试代码
		//	setCookie("id",12345);
		//	console.log(document.cookie);
		//	console.log(getCookie("goods"));
		//	cleanCookie("id");
		//	console.log(document.cookie);
	}
})