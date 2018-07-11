$(function(){
	
	var flag = true;
	$("#username").blur(function(){
		var reg = /^[a-zA-Z]\w{5,11}$/;
		var bool = reg.test(this.value);
		console.log(1111);
		if(this.value == ""){
			$(this).closest("p").append("<span style='color:red;'>请输入用户名</span>")
			flag = false;
		}else {
			if(!bool){
				$(this).closest("p").append("<span style='color:red;'>用户名不合法</span>")
				flag = false;
			}
		}
	}).focus(function(){
		$(this).closest("p").children("span").remove()
	});
	
	$("#password").blur(function(){
		if(this.value ==""){
			$(this).closest("p").append("<span style='color:red;'>请输入密码</span>")
			flag = false;
		}
	});
	
	
	$(".form-sub").click(function(e){
		e.preventDefault();
		console.log($("#username"))
		console.log($("#password"))
		$.post("php/login.php",{username:$("#username").val(),password:$("#password").val()},function(json){
			if(json.msg == ""){
				location.href = "index.html";
				document.cookie ="username=" + $("#username").val();
			}else{
				alert(json.msg);
			}
		},"json")
	})
})
