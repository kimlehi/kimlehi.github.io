var width = document.documentElement.clientWidth - 50;
var height = document.documentElement.clientHeight;
function Flake(){
	var flake = document.createElement('img');
	var left = width * Math.random();
	var top = height * Math.random();
	
	flake.src = 'img/mine/sakura.png';
	flake.setAttribute("class","floater");
	flake.style.transform = 'scale(' + (Math.random() * 0.2 + 0.2) + ')';
	flake.style.position = 'absolute';
	flake.style.left = left + 'px';
	flake.style.top = top + 'px';
	
	document.body.appendChild(flake);
	
	function down(){
		top = top > height? -100 : top + 6 * Math.random();
		left = left > width ? -100 : left + 3 * Math.random();
		flake.style.top = top + 'px';
		flake.style.left = left + 'px';
	}
	
	setInterval(down, 50);
}

for(var i = 0;i < 50;i++){
	new Flake();
}

$(function(){
	$(".main_box_tab li").click(function(){
		$(".main_box_tab li").removeClass("on");
		$(this).addClass("on");
		var id = $(this).attr("id").replace("_btn","");
		$(".main_box_content").removeClass("content-on");
		$("#"+id).addClass("content-on");
		
		if($(this).attr("id") != "fiveday_content_btn"){
			$(".floater").remove();
		}else{
			$(".floater").remove();
			for(var i = 0;i < 50;i++){
				new Flake();
			}
		}
	});
	
	$(".fiveday_content_top>div").click(function(){
		var day = $(this).find("div").eq(0).html();
		var id = $(this).attr("id");
		var map = {
			"qing" : "sakura.png",
			"daxue" : "snow.png",
			"xiaoyu": "rain.png",
			"dayu": "rain.png",
			"yin": "sakura.png"
		};
		var colorBegin = {
			"qing" : "#1E90FF",
			"daxue" : "#000",
			"xiaoyu": "#111",
			"dayu": "#222",
			"yin": "#333"
		};
		var colorEnd = {
			"qing" : "#87CEFA",
			"daxue" : "#fff",
			"xiaoyu": "#eee",
			"dayu": "#ddd",
			"yin": "#ccc"
		};
		$(".fiveday_content_bottom>div").eq(0).html(day.substr(day.length-3,3));
		$(".fiveday_content_bottom>div").eq(1).find("img").attr("src","img/days/"+id+".png");
		$(".fiveday_content_bottom>div").eq(2).html($(this).find("div").eq(2).html());
		$(".fiveday_content_bottom>div").eq(3).html($(this).find("div").eq(3).html());
		var src = 'img/mine/'+map[id];
		$(".floater").attr("src",src);
		$(".main").css({
			'background':'-moz-linear-gradient(top, '+colorBegin[id]+', '+colorEnd[id]+')',
			'background':'-webkit-linear-gradient(top, '+colorBegin[id]+', '+colorEnd[id]+')'
		});
		
	})
})