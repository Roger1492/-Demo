// 位置切换
window.onload = function(){
	var jd_h_location = document.getElementById("jd-h-location")
	var location_text = document.getElementsByTagName("table")[0].getElementsByTagName("td");
	for(var i = 0; i < location_text.length; i++){
		location_text[i].addEventListener("click", function(){
			jd_h_location.innerHTML = this.innerHTML;
		}, false)
	}
}

//轮播图,未完成，自动轮播效果未完成
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}


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

}, false)
tab2.addEventListener("mouseover", function(){
	showtab1.style.display = "none";
	showtab2.style.display = "block";
	tabhr.style.transform = "translateX(47px)";
	tabhr.style.transition = "all .2s";
}, false)

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
}, false)
plane_ticket.addEventListener("mouseover", function(){
	money1.style.display = "none";
	plane1.style.display = "block";
	hotel1.style.display = "none";
	game1.style.display = "none";
}, false)
hotel.addEventListener("mouseover", function(){
	money1.style.display = "none";
	plane1.style.display = "none";
	hotel1.style.display = "block";
	game1.style.display = "none";
}, false)
game.addEventListener("mouseover", function(){
	money1.style.display = "none";
	plane1.style.display = "none";
	hotel1.style.display = "none";
	game1.style.display = "block";
}, false)

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
}, false)
rpgs_add.addEventListener("mouseover",function(){
	phone_money_add1.style.display = "none";
	rpgs_add1.style.display = "block";
	other_add1.style.display = "none";
}, false)
other_add.addEventListener("mouseover",function(){
	phone_money_add1.style.display = "none";
	rpgs_add1.style.display = "none";
	other_add1.style.display = "block";
}, false)

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
}, false)
international_plane.addEventListener("mouseover", function(){
	form1.style.display = "none";
	form2.style.display = "block";
	form3.style.display = "none";
}, false)
other_plane.addEventListener("mouseover",function(){
	form1.style.display = "none";
	form2.style.display = "none";
	form3.style.display = "block";
}, false)