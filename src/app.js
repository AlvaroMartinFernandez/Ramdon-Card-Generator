/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

import table from "./components/tablero.js";
import card from "./components/card.js";
import { deck, SUIT, CARD, ramdomCard } from "./utils/randomcard.js";
table();
card();
window.onload = function() {};
