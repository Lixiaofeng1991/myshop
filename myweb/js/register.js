//入口函数
$(function(){
	//定义验证函数
	function getVerify(str,reg){
		return reg.test(str);
	}
	//获取表单元素
	$from = $("form");
	var flag = true;
	//为账号文本框注册失去光标事件
	$(".int").eq(0).blur(function(){
		
		var reg = /^[a-zA-Z]\w{5,11}$/;
		var value = $(this).val();
		
		var bool = getVerify(value,reg);
		
		if(bool){
			$.get("php/register.php",{username:value},function(json){
				
				if(json.msg == "用户名不存在"){
					
					$("span").eq(0).text("用户名可以使用").css("color","green")
				}else{
					$("span").eq(0).text("名字已存在，请重新输入").css("color","red");
					flag = false;	
				}
			},"json")
		}else{
			$('span').eq(0).css("color","red");
			flag = false;
		}
		
	}).focus(function(){
		$("span").eq(0).text("6~12个字符，可使用字母、数字、下划线，需以字母开头").css("color","#000");
	});
	
	$(".int").blur(function(){
		var reg = /^\w{6,16}$/
		var value = $(this).val();
		var bool = getVerify(value,reg);
		if(!bool){
			$("span").eq(2).css("color","red");
			flag = false;
		}
	}).focus(function(){
			$("span").eq(2).css("color","#000");
	})
	
	$(".int").eq(2).blur(function(){
		var value = $(this).val();
		var psd = $(".int").eq(1).val()
		if(value ==psd){
			
		}else{
			$(this).closest("p").append("<span style='color:red'>密码不一致</span>")
			flag = false;
		}
	}).focus(function(){
		
		$(this).closest("label").siblings("span").remove()
	});
	
	
	$(".form-sub").click(function(e){
		e.preventDefault();
		$(".int").eq(0).blur();
		$(".int").eq(1).blur();
		$(".int").eq(2).blur();
			
		if(flag){
			
			$.post("php/register.php",{username:$(".int").eq(0).val(),password:$(".int").eq(1).val()},function(json){
				json.msg="";
				if(json.msg == ""){
					console.log(111)
					location.href = "index.html";
					document.cookie ="username="+ $(".int").eq(0).val();
				}
			},"json")
		}else{
			
		}
	})
	
})
