const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const btn5 = document.getElementById("btn5");

let select = document.getElementById('select')
const submitButton = document.getElementById('submit-button')
const card2 = document.getElementById('card-2')

let val1 = btn1.value;
let val2 = btn2.value;
let val3 = btn3.value;
let val4 = btn4.value;
let val5 = btn5.value;


submitButton.addEventListener('click',showCard2)

btn1.addEventListener('click', ()=>{
    select.innerText = `${val1}`
})

btn2.addEventListener('click', ()=>{
    select.innerText = `${val2}`
})

btn3.addEventListener('click', ()=>{
    select.innerText = `${val3}`
})

btn4.addEventListener('click', ()=>{
    select.innerText = `${val4}`
})

btn5.addEventListener('click', ()=>{
    select.innerText = `${val5}`
})

function showCard2 (){
    card2.style.display = 'initial'
}