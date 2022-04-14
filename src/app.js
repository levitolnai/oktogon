/*
File: app.js
Author: Tolnai Levente
Copyright: 2022, Tolnai Levente
Group: Szoft 1/2/E
Date: 2022-04-14
Github: https://github.com/sajat/
Licenc: GNU GPL
*/

const oldalElem = document.querySelector("#oldal");
const szamitGomb = document.querySelector("#szamitTerulet");
const teruletElem = document.querySelector("#terulet");

szamitGomb.addEventListener('click', () => {
    let oldal = Number(oldalElem.value);
    
    let terulet = szamitTerulet(oldal);
    console.log(terulet)

    teruletElem.value = terulet;
    
});

var szamitTerulet = (oldal) => {
    return 2*(1+Math.sqrt(2))*Math.pow(oldal, 2);
};