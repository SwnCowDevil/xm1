var board = document.getElementById("board");
var context = board.getContext("2d");

//创建棋盘
var chessBoard = new ChessBoard(25,700);
chessBoard.drawChessBoard(context);

var aSnake1 = new Snake(25,25);
var aSnake2 = new Snake(50,25);
var aSnake3 = new Snake(75,25);
aSnake1.drawSnake();
aSnake2.drawSnake();
aSnake3.drawSnake();

var snakeArr = [];
snakeArr.push(aSnake1);
snakeArr.push(aSnake2);
snakeArr.push(aSnake3);

var firstSnake = snakeArr[0];

