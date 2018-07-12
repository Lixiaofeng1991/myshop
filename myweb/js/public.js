define(["jquery", "cookie"], function($, cookie) {

	return {
		init: function() {
			this.setLogin();
			this.events();
		},
		
		//设置登录方法
		setLogin: function() {
			var username = cookie.getCookie("username");
			if (username) {
				var $li = $("#head_ul").children("li");
				var value1 = $li.eq(0).html();
				var value2 = $li.eq(1).html();
				$li.eq(0).text(username);
				$li.eq(1).html("<a href='#'id='exit'>退出</a>");
				//为退出注册点击事件
				$("#exit").click(function() {
					$li.eq(0).html(value1);
					$li.eq(1).html(value2);
					//清理cookie
					cookie.cleanCookie("username");
				});
			}
		},

		events: function() {
			var $li = $(".top_ul").children("li");
			//给所有的li注册鼠标移上事件
			$li.mouseenter(function() {
				$(this).children("div").stop().slideDown();
			}).mouseleave(function() {
				$(this).children("div").stop().slideUp()
			});
		}
	}

})
//$(function() {
//
//	//设置登录
//	(function() {
//		//判断在cookie上是否存在用户名
//		var username = getCookie("username");
//		if (username) {
//			var $li = $("#head_ul").children("li");
//			var value1 = $li.eq(0).html();
//			var value2 = $li.eq(1).html();
//			$li.eq(0).text(username);
//			$li.eq(1).html("<a href='#'id='exit'>退出</a>");
//			//为退出注册点击事件
//			$("#exit").click(function() {
//				$li.eq(0).html(value1);
//				$li.eq(1).html(value2);
//				//清理cookie
//				cleanCookie("username");
//			});
//		}
//	}());
//
//	//给top下的li注册鼠标进入事件
//	(function() {
//		//获取top下的ul下的li
//		var $li = $(".top_ul").children("li");
//		//给所有的li注册鼠标移上事件
//		$li.mouseenter(function() {
//			$(this).children("div").stop().slideDown();
//		}).mouseleave(function() {
//			$(this).children("div").stop().slideUp()
//		})
//	}());
//
//})