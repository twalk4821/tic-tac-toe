const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var board = [[0,0,0],[0,0,0],[0,0,0]]

var printBoard = function() {
	var prettyBoard = ""
	for (var i = 0; i<3; i++) {
		for (var j = 0; j<3; j++) {
			if (board[i][j] === 0) {
				prettyBoard+=" |"
			} else if (board[i][j] === 1) {
				prettyBoard+="X |"
			} else if (board[i][j] === 2) {
				prettyBoard+="O |"
			}
		}
		prettyBoard+="\n"
		prettyBoard+="_______"
		prettyBoard+="\n"
	}
	console.log(prettyBoard)
}

var game = function() {
	console.log('Welcome to tic-tac-toe!')
	printBoard(board)
	playing = true
	activePlayer = 1
	askTheQuestion()
}

var askTheQuestion = function() {
	rl.question('Player ' + activePlayer + ' turn. Please enter the coordinates of your move with the bottom-left space as (0,0)', (answer) => {
			x = Number(answer[1])
			y = Number(answer[3])
			answer = [];
			answer.push(x, y)
			console.log(answer[0])
			 if (board[answer[1]][answer[0]] === 0) {
				board[answer[1]][answer[0]] = activePlayer
				activePlayer === 1 ? activePlayer = 2 : activePlayer = 1
				printBoard()
				if (winner()) {
					console.log('WINNER Player: ', activePlayer)
				} else {
					askTheQuestion()
				}
				
			} else {
				console.log('that space is already occupied')
				askTheQuestion()
			}

		})
}

var winner = function() {
	// checkRows()
	for (var i = 0; i<3; i++) {
		if (board[i].reduce((x,y) => x+y, 0) === 3 || board[i].reduce((x,y) => x+y, 0) === 6) {
			return true
		}
	}
	return false
	
}

var checkRows = function () {
	for (var i = 0; i<3; i++) {
		sum = 0
		if (board[i].reduce((x,y) => x+y, 0) === 3 || board[i].reduce((x,y) => x+y, 0) === 6) {
			return true
		}
	}
	return false
}

game()
