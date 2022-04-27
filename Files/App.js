//CARD SECTION                                                                                                                                                                        
var dim= 100; //Defines postion of card holders
function makecardholder(w, h, xPos, yPos, id){      //Creates Card Holding Divs (Some aspects were pulled from Hide N Seek Lab)          
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

var cardArray = []; //Arrays which creates card Elements and asigns random IDs (Some collaboration with past Student in the creation specfically how to push into array)
var idArray = [0, 0, 1, 1, 2, 2];
var j = 1;
for(var i = 0; i < 6; i++){
	var rand = Math.floor(Math.random()*idArray.length);
	var num = idArray[rand];
	var but = makecardholder(100, 146, dim*i*2, dim*j, num);
	idArray.splice(rand, 1);
	cardArray.push(but)
}
console.log(cardArray) //logs array for cheating or deugging

//CARD LOGIC SECTION (Some Collaboration with Past student in creation of timeout and reset card funciton)
var score = 0; //score of cards
var click = 0; //keeps tracks of cards for matching
var recentCard; //most recent card clicked
var canClick = true //prevents clicking when matching and after winnings

function flip(){ //flipping function + matching funciton
	if (!canClick){
		return
	}
	click++;
	if(event.target.id == 0){
		event.target.style.backgroundImage = "url('images/ace_of_spades2.png')"
	} else if(event.target.id == 1){
		event.target.style.backgroundImage = "url('images/4_of_spades.png')"
	} else if(event.target.id == 2){
		event.target.style.backgroundImage = "url('images/2_of_spades.png')"
	}
	if(click%2 == 1){
		recentCard = event.target
	}
	if(click%2 == 0){
		if (event.target.id == recentCard.id){
			score++;
			console.log(score)
		} 
		else {
			canClick = false;
			var H = setTimeout(resetCard, 1000, event.target);
		}
	}
}

function resetCard(card2){ //resets card of no match
	recentCard.style.backgroundImage = "url('images/backofcard.jpg')";
	card2.style.backgroundImage = "url('images/backofcard.jpg')";
	canClick = true;
}

//DISPLAYED TIMER SECTION (Structured of element creation function pull from multiple past labs , timer sections (Alert and Display) follow structure simular to multiple past labs)
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
	if(gameTime == 0 || score == 3){
		return;
	}
	gameTime--;
	document.getElementById(69).innerHTML = gameTime;
}

countdown();

//AlERT TIMER SECTION
var alertTime = 31 //Time Intill Alert
var gameTimer = setTimeout(gameOver, 1000*alertTime);

function gameOver(){ //Game Over function get called after game time is up
		alert("Game Over You Lost");
		clearInterval(timeLeft);
}

//SCORE SECTION
drawrectangle(375,75,600,1,420); 
var G;
function scoreDown(){ //updates score constantly
	G = setInterval(updateScore, 1);
}

function updateScore(){ //function that gets ran when updating score
	document.getElementById(420).innerHTML = "Matched" + " " + score;
	if(score == 3){
		document.getElementById(420).innerHTML = "YOU WON";
		canClick=false;
	}
}

scoreDown();

//Misc GUI
drawrectangle(425,75,1,1,666)
document.getElementById(666).innerHTML = "Mix N Match"; //Just the title
