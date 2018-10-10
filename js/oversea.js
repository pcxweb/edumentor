
var countryjson = {
		"Britain":{
			"bannertop":"Britainbg.jpg",
			"sketch": "sketch1.jpg",
			"case":{
				"title":"英国",
				"imgs": ["Britaincase1.png","Britaincase2.png","Britaincase3.png","Britaincase4.png"]
			}
		},
		"Hongkong":{
			"bannertop":"hkbg.jpg",
			"sketch": "sketch2.jpg",
			"case":{
				"title":"香港",
				"imgs": ["hkcase1.png","hkcase2.png","hkcase3.png","hkcase4.png"]
			}
		},
		"Canada":{
			"bannertop":"Canadabg.jpg",
			"sketch": "sketch3.jpg",
			"case":{
				"title":"加拿大",
				"imgs": []
			}
		},
		"America":{
			"bannertop":"Americabg.jpg",
			"sketch": "sketch4.jpg",
			"case":{
				"title":"美国",
				"imgs": ["Americacase1.png","Americacase2.png","Americacase3.png","Americacase4.png"]
			}
		},
		"Australia":{
			"bannertop":"Australiabg.jpg",
			"sketch": "sketch5.jpg",
			"case":{
				"title":"澳洲",
				"imgs": ["Australiacase1.png","Australiacase2.png","Australiacase3.png","Australiacase4.png"]
			}
		}
		
	}
$(function(){
	var urlparam = getUrlArgObject();
	// oversea.html?country=Australia
	if(urlparam.country){
		var countrys = urlparam.country
		if(countryjson[countrys]){
			var bannerimg =  countryjson[countrys].bannertop
			var sketchimg = countryjson[countrys].sketch
			$(".bannerbg img").attr("src","img/"+bannerimg);
			$("#sketch .sketchimg").attr("src","img/"+sketchimg);
			var caseaobj = countryjson[countrys].case
			var title = caseaobj.title
			$("#case .txt-title").text(title);
			var imgarr = caseaobj.imgs
			// 经典案例
			if(imgarr.length>0){
				$("#case").css("display","block")
				var imgstr = "";
				for (var i = 0; i < imgarr.length; i++) {
					imgstr += '<div class="swiper-slide"><img src="img/'+imgarr[i]+'" /></div>'
				}
				$("#casebanner .swiper-wrapper").html(imgstr)
			}else{
				$("#case").css("display","none")
			}
		}
		
	}
	certifySwiper = new Swiper('#casebanner .swiper-container', {
		watchSlidesProgress: true,
		slidesPerView: 'auto',
		centeredSlides: true,
		loop: true,
		loopedSlides: 4,
		autoplay: true,
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
					translate = slideProgress * modify * 260 + 'px';
					scale = 1 - Math.abs(slideProgress) / 5;
					zIndex = 999 - Math.abs(Math.round(10 * slideProgress));
					slide.transform('translateX(' + translate + ') scale(' + scale + ')');
					slide.css('zIndex', zIndex);
					slide.css('opacity', 1);
					if (Math.abs(slideProgress) > 3) {
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
})