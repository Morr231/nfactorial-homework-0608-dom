const audio = document.getElementById("audio");
const audioButton = document.getElementById("audio-button");
const playerImage = document.getElementById("player-img");

const video = document.getElementById("video");
const videoButton = document.getElementById("video-button");

audioButton.addEventListener("click", () => {
    if (audio.paused) {
        audio.play();
        video.play();
        playerImage.style.animation = "13s infinite rotate linear";
    } else {
        audio.pause();
        video.pause();
        playerImage.style.animation = "";
    }
});

videoButton.addEventListener("click", () => {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
});

const sounds = document.getElementsByClassName("sound");
const soundAudios = document.getElementsByClassName("sound-audio");

window.addEventListener("keyup", (event) => {
    [...sounds].forEach((sound, index) => {
        if (event.key == sound.innerText.toLowerCase()) {
            if (soundAudios[index].paused) {
                soundAudios[index].play();
                video.play();
                playerImage.style.animation = "13s infinite rotate linear";
            } else {
                soundAudios[index].pause();
                video.pause();
                playerImage.style.animation = "";
            }
        }
    });
});
