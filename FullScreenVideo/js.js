var video = document.getElementById('myVideo');
var button = document.getElementById('myBtn');
function buttonClicked() {
    if(video.paused){
        video.play();
        button.innerHTML="PAUSE"
    }
    else{
        video.pause();
        button.innerHTML="PLAY";
    }
}