var dim= 100; //Defines postion of card holders
var gameTimer = setTimeout(gameOver, 1000*gameTime);; //Creates gametimer var
var gameTime = 30; //Define length of game in seconds
function makecardholder(w, h, xPos, yPos, id){      //Creates Card Holding Divs
	b = document.createElement("button");
	b.style.border = "red solid thin";
	b.style.width = w +"px";
	b.style.height = h +"px";
	b.style.backgroundImage = "url('images/backofcard.jpg')";
	b.style.position = "absolute";
	b.style.left = xPos + "px";
	b.style.top = yPos + "px";
	b.id = id;
	b.addEventListener("click", flip);
	document.body.append(b); 
}

var b0 = makecardholder(100, 146, dim*0, dim*1, 0); //calling function to create 2x4 grid 
var b1 = makecardholder(100, 146, dim*2, dim*1, 0);
var b2 = makecardholder(100, 146, dim*4, dim*1, 0);
var b3 = makecardholder(100, 146, dim*6, dim*1, 0);
var b4 = makecardholder(100, 146, dim*8, dim*1, 0);
var b5 = makecardholder(100, 146, dim*10, dim*1, 0);
var b6 = makecardholder(100, 146, dim*12, dim*1, 0);
var b7 = makecardholder(100, 146, dim*0, dim*3, 0);
var b8 = makecardholder(100, 146, dim*2, dim*3, 0);
var b9 = makecardholder(100, 146, dim*4, dim*3, 0);
var b10 = makecardholder(100, 146, dim*6, dim*3, 0);
var b11 = makecardholder(100, 146, dim*8, dim*3, 0);
var b12 = makecardholder(100, 146, dim*10, dim*3, 0);
var b13 = makecardholder(100, 146, dim*12, dim*3, 0);

function gameOver(){ //Game Over function get called after game time is up
	 alert("Game Over You Lost");
	}


