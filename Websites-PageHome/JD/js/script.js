// 位置切换
var jd_h_location = document.getElementById("jd_h_location");
var table_location = document.getElementById("table_location").querySelectorAll("td");
for(var i = 0; i < table_location.length; i++){
	table_location[i].addEventListener("click", function(){
		jd_h_location.innerHTML = this.innerHTML;
	}, false)
}

var jd_slide_banner = document.getElementsByClassName("jd_slide_banner")[0];
var jd_imgs = document.getElementsByClassName("jd_imgs")[0];
var jd_imgs_imgs = document.getElementsByClassName("jd_imgs")[0].getElementsByTagName("img");
var jd_slide_prev = document.getElementsByClassName("jd_slide_prev")[0];
var jd_slide_next = document.getElementsByClassName("jd_slide_next")[0];
jd_slide_next.onclick = function(){
	jd_imgs_imgs
};

// jd_new tab 切换和下划线移动
// 这个以后必须要改，这个代码太烂了。
var tab1 = document.getElementsByClassName("jd_tabs")[0].getElementsByTagName("a")[0];
var tab2 = document.getElementsByClassName("jd_tabs")[0].getElementsByTagName("a")[1];
var showtab1 = document.getElementsByClassName("jd_tabs_n1")[0];
var showtab2 = document.getElementsByClassName("jd_tabs_n2")[0];
var tabhr = document.getElementsByClassName("jd_tabs")[0].getElementsByTagName("hr")[0];
tab1.addEventListener("mouseover", function(){
	showtab1.style.display = "block";
	showtab2.style.display = "none";
	tabhr.style.transform = "translateX(0px)";
	tabhr.style.transition = "all .2s";

}, false);
tab2.addEventListener("mouseover", function(){
	showtab1.style.display = "none";
	showtab2.style.display = "block";
	tabhr.style.transform = "translateX(47px)";
	tabhr.style.transition = "all .2s";
}, false);

// jd_service 服务tab切换
// 这个以后必须要改，这个代码太烂了。
var phone_money = document.getElementById("phone_money");
var plane_ticket = document.getElementById("plane_ticket");
var hotel = document.getElementById("hotel");
var game = document.getElementById("game");
var money1 = document.getElementsByClassName("jd_s_1")[0];
var plane1 = document.getElementsByClassName("jd_s_2")[0];
var hotel1 = document.getElementsByClassName("jd_s_3")[0];
var game1 = document.getElementsByClassName("jd_s_4")[0];
phone_money.addEventListener("mouseover", function(){
	money1.style.display = "block";
	plane1.style.display = "none";
	hotel1.style.display = "none";
	game1.style.display = "none";
}, false);
plane_ticket.addEventListener("mouseover", function(){
	money1.style.display = "none";
	plane1.style.display = "block";
	hotel1.style.display = "none";
	game1.style.display = "none";
}, false);
hotel.addEventListener("mouseover", function(){
	money1.style.display = "none";
	plane1.style.display = "none";
	hotel1.style.display = "block";
	game1.style.display = "none";
}, false);
game.addEventListener("mouseover", function(){
	money1.style.display = "none";
	plane1.style.display = "none";
	hotel1.style.display = "none";
	game1.style.display = "block";
}, false);

// 话费tab切换
var jd_s_1 = document.getElementsByClassName("jd_s_1")[0].getElementsByTagName("div")[0];
var phone_money_add = jd_s_1.getElementsByTagName("a")[0];
var rpgs_add = jd_s_1.getElementsByTagName("a")[1];
var other_add = jd_s_1.getElementsByTagName("a")[2];
var phone_money_add1 = document.getElementsByClassName("jd_s_1")[0].getElementsByTagName("div")[1];
var rpgs_add1 = document.getElementsByClassName("jd_s_1")[0].getElementsByTagName("div")[2];
var other_add1 = document.getElementsByClassName("jd_s_1")[0].getElementsByTagName("div")[3];
phone_money_add.addEventListener("mouseover",function(){
	phone_money_add1.style.display = "block";
	rpgs_add1.style.display = "none";
	other_add1.style.display = "none";
}, false);
rpgs_add.addEventListener("mouseover",function(){
	phone_money_add1.style.display = "none";
	rpgs_add1.style.display = "block";
	other_add1.style.display = "none";
}, false);
other_add.addEventListener("mouseover",function(){
	phone_money_add1.style.display = "none";
	rpgs_add1.style.display = "none";
	other_add1.style.display = "block";
}, false);

// 机票tab切换
var jd_s_2 = document.getElementsByClassName("jd_s_2")[0].getElementsByTagName("div")[0];
var country_plane = jd_s_2.getElementsByTagName("a")[0];
var international_plane = jd_s_2.getElementsByTagName("a")[1];
var other_plane = jd_s_2.getElementsByTagName("a")[2];
var form1 = document.getElementsByClassName("form1")[0];
var form2 = document.getElementsByClassName("form2")[0];
var form3 = document.getElementsByClassName("form3")[0];
country_plane.addEventListener("mouseover", function(){
	form1.style.display = "block";
	form2.style.display = "none";
	form3.style.display = "none";
}, false);
international_plane.addEventListener("mouseover", function(){
	form1.style.display = "none";
	form2.style.display = "block";
	form3.style.display = "none";
}, false);
other_plane.addEventListener("mouseover",function(){
	form1.style.display = "none";
	form2.style.display = "none";
	form3.style.display = "block";
}, false);

// 酒店tab切换
var jd_s_3_1 = document.getElementsByClassName("jd_s_3_1")[0];
var jd_s_3_2 = document.getElementsByClassName("jd_s_3_2")[0];
var form4 = document.getElementById("form4");
var form5 = document.getElementById("form5");
jd_s_3_1.addEventListener("mouseover", function(){
	form4.style.display = "block";
	form5.style.display = "none";
}, false);
jd_s_3_2.addEventListener("mouseover", function(){
	form4.style.display = "none";
	form5.style.display = "block";
}, false);

// 游戏tab切换
var game_tab = document.getElementById("game_tab");
var game_tab1 = game_tab.getElementsByTagName("a")[0];
var game_tab2 = game_tab.getElementsByTagName("a")[1];
var game_tab3 = game_tab.getElementsByTagName("a")[2];
var game_content1 = document.getElementsByClassName("game_content1")[0];
var game_content2 = document.getElementsByClassName("game_content2")[0];
var game_content3 = document.getElementsByClassName("game_content3")[0];
game_tab1.addEventListener("mouseover", function(){
	game_content1.style.display = "block";
	game_content2.style.display = "none";
	game_content3.style.display = "none";
}, false);
game_tab2.addEventListener("mouseover", function(){
	game_content1.style.display = "none";
	game_content2.style.display = "block";
	game_content3.style.display = "none";
}, false);
game_tab3.addEventListener("mouseover", function(){
	game_content1.style.display = "none";
	game_content2.style.display = "none";
	game_content3.style.display = "block";
}, false);

// jd倒计时
window.onload = function(){
	function run_countdown(){
		var jd_countdown = document.getElementById("jd_countdown");
		var jd_countdown_d = document.getElementsByClassName("jd_countdown_d")[0];
		var jd_countdown_h = document.getElementsByClassName("jd_countdown_h")[0];
		var jd_countdown_m = document.getElementsByClassName("jd_countdown_m")[0];
		var jd_countdown_s = document.getElementsByClassName("jd_countdown_s")[0];
		var countdowun = new Date(2017,4,18,0,0,0).getTime() - 	Date.now();
		var days = addZero(Math.floor(countdowun / 1000 / 60 / 60 /24));
		var hours = addZero(Math.floor(countdowun / 1000 / 60 / 60 % 24));
		var minutes = addZero(Math.floor(countdowun / 1000 / 60 % 60));
		var seconds = addZero(Math.floor(countdowun / 1000 % 60));
		jd_countdown_d.innerHTML = days;
		jd_countdown_h.innerHTML = hours;
		jd_countdown_m.innerHTML = minutes;
		jd_countdown_s.innerHTML = seconds;

		function addZero(n){
			if(n < 10){
				return "0" + n;
			}
			return "" + n;
		}
	}
	setInterval(run_countdown, 1000);
	run_countdown();
};

// jd_box1 轮播图

// scrollHeader 下拉
var scrollHeader = document.getElementById("scrollHeader");
document.body.onscroll = function(){
	scrollHeader.style.transition = "all .5s";
	if(document.body.scrollTop > 500){
		scrollHeader.style.top = "0px";
	}
	if(document.body.scrollTop < 500){
		scrollHeader.style.top = "-52px";
	}
};

// $(function(){
// 	$("#jd_box2_slide1 > div").click(function(){
// 		$(this).attr({"display": "inline-block"});
// 		$("#jd_box2_slide1 > div").not(this).attr({"display":"none"});
// 	})
// })
