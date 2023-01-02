import Player from '@vimeo/player';
const throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const currentTime = parseFloat(
  localStorage.getItem('videoplayer-current-time')
);

player
  .setCurrentTime(currentTime)
  .then(function (seconds) {
    // seconds = the actual time that the player seeked to
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });

player.on(
  'timeupdate',
  throttle(function (time) {
    console.log(time);
    localStorage.setItem('videoplayer-current-time', time.seconds);
  }, 1000)
);
