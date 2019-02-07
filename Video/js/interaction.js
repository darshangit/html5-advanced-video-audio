//variable
var video1 = document.getElementById('video1');
var initialPlay = false;

//video load
video1.onloadedmetadata = function (){

}

video1.onplay = function() {
    if(!initialPlay){
        initialPlay = true;
    }
}

video1.onpause = function() {
}

video1.onended = function(){
    alert('Video has ended');
}

// video1.oncanplay = function (){
//     alert('Video is ready!')
// }

//toggleVideo
function toggleVideo() {
    if(!video1.paused){
        document.getElementById('play_pause').src='media/play.png';
        video1.pause();
    }else{
        document.getElementById('play_pause').src='media/pause.png';
        video1.play();
    }
}

//page loaded
function pageLoaded() {
}

function showModal() {
    $('#modal1').modal('show');
}

$(document).on('show.bs.modal','#modal1',function () {

});

$(document).on('hide.bs.modal','#modal1',function(){

});