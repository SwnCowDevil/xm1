function ChessBoard(min,max){
	this.min = min;//min是一个格子的宽高 
	this.max = max;//max 棋盘总宽高
	this.drawChessBoard = function(context){
		for (var i = min; i <= max; i+=min) {
			context.beginPath();
			context.moveTo(i,min);
			context.lineTo(i,max);
			context.lineWidth = "1";
			context.strokeStyle = "black";
			context.stroke();
			context.save();
			
			context.beginPath();
			context.moveTo(min,i);
			context.lineTo(max,i);
			context.lineWidth = "1";
			context.strokeStyle = "black";
			context.stroke();
			context.save();
		}
		
	}
}
