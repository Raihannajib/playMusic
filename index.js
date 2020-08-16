
document.querySelectorAll(".bum").forEach(function (btn) {
   btn.addEventListener("click", function () {
     makeSound(this.innerHTML.toLowerCase());
   })});

document.addEventListener("keypress", function(event) {
  makeSound(event.key.toLowerCase());
});

function audio(path) {
  return new Audio(path);
}

function makeSound(key) {

  switch (key) {
    case "q":
      audio("sounds/tom-1.mp3").play();
      break;

    case "w":
      audio("sounds/tom-2.mp3").play();
      break;

    case "e":
      audio("sounds/tom-3.mp3").play();
      break;

    case "r":
      audio("sounds/tom-4.mp3").play();
      break;

    case "t":
      audio("sounds/snare.mp3").play();
      break;

    case "y":
      audio("sounds/crash.mp3").play();
      break;

  }
}

