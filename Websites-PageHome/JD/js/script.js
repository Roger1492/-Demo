// window.onload = function(){
// 	var jd_h_location = document.getElementById("jd-h-location");
// 	var location_text = document.getElementsByTagName("table")[0];
// 	location_text.addEventListener("click", function(e){
// 		jd_h_location.innerHTML = e.target.innerHTML;
// 		// e.stopPropagation();
// 	}, false)
// }
window.onload = function(){
	var jd_h_location = document.getElementById("jd-h-location")
	var location_text = document.getElementsByTagName("table")[0].getElementsByTagName("td");
	for(var i = 0; i < location_text.length; i++){
		location_text[i].addEventListener("click", function(){
			jd_h_location.innerHTML = this.innerHTML;
		}, false)
	}
}