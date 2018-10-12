var languagejson = [{"id":1,"name":"雅思课程","menu":[["雅思基础入门班","雅思基础初级班","雅思基础中级班","雅思基础高级班"],["雅思进阶班","雅思进阶强化班","雅思冲刺班"]],"bannerbg":"stepbanner1.png","imglist":["yasi1.jpg","yasi2.jpg","yasi3.jpg","yasi4.jpg","yasi5.jpg","yasi6.jpg","yasi7.jpg"]},{"id":2,"name":"托福课程","menu":[["托福基础入门班","托福基础初级班","托福基础中级班","托福基础高级班"],["托福进阶班","托福进阶强化班","托福冲刺班"]],"bannerbg":"stepbanner2.png","imglist":["tuofu1.jpg","tuofu2.jpg","tuofu3.jpg","tuofu4.jpg","tuofu5.jpg","tuofu6.jpg","tuofu7.jpg"]},{"id":3,"name":"海外中学考试","menu":[["加拿大精英寄宿中学","美国精英中学","澳洲精英寄宿中学","香港精英寄宿中学"],["英国精英寄宿中学","新加坡政府公立学校"]],"bannerbg":"stepbanner3.png"},{"id":4,"name":"论文写作","menu":[["论文写作","海外生存英语","学术英语表达"]],"bannerbg":"stepbanner4.png"},{"id":5,"name":"国际课程","menu":[["IGCSE数学","A LEVEL物理","A LEVEL化学","A LEVEL数学","IGCSE物理","IGCSE化学"],["Calculus BC（微积分BC）","Statistics（统计学）","Calculus AB（微积分AB）"],["Computer science（计算机数学）","Biology（生物学）","Physics BC（物理BC）"],["Microeconomics（微观经济）","Macroeconomics（宏观经济学）"]],"bannerbg":"stepbanner5.png"},{"id":6,"name":"STEP数学","menu":[["阶梯数学考试STEP"]],"bannerbg":"stepbanner6.png"},{"id":7,"name":"英语基础课程","menu":[["English Mentor Program三级(FCE)","English Mentor Program二级(PET)","English Mentor Program一级(KET)"],["English Mentor Program五级(CPE)","English Mentor Program四级(CAE)"]],"bannerbg":"stepbanner7.png"}]
$(function(){
	// 导航菜单高度位置--填充多余部分
	var centerH = $("#menulist .center").height();
	console.log(centerH)
	var all_listH = $("#all_list").height()+35;
	if(centerH>all_listH){
		var yuH = centerH - all_listH
		var zpadding = yuH/14 + 5;
		console.log(zpadding)
		$("#menulist .left .list li").css("padding",zpadding+"px 10px")
	}
	
	




	var urlval = getUrlArgObject();
	if(urlval.language){
		var unit_id = parseInt(urlval.language)-1;
		tabcon(unit_id,languagejson)
		$("#all_list li").eq(unit_id).addClass("active").siblings("li").removeClass("active")
		var topval = $("#all_list li").eq(unit_id).position().top
		$(".left .listmenu").css({"top":topval+"px","display":"block"})
	}
	$("#all_list li").mouseover(function(){
		clearTimeout(timer)
		var beforeid = localStorage.getItem("indexsval")
		var indexs = $(this).index();

		$(this).addClass("active").siblings("li").removeClass("active")
		var topval = $(this).position().top
		// if(beforeid==indexs){
		// 	// alert(beforeid)
		// 	$(".left .listmenu").toggle()
		// }else{
			$(".left .listmenu").css({"top":topval+"px","display":"block"})
		// }
		tabcon(indexs,languagejson)

		localStorage.setItem("indexsval",indexs)

	})
	var eletarget = $("#all_list li span");
	var timer
	$(".left .listmenu").mouseover(function(){
		clearTimeout(timer)
		$(".left .listmenu").css({"display":"block"})
		
	})
	$(".left .listmenu").mouseout(function(){
		$(".left .listmenu").css({"display":"none"})
		
	})
	$("#all_list li").mouseout(function(){
		timer = setTimeout(function(){
			$(".left .listmenu").css({"display":"none"})
		},500)
	})

	// 点击中间顶部导航变化跳转
	$("#menulist .toplist").click(function(){
		var ids = $(this).attr("data-id");
		$("#all_list li").eq(ids).addClass("active").siblings("li").removeClass("active")
		var topval = $("#all_list li").eq(ids).position().top
		$(".left .listmenu").css({"top":topval+"px","display":"block"})
		tabcon(ids,languagejson)
	})


	
})
function tabcon(indexs,languagejson){
	menuarr = languagejson[indexs].menu;
	var listr = "";
	for (var i = 0; i < menuarr.length; i++) {
		var spanstr = "";
		for (var j = 0; j < menuarr[i].length; j++) {
			var pdfname = (indexs+1)+""+i+""+j;
			if(indexs==2){
				pdfname = 300;
			}else if(indexs==3){
				pdfname = 400;
			}else if(indexs==4){
				pdfname = 500;
			}else if(indexs == 6){
				pdfname = 700
			}
			
			if(indexs==5){
				spanstr += '<a href="#classbase" data-id="'+pdfname+'">'+menuarr[i][j]+'</a>'
			}else {
				spanstr += '<a href="pdf/'+pdfname+'.pdf" target="_blank" data-id="'+pdfname+'">'+menuarr[i][j]+'</a>'
			}
		}
		listr+='<li>'+spanstr+'</li>';
	}
	$(".left .listmenu ul").html(listr);
	// bannerbgimg切换
	$("#bannerbg").css("backgroundImage","url('img/"+languagejson[indexs].bannerbg+"')")
	
	if(indexs==5){
		$(".indexs5").css("display","block")
		$(".stepmatch").css("display","block")
	}else{
		$(".indexs5").css("display","none")
		$(".stepmatch").css("display","none")
	}
	// 论文写作
	if(indexs==3){
		$(".lunwrite").css("display","block")
	}else{
		$(".lunwrite").css("display","none")
	}
	// 国际课程 internal
	if(indexs==4){
		$(".internal").css("display","block")
	}else{
		$(".internal").css("display","none")
	}
	// 内容切换 <!-- 雅思 托福 -->
	if(indexs==0 || indexs == 1){
		
		$("#bannerbg .yasi-tuofu").css("display","block");
		$("#bannerbg .yasi-tuofu h2").text(languagejson[indexs].name);
		var imgtxt = ""
		if(indexs==0){
			imgtxt = "yasi"
		}else if(indexs==1){
			imgtxt = "tuofu"
		}
		var imgstr = '<div class="row"><div class="item col-md-3"><img src="img/'+imgtxt+'1.jpg" alt=""></div><div class="item col-md-3"><img src="img/'+imgtxt+'2.jpg" alt=""></div><div class="item col-md-3"><img src="img/'+imgtxt+'3.jpg" alt=""></div><div class="item col-md-3"><img src="img/'+imgtxt+'4.jpg" alt=""></div></div><div class="row"><div class="item col-md-3 col-md-offset-1"><img src="img/'+imgtxt+'5.jpg" alt=""></div><div class="item col-md-3"><img src="img/'+imgtxt+'6.jpg" alt=""></div><div class="item col-md-3"><img src="img/'+imgtxt+'7.jpg" alt=""></div></div>';
		$("#bannerbg .yasi-tuofu .yasi_items").html(imgstr)
	}else{
		$("#bannerbg .yasi-tuofu").css("display","none");
	}
	// 海外中学考试  英语基础
	if(indexs==2 || indexs == 6){
		$("#bannerbg .oversea-enbase").css("display","block");
		$(".oversea-enbase h2").text(languagejson[indexs].name);
		if(indexs==2){
			$("#overseascon").css("display","block")
			$("#enbasecon").css("display","none")
		}else if(indexs==6){
			$("#enbasecon").css("display","block")
			$("#overseascon").css("display","none")
		}
	}else {
		$("#bannerbg .oversea-enbase").css("display","none");
	}
}