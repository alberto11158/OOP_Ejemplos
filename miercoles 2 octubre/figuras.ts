abstract class FiguraGeometrica {
    protected ancho: number;
    protected alto: number;
    protected profundidad: number;
    public constructor(ancho: number, alto: number, profundidad: number) {
        this.ancho = ancho;
        this.alto = alto;
        this.profundidad = profundidad;
    }
    public getAncho(): number {
        return this.ancho;
    }
    public getAlto() {
        return this.alto;
    }
    public getProfundidad() {
        return this.profundidad;
    }
    public getArea(): number {
        var resultado = this.ancho * this.alto;
        return resultado;
    }
    public getVolumen(): number {
        var resultado = this.ancho * this.alto * this.profundidad;
        return resultado;
    }
}
class Rectangulo extends FiguraGeometrica {
    public constructor(ancho: number, alto: number, profundidad: number) {
        super(ancho, alto, profundidad);
    }
}
class Triangulo extends FiguraGeometrica {
    public constructor(ancho: number, alto: number, profundidad: number) {
        super(ancho, alto, profundidad);
    }
    public getArea(): number {
        var resultado = this.ancho * this.alto * (0.5);
        return resultado;
    }
    public getVolumen(): number {
        var resultado = (1 / 3) * this.ancho * this.profundidad * this.alto;
        return resultado;
    }
}

let rectangulo: Rectangulo = new Rectangulo(10, 4, 4);
let triangulo: Triangulo = new Triangulo(10, 4, 5);

console.log("Area del rectangulo: ", rectangulo.getArea());
console.log("Volumen del rectagulo 3D: ", rectangulo.getVolumen());
console.log();
console.log("Area del triangulo: ", triangulo.getArea());
console.log("Volumen del triangulo 3D: ", triangulo.getVolumen());