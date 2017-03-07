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