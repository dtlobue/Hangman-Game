
		var wordsList = ["blackdahlia", "sunsetdrive", "bluevelvet", "chinatown", "raymondchandler"];

		startGame()

		function startGame() {

			//reset the guesses back to 0, as per Cameron's recommended pseudocode

			var newSolution = wordsList[Math.floor(Math.random() * wordsList.length)];

			var numBlanks = Array.from(newSolution);

			console.log(numBlanks);

			// reset the guess and success array at each round. 
		    // Array of letters (first array, for succesful guesses)

            // reset the wrong guesses from the previous round. 
            // Array of letters (second arrays, one for fails)

            var blanksAndSuccesses = [];
  				for (var i = 0; i < numBlanks; i++) {
    			   blanksAndSuccesses.push("_");
 						 }
            // here call document to update spaces 
            document.getElementById('word-blanks').innerHTML = blanksAndSuccesses.join('');

		}

		


