var video = document.getElementById("player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window");
	let video = document.querySelector("#player1");
	video.autoplay = false;
	video.loop = false;
	console.log("Auto play is set to " + video.autoplay);
	console.log("Loop is set to " + video.loop);
});

var vol = document.getElementById("slider");

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	video.volume = vol.value/100;
	document.getElementById("volume").innerHTML = video.volume*100 + "%";
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow down video");
	video.playbackRate *= .90;
	console.log("Speed is " + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed up video");
	video.playbackRate *= 10/9;
	video.playbackRate = Math.round(video.playbackRate * 100) / 100;
	console.log("Speed is " + video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip ahead");
	video.currentTime += 10;
	if (video.currentTime >= video.duration){
		video.currentTime = 0;
	}
	console.log("Video current time is " + video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function() {
	if (!video.muted){
		document.getElementById("mute").innerHTML = "Unmute";
		video.muted = true;
		console.log("Mute video");
	}
	else{
		document.getElementById("mute").innerHTML = "Mute";
		video.muted = false;
		console.log("Unmute video");
	}
});

vol.addEventListener("input", function(){
	video.volume = vol.value/100;
	console.log("Adjusting volume to " + video.volume*100 + "%");
	document.getElementById("volume").innerHTML = video.volume*100 + "%";
});

document.querySelector("#vintage").addEventListener("click", function() {
	video.className = "video oldSchool"
	console.log("Old School");
});

document.querySelector("#orig").addEventListener("click", function() {
	video.className = "video"
	console.log("Original");
});

