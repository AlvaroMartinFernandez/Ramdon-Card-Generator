import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //Declaramos las funciones
  function randomPalo() {
    const palos = ["♦", "♥", "♠", "♣"];

    let indexPalo = Math.floor(Math.random() * palos.length);
    return palos[indexPalo];
  }

  function randomNumbers() {
    const numbers = ["A", "2", "3", "4", "5", "6", "8", "9", "J", "Q", "K"];
    let indexNumber = Math.floor(Math.random() * numbers.length);
    return numbers[indexNumber];
  }

  //Guardamos las funciones

  let generarPalo = randomPalo();
  let generarNumero = randomNumbers();

  //Selección de elementos del HTML
  let top = document.querySelector(".top");
  let bottom = document.querySelector(".bottom");
  let numero = document.querySelector(".numbers");

  //Insertar las variables en el HTML
  top.innerHTML = generarPalo;
  bottom.innerHTML = generarPalo;
  numero.innerHTML = generarNumero;

  //Codicionales para asignar color a los palos
  if (top.innerHTML === "♦" || top.innerHTML === "♥") {
    top.style.color = "red";
  } else {
    top.style.color = "black";
  }

  if (bottom.innerHTML === "♦" || bottom.innerHTML === "♥") {
    bottom.style.color = "red";
  } else {
    bottom.style.color = "black";
  }
};
