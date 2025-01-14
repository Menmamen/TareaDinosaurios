"use strict";
//Clase dinosaurios
export class Dinosaurio {


    constructor(nombre, estado) {
        //defino los estados válidos en un array
        const estadosValidos = ["hambriento", "enfadado", "tranquilo", "con sueño"];

        this.nombre = nombre;
        //lo inicializo en el centro de la ventana
        this.posicionX = 50;
        this.posicionY = 50;

        //Controlo el valor del estado
        if (estadosValidos.includes(estado)) {
            this.estado = estado;
        } else {
            this.estado = "tranquilo";
            console.log("El estado introducido no era válido, se considerará que el dinosaurio está tranquilo.")
        }

        // Abrir una ventana nueva de 100x100 píxeles
        this.nuevaVentana = window.open("", "_blank", "width=100,height=100");
        if (this.nuevaVentana) {
            this.nuevaVentana.document.write(`<h1>${nombre}</h1>`);
            this.nuevaVentana.document.body.style.backgroundColor = "green";
            
        } else {
            alert("No se pudo abrir la ventana. Asegúrate de que tu navegador permita ventanas emergentes.");
        }
    }

    //ToString
    toString() {
        return "El " + this.nombre + " está en la posición (" + this.posicionX + "," + this.posicionY + "). Está " + this.estado + ".";
    }

    //Comprobacion de estado
    checkEstado() {
        this.nuevaVentana.document.write(`<h5>El dinosaurio ${this.nombre} está ${this.estado}</h5>`);
    }

    //Mover el dinosaurio
    mover(x, y) {

        if (this.posicionX + x >= 0 && this.posicionX + x <= 100 && this.posicionY + y >= 0 && this.posicionY + y <= 100) {
            this.posicionX += x;
            this.posicionY += y;
        } else {
            console.log("No se puede mover el " + this.nombre + " a la posición (" + (this.posicionX + x) + "," + this.posicionY + "). Ha sobrepasado el borde del terreno.");
        }

        console.log("El " + this.nombre + " se ha movido a la posición (" + this.posicionX + "," + this.posicionY + ").");


        let distanciaX = 0;
        let distanciaY = 0;

        if (this.posicionX <= 50) {
            distanciaX = this.posicionX;
        } else {
            distanciaX = 100 - this.posicionX;
        }
        if (this.posicionY <= 50) {
            distanciaY = this.posicionY;
        } else {
            distanciaY = 100 - this.posicionY;
        }

        let color = "";
        //Devuelvo el color en función de la distancia al borde
        if ((distanciaX >= 0 && distanciaX < 10 || distanciaY >= 0 && distanciaY < 10)) {
            color = "red";
        } else if ((distanciaX >= 10 && distanciaX <= 20) || (distanciaY >= 10 && distanciaY <= 20)) {
            color = "orange";
        } else {
            color = "green";
        }

        if(this.nuevaVentana){
            this.nuevaVentana.document.body.style.backgroundColor = color;
        }
    }
}
