const container1 = document.querySelector("#c1");
const container2 = document.querySelector("#c2");
const submitButton = document.querySelector(".button");
const star1 = document.querySelector("#r1");
const star2 = document.querySelector("#r2");
const star3 = document.querySelector("#r3");
const star4 = document.querySelector("#r4");
const star5 = document.querySelector("#r5");
const rates = document.querySelector(".rate")
let rate = 5;
let r1 = false;
let r2 = false;
let r3 = false;
let r4 = false;
let r5 = false;

submitButton.addEventListener("click", () => {
    rates.innerHTML = `You selected ${rate} out of 5`;
    container1.style.display = "none"
    container2.style.display = "flex"

})



star5.addEventListener("click", () =>{
    toggle(5)
    rate = 5;
})
star5.addEventListener("mouseenter",() => {
    toggle(5);
})
star5.addEventListener("mouseleave",() =>{
    toggle(rate);
})

star4.addEventListener("click", () =>{
    toggle(4);
    rate = 4;
})
star4.addEventListener("mouseenter",() => {
    toggle(4);
})
star4.addEventListener("mouseleave",() =>{
    toggle(rate);
})
star3.addEventListener("click", () =>{
    toggle(3);
    rate = 3;
})
star3.addEventListener("mouseenter",() => {
    toggle(3);
})
star3.addEventListener("mouseleave",() =>{
    toggle(rate);
})

star2.addEventListener("click", () =>{
    toggle(2);
    rate = 2;
})
star2.addEventListener("mouseenter",() => {
    toggle(2);
})
star2.addEventListener("mouseleave",() =>{
    toggle(rate);
})

star1.addEventListener("click", () =>{
    toggle(1);
    rate = 1;
})
star1.addEventListener("mouseenter",() => {
    toggle(1);
})
star1.addEventListener("mouseleave",() =>{
    toggle(rate);
})









function toggle(toggle){
    if(toggle === 5){
    star5.style.backgroundColor = "hsla(25, 97%, 53%, 0.357)";
    star4.style.backgroundColor = "hsla(25, 97%, 53%, 0.357)";
    star3.style.backgroundColor = "hsla(25, 97%, 53%, 0.357)";
    star2.style.backgroundColor = "hsla(25, 97%, 53%, 0.357)";
    star1.style.backgroundColor = "hsla(25, 97%, 53%, 0.357)";}
    else if(toggle === 4){
    star5.style.backgroundColor = "hsl(213, 20%, 22%)";
    star4.style.backgroundColor = "hsla(25, 97%, 53%, 0.357)";
    star3.style.backgroundColor = "hsla(25, 97%, 53%, 0.357)";
    star2.style.backgroundColor = "hsla(25, 97%, 53%, 0.357)";
    star1.style.backgroundColor = "hsla(25, 97%, 53%, 0.357)";}
    else if(toggle === 3){
    star5.style.backgroundColor = "hsl(213, 20%, 22%)";
    star4.style.backgroundColor = "hsl(213, 20%, 22%)";
    star3.style.backgroundColor = "hsla(25, 97%, 53%, 0.357)";
    star2.style.backgroundColor = "hsla(25, 97%, 53%, 0.357)";
    star1.style.backgroundColor = "hsla(25, 97%, 53%, 0.357)";}
    else if (toggle === 2){
    star5.style.backgroundColor = "hsl(213, 20%, 22%)";
    star4.style.backgroundColor = "hsl(213, 20%, 22%)";
    star3.style.backgroundColor = "hsl(213, 20%, 22%)";
    star2.style.backgroundColor = "hsla(25, 97%, 53%, 0.357)";
    star1.style.backgroundColor = "hsla(25, 97%, 53%, 0.357)";}
    else if (toggle === 1){
    star5.style.backgroundColor = "hsl(213, 20%, 22%)";
    star4.style.backgroundColor = "hsl(213, 20%, 22%)";
    star3.style.backgroundColor = "hsl(213, 20%, 22%)";
    star2.style.backgroundColor = "hsl(213, 20%, 22%)";
    star1.style.backgroundColor = "hsla(25, 97%, 53%, 0.357)";
}}