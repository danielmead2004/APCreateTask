/**
 * Creates a deck of 52 cards
 * @author Pluska
 */
class DeckOfCards{
    

    constructor(){
      this.numSuits = 4;
      this.numValues = 13;
      this.cardCount = 0;
      this.cardArray = [];
      this.cardButtons = [];
      this.next = -1;
      
        for(var s = 0; s< this.numSuits;s++){
            for(var v = 0; v <this.numValues;v++ ){
              
              this.cardArray[this.cardCount] = new Card(s,v);
              this.cardCount++;
            }
       }
    }

    getCards(){
      return this.cardArray;
    }

}
    



   
  
    

