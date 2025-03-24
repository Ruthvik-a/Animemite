const player = document.getElementById("animePlayer");

function skip(seconds) {
    player.currentTime += seconds;
}

function changeQuality() {
    let quality = document.getElementById("qualitySelect").value;
    player.src = quality;
    player.play();
}

function toggleSubtitles() {
    let tracks = player.textTracks[0];
    tracks.mode = tracks.mode === "showing" ? "hidden" : "showing";
}

function toggleFullScreen() {
    if (!document.fullscreenElement) {
        player.requestFullscreen();
    } else {
        document.exitFullscreen();
    }
}
