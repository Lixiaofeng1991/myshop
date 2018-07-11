//商品详情页的js文件

$(function(){
	
	//引入头部
	$('.header').load("public.html #head", function() {
		$("body").append('<script src="js/public.js" type="text/javascript" charset="utf-8"></script>')
	});
	
	//引入底部
	$(".footer").load("public.html #foot");
	
	
	//放大镜
	(function(){
		var arr=[];
		//根据body的id判断是哪个html请求本文件
		if($("body")[0].id=="tv"){
			arr = ["images/tv_m1.jpg","images/tv_m2.jpg"];
		}else if($("body")[0].id == "notebook"){
			arr = ["images/notebook_m1.jpg","images/notebook_m2.jpg"];
		}else if($("body")[0].id == "phone"){
			arr = ["images/m_shouji.jpg","images/m_shouji4.jpg"];
		}
		//获取包裹小图的
		var $li = $(".small_img ul li");
		//获取中图的img
		var $img = $(".middle_img img");
		//获取遮罩层
		var $mask = $(".mask");
		//获取大图的盒子
		var $bigImg = $(".big_image img")
		//为小图注册鼠标移上事件
		$li.mouseenter(function(){
			$(this).addClass("current").siblings().removeClass("current");
			console.log(arr[$(this).index()])
			$img[0].src = arr[$(this).index()];
		})
		
		//为中图注册鼠标移动事件
		$(".middle_img").mousemove(function(e){
			$mask.css("display","block");
			$(".big_image").css("display","block")
			var x = e.pageX -$(this).offset().left - $mask.width()/2;
			var y = e.pageY - $(this).offset().top - $mask.height()/2;
			if(x<0){
				x=0;
			}else if(x>$(this).width()-$mask.width()){
				x=$(this).width()-$mask.width();
			}
			if(y<0){
				y=0
			}else if(y>$(this).height() - $mask.height()){
				y = $(this).height() - $mask.height()
			}
			$mask.css({left:x,top:y});
			
			//设置大图的src
			$bigImg[0].src = $(this).children("img")[0].src;
			$bigImg.css({left:-2*x,top:-2*y});
			
		}).mouseleave(function(){
			$mask.css("display","none");
			$(".big_image").css("display","none");
		})
	}());
	
	//点击加入购物车，存储数据本地
	(function(){
		var arr=[];
		//根据body的id判断是哪个html请求本文件
		if($("body")[0].id=="tv"){
			//定义商品数组
			arr = {
				shopId:2,
				name:"小米电视",
				price:1899,
				color:"king",
				version:"64g",
				count:1,
			};
		}else if($("body")[0].id=="notebook"){
			//定义商品数组
			arr = {
				shopId:3,
				name:"联想笔记本",
				price:5599,
				color:"king",
				version:"64g",
				count:1,
			};
		}else if($("body")[0].id=="phone"){
			//定义商品数组
			arr = {
				shopId:1,
				name:"华为荣耀",
				price:1099,
				color:"king",
				version:"64g",
				count:1,
			};
		}
		
		
		
		
		//获取本地数据库
		var json = localStorage.shopList || "[]";
		var shopList = JSON.parse(json);
		
		//为购物车添加点击事件
		$(".cart").click(function(){
			for(var i=0; i<shopList.length; i++){
				//如果商品存在数据，则商品加一
				if(arr.shopId == shopList[i].shopId){
					shopList[i].count++;
					break;
				}
			}
			
			//如果本地数据库不存此商品，把商品添加进去
			if(i==shopList.length){
				shopList.push(arr);
			}
			
			//存储到本地数据库
			localStorage.shopList = JSON.stringify(shopList);
		})
		
		
	}());
})
