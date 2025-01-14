"use strict";

//Ejercicio extra, página de dinosaurios

//Importo la clase dinosaurios
import {Dinosaurio} from './Dinosaurio.js';


//var stegossaurus = new Dinosaurio("stegossaurus","con sueño");
//consol
alert("holiwis");

let dinosaurios = [];
let altoPantalla = screen.height;
let anchoPantalla = screen.width;

let espacioDisponible = 0;

window.crearDinosaurio = function(){
    espacioDisponible = altoPantalla*anchoPantalla - dinosaurios.length*100*100;
    if(espacioDisponible>=1000){
        let nombre = prompt("Introduzca el nombre del dinosaurio");
        let estado = prompt("Introduzca uno de estos estados para el dinosaurio: hambriento, enfadado, tranquilo, con sueño");
        let dinosaurrr = new Dinosaurio(nombre, estado)
        dinosaurios.push(dinosaurrr);
    }else{
        console.log("No hay espacio suficiente para crear más dinosaurios")
    }
    if(espacioDisponible <= altoPantalla*anchoPantalla*0.9){
        document.body.style.backgroundColor = "#333333"
        document.body.style.color = "white";
        alert("Estamos a punto de desbordarnos.");
    }else if(espacioDisponible <= altoPantalla*anchoPantalla*0.75){
        document.body.style.backgroundColor = "#737373"
    }else if(espacioDisponible <= altoPantalla*anchoPantalla*0.5){
        document.body.style.backgroundColor = "#cccccc";
    }
    
    
}
console.log(dinosaurios);

window.moverDinosaurio = function (){
    let nombre = prompt("Introduzca el nombre del dinosaurio que quiere mover");
    let x = parseInt(prompt("Introduzca el movimiento en x"));
    let y = parseInt(prompt("Introduzca el movimiento en y"));
    let dinosaurioMov = null;

    for(let i = 0; i < dinosaurios.length; i++){
        if(dinosaurios[i].nombre === nombre){
            dinosaurioMov = dinosaurios[i];
            i = dinosaurios.length;
        }
    }

    if(dinosaurioMov){
        dinosaurioMov.mover(x, y);
    }else{
        console.log("No se ha encontrado el dinosaurio");
    }
}
window.comprobarEstado = function(){
    let nombre = prompt("Introduzca el nombre del dinosaurio a comporbar:");
    let dinosaurioEstado = null;

    for(let i = 0; i < dinosaurios.length; i++){
        if(dinosaurios[i].nombre === nombre){
            dinosaurioEstado = dinosaurios[i];
            i = dinosaurios.length;
        }
    }
    if(dinosaurioEstado){
        dinosaurioEstado.checkEstado();
    }else{
        console.log("No se ha encontrado el dinosaurio")
    }
}
