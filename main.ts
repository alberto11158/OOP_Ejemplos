export class Bar {
    nombre: string;
    capacidad: number;
    constructor(nom: string, cap: number) {
        this.nombre = nom;
        this.capacidad = cap;
    }
}
export class BarMan {
    nombre: string;
    apellido: string;
    constructor(nom: string, ape: string) {
        this.nombre = nom;
        this.apellido = ape;
    }
}
export class Tragos {
    nombre: string;
    color: string;
    cantidad: number;
    constructor(nom: string, col: string, can: number) {
        this.nombre = nom;
        this.color = col;
        this.cantidad = can;
    }
}
/****************************************************************** */
let bar1: Bar = new Bar('Nueva Era', 50);
let bar2: Bar = new Bar('El Patio', 200);

console.log(bar1);
console.log(bar2);
console.log('');

let barman: BarMan = new BarMan('luis', 'alberto');
console.log(barman);
console.log('');

let trago: Tragos = new Tragos('cervaza', 'amarillo', 50);
console.log(trago);