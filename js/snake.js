function Snake(x,y){
	this.x = x;
	this.y = y;
	//创建一个小蛇
	this.drawSnake = function(){	
			context.beginPath();			
			context.strokeStyle = "black";
			context.strokeRect(this.x,this.y,25,25);
			context.lineWidth = "2.5"
			context.stroke();
			context.fillStyle = "red";
			context.fillRect(this.x,this.y,25,25);
			context.fill();
			context.save();	
	}
}
