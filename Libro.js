"use strict";
exports.__esModule = true;
/**
 * Crea una clase Libro con los métodos prestamo, devolucion y toString.
 * La clase contendra un constructor por defecto, un constructor con parametros
 * y los metodos setters y getters.
 */
var Libro = /** @class */ (function () {
    function Libro(titulo, autor) {
        this.titulo = titulo;
        this.autor = autor;
    }
    Libro.prototype.getTitulo = function () {
        return this.titulo;
    };
    Libro.prototype.setTitulo = function (ntitulo) {
        this.titulo = ntitulo;
    };
    Libro.prototype.getAutor = function () {
        return this.autor;
    };
    Libro.prototype.setAutor = function (nAutor) {
        this.autor = nAutor;
    };
    Libro.prototype.prestamo = function () {
        console.log('Libro prestado.');
    };
    Libro.prototype.devoluciones = function () {
        console.log('Libro devuelto');
    };
    Libro.prototype.toString = function () {
        console.log(this);
    };
    return Libro;
}());
exports.Libro = Libro;
var libro = new Libro("Tormenta", "Luis Alberto");
libro.toString();
