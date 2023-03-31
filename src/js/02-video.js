import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const CT_KEY = 'videoplayer-current-time';

const onPlay = ({ seconds }) => {
  localStorage.setItem(CT_KEY, seconds);
};

player.on('timeupdate', throttle(onPlay, 1000));
const currentVideoTime = JSON.parse(localStorage.getItem(CT_KEY));

player
  .setCurrentTime(currentVideoTime)
  .then(function (seconds) {})
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        break;
      default:
        break;
    }
  });

