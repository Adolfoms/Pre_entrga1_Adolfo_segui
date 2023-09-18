

alert("Para continuar debes adivinar el número secreto");

let valor1 = Number(prompt("Comencemos, ingresa un número entre 1 y 50: "));
let numeroSecreto  
let intentos = 1

numeroSecreto = Math.ceil(Math.random() * 50)

while( valor1 !== numeroSecreto   ){
    if( valor1 > numeroSecreto  ){
    
        valor1 = Number(prompt("No acertaste, debes ingresar un número menor : "));
        intentos++;
    }else{
     
        valor1 = Number(prompt("Muy bajo, el número secreto es mayor: "));
        intentos++;
    }
}
alert(`Felicidades, lo conseguiste en ${intentos} intentos`)