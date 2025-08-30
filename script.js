
const contador = document.getElementById('count');
const decrementar = document.getElementById('decrement');
const resertar = document.getElementById('reset');
const incrementar = document.getElementById('increment');


let numero = 0;

contador.innerText = numero;

decrementar.addEventListener('click', () => {
  numero = numero - 1;
  contador.innerText = numero;
});