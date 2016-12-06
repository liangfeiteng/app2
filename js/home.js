$(function() {
	// body...

	$("#share").on("click",function(event){
		$(".home-bottom").css("display","block");

	});
	$("#cancelbth").on("click",function(event){
		$(".home-bottom").css("display","none");
	})
	<!--/***********home.js*******/-->
	$(".gz-tuch").on("tap",function(){
		if($(this).text()=="已关注"){
			$(this).text("关注");
		}else{
			$(this).text("已关注");
		}

	})
	/*******************/
	$('.press').css('left','0.1rem');
	$(".press").on("tap",function(){
		console.log($(this).css('left')=='0.1rem');
		if ($(this).css('left')=='0.1rem'){
			$(this).css({
				left:"0.5"+"rem"
	 		}, 500);
	 		$(this).parent(".btnwrap").css("backgroundColor","#9fb23f")
		}else{
			$(this).css({
				left:"0.1"+"rem"
	 		}, 500);
	 		$(this).parent(".btnwrap").css("backgroundColor","#fff")
		}
	})
	/*************************/
});
