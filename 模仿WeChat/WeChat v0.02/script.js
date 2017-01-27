/**
 * Created by Roger on 01/26/2017 026.
 */

// 通知栏流量
var sgms1 = document.getElementsByClassName("sgms")[0].getElementsByTagName("span")[0];
var sgms2 = document.getElementsByClassName("sgms")[1].getElementsByTagName("span")[0];
setInterval(gSgms1, 1000);
setInterval(gSgms2, 1000);
gSgms1();
gSgms2();
function gSgms1() {
  var rSgms = Math.floor(Math.random()*1000+1);
  sgms1.innerHTML = rSgms;
}
function gSgms2() {
  var rSgms = Math.floor(Math.random()*1000+1);
  sgms2.innerHTML = rSgms;
}

// 通知栏时间
var times1 = document.getElementsByClassName("times")[0];
var times2 = document.getElementsByClassName("times")[1];
setInterval(gTime1, 1000);
gTime1();
  function gTime1() {
    var date = new Date();
    var hours = addZero(date.getHours());
    var minutes = addZero(date.getMinutes());
    function addZero(n){
      if(n < 10)
        return "0" + n;
      return ""+n;
    }
    times1.innerHTML = hours + ":" + minutes;
}
setInterval(gTime2, 1000);
gTime2();
function gTime2() {
  var date = new Date();
  var hours = addZero(date.getHours());
  var minutes = addZero(date.getMinutes());
  function addZero(n){
    if(n < 10)
      return "0" + n;
    return ""+n;
  }
  times2.innerHTML = hours + ":" + minutes;
}