var buttons = document.querySelectorAll("button");

var audio0 = new Audio("sounds/tom-1.mp3");
var audio1 = new Audio("sounds/tom-2.mp3");
var audio2 = new Audio("sounds/tom-3.mp3");
var audio3 = new Audio("sounds/tom-4.mp3");
var audio4 = new Audio("sounds/snare.mp3");
var audio5 = new Audio("sounds/crash.mp3");
var audio6 = new Audio("sounds/kick-bass.mp3");

function buttonclass(key){
  return document.querySelector("."+key);
}
document.addEventListener("keydown", function (event){
    makeSound(event.key);
    buttonanimaton(event.key);
});
document.addEventListener("keyup", function (event){
    buttonanimaton(event.key);
});

for(var i=0;i<buttons.length;i++){

  buttons[i].addEventListener("mousedown", function(){
    var btext = this.textContent;
    buttonanimaton(btext);
    makeSound(btext);
  });
  buttons[i].addEventListener("mouseup", function(){
    var btext = this.textContent;
    buttonclass(btext).classList.remove("pressed");
  });
}

function buttonanimaton(key){
  switch (key) {
    case "w":
      buttonclass("w").classList.toggle("pressed");
      break;

    case "a":
      buttonclass("a").classList.toggle("pressed");
      break;

    case "s":
      buttonclass("s").classList.toggle("pressed");
      break;

    case "d":
      buttonclass("d").classList.toggle("pressed");
      break;

    case "j":
      buttonclass("j").classList.toggle("pressed");
      break;

    case "k":
      buttonclass("k").classList.toggle("pressed");
      break;

    case "l":
      buttonclass("l").classList.toggle("pressed");
      break;


    default: console.log(key);


  }
}
function makeSound(key) {

  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;

    case "j":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;

    case "k":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;

    case "l":
      var kick = new Audio('sounds/kick-bass.mp3');
      kick.play();
      break;


    default: console.log(key);

  }
}
