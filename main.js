import dayjs from "dayjs";
import relativeTime from 'dayjs/plugin/relativeTime';
// create a countdown timer to January 21, 2023, 2:30 EEST
// in the format hh:mm:ss
const date = dayjs("2023-01-21 02:30:00+0300");
const audio = document.querySelector("#audio");

const timer = setInterval(() => {
  const now = dayjs();
  const diff = date.diff(now, "second");
  const hours = Math.floor(diff / 3600).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
  const minutes = Math.floor((diff % 3600) / 60).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
  const seconds = Math.floor(diff % 60).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
  const formatted = `${hours}:${minutes}:${seconds}`;

  if (diff <= 0) {
    clearInterval(timer);
  }else{
    //slow down the audio
    audio.playbackRate = 0.935;
    // audio.play();
  }
  //dom manipulation
  document.querySelector("#timer").innerHTML = formatted;
  


},1000);
