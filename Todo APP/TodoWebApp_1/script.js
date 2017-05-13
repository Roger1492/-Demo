var inputs = document.getElementsByTagName("input")[0];
var close = document.getElementsByClassName("close");
var listNumber = document.getElementsByClassName("list_number")[0];
var pElement = document.getElementsByTagName("p");
var wrongTips = document.getElementsByClassName("wrongTips")[0];

inputs.addEventListener("keypress", function(e) {
    if (window.event.keyCode == 13) {
        if (inputs.value === "") {
            wrongTips.innerHTML = "Sorry! it's shouldn't be empty.";
            return false;
        } else if(inputs.value.length > 40){
          wrongTips.innerHTML = "Sorry! it's should less than 40 characters.";
            return false;
        } else {
          var newtodolist = "<p>" + this.value + "<span class='close'>&times;</span></p>";
            this.insertAdjacentHTML("afterend", newtodolist);
            this.value = "";
            wrongTips.innerHTML = "";
            listNumber.innerHTML = pElement.length;

            DeleteAndNull();
        }
    }
}, false);
DeleteAndNull();

function DeleteAndNull() {
    for (var i = 0; i < close.length; i++) {
        close[i].addEventListener("click", function() {
            this.parentElement.remove();
            listNumber.innerHTML = pElement.length;
        }, false);
    }
}
