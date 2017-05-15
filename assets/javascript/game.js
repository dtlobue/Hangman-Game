
		var wordsList = ["blackdahlia", "sunsetdrive", "bluevelvet", "chinatown", "raymondchandler"];

		startGame()

		function startGame() {

			//reset the guesses back to 0, as per Cameron's recommended pseudocode

			var newSolution = wordsList[Math.floor(Math.random() * wordsList.length)];

			var numBlanks = Array.from(newSolution);

			console.log(numBlanks);

		}


