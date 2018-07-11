$(function(){
	//引入头部与底部
	(function(){
		$('.header').load("public.html #head", function() {
			$("body").append('<script src="js/public.js" type="text/javascript" charset="utf-8"></script>')
		});
	
	//引入底部
		$(".footer").load("public.html #foot");
	}());
	
	
	//轮播图
	(function(){
		//获取小圆点
		var $circle = $(".nav_right_circle").children();
		//获取展示图片的li
		var $li = $(".nav_right_ul").children();
		var index = 0;
		var timerId = null;
		
		//当鼠标移到图片上时显示左右焦点
		$(".nav_right").mouseenter(function(){
			$(".nav_right_leftBtn").css("display","block");
			$(".nav_right_righBtn").css("display","block");
		}).mouseleave(function(){
			$(".nav_right_leftBtn").css("display","none");
			$(".nav_right_righBtn").css("display","none");
		})
		//给小圆点注册鼠标移上事件
		$circle.mouseenter(function(){
			index = $(this).index();
			showImage(index);
			autoPlay();
		});
		
		//定义函数展示图片
		function showImage(){
			if(index==-1){
				index = $li.length-1;
			}else if(index == $li.length){
				index = 0;
			}
			$circle.eq(index).addClass("current").siblings().removeClass("current");
			$li.eq(index).stop().fadeIn(500).siblings().stop().fadeOut(500);
		};
		
		//为左边焦点注册点击事件
		$(".nav_right_leftBtn").click(function(){
			index--;
			showImage();
			autoPlay();
		});
		
		//为右边焦点注册点击事件
		$(".nav_right_righBtn").click(function(){
			index++;
			showImage();
			autoPlay();
		})
		
		//自动播放
		function autoPlay(){
			clearInterval(timerId);
			timerId = setInterval(function(){
				index++;
				showImage();
			},2000)
		}
		
		//调用自动播放
		autoPlay();
	}());
	
})
