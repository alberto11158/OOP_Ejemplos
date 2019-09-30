"use strict";
exports.__esModule = true;
/**
 * Sistema cursos online
 * Utilizar programamcion orientada a objetos
 * Interaccion con estudiantes, profesores
 * Registrar informacion basica de usuario(nombre, apellido, correo)
 * Registrar datos del curso(nombre, descripcion, precio)
 * Registro de estudiantes que compraron algun curso
 * Un estudiante o profesor puede tener mas de una direccion(ciudad, barrio, calle)
 */
var Direccion = /** @class */ (function () {
    function Direccion(ciudad, barrio, calle) {
        this.ciudad = ciudad;
        this.barrio = barrio;
        this.calle = calle;
    }
    Direccion.prototype.setCiudad = function (ciudad) {
        this.ciudad = ciudad;
    };
    Direccion.prototype.setBarrio = function (barrio) {
        this.barrio = barrio;
    };
    Direccion.prototype.setCalle = function (calle) {
        this.calle = calle;
    };
    Direccion.prototype.getCiudad = function () {
        return this.ciudad;
    };
    Direccion.prototype.getBarrio = function () {
        return this.barrio;
    };
    Direccion.prototype.getCalle = function () {
        return this.calle;
    };
    return Direccion;
}());
exports.Direccion = Direccion;
var dir1 = new Direccion('Cochabamba', 'Muyurina', 'Av. Uyuni');
var dir2 = new Direccion('La Paz', 'El Alto', 'Av. Sopocachi');
var dir3 = new Direccion('Santa Cruz', 'Cotoca', 'Av. Doble Via');
var dir4 = new Direccion('Cochabamba', 'Tupuraya', 'Av. Gabriel Blanco');
//console.log(dir1);
var Docente = /** @class */ (function () {
    function Docente(nombre, apellido, correo, profesion, direccion) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.correo = correo;
        this.profesion = profesion;
        this.direccion = direccion;
    }
    Docente.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    Docente.prototype.setApellido = function (apellido) {
        this.apellido = apellido;
    };
    Docente.prototype.setCorreo = function (correo) {
        this.correo = correo;
    };
    Docente.prototype.setProfesion = function (profesion) {
        this.profesion = profesion;
    };
    Docente.prototype.setDireccion = function (direccion) {
        this.direccion = direccion;
    };
    Docente.prototype.getNombre = function () {
        return this.nombre;
    };
    Docente.prototype.getApellido = function () {
        return this.apellido;
    };
    Docente.prototype.getCorreo = function () {
        return this.correo;
    };
    Docente.prototype.getProfesion = function () {
        return this.profesion;
    };
    Docente.prototype.getDireccion = function () {
        return this.direccion;
    };
    Docente.prototype.addDireccion = function (direccion) {
        this.direccion.push(direccion);
    };
    return Docente;
}());
exports.Docente = Docente;
var doc1 = new Docente('Juan', 'Perez', 'juan@prueba.com', 'Informatica', [dir1, dir2]);
var doc2 = new Docente('Diego', 'Veizaga', 'diego@prueba.com', 'Sistemas', [dir2, dir3]);
doc1.addDireccion(dir3);
//console.log(doc1);
var Estudiante = /** @class */ (function () {
    function Estudiante(nombre, apellido, correo, direccion) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.correo = correo;
        this.direccion = direccion;
    }
    Estudiante.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    Estudiante.prototype.setApellido = function (apellido) {
        this.apellido = apellido;
    };
    Estudiante.prototype.setCorreo = function (correo) {
        this.correo = correo;
    };
    Estudiante.prototype.setDireccion = function (direccion) {
        this.direccion = direccion;
    };
    Estudiante.prototype.getNombre = function () {
        return this.nombre;
    };
    Estudiante.prototype.getApellido = function () {
        return this.apellido;
    };
    Estudiante.prototype.getCorreo = function () {
        return this.correo;
    };
    Estudiante.prototype.getDireccion = function () {
        return this.direccion;
    };
    Estudiante.prototype.addDireccion = function (direccion) {
        this.direccion.push(direccion);
    };
    return Estudiante;
}());
exports.Estudiante = Estudiante;
var est1 = new Estudiante('Ruben', 'Peñarrieta', 'ruben@prueba.com', [dir1]);
var est2 = new Estudiante('Jose', 'Arias', 'jose@prueba.com', [dir2]);
var est3 = new Estudiante('Gonzalo', 'Alfaro', 'gonzalo@prueba.com', [dir3]);
var est4 = new Estudiante('Angel', 'Herrera', 'angel@prueba.com', [dir4]);
var est5 = new Estudiante('Elmer', 'Sanchez', 'elmer@prueba.com', [dir1]);
var est6 = new Estudiante('Alex', 'Garcia', 'alex@prueba.com', [dir4]);
var est7 = new Estudiante('Rodrigo', 'Orellana', 'rodrigo@prueba.com', [dir3]);
var est8 = new Estudiante('Arturo', 'Veizaga', 'arturo@prueba.com', [dir2]);
var est9 = new Estudiante('Ruben', 'Patzi', 'ruben@prueba.com', [dir1]);
var est10 = new Estudiante('Juan', 'Perez', 'juan@prueba.com', [dir2]);
//console.log(est1);
var Curso = /** @class */ (function () {
    function Curso(nombre, descripcion, precio, docente) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = precio;
        this.docente = docente;
    }
    Curso.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    Curso.prototype.setDescripcion = function (descripcion) {
        this.descripcion = descripcion;
    };
    Curso.prototype.setPrecio = function (precio) {
        this.precio = precio;
    };
    Curso.prototype.setDocente = function (docente) {
        this.docente = docente;
    };
    Curso.prototype.getNombre = function () {
        return this.nombre;
    };
    Curso.prototype.getDescripcion = function () {
        return this.descripcion;
    };
    Curso.prototype.getPrecio = function () {
        return this.precio;
    };
    Curso.prototype.getDocente = function () {
        return this.docente;
    };
    return Curso;
}());
exports.Curso = Curso;
var cur1 = new Curso('Programacion', 'Programacion basica', 60, doc1);
var cur2 = new Curso('Angular', 'Fundamentos angular', 70, doc2);
var cur3 = new Curso('NodeJs', 'Fundamentos nodejs', 80, doc1);
var cur4 = new Curso('ReactJs', 'Programamcion en reactjs', 75, doc2);
var cur5 = new Curso('JavaScript', 'javascript avanzado', 65, doc1);
//console.log(cur1);
var CompraCurso = /** @class */ (function () {
    function CompraCurso(fecha, estudiante, curso) {
        this.fecha = fecha;
        this.estudiante = estudiante;
        this.curso = curso;
    }
    CompraCurso.prototype.setFecha = function (fecha) {
        this.fecha = fecha;
    };
    CompraCurso.prototype.setEstudiante = function (estudiante) {
        this.estudiante = estudiante;
    };
    CompraCurso.prototype.setCurso = function (curso) {
        this.curso = curso;
    };
    CompraCurso.prototype.getFecha = function () {
        return this.fecha;
    };
    CompraCurso.prototype.getEstudiante = function () {
        return this.estudiante;
    };
    CompraCurso.prototype.getCurso = function () {
        return this.curso;
    };
    return CompraCurso;
}());
exports.CompraCurso = CompraCurso;
var cc1 = new CompraCurso('20/09/2019', est10, cur1);
var cc2 = new CompraCurso('21/09/2019', est2, cur2);
var cc3 = new CompraCurso('21/09/2019', est3, cur3);
var cc4 = new CompraCurso('22/09/2019', est4, cur4);
var cc5 = new CompraCurso('22/09/2019', est5, cur5);
var cc6 = new CompraCurso('23/09/2019', est6, cur4);
var cc7 = new CompraCurso('24/09/2019', est7, cur3);
var cc8 = new CompraCurso('25/09/2019', est8, cur2);
var cc9 = new CompraCurso('26/09/2019', est8, cur1);
var cc10 = new CompraCurso('27/09/2019', est10, cur2);
var cc11 = new CompraCurso('27/09/2019', est1, cur2);
var cc12 = new CompraCurso('28/09/2019', est5, cur3);
console.log(cc12);
/**
 * Crear la clase PlataformaEducativa, la misma debe tener el nombre de la
 * plataforma educativa, una lista donde se debe guardar el registro de los cursos comprados
 */
/**
 * La clase PlataformaEducativa debe contener un metodo que sirva para registrar la venta de un curso,
 * el metodo debe recibir como argumento (parametro de entrada), una instancia de la clase CompraCurso
 */
/**
 * Crear un metodo dentro de la clase PlataformaEducativa que retorne el total
 * de ingresos percibidos por a venta de cursos online.
 */
var PlataformaEducativa = /** @class */ (function () {
    function PlataformaEducativa(nombre) {
        this.nombre = nombre;
        this.registro = [];
    }
    PlataformaEducativa.prototype.getNombre = function () {
        return this.nombre;
    };
    PlataformaEducativa.prototype.registrarCompraCurso = function (cursoComprado) {
        this.registro.push(cursoComprado);
    };
    PlataformaEducativa.prototype.calGananciaTotal = function () {
        var total = 0;
        for (var _i = 0, _a = this.registro; _i < _a.length; _i++) {
            var compracurso = _a[_i];
            var curso = compracurso.getCurso();
            total += curso.getPrecio();
        }
        return total;
    };
    return PlataformaEducativa;
}());
exports.PlataformaEducativa = PlataformaEducativa;
var plataformaUMSS = new PlataformaEducativa('UMSS');
plataformaUMSS.registrarCompraCurso(cc1);
plataformaUMSS.registrarCompraCurso(cc2);
console.log('Total ganancia por la compra de cursos:  ', plataformaUMSS.calGananciaTotal());
