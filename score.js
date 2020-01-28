// for webpage color toggle
var colorBtn = document.querySelector("#colorToggle");
var isPink = false;
// player one and player two buttons
var p1Button = document.querySelector("#p1");
var p2Button = document.getElementById("p2");
// the reset button
var resetButton = document.getElementById("reset");
// player one's and player two's score starting from 0
var p1Score = 0;
var p2Score = 0;
// display for player one's and player two's score
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
// boolean to test the game conditions
var gameOver = false;
// score to achieve to win the game
var winScore = 5;
// for changing winning score number
var numInput = document.querySelector("input");
var p = document.querySelector("p");
var winDisplay = document.querySelector("#winDisplay");

// score keeper for player one
p1Button.addEventListener("click", function(){
	if(!gameOver){
		p1Score++;
		if(p1Score === winScore){
			p1Display.classList.add("winner");
			gameOver = true;
		}
		p1Display.textContent = p1Score;
	}
});

// score keeper for player two
p2Button.addEventListener("click", function(){
	if(!gameOver){
		p2Score++;
		if(p2Score === winScore){
			p2Display.classList.add("winner");
			gameOver = true;
		}
		p2Display.textContent = p2Score;
	}
});

// reset button
resetButton.addEventListener("click", function(){
	reset();
});

function reset(){
	p1Score = 0;
	p2Score = 0;
	p1Display.textContent = 0;
	p2Display.textContent = 0;
	p1Display.classList.remove("winner");
	p2Display.classList.remove("winner");
	gameOver = false;
}

// change winning score number
numInput.addEventListener("change", function() {
    winDisplay.textContent = this.value;
    winScore = Number(this.value);
    reset();
});

// button to change color on webpage
colorBtn.addEventListener("click", function() {
    if(isPink) {
        document.body.style.background = "white";
        isPink = false;
    } else {
        document.body.style.background = "pink";
        isPink = true;
    }
})


