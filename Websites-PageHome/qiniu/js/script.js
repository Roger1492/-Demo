setInterval(bigSlider, 3000);
setInterval(smallSlider, 3000);
var wrapshow = document.getElementsByClassName("wrap-show")[0];
var smallshow = document.getElementsByClassName("small-show")[0];
var number1 = 0;
var number2 = 0;

function bigSlider() {
    number1 += 100;
    wrapshow.style.transform = "translate(-" + number1 + "vw)";
    wrapshow.style.transition = "all 1s";
    if (number1 == 300) {
        number1 = -100;
    }
}

function smallSlider() {
    number2 += 400;
    smallshow.style.transform = "translate(-" + number2 + "px)";
    smallshow.style.transition = "all 1s";
    if (number2 == 1200) {
        number2 = -400;
    }
}

$(function(){
    $(".iSliderh2").click(function(){
        $(this).next().slideToggle(300);
    })
})