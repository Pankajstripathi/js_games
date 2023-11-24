// // Stone paper and scissor game js starts here
// document.addEventListener('DOMContentLoaded', () => {
//   const computerChoiceDisplay = document.getElementById('computer-choice');
//   const userChoiceDisplay = document.getElementById('user-choice');
//   const resultDisplay = document.getElementById('result');
//   const possibleChoices = document.querySelectorAll('button');

//   let userChoice;
//   let computerChoice;
//   let result;
//   possibleChoices.forEach((possibleChoice) =>
//     possibleChoice.addEventListener('click', (e) => {
//       userChoice = e.target.id;
//       userChoiceDisplay.innerHTML = userChoice;
//       generateComputerChoice();
//       Winner();
//     })
//   );

//   function generateComputerChoice() {
//     const randomNumber = Math.floor(Math.random() * 3) + 1;

//     if (randomNumber === 1) {
//       computerChoice = 'rock';
//     } else if (randomNumber === 2) {
//       computerChoice = 'scissor';
//     } else if (randomNumber === 3) {
//       computerChoice = 'paper';
//     }
//     computerChoiceDisplay.innerHTML = computerChoice;
//   }

//   function Winner() {
//     if (computerChoice === userChoice) {
//       result = 'Its a draw';
//     }
//     if (computerChoice === 'rock' && userChoice === 'paper') {
//       result = 'You Win';
//     }
//     if (computerChoice === 'paper' && userChoice === 'rock') {
//       result = 'You Lost';
//     }
//     if (computerChoice === 'paper' && userChoice === 'scissor') {
//       result = 'You win';
//     }
//     if (computerChoice === 'scissor' && userChoice === 'paper') {
//       result = 'You Lost';
//     }
//     if (computerChoice === 'scissor' && userChoice === 'rock') {
//       result = 'You win';
//     }
//     if (computerChoice === 'rock' && userChoice === 'scissor') {
//       result = 'You Lost';
//     }
//     resultDisplay.innerHTML = result;
//   }
// });

//updated code
// document.addEventListener('DOMContentLoaded', () => {
//   const computerChoiceDisplay = document.getElementById('computer-choice');
//   const userChoiceDisplay = document.getElementById('user-choice');
//   const resultDisplay = document.getElementById('result');
//   const userPointsDisplay = document.getElementById('user-points');
//   const computerPointsDisplay = document.getElementById('computer-points');
//   const possibleChoices = document.querySelectorAll('button');

//   let userChoice;
//   let computerChoice;
//   let userPoints = 0;
//   let computerPoints = 0;

//   possibleChoices.forEach((possibleChoice) =>
//     possibleChoice.addEventListener('click', (e) => {
//       userChoice = e.target.id;
//       userChoiceDisplay.innerHTML = userChoice;
//       generateComputerChoice();
//       Winner();
//     })
//   );

//   function generateComputerChoice() {
//     const randomNumber = Math.floor(Math.random() * 3) + 1;

//     if (randomNumber === 1) {
//       computerChoice = 'rock';
//     } else if (randomNumber === 2) {
//       computerChoice = 'scissor';
//     } else if (randomNumber === 3) {
//       computerChoice = 'paper';
//     }
//     computerChoiceDisplay.innerHTML = computerChoice;
//   }

//   function Winner() {
//     if (userChoice === computerChoice) {
//       resultDisplay.innerHTML = "It's a tie!";
//     } else if (
//       (userChoice === 'rock' && computerChoice === 'scissor') ||
//       (userChoice === 'paper' && computerChoice === 'rock') ||
//       (userChoice === 'scissor' && computerChoice === 'paper')
//     ) {
//       resultDisplay.innerHTML = 'You win!';
//       userPoints++;
//       userPointsDisplay.innerHTML = userPoints;
//     } else {
//       resultDisplay.innerHTML = 'Computer wins!';
//       computerPoints++;
//       computerPointsDisplay.innerHTML = computerPoints;
//     }
//   }
// });

// Connect four Second game js starts here

document.addEventListener('DOMContentLoaded', () => {
  const squares = document.querySelectorAll('.grid div');
  const result = document.getElementById('result');
  const displayCurrentPlayer = document.getElementById('current-player');

  let currentPlayer = 1;

  const winningArrays = [
    // Horizontal wins
    [0, 1, 2, 3],
    [1, 2, 3, 4],
    [2, 3, 4, 5],
    [3, 4, 5, 6],
    [7, 8, 9, 10],
    [8, 9, 10, 11],
    [9, 10, 11, 12],
    [10, 11, 12, 13],
    [14, 15, 16, 17],
    [15, 16, 17, 18],
    [16, 17, 18, 19],
    [17, 18, 19, 20],
    [21, 22, 23, 24],
    [22, 23, 24, 25],
    [23, 24, 25, 26],
    [24, 25, 26, 27],
    [28, 29, 30, 31],
    [29, 30, 31, 32],
    [30, 31, 32, 33],
    [31, 32, 33, 34],
    [35, 36, 37, 38],
    [36, 37, 38, 39],
    [37, 38, 39, 40],
    [38, 39, 40, 41],

    // Vertical wins
    [0, 7, 14, 21],
    [1, 8, 15, 22],
    [2, 9, 16, 23],
    [3, 10, 17, 24],
    [4, 11, 18, 25],
    [5, 12, 19, 26],
    [6, 13, 20, 27],
    [7, 14, 21, 28],
    [8, 15, 22, 29],
    [9, 16, 23, 30],
    [10, 17, 24, 31],
    [11, 18, 25, 32],
    [12, 19, 26, 33],
    [13, 20, 27, 34],
    [14, 21, 28, 35],
    [15, 22, 29, 36],
    [16, 23, 30, 37],
    [17, 24, 31, 38],
    [18, 25, 32, 39],
    [19, 26, 33, 40],
    [20, 27, 34, 41],

    // Diagonal wins
    [0, 8, 16, 24],
    [1, 9, 17, 25],
    [2, 10, 18, 26],
    [3, 11, 19, 27],
    [7, 15, 23, 31],
    [8, 16, 24, 32],
    [9, 17, 25, 33],
    [10, 18, 26, 34],
    [14, 22, 30, 38],
    [15, 23, 31, 39],
    [16, 24, 32, 40],
    [17, 25, 33, 41],
    [3, 9, 15, 21],
    [4, 10, 16, 22],
    [5, 11, 17, 23],
    [6, 12, 18, 24],
    [10, 16, 22, 28],
    [11, 17, 23, 29],
    [12, 18, 24, 30],
    [13, 19, 25, 31],
    [17, 23, 29, 35],
    [18, 24, 30, 36],
    [19, 25, 31, 37],
    [20, 26, 32, 38],
  ];

  function checkBoard() {
    for (let y = 0; y < winningArrays.length; y++) {
      const square1 = squares[winningArrays[y][0]];
      const square2 = squares[winningArrays[y][1]];
      const square3 = squares[winningArrays[y][2]];
      const square4 = squares[winningArrays[y][3]];

      if (
        square1.classList.contains('player-one') &&
        square2.classList.contains('player-one') &&
        square3.classList.contains('player-one') &&
        square4.classList.contains('player-one')
      ) {
        result.innerHTML = 'Player one wins';
        return; // Exit the function to prevent checking other winning arrays
      }
      if (
        square1.classList.contains('player-two') &&
        square2.classList.contains('player-two') &&
        square3.classList.contains('player-two') &&
        square4.classList.contains('player-two')
      ) {
        result.innerHTML = 'Player two wins';
        return; // Exit the function to prevent checking other winning arrays
      }
    }
  }

  for (let i = 0; i < squares.length; i++) {
    squares[i].onclick = () => {
      if (
        squares[i + 7] && // Check if the square below exists
        squares[i + 7].classList.contains('taken') &&
        !squares[i].classList.contains('taken')
      ) {
        if (currentPlayer === 1) {
          squares[i].classList.add('taken');
          squares[i].classList.add('player-one');
          currentPlayer = 2;
        } else {
          squares[i].classList.add('taken');
          squares[i].classList.add('player-two');
          currentPlayer = 1;
        }
        displayCurrentPlayer.innerHTML = currentPlayer;
        checkBoard(); // Check for a winner after each move
      }
    };
  }
});
