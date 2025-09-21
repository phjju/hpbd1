function playSong(songUrl) {
    var audioPlayer = document.getElementById('audio-player');
    audioPlayer.src = songUrl;
    audioPlayer.play();
}
