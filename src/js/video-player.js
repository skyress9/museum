const btnPlay = document.querySelector('.video__play');
const videoScreen = document.querySelector('.video__main');
const btnBigPlay = document.querySelector('.video__frame');
const video = document.querySelector('.video__stream');
const valueVolume = document.querySelector('.video__progress_volume');
const valueProgress = document.querySelector('.video__progress');
const btnVolume = document.querySelector('.video__volume');
const btnFs = document.querySelector('.video__fullscreen img');
const videoPlayer = document.querySelector('.video__player');
const videoCoef = document.querySelector('.video__coef');
let pressed = new Set();


function videoPlay() {
  if (video.paused) {
    video.play();
    btnBigPlay.style.opacity = 0;
    btnPlay.style.backgroundImage = 'url("./assets/svg/video/pause.svg")';
  } else {
    video.pause();
    btnBigPlay.style.opacity = 1;
    btnPlay.style.backgroundImage = 'url("./assets/svg/video/frame.svg")';
  }
}

function onFs() {
  videoPlayer.classList.toggle('video__player_fs')
  video.classList.toggle('video__stream_fs')
  videoScreen.classList.toggle('video__main_fs')
}

function changeVolume() {
  valueVolume.value == 0 ? true : btnVolume.classList.toggle('muted');
  video.volume == 0 ? valueVolume.value == 0 ? true : video.volume = valueVolume.value / 100 : video.volume = 0;
}

function changeFs() {
  if (!document.fullscreenElement) {
    videoPlayer.requestFullscreen();
    onFs();
  } else {
    document.exitFullscreen();
    onFs();
  }
}

btnPlay.addEventListener('click', videoPlay);
videoScreen.addEventListener('click', videoPlay);

valueVolume.addEventListener('input', () => {
  video.volume = valueVolume.value / 100;

  valueVolume.value == 0 ? btnVolume.classList.add('muted') : btnVolume.classList.remove('muted');
  valueVolume.style.background = `linear-gradient(to right, #710707 0%, #710707 ${valueVolume.value }%, #C4C4C4 ${valueVolume.value }%, #C4C4C4 100%)`;
})

video.addEventListener('timeupdate', () => {
  valueProgress.value = video.currentTime / video.duration * 100;
  valueProgress.style.background = `linear-gradient(to right, rgb(113, 7, 7) 0%, rgb(113, 7, 7) ${valueProgress.value}%, rgb(196, 196, 196) ${valueProgress.value}%, rgb(196, 196, 196) 100%)`;
});

valueProgress.addEventListener('input', () => {
  video.currentTime = valueProgress.value / 100 * video.duration;
  valueProgress.style.background = `linear-gradient(to right, rgb(113, 7, 7) 0%, rgb(113, 7, 7) ${valueProgress.value}%, rgb(196, 196, 196) ${valueProgress.value}%, rgb(196, 196, 196) 100%)`;
})

video.addEventListener('ended', () => {
  btnBigPlay.style.opacity = 1;
  btnPlay.style.backgroundImage = 'url("./assets/svg/video/frame.svg")';
})

btnVolume.addEventListener('click', changeVolume);

btnFs.addEventListener('click', changeFs);

function speedUpVideo() {
  video.playbackRate = video.playbackRate + 0.2;
  videoCoef.innerHTML = `speed: ${video.playbackRate.toFixed(1)}`;
  videoCoef.classList.toggle('hidden');
  setTimeout(() => {
    videoCoef.classList.toggle('hidden')
  }, 2000);
}

function speedDownVideo() {
  video.playbackRate <= 0.5 ? true : video.playbackRate = video.playbackRate - 0.2;
  videoCoef.innerHTML = `speed: ${video.playbackRate.toFixed(1)}`;
  videoCoef.classList.toggle('hidden');
  setTimeout(() => {
    videoCoef.classList.toggle('hidden')
  }, 2000);
}

document.addEventListener('keydown', event => {
  pressed.add(event.code);
  if (event.code == 'KeyM') changeVolume();

  if (event.code == 'Space') videoPlay();

  if (event.code == 'KeyF') changeFs();

  if (pressed.has('ShiftLeft') && pressed.has('Comma')) {
    speedUpVideo();
    pressed.clear();
  };

  if (pressed.has('ShiftLeft') && pressed.has('Period')) {
    speedDownVideo();
    pressed.clear();
  };
})