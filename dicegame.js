//Dice Game- Two players- Three rounds total. 
//First player to score the most points within three rounds wins.
//Round one-roll 20 and 12 sided dice. 
//get player total for round One
//Round two-roll 10 and 8 sided dice.
//get player total for round two
//Last round- roll 6 and 4 sided dice.
//get player total for round three
//Roll a "one" on each of the dice during any of the three rounds and it's an automatic WIN.


function gameLogic(sides,amount) { ///master function 
	let runDiceGame;
	let playerOne= getUserInput("Please enter player name!");
	// let playerTwo= getUserInput("Please enter player name!");
	let playerOneScore=0;
	playerOneScore = roundOne(playerOneScore);
	playerOneScore = roundTwo(playerOneScore);
	playerOneScore = roundThree(playerOneScore);
	

}

	////////// ONE ROUND /////////////
function roundOne(playerScore){
	let dice20= rollDice(20);
	let dice12= rollDice(12);
	let didWinInstantly = checkForInstantWin(dice20, dice12)
	if(didWinInstantly === true) {
		return;
	}
	// if not an instant win, add to playerOne score

	playerScore=updatePlayerScore(playerScore,dice20,dice12);
	return playerScore;

}
	//////////////////////////////////

function roundTwo(playerScore){
	let dice10= rollDice(10);
	let dice8= rollDice(8);
	let didWinInstantly = checkForInstantWin(dice10, dice8);
	if(didWinInstantly === true){
		return;
	}

	playerScore=updatePlayerScore(playerScore,dice10,dice8);
	return playerScore;
}

 //////////////////
function roundThree(playerScore){
	let dice6= rollDice(6);
	let dice4= rollDice(4);
	let didWinInstantly = checkForInstantWin(dice6, dice4);
	if(didWinInstantly === true){
		return;
	}

	playerScore=updatePlayerScore(playerScore,dice6,dice4);
	return playerScore;
}

function displayFinalTotalScore(currentScore) {
	let finalScore=currentScore;
	console.log(finalScore);
}



function updatePlayerScore(currentScore, roll1, roll2) {
	let newScore=currentScore+roll1+roll2;
	console.log(newScore)	
	return newScore;

}

function checkForInstantWin(roll1, roll2) {
	if(roll1 === 1 && roll2 === 1){
		console.log("Automatic Win!");
		return true;
	} else {
			return false;
	}
}

function getUserInput(question) {
	let userInput = prompt(question);
	return userInput;
}



///document.getElementById ("Begin Game").addEventListener ("click", myFunction, false);

/// myFunction() {
	///document.getElementById("frm1").submit();
 



