$(function(){
	var mySwiper = new Swiper('.swiper-container',{
		effect:'coverflow',
		loop:true,  //表示是否无缝循环
		// autoplay:1000,   //表示每次轮播间隔时间
		slidesPerView : 2, //  表示每页里面所包含的slide个数
		// spaceBetween : 20, //每两个slide之间的间隔
		centeredSlides : true,//当前页面居中显示
		coverflow:{
			rotate:0,
			depth:120,
			modifier: 3,
			modifier:2,
		}

	})

	//这是精选推荐页的整体轮播  可以手指左右滑动的
	var arr=["摄影","娱乐","文字控","女神","美妆","穿搭","更多"];
	var mySwiper = new Swiper('.swiper-container2', {
		onSlideChangeStart: function(){
			console.log(mySwiper.activeIndex)
			var H=$(".swiper-slide").eq(mySwiper.activeIndex).height();
			// console.log(mySwiper.slide[0])
			console.log(H)
		},
		pagination: '.swiper-pagination',
		//指定分页器可点击切换
		paginationClickable: true,
		// 本页面居中显示
		// centeredSlides : true,
		//设置分页器的元素
		paginationElement : 'li',
		paginationBulletRender: function (index, pagenum) {
		      return '<li class="' + pagenum + '">' + arr[index] + '</li>'
		},
		onSlideChangeStart: function(swiper){
		      // alert(swiper.activeIndex)
		       //切换结束时，告诉我现在是第几个slide
		      $("body").scrollTop(0)
		}
	});  



	//这是 精选推荐 上面的小轮播图
	var mySwiper = new Swiper('.swiper-container3',{
		loop:true,
		slidesPerView:5,
		centeredSlides : true,//当前页面居中显示
		spaceBetween : 10, //每两个slide之间的间隔
	})
	var mySwiper = new Swiper('.swiper-container4',{
		pagination : '.swiper-pagination',
		//pagination : '#swiper-pagination1',
	})
	var mySwiper = new Swiper('.beauty-swiper-container',{
		pagination : '.swiper-pagination',
		//pagination : '#swiper-pagination1',
		loop:true,
	})
	// 这是index 部分的 评论区实现点击关注   心形变为红色,再次点击取消关注.
	$(".index-matchfont .operation ul li:nth-child(1) a").on("tap",function(){
		if ($(this).css("color")=="red") {
			$(this).css("color","#666")
		}else{
			$(this).css("color","red")
		}
	})
	// 这是女神页的 实现点击关注后  字体变为 已关注
	$(".pretty-cicifont .click a").on("tap",function(){
		if ($(this).html()=="关注") {
			$(this).html("取消")
		}else{
			$(this).html("关注")
		}
	})
	// 这是评论 功能
	// $(".pretty-operation ul li.pretty-ping a").on("tap",function(){
	// 	$(".pretty-comment .comments").css("display","block")
	// })
	// $(".pretty-comment .comments .tijiao").on("tap",function(){
	// 	if ($(".pretty-comment .comments .neirong").val()=="") {
	// 		alert("评论不能为空")
	// 		$(".pretty-comment .comments").css("display","none")
	// 	}else{
	// 		$("<div></div>").insertBefore($(".comments"))
	// 		console.log($(".pretty-first").children().length)
	// 		var a=$(".pretty-first").children().length-1;
	// 		$(".pretty-first div:nth-child("+a+")").append("<a href='javascript:;'>我：</a>")
	// 		$(".pretty-first div:nth-child("+a+")").append("<span>"+$(".pretty-comment .comments .neirong").val()+"</span>");
	// 		$(".pretty-comment .comments").css("display","none")
	// 		$(".pretty-comment .comments .neirong").val("")
	// 		$(".pretty-counte p:nth-child(2)").html(a+"评论")
	// 	}
	// })
	// 由于评论功能是需要所有的动态都可以评论 ， 再这里需要用面向对象来封装这个函数、下面是引用封装好的函数. 只需要按照固定的样式添加几个类即可！
	var comments1= new HLib.comments($(".pretty-ping"),$(".pretty-counte"),$(".comments0"),$(".pretty-first"));
	comments1.init();
	var comments2= new HLib.comments($(".pretty-ping2"),$(".pretty-counte2"),$(".comments2"),$(".pretty-first2"));
	comments2.init();
	var comments3= new HLib.comments($(".pretty-ping1"),$(".pretty-counte1"),$(".comments1"),$(".pretty-first1"));
	comments3.init();
})
