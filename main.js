console.log("Up and running!");

let flipCount = 0;


let cards = [{
rank:"queen",
suit:"hearts",
cardImage:	"images/queen-of-hearts.png"
},
{
rank:"queen",
suit:"diamonds",
cardImage:"images/queen-of-diamonds.png"
},
{
rank:"king",
suit:"diamonds",
cardImage:"images/king-of-diamonds.png"
},
{
rank:"king",
suit:"hearts",
cardImage:"images/king-of-hearts.png"	
}];
let cardsInPlay=[];
 
function checkForMatch(){
	if (cardsInPlay[0] === cardsInPlay[1]) {
   alert("You found a match!");
} 
else {
    alert("Sorry, try again");
}
}

 let flipCard = function() {
 
      if (flipCount > 4) {
    statusMessage.textContent = "STOP CHEATING :("
  }
   else {
    let cardId = this.getAttribute('data-id');
   this.setAttribute('src', cards[cardId].cardImage);
   console.log('User Flipped ' + cards[cardId].rank);
   console.log(cards[cardId].suit);
   console.log(cards[cardId].cardImage);
   cardsInPlay.push(cards[cardId].rank);
    if (cardsInPlay.length === 2){
   checkForMatch();
}
   flipCount++;}
   };

 

let createBoard = function() {
  for (let i = 0; i < cards.length; i++) {
    let cardElement = document.createElement('img');
    cardElement.setAttribute('src', 'images/back.png');
    cardElement.setAttribute('data-id', i);
    cardElement.addEventListener('click', flipCard);
    document.getElementById('game-board').appendChild(cardElement);
  }
}

createBoard();

/*var flipCard = function() {
  if (flipCount > 4) {
    statusMessage.textContent = "STOP CHEATING :("
  }
   else {
    var cardId = this.getAttribute('data-id');
   this.setAttribute('src', cards[cardId]);
   console.log('User Flipped ' + cards[cardId].rank);
   console.log(cards[cardId].suit);
   console.log(cards[cardId].cardImage);
   cardsInPlay.push(cards[cardId].rank);
   checkForMatch();
   flipCount++;
  }

flipCard(0);
flipCard(2);*/

