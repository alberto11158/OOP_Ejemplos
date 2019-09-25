"use strict";
exports.__esModule = true;
var Bar = /** @class */ (function () {
    function Bar(nom, cap) {
        this.nombre = nom;
        this.capacidad = cap;
    }
    return Bar;
}());
exports.Bar = Bar;
var BarMan = /** @class */ (function () {
    function BarMan(nom, ape) {
        this.nombre = nom;
        this.apellido = ape;
    }
    return BarMan;
}());
exports.BarMan = BarMan;
var Tragos = /** @class */ (function () {
    function Tragos(nom, col, can) {
        this.nombre = nom;
        this.color = col;
        this.cantidad = can;
    }
    return Tragos;
}());
exports.Tragos = Tragos;
/****************************************************************** */
var bar1 = new Bar('Nueva Era', 50);
var bar2 = new Bar('El Patio', 200);
console.log(bar1);
console.log(bar2);
console.log('');
var barman = new BarMan('luis', 'alberto');
console.log(barman);
console.log('');
var trago = new Tragos('cervaza', 'amarillo', 50);
console.log(trago['color']);
