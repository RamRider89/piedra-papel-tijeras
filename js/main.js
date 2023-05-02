/**
 * 
 * juego de piedra papel o tijeras
 */


let opciones = ['piedra', 'papel', 'tijera'];
//  opciones = [0 - 1 - 2]
let usuario;
let maquina;
let random;
let contadorUser = 0;
let contadorMaquina = 0;
let resultado = '';

const piedraObj = document.getElementById("piedraBtn");
const papelObj = document.getElementById("papelBtn");
const tijeraObj = document.getElementById("tijeraBtn");
const contadorUserObj = document.getElementById("contadorUser");
const contadorMaquinaObj = document.getElementById("contadorMaquina");
const restarGameObj = document.getElementById("restarGame");

const kingWinObj = document.getElementById("kingWin");
const kingLoseObj = document.getElementById("kingLose");

// Get the modal
const modal = document.getElementById("modalGame");
const modalShadow = document.getElementsByClassName("modalShadow")[0];
const spanClose = document.getElementsByClassName("close")[0];
const resultAvisoObj = document.getElementById("resultAviso");
const resultAvisoMaquinaObj = document.getElementById("resultAvisoMaquina");

const RESULTS_GAME = Object.freeze({
        EMPATE: 'empate',
        GANADOR: 'ganador',
        PERDEDOR: 'perdedor' 
});



document.addEventListener("DOMContentLoaded", () => {
  console.log("Piedra, Papel o Tijeras!");
  main();
});

function main() {
    piedraObj.addEventListener('click', function() {
        console.log('Usuario elige: Piedra');
        play(0);
    });

    papelObj.addEventListener('click', function() {
        console.log('Usuario elige: Papel');
        play(1);
    });

    tijeraObj.addEventListener('click', function() {
        console.log('Usuario elige: Tijera');
        play(2);
    });

    restarGameObj.addEventListener('click', function() {
        console.log('Restart game...');
        resetGame();
    });

    
    // When the user clicks on <span> (x), close the modal
    spanClose.onclick = function() {
        modal.style.display = "none";
        resultGameObj.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    modalShadow.onclick = function(event) {
        modal.style.display = "none";
        modalShadow.style.display = "none";
        kingWinObj.style.display = "none";
        kingLoseObj.style.display = "none";
    }
}

function play(user){
    usuario = user;
    maquina = maquinaEleccion();
    showResults();
}


function maquinaEleccion() {
    return Math.floor(Math.random() * 3);
}

function showResults() {

    console.log("Maquina elige: " + opciones[maquina]);

    if (usuario == maquina) {
        console.log("Empate");
        resultado = 'empate';
    }else {
    
        if ((usuario == 0 && maquina == 2) || (usuario == 1 && maquina == 0) || (usuario == 2 && maquina == 1)) {
            console.log("Ganaste");
            contadorUser++;
            contadorUserObj.innerHTML = contadorUser;
            resultado = 'ganador';
            
        }
        else{
            console.log("Perdiste");
            contadorMaquina++;
            contadorMaquinaObj.innerHTML = contadorMaquina;
            resultado = 'perdedor';
        }

    }

    alertaGanador(resultado);
    
}

function resetGame(){
    contadorUser = 0;
    contadorMaquina = 0;
    contadorUserObj.innerHTML = '0';
    contadorMaquinaObj.innerHTML = '0';
}

function alertaGanador(resultado) {

    if (resultado == RESULTS_GAME.EMPATE) {
        resultAvisoObj.style.color = "black";
        resultAvisoObj.innerHTML = "¡Fue un empate!";
        resultAvisoMaquinaObj.innerHTML = "La maquina eligio: " + opciones[maquina];
        
    }else if (resultado == RESULTS_GAME.GANADOR) {
        kingWinObj.style.display = "block";
        resultAvisoObj.style.color = "green";
        resultAvisoObj.innerHTML = "¡Ganaste!";
        resultAvisoMaquinaObj.innerHTML = "La maquina eligio: " + opciones[maquina];
        
    }else{
        kingLoseObj.style.display = "block";
        resultAvisoObj.style.color = "red";
        resultAvisoObj.innerHTML = "¡Perdiste!";
        resultAvisoMaquinaObj.innerHTML = "La maquina eligio: " + opciones[maquina];

    } 

    modal.style.display = "block";
    modalShadow.style.display = "block";
    
}
