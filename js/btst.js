//轮播效果
$(window).load(function(){
	$(window).resize(function(){//网页窗口大小发生改变
		$('.carousel').carousel({
		 	 interval: 2000
		})
	})
	//导航栏效果
$(function(){
	$(window).load(function(){
		change();
	})
	$(window).resize(function(){
		change()
	})
				
	function change(){
		var winWidth = $(window).width();
		if(winWidth<1000){
		$('.shoehide button').show().siblings().hide();
		$('.titbtn').hide();
		}else{
			$('.newNav').hide();
			$('.shoehide button').hide().siblings().show()
			}
		}
				
		$('.shoehide').on('click','button',function(){
			$('.newNav').slideToggle();
		})
	})
	//二级导航
	$('.dropli').hover(function(){
		$('.droul').slideDown();
	},
	function(){
		$('.droul').slideUp();
	})
	
	//文字效果

	$(function(){
		$('.bttext').show().stop().delay().animate({'top':'400px'});
	})
	
	
	$(window).scroll(function(){
		if($(window).scrollTop()>600){
			$('.txinp').eq(0).fadeIn(0).animate({'left':'20px'},400);
		};
		if($(window).scrollTop()>700){
			$('.txinp').eq(1).fadeIn(100).animate({'left':'20px'},400);
		};
		if($(window).scrollTop()>800){
			$('.txinp').eq(2).fadeIn(100).animate({'left':'20px'},400);
		};
		if($(window).scrollTop()>950){
			$('.txinp').eq(3).fadeIn(100).animate({'left':'20px'},400);
		};
	});
	
	$(window).scroll(function(){
		if($(window).scrollTop()>600){
			$('.txinp').eq(0).fadeIn(0).animate({'left':'20px'},400);
		};
		if($(window).scrollTop()>700){
			$('.txinp').eq(1).fadeIn(100).animate({'left':'20px'},400);
		};
		if($(window).scrollTop()>800){
			$('.txinp').eq(2).fadeIn(100).animate({'left':'20px'},400);
		};
		if($(window).scrollTop()>950){
			$('.txinp').eq(3).fadeIn(100).animate({'left':'20px'},400);
		};
	});
	$(window).scroll(function(){
		if($(window).scrollTop()>1900){
			$('.txfourwd').children('div').eq(0).fadeIn(100).animate({'left':'20px'},400);
		};
		if($(window).scrollTop()>2000){
			$('.txfourwd').children('div').eq(1).fadeIn(100).animate({'left':'20px'},400);
		};
		if($(window).scrollTop()>2100){
			$('.txfourwd').children('div').eq(2).fadeIn(100).animate({'left':'20px'},400);
		};
		if($(window).scrollTop()>2200){
			$('.txfourwd').children('div').eq(3).fadeIn(100).animate({'left':'20px'},400);
		};
		if($(window).scrollTop()>2300){
			$('.txfourwd').children('div').eq(4).fadeIn(100).animate({'left':'20px'},400);
		};
		if($(window).scrollTop()>2400){
			$('.txfourwd').children('div').eq(5).fadeIn(100).animate({'left':'20px'},400);
		};
	});
	
	$('.textsix .child').hover(function(){
		$(this).stop().animate({'top':'-10px'},400);
		$('.mbdiv').eq($(this).index()).show();
		$('.mbdiv').eq($(this).index()).children('p').stop().animate({'top':'100'},500);
		
	},
	function(){
		$(this).stop().animate({'top':'10px'},400);
		$('.mbdiv').eq($(this).index()).hide();
		$('.mbdiv').eq($(this).index()).children('p').stop().animate({'top':'-100'},500);
	})
		
})
