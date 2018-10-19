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
					modify = (Math.abs(slideProgress) - 1) * 0.3 + 1;
				}
				translate = slideProgress * modify * 90 + 'px';
				scale = 1 - Math.abs(slideProgress) / 6;
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
		$("#banner .contactForm").toggle()
		$("#oversea_form .msg").text("")
	})
	$("#cancelbtn").click(function(){
		$("#banner .contactForm").toggle()
		$("#oversea_form .msg").text("")
	})
	// 点击我要咨询按钮
	$("#say_btn").click(function(){
		$("#banner .contactForm").toggle()
		$("#oversea_form .msg").text("")
	})

	$("#team .teambtn").click(function(){
		$("#train_modal").modal('show')
		$("#language_form .msg").text("")
	})
	$("#cancelbtn2").click(function(){
		$("#train_modal").modal('hide')
	})
	$('#train_modal').on('show.bs.modal', function (e) {  
	    // 关键代码，如没将modal设置为 block，则$modala_dialog.height() 为零  
	    $(this).css('display', 'block');  
	    var modalHeight=$(window).height() / 2 - $('#train_modal .modal-dialog').height() / 2;  
	    $(this).find('.modal-dialog').css({  
	        'margin-top': modalHeight  
	    });  
	});
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
		$("#oversea_form .msg").text("")
	})


	// 留学直通车表单提交验证
	$("#subbtn").click(function(){
		var nameval = $("#oversea_form #seaname").val()
		var phoneval = $("#oversea_form #seaphone").val()
		if(nameval==""){
			$("#oversea_form .msg").text("姓名不能为空！")
			$("#oversea_form #seaname").focus()
			return false;
		}
		if(phoneval==""){
			$("#oversea_form .msg").text("手机号不能为空！")
			$("#oversea_form #seaphone").focus()
			return false;
		}
		$("#oversea_form .msg").text("")
		$("#oversea_form").submit()
	})

	// 语言培训咨询表单提交
	$("#subbtn2").click(function(){
		var nameval = $("#language_form #lname").val()
		var phoneval = $("#language_form #lphone").val()
		if(nameval==""){
			$("#language_form .msg").text("姓名不能为空！")
			$("#language_form #lname").focus()
			return false;
		}
		if(phoneval==""){
			$("#language_form .msg").text("手机号不能为空！")
			$("#language_form #lphone").focus()
			return false;
		}
		$("#language_form .msg").text("")
		$("#language_form").submit()
	})


})