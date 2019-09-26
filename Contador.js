"use strict";
exports.__esModule = true;
/**
 * Crea una clase Contador con los métodos para Incrementar y decrementar el contador.
 * La clase contendra un constructor por defecto, un constructor con parametros, un constructor copia
 * y los métodos getters y setters.
 */
var Contador = /** @class */ (function () {
    function Contador(marcador) {
        this.marcador = marcador;
    }
    Contador.prototype.getMarcador = function () {
        return this.marcador;
    };
    Contador.prototype.setMarcador = function (nMarcador) {
        this.marcador = nMarcador;
    };
    Contador.prototype.incrementar = function () {
        this.marcador++;
    };
    Contador.prototype.decrementar = function () {
        this.marcador--;
    };
    Contador.prototype.toString = function () {
        console.log(this);
    };
    return Contador;
}());
exports.Contador = Contador;
var contador = new Contador(0);
contador.incrementar();
contador.setMarcador(0);
contador.toString();
