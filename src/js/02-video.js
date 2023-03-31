import Player from '@vimeo/player';
import throttle from 'lodash.throttle';


const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const CT_KEY = 'videoplayer-current-time';

const onPlay = function (event) {
  localStorage.setItem(CT_KEY, event.seconds);
};

player.on('timeupdate', throttle(onPlay, 1000));
player.setCurrentTime(JSON.parse(localStorage.getItem(CT_KEY)) || 0);

