
		var wordsList = ["blackdahlia", "sunsetdrive", "bluevelvet", "chinatown", "raymondchandler"];


		function startGame() {

			//reset the guesses back to 0, as per Cameron's recommended pseudocode
			var numberOfGuesses = 0;

			var newSolution = wordsList[Math.floor(Math.random() * wordsList.length)];

			var numBlanks = Array.from(newSolution);

			console.log(numBlanks);

			// reset the guess and success array at each round. 
		    // Array of letters (first array, for succesful guesses)
		    var successes = 0;

            // reset the wrong guesses from the previous round. 
            // Array of letters (second arrays, one for fails)
            var fails = 0;

            var blanksAndSuccesses = [];
  				for (var i = 0; i < numBlanks; i++) {
    			   blanksAndSuccesses.push("_");
 						 }
            // here call document to update spaces 
            document.getElementById('word-blanks').innerHTML = blanksAndSuccesses.join('');

		}

		function checkLetters(letter) {

			var letterInWord = false;

			for (var i = 0; i < numBlanks; i++) {
				numBlanks.indexOf(letterInWord);
				letterInWord = true;
			}

			 // If `letterInWord`, then figure out exactly where (which indices).
			 if (letterinWord = true) {
			 	 // Loop through the word, one letter at a time

       			 // Populate the blanksAndSuccesses with every instance of the letter.

      			 // if chosenWord letter is the same as letter

       			 // Here we set the specific space in blanks and letter equal to the letter when there is a match.

       			 // If the letter doesn't exist at all...
    			 // ..then we add the letter to the list of wrong letters, and we subtract one of the guesses.

			 }
		}

		function roudComplete() {
			//  console.log(# of wins, # of losses, # of guesses left)

 			 // Update the HTML to reflect the new number of guesses. Also update the correct guesses.

  			// Update #word-blanks to show any correct guesses

 			 // Update #wrong-guesses to show the wrong guesses

  			// If we have gotten all the letters to match the solution...
  			  // ..add to the win counter & give the user an alert.

   			 // Update the win counter in the HTML & restart the game.
    startGame();

    // If we've run out of guesses..

    // Add to the loss counter.

    // Give the user an alert.

    // Update the loss counter in the HTML.

    // Restart the game.

    startGame();

			}
		

		





