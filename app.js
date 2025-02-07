document.addEventListener("DOMContentLoaded", function () {
    const rulesBtn = document.getElementById("rules-btn");
    const modal = document.getElementById("rules-modal");
    const closeBtn = document.querySelector(".close");

    // Show the modal when the "Rules" button is clicked
    rulesBtn.addEventListener("click", function () {
        modal.style.display = "flex";
    });

    // Close the modal when the close (❌) button is clicked
    closeBtn.addEventListener("click", function () {
        modal.style.display = "none";
    });

    // Close the modal when clicking outside of it
    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});

// Remove duplicate event listener
document.addEventListener("DOMContentLoaded", function () {
    const rulesBtn = document.getElementById("rules-btn");
    const modal = document.getElementById("rules-modal");
    const closeBtn = document.querySelector(".close");

    // Show the modal when the "Rules" button is clicked
    rulesBtn.addEventListener("click", function () {
        modal.style.display = "flex";
    });

    // Close the modal when the close (❌) button is clicked
    closeBtn.addEventListener("click", function () {
        modal.style.display = "none";
    });

    // Close the modal when clicking outside of it
    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});

let score = 0;

// Game logic
function playGame(userChoice) {
    // Hide the main content and show the result section
    document.querySelector('.main-content').style.display = 'none';
    document.querySelector('.result').style.display = 'block'; // Show the result section

    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    const gameResult = document.getElementById('game-result');
    const scoreCount = document.getElementById('score-count');
    const playAgainButton = document.getElementById('play-again');

    let resultText = '';

    // Determine the game result
    if (userChoice === computerChoice) {
        resultText = `IT'S A DRAW`;
    } else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        score++;
        resultText = `YOU WIN! ${userChoice.charAt(0).toUpperCase() + userChoice.slice(1)} beats ${computerChoice}.`;
    } else {
        resultText = `YOU LOSE! ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} beats ${userChoice}.`;
    }

    // Display the result in an aligned and structured manner
    gameResult.innerHTML = ` 
        <div class="choices">
            <div class="user-choice">
            <p>YOU PICKED</p>
                <img src="./images/icon-${userChoice}.svg" alt="${userChoice}"> 
            </div>
            <p id="result-tex"><br>${resultText}</p>
            <div class="computer-choice">
            <p>THE COMPUTER PICKED</p>
                <img src="./images/icon-${computerChoice}.svg" alt="${computerChoice}"> 
            </div>
        </div>
    `;

    // Update score and show "Play Again" button
    scoreCount.textContent = score;
    playAgainButton.style.display = 'block'; // Show the "Play Again" button
}

// Restart the game
function playAgain() {
    // Show the main content again
    document.querySelector('.main-content').style.display = 'flex';

    // Clear previous result
    document.getElementById('game-result').innerHTML = '';  // Clear previous result
    document.getElementById('play-again').style.display = 'none'; // Hide the "Play Again" button
}
