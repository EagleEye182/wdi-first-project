// let numSquares = 12;
let mammalsAndSounds = [];
let gameBoard = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
const mammals = ['bearded-seal.png', 'beluga-white-whale.png', 'leopard-seal.png', 'killer-whale.png', 'narwhal.png', 'common-dolphin.png'];

// const $messageDisplay = $('#display');
// const $resetButton = $('#reset');
// const $modeButtons = $('.mode');


function createPairs() {
  mammalsAndSounds = [];
  while (gameBoard.length > 0) {
    const randomNumber = Math.floor(Math.random() * gameBoard.length);
    const randomCard = gameBoard.splice(randomNumber, 1)[0];
    mammalsAndSounds.push(randomCard);
    console.log(mammalsAndSounds);
  }
  gameBoard = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
}

$(() => {

  // while ($squares.length > 0) {
  //   $squares[0] = mammalsAndSounds[i];
  //   mammalsAndSounds.splice(i, 1);
  //   $squares=[].slice.call(mammalsAndSounds, 1);
  // }

  const $squares = $('.square');
  function matchImagesToSquares() {
    mammalsAndSounds.forEach((squareId, index)=> {
      $squares.each((i, square) => {
        const $square = $(square);
        if($square.attr('id') === squareId) {
          $square.css('background-image', `url(../images/${mammals[0]})`);
        }
      });
    });
  }

  //TIMER
  const $startTime = $('#reset');
  let timerIsRunning = false;
  let timerId = null;

  function startStopTimer(duration, $display) {
    let timer = duration;
    // start the timer if it is NOT running
    if(!timerIsRunning){
      timerId = setInterval(() => {
        --timer;
        let minutes = parseInt(timer / 60, 10);
        let seconds = parseInt(timer % 60, 10);
        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;
        $display.text(minutes + ':' + seconds);
        if(timer  === 0) {
          clearInterval(timerId);
          // $timer.addClass('ringing');
        }
      }, 1000);
      timerIsRunning = true;
    }
  }
  function startTimer() {
    const twoMinutes = 120;
    const $timerScreen = $('#time');
    startStopTimer(twoMinutes, $timerScreen);
  }
  $startTime.on('click', startTimer);





});
