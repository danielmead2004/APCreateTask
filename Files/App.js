//CARD SECTION


var dim= 100; //Defines postion of card holders
function makecardholder(w, h, xPos, yPos, id){      //Creates Card Holding Divs
	b = document.createElement("button");
	b.style.border = "black solid thin";
	b.style.width = w +"px";
	b.style.height = h +"px";
	b.style.backgroundImage = "url('images/backofcard.jpg')";
	b.style.position = "absolute";
	b.style.left = xPos + "px";
	b.style.top = yPos + "px";
	b.id = id;
	b.addEventListener("click", flip);
	document.body.append(b); 
	return b;
}

var cardArray = [];
var idArray = [0, 0, 1, 1, 2, 2];
var j = 1;
for(var i = 0; i < 6; i++){
	console.log(idArray.length);
	var rand = Math.floor(Math.random()*idArray.length);
	var num = idArray[rand];
	var but = makecardholder(100, 146, dim*i*2, dim*j, num);
	//console.log(num)
	idArray.splice(rand, 1);
	cardArray.push(but)
}

console.log(idArray);
console.log(cardArray)

function flip(){
	if(event.target.id == 0){
		console.log(1);
		event.target.style.backgroundImage = "url('images/ace_of_spades2.png')"
	} else if(event.target.id == 1){
		event.target.style.backgroundImage = "url('images/4_of_spades.png')"
	} else if(event.target.id == 2){
		event.target.style.backgroundImage = "url('images/2_of_spades.png')"
	}
	
	console.log("clicked");
}


//TIMER SECTION
function drawrectangle(w,h,x,y,id) { //creates div to hold timer function + some misc GUI 
	var rectangle = document.createElement("div");
	var width = w; 
	var height = h; 
	var xPos = x; 
	var yPos = y; 
	rectangle.style.width = width + "px"; 
	rectangle.style.height = height + "px"; 
	rectangle.style.left = xPos + "px"; 
	rectangle.style.top = yPos + "px"; 
	rectangle.style.border = "thick solid red"; 
	rectangle.style.position = "absolute"; 
	rectangle.style.fontSize = "75";
	rectangle.style.color = "red";
	rectangle.style.background = "black";
	rectangle.style.alignContent = "centered";
	rectangle.id = id;
	document.body.append(rectangle); 
	return rectangle
}
drawrectangle(76,75,1213,1,69); //Div that holds timer

var gameTime = 30; //Defines length of game in seconds
var timeleft;

function countdown(){
	timeLeft = setInterval(updateTime, 1000);
}

function updateTime(){
	if(gameTime == 0){
		return;
	}
	gameTime--;
	document.getElementById(69).innerHTML = gameTime;
}

countdown();

//AlERT TIMER SECTION
var alertTime = 31 //Time Intill Alert
var gameTimer = setTimeout(alertOver, 1000*alertTime);

function alertOver(){ //Game Over function get called after game time is up
	alert("Game Over You Lost");
}

//drawrectangle(350,75,600,1,420); //future div

//Misc GUI
drawrectangle(425,75,1,1,666)
document.getElementById(666).innerHTML = "Mix In Match";