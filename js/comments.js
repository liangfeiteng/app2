(function(){
	HLib.comments =function(iconfont,countes,comment,alldiv){
		// 这是变化的部分
		this.iconfont=iconfont;  //这是点击的图标
		this.countes=countes; //  这是下面写的评论次数
		this.comment=comment; //  这是具体评论的内容部分
		this.alldiv=alldiv;
	}
	HLib.comments.prototype.init =function(){
		var iconfont = this.iconfont;
		var countes=this.countes;
		var comment=this.comment;
		var alldiv=this.alldiv;
		iconfont.find("a").click(function(){
			comment.css("display","block")
		})
		comment.find(".tijiao").click(function(){
			if (comment.find(".neirong").val()=="") {
				comment.css("display","none");
			}else{
				// var newdiv=document.createElement("div")
				$("<div></div>").insertBefore(comment);
				var a=alldiv.children().length-2;
				alldiv.find("div").eq(a).append("<a href='javascript:;'>我：</a>");
				alldiv.find("div").eq(a).append("<span>"+comment.find(".neirong").val()+"</span>");
				comment.css("display","none");
				comment.find(".neirong").val("");
				countes.find("p").eq(1).html(a+1+"评论")
			}
		})
	}
})(window.HLib || (window.HLib={}));
var comments1= new HLib.comments($(".pretty-ping"),$(".pretty-counte"),$(".comments0"),$(".pretty-first"));
	comments1.init();
	var comments2= new HLib.comments($(".pretty-ping2"),$(".pretty-counte2"),$(".comments2"),$(".pretty-first2"));
	comments2.init();
	var comments3= new HLib.comments($(".pretty-ping1"),$(".pretty-counte1"),$(".comments1"),$(".pretty-first1"));
	comments3.init();