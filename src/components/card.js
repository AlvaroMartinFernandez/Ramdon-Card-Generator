import { deck, SUIT, CARD, ramdomCard } from "../utils/randomcard.js";
console.log(deck);
const hola = ramdomCard;
console.log(hola);
function card() {
  const table = document.querySelector(".table");
  const card = document.createElement("div");
  const suitTop = document.createElement("p");
  const number = document.createElement("p");
  const suitBotton = document.createElement("p");
  card.classList.add("w-25");
  card.classList.add("h-50");
  card.classList.add("h-50");
  card.classList.add("bg-white");
  card.classList.add("text-black");
  card.classList.add("border");
  card.classList.add("border-black");
  card.classList.add("rounted");
  console.log(CARD);
  number.textContent = CARD;
  suitTop.textContent = SUIT;
  suitBotton.textContent = SUIT;

  card.append(suitTop);
  card.append(number);
  card.append(suitBotton);
  console.log(card);
  console.log(suitTop);
  table.appendChild(card);
  return table;
}
export default card;
