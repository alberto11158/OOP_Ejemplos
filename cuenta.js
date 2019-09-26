"use strict";
exports.__esModule = true;
/**
 * Crea una clase Cuenta conlos métodos Ingreso, reintegro
 * y transferencia. La clase contendra un constructor por defecto, un constructor con parametros,
 * un constructor copia y los métodos getters y setters.
 */
var Cuenta = /** @class */ (function () {
    function Cuenta(saldo, nroCuenta) {
        this.saldo = saldo;
        this.nroCuenta = nroCuenta;
    }
    Cuenta.prototype.getNroCuenta = function () {
        return this.nroCuenta;
    };
    Cuenta.prototype.getSaldo = function () {
        return this.saldo;
    };
    Cuenta.prototype.setNroCuenta = function (nroCuenta) {
        this.nroCuenta = nroCuenta;
    };
    Cuenta.prototype.ingresar = function (monto) {
        this.saldo += monto;
    };
    Cuenta.prototype.reintegro = function (monto) {
        this.saldo -= monto;
        return this.saldo;
    };
    Cuenta.prototype.transferencia = function (monto, cuenta) {
        cuenta.ingresar(monto);
        this.saldo -= monto;
        console.log(cuenta);
        return this.saldo;
    };
    return Cuenta;
}());
exports.Cuenta = Cuenta;
var cuenta = new Cuenta(100, 1234);
var cuenta2 = new Cuenta(0, 6789);
cuenta.ingresar(100);
cuenta.reintegro(50);
console.log(cuenta.getSaldo());
cuenta.transferencia(100, cuenta2);
console.log(cuenta.getSaldo());
console.log(cuenta2.getSaldo());
