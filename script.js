const h1= document.querySelector('h1');
const form= document.querySelector('#form');
const input1= document.querySelector('#calculo1');
const input2= document.querySelector('#calculo2');
const btn= document.querySelector('#btnCalcular');
const resultado= document.querySelector('#result');


btn.addEventListener('click', onclick);

function onclick() {
  const sumaInput = parseInt(input1.value)  + parseInt(input2.value);
  resultado.innerHTML = 'El resultado es: ' + sumaInput;
}