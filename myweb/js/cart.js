define(['jquery', 'public'], function($, myPublic) {
	//读取本地localStorage的数据
	var json = localStorage.shopList || "[]";
	//转换成json对象
	var shopList = JSON.parse(json);
	
	return {

		//初始化函数
		init: function() {
			//引入头部
			$(".header").load("public.html #head", function() {
				//引入头部的js文件
				myPublic.init();
			})

			//引入底部
			$(".footer").load("public.html #foot");
			
			//调用展示商品函数
			this.showShop();
			
			//调用事件函数
			this.events();
		},

		//展示商品信息到表格
		showShop: function() {
			var farg = document.createDocumentFragment();
			for (var i = 0; i < shopList.length; i++) {
				var arr = ["<td><input type = 'checkbox'/></td>",
					"<td>" + shopList[i].name + "</td>",
					"<td>" + shopList[i].price + "</td>",
					"<td><input type='text' class='count' value='" + shopList[i].count + "'/></td>",
					"<td>" + (shopList[i].price * shopList[i].count) + "</td>",
					"<td><input type='button' value='删除' class='delBtn'/></td>",
				]
				var str = arr.join("");
				var tr = $("<tr>" + str + "<tr>")[0];
				tr.index = shopList.shopId;
				farg.appendChild(tr);
			}
			$("#tbody")[0].appendChild(farg);
		},

		//事件方法
		events: function() {
			//为删除按钮注册点击事件
			$(".delBtn").click(function() {
				//找到当前行
				var $tr = $(this).closest("tr");
				//获取当前行的索引
				var index = $tr.index();
				//移除本地数据库的数据
				shopList.splice(index, 1);
				//保存到本地
				localStorage.shopList = JSON.stringify(shopList);
				//移除行
				$tr.remove();

			})

			//为input注册内容改变事件
			$(".count").change(function() {
				//获取当前文本框的值
				var val = $(this).val();
				//找到当前行
				var $tr = $(this).closest("tr");
				//改变数量
				shopList[$tr.index()].count = parseInt(val);
				//改变金额
				$(this).closest("td").next("td").text(parseInt(val) * shopList[$tr.index()].price + "元");
				//保存到本地
				localStorage.shopList = JSON.stringify(shopList);
			})
		}
	}
})

//$(function() {
//	//引入头部
//	$('.header').load("public.html #head", function() {
//		//引入外部js
//		$("body").append('<script src="js/public.js" type="text/javascript" charset="utf-8"></script>')
//	});
//
//	//引入底部
//	$(".footer").load("public.html #foot");
//
//	//读取本地数据
//	(function() {
//		var json = localStorage.shopList;
//		var shopList = JSON.parse(json);
//		console.log(shopList);
//
//		//定义方法渲染数据到表格
//		function init() {
//			var farg = document.createDocumentFragment();
//			for (var i = 0; i < shopList.length; i++) {
//				var arr = ["<td><input type = 'checkbox'/></td>",
//					"<td>" + shopList[i].name + "</td>",
//					"<td>" + shopList[i].price + "</td>",
//					"<td><input type='text' class='count' value='" + shopList[i].count + "'/></td>",
//					"<td>" + (shopList[i].price * shopList[i].count) + "</td>",
//					"<td><input type='button' value='删除' class='delBtn'/></td>",
//				]
//				var str = arr.join("");
//				var tr = $("<tr>" + str + "<tr>")[0];
//				tr.index = shopList.shopId;
//				farg.appendChild(tr);
//			}
//			$("#tbody")[0].appendChild(farg);
//		}
//		//调用init()
//		init();
//
//		//为删除按钮注册点击事件
//		$(".delBtn").click(function() {
//			//找到当前行
//			var $tr = $(this).closest("tr");
//			//获取当前行的索引
//			var index = $tr.index();
//			//移除本地数据库的数据
//			shopList.splice(index, 1);
//			//保存到本地
//			localStorage.shopList = JSON.stringify(shopList);
//			//移除行
//			$tr.remove();
//
//		})
//
//		//为input注册内容改变事件
//		$(".count").change(function() {
//			//获取当前文本框的值
//			var val = $(this).val();
//			//找到当前行
//			var $tr = $(this).closest("tr");
//			//改变数量
//			shopList[$tr.index()].count = parseInt(val);
//			//改变金额
//			$(this).closest("td").next("td").text(parseInt(val) * shopList[$tr.index()].price + "元");
//			//保存到本地
//			localStorage.shopList = JSON.stringify(shopList);
//		})
//
//	})();
//})