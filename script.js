
const contador = document.getElementById('count');
const decrementar = document.getElementById('decrement');
const resertar = document.getElementById('reset');
const incrementar = document.getElementById('increment');
let fundo = document.getElementById("fundo");



let numero = 0;

contador.innerText = numero;

decrementar.addEventListener('click', () => {
  let cor = window.getComputedStyle(fundo).backgroundColor;
  fundo.style.backgroundColor = "red";
  numero = numero - 1;
  contador.innerText = numero;

});

resertar.addEventListener('click', () => {
  let cor = window.getComputedStyle(fundo).backgroundColor;
  fundo.style.backgroundColor = "aqua";
  numero = 0;
  contador.innerText = numero;


});


incrementar.addEventListener('click', () => {
  let cor = window.getComputedStyle(fundo).backgroundColor;
  fundo.style.backgroundColor = "green";
  numero = numero + 1;
  contador.innerText = numero;

});

  
