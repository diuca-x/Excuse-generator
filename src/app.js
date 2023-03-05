/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let who = ["The dog ", "My granma ", "His turtle ", "My bird "];
  let what = ["eat ", "pissed ", "crushed ", "broked "];
  let when = [
    "before the class",
    "right in time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];
  let string1 = who[Math.floor(Math.random() * who.length)];
  let string2 = what[Math.floor(Math.random() * what.length)];
  let string3 = when[Math.floor(Math.random() * when.length)];

  let excuse = string1 + string2 + string3;
  document.getElementById("excuse").innerHTML = excuse;
};
