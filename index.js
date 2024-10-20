let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

// Number(document.querySelector('.guess').value);

const messageScore = function (starting) {
  document.querySelector('.starting').textContent = starting;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  if (!guess) {
    messageScore('No Number🤷‍♂️🤦‍♂️');
    // console.log(
    //   (document.querySelector('.starting').textContent = 'No Number🤷‍♂️🤦‍♂️')
    // );
    // let highScore = console.log(
    //   (document.querySelector('.highscore').textContent = '0')
    // );
  } else if (guess !== secretNumber) {
    if (score > 1) {
      messageScore(guess > secretNumber ? '📈 Too high' : '📉 Too Low');
      score--;
      document.querySelector('.score').textContent = score;
      // let highScore = console.log(
      //   (document.querySelector('.highscore').textContent = score)
      // );
    } else {
      messageScore('🤦‍♂️ You Lost the Game');

      Number((document.querySelector('.score').textContent = '0'));
      document.querySelector('body').style.backgroundColor = '#FF0000';
    }
    //   } else if (guess < secretNumber) {
    //     if (score > 1) {
    //     //   messageScore();
    //   score--;
    //   document.querySelector('.score').textContent = score;
    // let highScore = console.log(
    //   (document.querySelector('.highscore').textContent = score)
    // );
    // } else {
    //   messageScore('🤦‍♂️ You Lost the Game');
    //   Number((document.querySelector('.score').textContent = '0'));
    //   document.querySelector('body').style.backgroundColor = '#FF0000';
    // }
  } else {
    document.querySelector('.secret').textContent = secretNumber;
    messageScore('Correct Number🎉');
    if (highScore < score) {
      highScore = document.querySelector('.highscore').textContent = score;
    }
    // highScore = console.log(
    //   (document.querySelector('.highscore').textContent = score)
    // );
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.secret').style.fontSize = '5rem';
    document.querySelector('.congrat').textContent = '🎉 Congratulation!';
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  guess = document.querySelector('.guess').value = '';
  document.querySelector('.score').textContent = score;
  document.querySelector('.secret').textContent = '?';
  messageScore('🤔 Start Guessing...');

  document.querySelector('body').style.backgroundColor = '#222';
});
