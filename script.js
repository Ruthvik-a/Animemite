const video = document.getElementById("animePlayer");
const rewindBtn = document.getElementById("rewind");
const skipBtn = document.getElementById("skip");
const qualitySelect = document.getElementById("quality");
const subtitleBtn = document.getElementById("subtitles");
const fullscreenBtn = document.getElementById("fullscreen");

rewindBtn.addEventListener("click", () => {
    video.currentTime -= 10;
});

skipBtn.addEventListener("click", () => {
    video.currentTime += 10;
});

fullscreenBtn.addEventListener("click", () => {
    if (!document.fullscreenElement) {
        video.requestFullscreen();
    } else {
        document.exitFullscreen();
    }
});

subtitleBtn.addEventListener("click", () => {
    alert("Subtitles feature coming soon!");
});

qualitySelect.addEventListener("change", (event) => {
    alert("Switching to " + event.target.value);
});
