import Player from '@vimeo/player';
import _throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);
const CURRENT_TIME = 'videoplayer-current-time';

handlePageRestart();

const handleTimeUpdate = function (data) {
  console.log(data.seconds);
  localStorage.setItem(CURRENT_TIME, data.seconds);
  // data is an object containing properties specific to that event
};

function handlePageRestart() {
  const currentTime = localStorage.getItem(CURRENT_TIME);
  if (currentTime) {
    player.setCurrentTime(currentTime);
  }
}

player.on('timeupdate', _throttle(handleTimeUpdate, 1000));
