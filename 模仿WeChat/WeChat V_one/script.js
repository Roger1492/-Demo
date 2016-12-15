$(function() {
	$("button").click(function(event) {
		// var input = $("input");
		// var show = $(".show");
		// var createNav = document.createElement("nav");
		// createNav.addClass("content");
		// var createImg = document.createElement("img");
		// createImg.src = "icon.jpg";
		// var createP = document.createElement("p");
		// createNav.appendChild(createImg);
		// createNav.appendChild(createP);
		// show.appendChild(createNav);
		// createP.innerHTML = inpug.value;
		var Input = document.getElementsByTagName("input")[0];
		var message = "<nav class='content'><img src='icon.jpg' alt=''><p>" + Input.value  + "</p></nav>";
		$(".show").append(message);
		Input.value = "";
	});
});