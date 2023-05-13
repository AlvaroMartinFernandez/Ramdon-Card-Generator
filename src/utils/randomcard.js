let deck = {
  diamonds: ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"],
  hearts: ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"],
  spades: ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"],
  clubs: ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
};
let SUIT = "";
let CARD = "";
const ramdomCard = () => {
  let card, cardRandom;
  const randomSuit = Math.floor(Math.random() * Object.keys(deck).length);

  switch (randomSuit) {
    case 0:
      cardRandom = Math.floor(Math.random() * deck.diamonds.length);
      card = deck.diamonds[cardRandom];
      deck.diamonds.splice(cardRandom, cardRandom);
      SUIT = "♦";
      break;
    case 1:
      cardRandom = Math.floor(Math.random() * deck.hearts.length);
      card = deck.hearts[cardRandom];
      deck.hearts.splice(cardRandom, cardRandom);
      SUIT = "♥";
      break;
    case 2:
      cardRandom = Math.floor(Math.random() * deck.spades.length);
      card = deck.spades[cardRandom];
      deck.spades.splice(cardRandom, cardRandom);
      SUIT = "♠ ";
      break;
    case 3:
      cardRandom = Math.floor(Math.random() * deck.clubs.length);
      card = deck.clubs[cardRandom];
      deck.clubs.splice(cardRandom, cardRandom);
      SUIT = "♣";
      break;
    default:
      break;
  }
  return card;
};
CARD = ramdomCard;
export default { deck, CARD, SUIT, ramdomCard };
