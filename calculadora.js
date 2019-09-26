"use strict";
exports.__esModule = true;
/**
 * Crea una clase Calculadora con metodos para sumar, restar, multiplicar
 * y dividor.
 */
var Calculadora = /** @class */ (function () {
    function Calculadora() {
    }
    Calculadora.prototype.sumar = function (num1, num2) {
        return num1 + num2;
    };
    Calculadora.prototype.restar = function (num1, num2) {
        return num1 - num2;
    };
    Calculadora.prototype.multiplicar = function (num1, num2) {
        return num1 * num2;
    };
    Calculadora.prototype.dividir = function (num1, num2) {
        return num1 / num2;
    };
    return Calculadora;
}());
exports.Calculadora = Calculadora;
var calculadora = new Calculadora();
console.log(calculadora.sumar(1.5, 25));
console.log(calculadora.restar(-12, 5));
console.log(calculadora.multiplicar(-23, 4));
console.log(calculadora.dividir(45, 5));
