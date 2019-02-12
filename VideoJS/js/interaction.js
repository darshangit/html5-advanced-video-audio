// Variables
var initialPlay = false;
var menuIn = true;

// Time Variables
var currentTime;
var halfwayPoint;
var durationTime;

var video1;

videojs('video1').ready(function(){

	video1 = videojs('video1');

	this.on('loadedmetadata', function(){
		alert(this.duration())
	})
	this.on('timeupdate', function(){
		console.log(this.currentTime())
	})

	video1.markers({
		markerStyle: {
			'border-radius': '20px',
			'background-color': 'blue'
		},
		markers: [
			{time: 5, text: "First Marker"},
			{time: 10, text: "Second Marker"}
		],
		onMarkerClick: function(marker){
			alert(marker.text)
		},
		onMarkerReached: function(marker){
			if(marker.text == 'First Marker'){
				$("#modal1").modal('show');
			}
		}
	})
})

// Animate in menu
function animateMenu(){
	// video1.play();
	// if (menuIn) {
	// 	$('.menu').animate({right: "0"}, 500);
	// 	menuIn = false;
	// } else{
	// 	$('.menu').animate({right: "-405px"}, 500);
	// 	menuIn = true;
	// }
}

// Jump to point
function jumpToPoint(time){
	
}

function updateTime(time){
	video1.currentTime(time)
	video1.play();
}

function muteAudio(){
	var isVloumeMuted = video1.muted();

	if(isVloumeMuted){
		video1.muted(false)
	}else{
		video1.muted(true)
	}
}

function togglePlay(){
	var isPaused = video1.paused();
	var remainingTime = video1.remainingTime();
	if(isPaused){
		video1.play()
		video1.requestFullscreen();
	}else{
		video1.pause();
	}
}

// Modal Show
$(document).on('show.bs.modal','#modal1', function () {
	video1.pause();
});

// Modal Hide
$(document).on('hide.bs.modal','#modal1', function () {
	video1.play();
});