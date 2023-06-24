var numberOfDrums = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrums; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttomAnimation(buttonInnerHTML);
  });
}
document.addEventListener("keydown", function (event) {
  makeSound(event.key);
  buttomAnimation(event.key);
});

function makeSound(key) {
  switch (key) {
    case "W":
      var audioW = new Audio("tom-1.mp3");
      audioW.play();
      break;
    case "A":
      var audioA = new Audio("tom-2.mp3");
      audioA.play();
      break;
    case "S":
      var audioS = new Audio("tom-3.mp3");
      audioS.play();
      break;
    case "D":
      var audioD = new Audio("tom-4.mp3");
      audioD.play();
      break;
    case "J":
      var audioJ = new Audio("crash.mp3");
      audioJ.play();
      break;
    case "K":
      var audioK = new Audio("kick-bass.mp3");
      audioK.play();
      break;
    case "L":
      var audioL = new Audio("snare.mp3");
      audioL.play();
      break;
    default:
      break;
  }
}

function buttomAnimation(currentkey) {
  var activeButton = document.querySelector("." + currentkey);
  activeButton.classList.add("pressed");
}
