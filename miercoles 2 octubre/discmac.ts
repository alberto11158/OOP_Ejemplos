abstract class Electrodomestico {
    private marca: string;
    private precio: number;
    private id: number;
    private vendido: boolean;
    public constructor(marca: string, precio: number, id: number) {
        this.marca = marca;
        this.precio = precio;
        this.id = id;
        this.vendido = false;
    }
    public getMarca(): string {
        return this.marca;
    }
    public getPrecio(): number {
        return this.precio;
    }
    public getId(): number {
        return this.id;
    }
    public getVendido(): boolean {
        return this.vendido;
    }
    public setVendido(estado: boolean): void {
        this.vendido = estado;
    }
}
class Televisor extends Electrodomestico {
    private pulgadas: number;
    public constructor(marca: string, precio: number, id: number, pulgadas: number) {
        super(marca, precio, id);
        this.pulgadas = pulgadas;
    }
    public getDatos(): object {
        return this;
    }
}
class Lavadora extends Electrodomestico {
    private capacidadKg: number;
    public constructor(marca: string, precio: number, id: number, capacidadKg: number) {
        super(marca, precio, id);
        this.capacidadKg = capacidadKg;
    }
    public getDatos(): object {
        return this;
    }
}
class Cocina extends Electrodomestico {
    private cantHornilla: number;
    public constructor(marca: string, precio: number, id: number, cantHornilla: number) {
        super(marca, precio, id);
        this.cantHornilla = cantHornilla;
    }
    public getDatos(): object {
        return this;
    }
}
class Microondas extends Electrodomestico {
    public constructor(marca: string, precio: number, id: number) {
        super(marca, precio, id);

    }
}
class TiendaDismac {
    private inventario: Array<Electrodomestico>;
    public constructor() {
        this.inventario = [];
    }
    public mostrarInventario(): void {
        for (const articulo of this.inventario) {
            console.log(articulo);
            console.log(' ');
        }
    }
    public addElectrodomestico(electrodomestico: Electrodomestico) {
        this.inventario.push(electrodomestico);
    }
}

let tvSamsung: Televisor = new Televisor("Samsung", 300, 1234, 60);
let lavadoraLg: Lavadora = new Lavadora("LG", 1000, 1234, 20);
let cocinaConsul: Cocina = new Cocina("Consul", 500, 1234, 6);
let microondasLg: Microondas = new Microondas("LG", 400, 1234);

let tiendaDiscmac: TiendaDismac = new TiendaDismac();

tiendaDiscmac.addElectrodomestico(tvSamsung);
tiendaDiscmac.addElectrodomestico(lavadoraLg);
tiendaDiscmac.addElectrodomestico(cocinaConsul);
tiendaDiscmac.addElectrodomestico(microondasLg);

tiendaDiscmac.mostrarInventario();