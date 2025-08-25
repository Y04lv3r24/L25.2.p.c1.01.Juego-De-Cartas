export default class Cl_Participante {
    private _nombre: string;
    private _carta1: number;
    private _carta2: number;
    private _carta3: number;
constructor(nombre: string, carta1: number, carta2: number, carta3: number) {
    this._nombre = nombre;
    this._carta1 = carta1;
    this._carta2 = carta2;
    this._carta3 = carta3;
}
set nombre(nombre: string) {
    this._nombre = nombre;
}
get nombre() {
    return this._nombre;
}
set carta1(carta1: number) {
    this._carta1 = +carta1;
}
get carta1() {
    return this._carta1;
}
set carta2(carta2: number) {
    this._carta2 = +carta2;
}
get carta2() {
    return this._carta2;
}
set carta3(carta3: number) {
    this._carta3 = +carta3;
}
get carta3() {
    return this._carta3;
}
puntajeTotal() {
    return this._carta1 + this._carta2 + this._carta3;
}
}