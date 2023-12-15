var buttons = document.querySelectorAll(".drum");

for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
        var buttonSelected = this.innerHTML;
        action(buttonSelected);
    });
}

document.addEventListener("keydown", function(event) {
    var keyPressed = event.key;
    if ("wasdjkl".includes(keyPressed)) {
        action(keyPressed);
    }
});

function sound(sound_path) {
    var sound = new Audio(sound_path);
    sound.play();
}

function action(key) {
    switch (key) {
        case "w":
            sound("sounds/tom-1.mp3");
            break;
        case "a":
            sound("sounds/tom-2.mp3");
            break;
        case "s":
            sound("sounds/tom-3.mp3");
            break;
        case "d":
            sound("sounds/tom-4.mp3");
            break;
        case "j":
            sound("sounds/snare.mp3");
            break;
        case "k":
            sound("sounds/crash.mp3");
            break;
        case "l":
            sound("sounds/kick-bass.mp3");
            break;
    }
    var activeButton = document.querySelector("." + key);
    if (activeButton) {
        activeButton.classList.add("pressed");

        setTimeout(function() {
            activeButton.classList.remove("pressed");
        }, 70);
    }
}
