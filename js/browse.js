$(function() {
	var t = $(window).height();
	$(".container").css("height", t / rem - .8 - .96 - .9 + "rem"), $(".container .common").each(function(t, n) {
		$(this).parent().css({
			position: "absolute",
			top: 0,
			left: 20 * t + "%",
			width: "100%"
		}), $(this).parent().height($(".container").height()), console.log(t), console.log($(this).parent()), console.log($(this).parent().css("left"))
	})
}), $(function() {
	var t, n, e = function(e) {
			t = e.touches[0].clientX, n = e.touches[0].clientY, console.log("startX" + t), console.log("startY" + n)
		},
		o = 0;
	$(".container .common").eq(0).on("touchstart", function(t) {
		t.preventDefault(), console.log(0), o = 0
	}), $(".container .common").eq(1).on("touchstart", function(t) {
		t.preventDefault(), console.log(1), o = 1
	}), $(".container .common").eq(2).on("touchstart", function(t) {
		t.preventDefault(), console.log(2), o = 2
	}), $(".container .common").eq(3).on("touchstart", function(t) {
		t.preventDefault(), console.log(3), o = 3
	}), $(".container .common").eq(4).on("touchstart", function(t) {
		t.preventDefault(), console.log(4), o = 4
	}), addEventListener("touchstart", e, !1), $(".container").on("swipeLeft", function(t) {
		t.preventDefault(), o < 4 ? ($(".container").animate({
			marginLeft: -100 * (o + 1) + "%"
		}, 200), $(".browse .navtop li").eq(o + 1).addClass("navtop-now").siblings().removeClass("navtop-now"), $(".navtop-nowline").animate({
			left: 20 * (o + 1) + "%"
		}, 200)) : console.log("已经是最后一页")
	}), $(".container").on("swipeRight", function(t) {
		t.preventDefault(), o > 0 ? ($(".container").animate({
			marginLeft: -100 * (o - 1) + "%"
		}, 200), $(".browse .navtop li").eq(o - 1).addClass("navtop-now").siblings().removeClass("navtop-now"), $(".navtop-nowline").animate({
			left: 20 * (o - 1) + "%"
		}, 200)) : console.log("已经是第一页")
	}), $(".browse .navtop li").each(function(t, n) {
		$(this).on("tap", function(n) {
			n.preventDefault(), $(this).addClass("navtop-now").siblings().removeClass("navtop-now"), $(".navtop-nowline").animate({
				left: 20 * t + "%"
			}, 200), $(".container").animate({
				marginLeft: -100 * t + "%"
			}, 200)
		})
	})
}), $(function() {
	for (var t = 1, n = "窪田MAです", e = 1, o = 0; o < 5; o++) {
		var a = 80 + Math.round(80 * Math.random()),
			s = '<li><dl><dt><div><img src="img/browse/newest' + t + '-head.png"></div><span>' + n + '</span></dt><dd><img src="img/browse/newest' + e + '.png"></dd><dd><i class="iconfont">&#xe641;</i><span>' + a + "</span>人喜欢</dd></dl></li>";
		$(".newest ul").eq(0).height() <= $(".newest ul").eq(1).height() ? $(".newest ul").eq(0).append(s) : $(".newest ul").eq(1).append(s), t++, e++
	}
}), $(function() {
	$(".newest .iconfont").each(function(t, n) {
		Zepto(this).tap(function() {
			$(this).hasClass("act-i") ? ($(this).removeClass("act-i"), $(this).next("span").text(parseInt($(this).next("span").text()) - 1)) : ($(this).addClass("act-i"), $(this).next("span").text(parseInt($(this).next("span").text()) + 1))
		})
	}), Zepto(".tarento .tarento-person .follow").tap(function() {
		$(this).hasClass("act-follow") ? ($(this).removeClass("act-follow"), $(this).text("关注"), console.log("关注")) : ($(this).addClass("act-follow"), $(this).text("已关注"), console.log("已关注"))
	})
});
