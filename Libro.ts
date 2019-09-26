/**
 * Crea una clase Libro con los métodos prestamo, devolucion y toString. 
 * La clase contendra un constructor por defecto, un constructor con parametros 
 * y los metodos setters y getters.
 */
export class Libro {
    private titulo: string;
    private autor: string;
    public constructor(titulo: string, autor: string) {
        this.titulo = titulo;
        this.autor = autor;
    }
    public getTitulo(): string {
        return this.titulo;
    }
    public setTitulo(ntitulo: string): void {
        this.titulo = ntitulo;
    }
    public getAutor(): string {
        return this.autor;
    }
    public setAutor(nAutor: string): void {
        this.autor = nAutor;
    }
    public prestamo(): void {
        console.log('Libro prestado.');
    }
    public devoluciones(): void {
        console.log('Libro devuelto');
    }
    public toString(): void {
        console.log(this);
    }
}

let libro: Libro = new Libro("Tormenta", "Luis Alberto");
libro.toString();