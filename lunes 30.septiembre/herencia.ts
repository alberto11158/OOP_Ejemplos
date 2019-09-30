class Cliente {
    private nombre: string;
    public constructor(nombre: string) {
        this.nombre = nombre;
    }
    public getNombre(): string {
        return this.nombre;
    }
}
abstract class Disco {
    private cliente: Cliente;
    private titulo: string;
    private tipo: string;
    private precio: number;
    public constructor(cliente: Cliente, titulo: string, tipo: string, precio: number) {
        this.cliente = cliente;
        this.titulo = titulo;
        this.tipo = tipo;
        this.precio = precio;
    }
    public getDatos(): object {
        return [this.tipo, this.precio];
    }
    public getCliente(): Cliente {
        return this.cliente;
    }
    public getTitulo() {
        return this.titulo;
    }
}

class Cd extends Disco {
    public constructor(cliente: Cliente, titulo: string, tipo: string, precio: number) {
        super(cliente, titulo, tipo, precio);
    }
}
class Dvd extends Disco {
    public constructor(cliente: Cliente, titulo: string, tipo: string, precio: number) {
        super(cliente, titulo, tipo, precio);
    }
}
class BluRay extends Disco {
    public constructor(cliente: Cliente, titulo: string, tipo: string, precio: number) {
        super(cliente, titulo, tipo, precio);
    }
}

class tiendaDiscos {
    private registro: Array<Disco>;
    public constructor() {
        this.registro = [];
    }
    public addVenta(disco: Disco): void {
        this.registro.push(disco);
    }
    public calVentaCds(): number {
        var total = 0;
        for (const disco of this.registro) {
            var datos = disco.getDatos();
            if (datos[0] == "cd") {
                total += datos[1];
            }
        }
        return total;
    }
    public calVentaDvds(): number {
        var total = 0;
        for (const disco of this.registro) {
            var datos = disco.getDatos();
            if (datos[0] == "dvd") {
                total += datos[1];
            }
        }
        return total;
    }
    public calVentaBlurays(): number {
        var total = 0;
        for (const disco of this.registro) {
            var datos = disco.getDatos();
            if (datos[0] == "bluray") {
                total += datos[1];
            }
        }
        return total;
    }
    public calVentaTotal(): number {
        var total = 0;
        for (const disco of this.registro) {
            var datos = disco.getDatos();
            total += datos[1];
        }
        return total;
    }
}

let cliente: Cliente = new Cliente("Luis");
let cliente2: Cliente = new Cliente("Alberto");

let cd1: Cd = new Cd(cliente, "Doom", "cd", 12);
let cd2: Cd = new Cd(cliente2, "DarkNight", "cd", 12);

let dvd1: Dvd = new Dvd(cliente, "Sing", "dvd", 10);
let dvd2: Dvd = new Dvd(cliente2, "SpiderMan", "dvd", 10);

let bluray1: BluRay = new BluRay(cliente, "SAW", "bluray", 30);
let bluray2: BluRay = new BluRay(cliente, "Kingsman", "bluray", 30);

let tiendaUMSS: tiendaDiscos = new tiendaDiscos();

tiendaUMSS.addVenta(cd1);
tiendaUMSS.addVenta(cd2);
tiendaUMSS.addVenta(dvd1);
tiendaUMSS.addVenta(dvd2);
tiendaUMSS.addVenta(bluray1);
tiendaUMSS.addVenta(bluray2);

console.log("Venta de Cds -->  ", tiendaUMSS.calVentaCds());
console.log("Venta de Dvds --> ", tiendaUMSS.calVentaDvds());
console.log("Venta de Blu-Rays --> ", tiendaUMSS.calVentaBlurays());
console.log("Venta total de la Tienda --> ", tiendaUMSS.calVentaTotal());