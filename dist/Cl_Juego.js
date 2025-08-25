export default class Cl_Juego {
    constructor() {
        this._puntajeTotal = 0;
        this._cntJugadores = 0;
        this._cntJugadoresConMenos10Puntos = 0;
        this._auxPuntajeTotal = -Infinity;
        this._auxNombreGanador = "";
    }
    procesarParticipantes(p) {
        //Contador de jugadores:
        this._cntJugadores++;
        //Puntaje Total:
        this._puntajeTotal = p.puntajeTotal();
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
