/* eslint-disable no-unused-vars */

let order = [];
let clickedOrder = [];
let score = 0;

//0 = Verde
//1 = Vermelho
//2 = Amarelo
//3 = Azul

const blue = document.querySelector(".blue");
const red = document.querySelector(".red");
const green = document.querySelector(".green");
const yellow = document.querySelector(".yellow");

let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickedOrder = [];

    for(let i in order){
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1);
    }
};

let lightColor = (element, number) => {
    let time = time * 500;
    setTimeout(() => {
        element.classList.add("selected");
    }, time - 250);
};