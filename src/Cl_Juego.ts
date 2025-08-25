import Cl_Participante from "./Cl_Participante.js";

export default class Cl_Juego {
    private _puntajeTotal: number = 0;
    private _cntJugadores: number = 0;
    private _cntJugadoresConMenos10Puntos: number = 0;
    private _auxPuntajeTotal: number = -Infinity;
    private _auxNombreGanador: string = "";
    constructor() {}

    procesarParticipantes(p: Cl_Participante) {
        //Contador de jugadores:
        this._cntJugadores++;
        //Puntaje Total:
        this._puntajeTotal = p.carta1 + p.carta2 + p.carta3;
        //Contador de jugadores con menos de 10 puntos:
        if (this._puntajeTotal < 10) {
            this._cntJugadoresConMenos10Puntos++;
        }
        //Participante Ganador:
        if (this._puntajeTotal > this._auxPuntajeTotal) {
            this._auxPuntajeTotal = this._puntajeTotal;
            this._auxNombreGanador = p.nombre;
        }
    }
        puntajeTotal() {
            return this._puntajeTotal;
        }
        nombreGanador() {
            return this._auxNombreGanador;
        }
        porcentajeJugadoresConMenosde10Puntos() {
            return (this._cntJugadoresConMenos10Puntos / this._cntJugadores) * 100;
        }
        

}
