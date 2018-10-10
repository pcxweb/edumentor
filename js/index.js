certifySwiper = new Swiper('#certify .swipercon2', {
	watchSlidesProgress: true,
	slidesPerView: 'auto',
	centeredSlides: true,
	loop: true,
	loopedSlides: 6,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	on: {
		progress: function(progress) {
			for (i = 0; i < this.slides.length; i++) {
				var slide = this.slides.eq(i);
				var slideProgress = this.slides[i].progress;
				modify = 1;
				if (Math.abs(slideProgress) > 1) {
					modify = (Math.abs(slideProgress) - 1) * 0.5 + 1;
				}
				translate = slideProgress * modify * 120 + 'px';
				scale = 1 - Math.abs(slideProgress) / 4.6;
				zIndex = 999 - Math.abs(Math.round(10 * slideProgress));
				slide.transform('translateX(' + translate + ') scale(' + scale + ')');
				slide.css('zIndex', zIndex);
				slide.css('opacity', 1);
				if (Math.abs(slideProgress) > 1) {
					slide.css('opacity', 0);
				}
			}
		},
		setTransition: function(transition) {
			for (var i = 0; i < this.slides.length; i++) {
				var slide = this.slides.eq(i)
				slide.transition(transition);
			}
		}
	}

})
$(function(){
	$("#banner_img").click(function(){
		$(".contactForm").toggle()
	})
	$("#cancelbtn").click(function(){
		$(".contactForm").toggle()
	})
	// 企业荣誉轮播
	var mySwiper = new Swiper('.swipercon1', {
		navigation: {
			nextEl: '.z-next',
			prevEl: '.z-prev',
		},
		loop: true,
	    slidesPerView : 3,
	    loopedSlides: 6
	})

	// 提前规划切换
	$("#plan .plan_con li").click(function(){
		var indexval = $(this).index()
		$(this).addClass('active').siblings('li').removeClass('active')
		$("#plan .right"+indexval).addClass("active").siblings('.pcon-right').removeClass('active')
	})

	// 留学服务产品
	$("#service .itembox .item").mouseover(function(){
		var indexs = $(this).index();

		$(this).find(".obj_item").css("display","none")
		$(this).find(".obj_button").css("display","block")
	})
	$("#service .itembox .item").mouseout(function(){
		var indexs = $(this).index();

		$(this).find(".obj_item").css("display","block")
		$(this).find(".obj_button").css("display","none")
	})
	// 点击开启留学之旅
	$("#service .itembox .obj_button").click(function(){
		$("#overseacar").css("display","block")
		var topval = $("#overseacar").offset().top
		// console.log(topval)
		$(window).scrollTop(topval-20)
	})


})