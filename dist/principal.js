/** JUEGO DE CARTAS
En el juego a cada participante se le entregan 3 cartas numeradas del 1 al 12, gana quien
sume mayor puntuación. Se desea conocer a) la puntuación de cada participante, b) el nombre
del ganador, c) el porcentaje de jugadores con menos de 10 puntos.
Se tiene que el formato para la salida de los requerimientos solicitados es:

El participante Juan tiene una puntuación de 8
El participante José tiene una puntuación de 14
El participante Rosa tiene una puntuación de 27
Nombre del ganador: Rosa
Porcentaje de jugadores con menos de 10 puntos:33.33%

La salida corresponde a los siguientes datos del participante (nombre, carta1, carta2, carta3):
(Juan,1,5,2) (José, 12,1,1) (Rosa, 10,9,8)
 */
import Cl_Juego from "./Cl_Juego.js";
import Cl_Participante from "./Cl_Participante.js";
let participante1 = new Cl_Participante("Juan", 1, 5, 2);
let participante2 = new Cl_Participante("José", 12, 1, 1);
let participante3 = new Cl_Participante("Rosa", 10, 9, 8);
let juego = new Cl_Juego();
juego.procesarParticipantes(participante1);
juego.procesarParticipantes(participante2);
juego.procesarParticipantes(participante3);
let salida = document.getElementById("salida");
if (salida) {
    salida.innerHTML += `<p> El participante ${participante1.nombre} tiene una puntuación de ${participante1.carta1 + participante1.carta2 + participante1.carta3}</p>`;
    salida.innerHTML += `<p> El participante ${participante2.nombre} tiene una puntuación de ${participante2.carta1 + participante2.carta2 + participante2.carta3}</p>`;
    salida.innerHTML += `<p> El participante ${participante3.nombre} tiene una puntuación de ${participante3.carta1 + participante3.carta2 + participante3.carta3}</p>`;
    salida.innerHTML += `<p> Nombre del ganador: ${juego.nombreGanador()}</p>`;
    salida.innerHTML += `<p> Porcentaje de jugadores con menos de 10 puntos: ${juego.porcentajeJugadoresConMenosde10Puntos()}%</p>`;
}
else {
    console.log("No se pudo encontrar el elemento con el id 'salida'");
}
