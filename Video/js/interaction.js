//variable
var video1 = document.getElementById('video1');
var initialPlay = false;
var menuIn = true;
//video load
video1.onloadedmetadata = function() {};

video1.onplay = function() {
  if (!initialPlay) {
    initialPlay = true;
  }
};

video1.onpause = function() {
  // showModal('new text for the modal!')
};

video1.onended = function() {
  alert('Video has ended');
};

// video1.oncanplay = function (){
//     alert('Video is ready!')
// }

//toggleVideo
function toggleVideo() {
  if (!video1.paused) {
    document.getElementById('play_pause').src = 'media/play.png';
    video1.pause();
  } else {
    document.getElementById('play_pause').src = 'media/pause.png';
    video1.play();
  }
}

//seeking
video1.onseeked = function() {};

//mute audio
function muteAudio() {
  if (!video1.muted) {
    video1.muted = true;
    document.getElementById('playBtn').style.backgroundImage =
      'url(media/audio_mute.png)';
  } else {
    video1.muted = false;
    document.getElementById('playBtn').style.backgroundImage =
      'url(media/audio_up.png)';
  }
}

//animatemenu
function animateMenu() {
  if (menuIn) {
    $('.menu').animate({ right: "0" }, 500);
    menuIn = false;
  }else{
    $('.menu').animate({ right: "-405px" }, 500);
    menuIn = true
  }
}

//jump to point
function jumpToPoint(time){
//    var jumpTo = document.getElementById(time.id);
//    video1.currentTime = jumpTo.dataset.jumpto;

video1.currentTime = time;
}

//load video
function loadVideo(e){
    video1.src = e;
    animateMenu();
    video1.play();
}
//time update
video1.ontimeupdate = function() {
  console.log('Time is updated', Math.round(video1.currentTime));
};

//page loaded
function pageLoaded() {}

function showModal(e) {
  document.getElementById('modalText').innerHTML = e;
  $('#modal1').modal('show');
}

$(document).on('show.bs.modal', '#modal1', function() {
  video1.pause();
  document.getElementById('play_pause').src = 'media/play.png';
});

$(document).on('hide.bs.modal', '#modal1', function() {
  video1.play();
  document.getElementById('play_pause').src = 'media/pause.png';
});
