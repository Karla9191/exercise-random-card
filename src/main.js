/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  /*console.log(tipoCarta());
  console.log(numeroCarta());*/
  let iconCard = tipoCarta();
  //document.getElementById("topIcon").innerHTML = tipoCarta();
  document.getElementById("numberCard").innerHTML = numeroCarta();
  //document.getElementById("bottomIcon").innerHTML = tipoCarta();
  if (iconCard == "&hearts;" || iconCard == "&diams;") {
    document.getElementById("topIcon").classList.add("topIconRed");
    document.getElementById("bottomIcon").classList.add("bottomIconRed");
    document.getElementById("topIcon").innerHTML = iconCard;
    document.getElementById("bottomIcon").innerHTML = iconCard;
  } else {
    document.getElementById("topIcon").classList.add("topIcon");
    document.getElementById("bottomIcon").classList.add("bottomIcon");
    document.getElementById("topIcon").innerHTML = iconCard;
    document.getElementById("bottomIcon").innerHTML = iconCard;
  }
};

function tipoCarta() {
  let figura = Math.floor(Math.random() * 4) + 1;
  let cartaFigura = "";
  switch (figura) {
    case 1:
      cartaFigura = "&spades;";
      break;
    case 2:
      cartaFigura = "&clubs;";
      break;
    case 3:
      cartaFigura = "&hearts;";
      break;
    case 4:
      cartaFigura = "&diams;";
      break;
  }
  return cartaFigura;
}

function numeroCarta() {
  let numCarta = Math.floor(Math.random() * 13) + 1;
  let carta = "";
  switch (numCarta) {
    case 11:
      carta = "J";
      break;
    case 12:
      carta = "Q";
      break;
    case 13:
      carta = "K";
      break;
    default:
      carta = numCarta;
  }
  return carta;
}
