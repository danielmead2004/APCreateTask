var width = Card.width;
var height = Card.height;
var topOffset = 0;
var leftOffset = 0;
var dealt=[];
var shuffle = document.createElement("button");
var minToFront = document.createElement("button");
var deal = document.createElement("button");
var sortButton = document.createElement("button");
var cardHolder = document.createElement("div");
var dealInput = document.createElement("input");
var newDeck = new DeckOfCards();
var cardArray = newDeck.getCards();
makeDOMElements();



/**
 * TODO 3:  complete the minCardToFront function
 * which brings the minimum card in the dealt
 * array to the front (position m) of the deck AND displays the 
 * new hand in the correct order
 */
function minCardToFront(){
    var LH = 0;
    for(var RH = 0; RH < dealt.length; RH++){
        if(dealt[RH].getValue() < dealt[LH].getValue()){
            var temp = dealt[LH];
            dealt[LH] = dealt[RH];
            dealt[RH] = temp;
            
        }
    }
    showDeal();
}
/**
 * TODO 4:  complete the sortCards function
 * which sorts a dealt hand of cards AND displays
 * the new hand in the correct order
 */

function sortCards(){
    for(var i = 0; i< dealt.length;i++){
        var LH = i;
        for(var RH = 0; RH < dealt.length; RH++){
            if(dealt[RH].getValue() > dealt[LH].getValue()){
                var temp = dealt[LH];
                dealt[LH] = dealt[RH];
                dealt[RH] = temp;
            }
        }
        showDeal();
    }
}

/**
 * TODO 2:  complete the shuffleCards function
 * which shuffles the cardArray
 * @param {first card} c1 
 * @param {second card} c2 
 */
function shuffleCards(){
 for(var n=0;n < cardArray.length; n++){
    var I1=Math.floor(Math.random()*cardArray.length);
    var I2=Math.floor(Math.random()*cardArray.length);
    swapCards(I1,I2);
 }
}

/**
 * TODO 1:  complete the swapCards function
 * which swaps two cards in the cardArray
 * @param {first card} c1 
 * @param {second card} c2 
 */
function swapCards(c1, c2){
    var temp = cardArray [c1];
    cardArray [c1] = cardArray [c2]
    cardArray [c2] = temp;
}

/**
 * Deals a NEW set of cards of a specified size
 * to the screen.  The previous set is completely overwritten
 * DO NOT EDIT
 */
function dealCards(d){
    cardHolder.innerHTML = "";
    dealt = [];
    leftOffset = 0;
    topOffset = 0;
    d = Number(dealInput.value);
    
    for(var c = 0; c < d; c++){
        
        var temp = cardArray[c].makeCardButton();
        dealt.push(cardArray[c]);

        cardHolder.append(temp);
        temp.style.left = width*leftOffset;
        temp.style.top = height+height*topOffset;
        leftOffset++;
        if(leftOffset == 13){
            topOffset++;
            leftOffset = 0;
        }

    }
    
} 

/**
 * Displays the current dealt hand
 * of cards
 * DO NOT EDIT
 */
function showDeal(){

    cardHolder.innerHTML = "";
    leftOffset = 0;
    topOffset = 0;
    
    for(var c = 0; c < dealt.length; c++){
        var temp = dealt[c].makeCardButton();
        cardHolder.append(temp);
        temp.style.left = width*leftOffset;
        temp.style.top = height+height*topOffset;
        leftOffset++;
        if(leftOffset == 13){
            topOffset++;
            leftOffset = 0;
        }

    }
}


/**
 * Positions the necessary DOM elements
 * on the page 
 * DO NOT EDIT
 */

function makeDOMElements(){

    shuffle.innerHTML = "shuffle";
    shuffle.style.margin = "3px";
    document.body.append(shuffle);
    shuffle.addEventListener("click", shuffleCards);

    minToFront.innerHTML = "min to front";
    minToFront.style.margin = "3px";
    document.body.append(minToFront);
    minToFront.addEventListener("click", minCardToFront);

    sortButton.innerHTML = "sort";
    sortButton.style.margin = "3px";
    document.body.append(sortButton);
    sortButton.addEventListener("click", sortCards);

    deal.innerHTML = "deal";
    deal.style.margin = "3px";
    document.body.append(deal);
    deal.addEventListener("click", dealCards);

    dealInput.placeholder = "enter dealSize";
    document.body.append(dealInput);

    document.body.append(cardHolder);
    cardHolder.style.position = "absolute";
    cardHolder.top = height;
    cardHolder.left = width;
}











