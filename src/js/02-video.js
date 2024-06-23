import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);
const STORAGE_PLAYBACK_TIME_KEY = 'videoplayer-current-time';

const savePlaybackTime = data => {
  localStorage.setItem(STORAGE_PLAYBACK_TIME_KEY, data.seconds);
};

const savedTime = localStorage.getItem(STORAGE_PLAYBACK_TIME_KEY);

if (savedTime) {
  player.setCurrentTime(savedTime).catch(error => {
    console.error('Error:', error);
  });
}

player.on('timeupdate', throttle(savePlaybackTime, 1000));
