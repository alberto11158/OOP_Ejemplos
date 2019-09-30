
/**
 * Sistema cursos online
 * Utilizar programamcion orientada a objetos
 * Interaccion con estudiantes, profesores
 * Registrar informacion basica de usuario(nombre, apellido, correo)
 * Registrar datos del curso(nombre, descripcion, precio)
 * Registro de estudiantes que compraron algun curso
 * Un estudiante o profesor puede tener mas de una direccion(ciudad, barrio, calle)
 */
export class Direccion {
    private ciudad: string;
    private barrio: string;
    private calle: string;
    constructor(ciudad: string, barrio: string, calle: string) {
        this.ciudad = ciudad;
        this.barrio = barrio;
        this.calle = calle;
    }
    public setCiudad(ciudad: string): void {
        this.ciudad = ciudad;
    }
    public setBarrio(barrio: string): void {
        this.barrio = barrio;
    }
    public setCalle(calle: string): void {
        this.calle = calle;
    }
    public getCiudad(): string {
        return this.ciudad;
    }
    public getBarrio(): string {
        return this.barrio;
    }
    public getCalle(): string {
        return this.calle;
    }

}

let dir1: Direccion = new Direccion('Cochabamba', 'Muyurina', 'Av. Uyuni');
let dir2: Direccion = new Direccion('La Paz', 'El Alto', 'Av. Sopocachi');
let dir3: Direccion = new Direccion('Santa Cruz', 'Cotoca', 'Av. Doble Via');
let dir4: Direccion = new Direccion('Cochabamba', 'Tupuraya', 'Av. Gabriel Blanco');
//console.log(dir1);


export class Docente {
    private nombre: string;
    private apellido: string;
    private correo: string;
    private profesion: string;
    private direccion: Array<Direccion>
    constructor(nombre: string, apellido: string, correo: string, profesion: string, direccion: Array<Direccion>) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.correo = correo;
        this.profesion = profesion;
        this.direccion = direccion;
    }

    public setNombre(nombre: string): void {
        this.nombre = nombre;
    }
    public setApellido(apellido: string): void {
        this.apellido = apellido;
    }
    public setCorreo(correo: string): void {
        this.correo = correo;
    }
    public setProfesion(profesion: string): void {
        this.profesion = profesion;
    }
    public setDireccion(direccion: Array<Direccion>): void {
        this.direccion = direccion;
    }

    public getNombre(): string {
        return this.nombre;
    }
    public getApellido(): string {
        return this.apellido;
    }
    public getCorreo(): string {
        return this.correo;
    }
    public getProfesion(): string {
        return this.profesion;
    }
    public getDireccion(): Array<Direccion> {
        return this.direccion;
    }
    public addDireccion(direccion: Direccion): void {
        this.direccion.push(direccion)
    }

}

let doc1: Docente = new Docente('Juan', 'Perez', 'juan@prueba.com', 'Informatica', [dir1, dir2]);
let doc2: Docente = new Docente('Diego', 'Veizaga', 'diego@prueba.com', 'Sistemas', [dir2, dir3]);
doc1.addDireccion(dir3);
//console.log(doc1);



export class Estudiante {
    private nombre: string;
    private apellido: string;
    private correo: string;
    private direccion: Array<Direccion>
    constructor(nombre: string, apellido: string, correo: string, direccion: Array<Direccion>) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.correo = correo;
        this.direccion = direccion;
    }

    public setNombre(nombre: string): void {
        this.nombre = nombre;
    }
    public setApellido(apellido: string): void {
        this.apellido = apellido;
    }
    public setCorreo(correo: string): void {
        this.correo = correo;
    }
    public setDireccion(direccion: Array<Direccion>): void {
        this.direccion = direccion;
    }

    public getNombre(): string {
        return this.nombre;
    }
    public getApellido(): string {
        return this.apellido;
    }
    public getCorreo(): string {
        return this.correo;
    }
    public getDireccion(): Array<Direccion> {
        return this.direccion;
    }
    public addDireccion(direccion: Direccion): void {
        this.direccion.push(direccion);
    }

}

let est1: Estudiante = new Estudiante('Ruben', 'Peñarrieta', 'ruben@prueba.com', [dir1]);
let est2: Estudiante = new Estudiante('Jose', 'Arias', 'jose@prueba.com', [dir2]);
let est3: Estudiante = new Estudiante('Gonzalo', 'Alfaro', 'gonzalo@prueba.com', [dir3]);
let est4: Estudiante = new Estudiante('Angel', 'Herrera', 'angel@prueba.com', [dir4]);
let est5: Estudiante = new Estudiante('Elmer', 'Sanchez', 'elmer@prueba.com', [dir1]);
let est6: Estudiante = new Estudiante('Alex', 'Garcia', 'alex@prueba.com', [dir4]);
let est7: Estudiante = new Estudiante('Rodrigo', 'Orellana', 'rodrigo@prueba.com', [dir3]);
let est8: Estudiante = new Estudiante('Arturo', 'Veizaga', 'arturo@prueba.com', [dir2]);
let est9: Estudiante = new Estudiante('Ruben', 'Patzi', 'ruben@prueba.com', [dir1]);
let est10: Estudiante = new Estudiante('Juan', 'Perez', 'juan@prueba.com', [dir2]);
//console.log(est1);


export class Curso {
    private nombre: string;
    private descripcion: string;
    private precio: number;
    private docente: Docente;
    constructor(nombre: string, descripcion: string, precio: number, docente: Docente) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = precio;
        this.docente = docente;
    }

    public setNombre(nombre: string): void {
        this.nombre = nombre;
    }
    public setDescripcion(descripcion: string): void {
        this.descripcion = descripcion;
    }
    public setPrecio(precio: number): void {
        this.precio = precio;
    }
    public setDocente(docente: Docente): void {
        this.docente = docente;
    }

    public getNombre(): string {
        return this.nombre;
    }
    public getDescripcion(): string {
        return this.descripcion;
    }
    public getPrecio(): number {
        return this.precio;
    }
    public getDocente(): Docente {
        return this.docente;
    }

}


let cur1: Curso = new Curso('Programacion', 'Programacion basica', 60, doc1);
let cur2: Curso = new Curso('Angular', 'Fundamentos angular', 70, doc2);
let cur3: Curso = new Curso('NodeJs', 'Fundamentos nodejs', 80, doc1);
let cur4: Curso = new Curso('ReactJs', 'Programamcion en reactjs', 75, doc2);
let cur5: Curso = new Curso('JavaScript', 'javascript avanzado', 65, doc1);
//console.log(cur1);


export class CompraCurso {
    private fecha: string;
    private estudiante: Estudiante;
    private curso: Curso;
    constructor(fecha: string, estudiante: Estudiante, curso: Curso) {
        this.fecha = fecha;
        this.estudiante = estudiante;
        this.curso = curso;
    }

    public setFecha(fecha: string): void {
        this.fecha = fecha;
    }
    public setEstudiante(estudiante: Estudiante): void {
        this.estudiante = estudiante;
    }
    public setCurso(curso: Curso): void {
        this.curso = curso;
    }

    public getFecha(): string {
        return this.fecha;
    }
    public getEstudiante(): Estudiante {
        return this.estudiante;
    }
    public getCurso(): Curso {
        return this.curso;
    }

}

let cc1: CompraCurso = new CompraCurso('20/09/2019', est10, cur1);
let cc2: CompraCurso = new CompraCurso('21/09/2019', est2, cur2);
let cc3: CompraCurso = new CompraCurso('21/09/2019', est3, cur3);
let cc4: CompraCurso = new CompraCurso('22/09/2019', est4, cur4);
let cc5: CompraCurso = new CompraCurso('22/09/2019', est5, cur5);
let cc6: CompraCurso = new CompraCurso('23/09/2019', est6, cur4);
let cc7: CompraCurso = new CompraCurso('24/09/2019', est7, cur3);
let cc8: CompraCurso = new CompraCurso('25/09/2019', est8, cur2);
let cc9: CompraCurso = new CompraCurso('26/09/2019', est8, cur1);
let cc10: CompraCurso = new CompraCurso('27/09/2019', est10, cur2);
let cc11: CompraCurso = new CompraCurso('27/09/2019', est1, cur2);
let cc12: CompraCurso = new CompraCurso('28/09/2019', est5, cur3);
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

export class PlataformaEducativa {
    private nombre: string;
    private registro: Array<CompraCurso>;
    public constructor(nombre: string) {
        this.nombre = nombre;
        this.registro = [];
    }
    public getNombre(): string{
        return this.nombre;
    }
    public registrarCompraCurso(cursoComprado: CompraCurso): void {
        this.registro.push(cursoComprado);
    }
    public calGananciaTotal() {
        var total = 0;
        for (const compracurso of this.registro) {
            var curso = compracurso.getCurso();
            total += curso.getPrecio();
        }
        return total;
    }
}

let plataformaUMSS: PlataformaEducativa = new PlataformaEducativa('UMSS');
plataformaUMSS.registrarCompraCurso(cc1);
plataformaUMSS.registrarCompraCurso(cc2);
console.log('Total ganancia por la compra de cursos:  ', plataformaUMSS.calGananciaTotal()); 