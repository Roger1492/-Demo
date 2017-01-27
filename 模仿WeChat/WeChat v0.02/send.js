/**
 * Created by Roger on 01/27/2017 027.
 */
var sendBtnOne = document.querySelector("#sendBtnOne");
var sendBtnTwo = document.querySelector("#sendBtnTwo");
var sendTextOne = document.querySelector("#sendTextOne");
var sendTextTwo = document.querySelector("#sendTextTwo");
var show1 = document.getElementById("show1");
var show2 = document.getElementById("show2");

sendBtnOne.addEventListener("click", function(){
  var createNav = document.createElement("nav");
  var createImg = document.createElement("img");
  var createP = document.createElement("p");

  createNav.className = "person1";
  createImg.src = "imgs/person_one.jpg";
  show1.appendChild(createNav);
  createNav.appendChild(createImg);
  createNav.appendChild(createP);
  createP.innerHTML = sendTextOne.value;

  var createNav2 = createNav.cloneNode(true); // 复制节点
  show2.appendChild(createNav2);
  sendTextOne.value = null;
}, false);

sendBtnTwo.addEventListener("click", function(){
  var createNav = document.createElement("nav");
  var createImg = document.createElement("img");
  var createP = document.createElement("p");

  createNav.className = "person2";
  createImg.src = "imgs/person_two.jpg";
  show2.appendChild(createNav);
  createNav.appendChild(createImg);
  createNav.appendChild(createP);
  createP.innerHTML = sendTextTwo.value;

  var createNav1 = createNav.cloneNode(true);
  show1.appendChild(createNav1);
  sendTextTwo.value = null;
}, false);

sendTextOne.addEventListener("keypress", function(e){
  if(e.keyCode == 13){
    var createNav = document.createElement("nav");
    var createImg = document.createElement("img");
    var createP = document.createElement("p");

    createNav.className = "person1";
    createImg.src = "imgs/person_one.jpg";
    show1.appendChild(createNav);
    createNav.appendChild(createImg);
    createNav.appendChild(createP);
    createP.innerHTML = sendTextOne.value;

    var createNav2 = createNav.cloneNode(true); // 复制节点
    show2.appendChild(createNav2);
    sendTextOne.value = null;
  }
}, false);

sendTextTwo.addEventListener("keypress", function(e){
  if(e.keyCode == 13){
    var createNav = document.createElement("nav");
    var createImg = document.createElement("img");
    var createP = document.createElement("p");

    createNav.className = "person2";
    createImg.src = "imgs/person_two.jpg";
    show2.appendChild(createNav);
    createNav.appendChild(createImg);
    createNav.appendChild(createP);
    createP.innerHTML = sendTextTwo.value;

    var createNav1 = createNav.cloneNode(true);
    show1.appendChild(createNav1);
    sendTextTwo.value = null;
  }
}, false);