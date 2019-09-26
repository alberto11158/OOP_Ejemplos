export class Rectangulo {
    private posX: number;
    private posY: number;
    private height: number;
    private width: number;
    public constructor(px: number, py: number, h: number, w: number) {
        this.posX = px;
        this.posY = py;
        this.height = h;
        this.width = w;
    }
    public setPosX(px: number): void {
        this.posX = px;
    }
    public getPosX(): number {
        return this.posX;
    }
    public setPosY(py: number): void {
        this.posY = py;
    }
    public getPosY(): number {
        return this.posY;
    }
    public setWidth(w: number): void {
        this.width = w;
    }
    public getWidth(): number {
        return this.width;
    }
    public setHeight(h: number): void {
        this.height = h;
    }
    public getHeight(): number {
        return this.height;
    }
    public getArea(): number {
        let area: number = this.height * this.width;
        return area;
    } public desplazar(px: number, py: number): void {
        this.posX = px;
        this.posY = py;
    }
    public calPerimetro(): number {
        let perimetro: number = (this.width + this.height) * 2;
        return perimetro;
    }
}

let rectangulo1: Rectangulo = new Rectangulo(5, 5, 10, 15);
console.log(rectangulo1);
rectangulo1.setHeight(66);
console.log(rectangulo1);
rectangulo1.desplazar(100, 100);
console.log(rectangulo1);
let areaRectangulo = rectangulo1.getArea();
console.log(areaRectangulo);
let perimetroRectangulo: number = rectangulo1.calPerimetro();
console.log(perimetroRectangulo);
console.log('');

export class Triangle {
    private posX: number;
    private posY: number;
    private height: number;
    private base: number;
    public constructor(px: number, py: number, h: number, b: number) {
        this.posX = px;
        this.posY = py;
        this.height = h;
        this.base = b;
    }
    public setPosX(px: number): void {
        this.posX = px;
    }
    public getPosX(): number {
        return this.posX;
    }
    public setPosY(py: number): void {
        this.posY = py;
    }
    public getPosY(): number {
        return this.posY;
    }
    public setBase(b: number): void {
        this.base = b;
    }
    public getWidth(): number {
        return this.base;
    }
    public setHeight(h: number): void {
        this.height = h;
    }
    public getHeight(): number {
        return this.height;
    }
    public getArea(): number {
        let area: number = (0.5) * this.base * this.height;
        return area;
    } public desplazar(px: number, py: number): void {
        this.posX = px;
        this.posY = py;
    }
    public calPerimetro(): number {
        let perimetro: number = this.base * 3;
        return perimetro;
    }
}
let triangulo: Triangle = new Triangle(5, 5, 10, 15);
console.log(triangulo);
triangulo.setHeight(66);
console.log(triangulo);
triangulo.desplazar(100, 100);
console.log(triangulo);
let areaTriangulo: number = triangulo.getArea();
console.log(areaTriangulo);
let perimetro: number = triangulo.calPerimetro();
console.log(perimetro);
console.log('');

export class Square {
    private posX: number;
    private posY: number;
    private side: number;
    public constructor(px: number, py: number, s: number) {
        this.posX = px;
        this.posY = py;
        this.side = s;
    }
    public setPosX(px: number): void {
        this.posX = px;
    }
    public getPosX(): number {
        return this.posX;
    }
    public setPosY(py: number): void {
        this.posY = py;
    }
    public getPosY(): number {
        return this.posY;
    }
    public setSide(s: number): void {
        this.side = s;
    }
    public getWidth(): number {
        return this.side;
    }
    public getArea(): number {
        let area: number = this.side * this.side;
        return area;
    } public desplazar(px: number, py: number): void {
        this.posX = px;
        this.posY = py;
    }
    public calPerimetro(): number {
        let perimetro: number = this.side * 4;
        return perimetro;
    }
}
let square1: Square = new Square(5, 5, 10);
console.log(square1);
square1.setSide(5);
console.log(square1);
square1.desplazar(100, 100);
console.log(square1);
let areaSquare: number = square1.getArea();
console.log(areaSquare);
let perimetroSquare: number = square1.calPerimetro();
console.log(perimetroSquare);
console.log('');

export class Parallelogram {
    private posX: number;
    private posY: number;
    private height: number;
    private width: number;
    public constructor(px: number, py: number, h: number, w: number) {
        this.posX = px;
        this.posY = py;
        this.height = h;
        this.width = w;
    }
    public setPosX(px: number): void {
        this.posX = px;
    }
    public getPosX(): number {
        return this.posX;
    }
    public setPosY(py: number): void {
        this.posY = py;
    }
    public getPosY(): number {
        return this.posY;
    }
    public setWidth(w: number): void {
        this.width = w;
    }
    public getWidth(): number {
        return this.width;
    }
    public setHeight(h: number): void {
        this.height = h;
    }
    public getHeight(): number {
        return this.height;
    }
    public getArea(): number {
        let area: number = this.height * this.width;
        return area;
    } public desplazar(px: number, py: number): void {
        this.posX = px;
        this.posY = py;
    }
    public calPerimetro(): number {
        let perimetro: number = (this.width + this.height) * 2;
        return perimetro;
    }
}

let paralelogramo: Parallelogram = new Parallelogram(5, 5, 10, 15);
console.log(paralelogramo);
paralelogramo.setHeight(66);
console.log(paralelogramo);
paralelogramo.desplazar(100, 100);
console.log(paralelogramo);
let areaParalelogramo = paralelogramo.getArea();
console.log(areaParalelogramo);
let perimetroParalelogramo: number = paralelogramo.calPerimetro();
console.log(perimetroParalelogramo);
console.log('');

export class Circle {
    private posX: number;
    private posY: number;
    private radio: number;
    public constructor(px: number, py: number, r: number) {
        this.posX = px;
        this.posY = py;
        this.radio = r;
    }
    public setPosX(px: number): void {
        this.posX = px;
    }
    public getPosX(): number {
        return this.posX;
    }
    public setPosY(py: number): void {
        this.posY = py;
    }
    public getPosY(): number {
        return this.posY;
    }
    public setRadio(r: number): void {
        this.radio = r;
    }
    public getRadio(): number {
        return this.radio;
    }
    public getArea(): number {
        let area: number = Math.PI * this.radio * this.radio;
        return area;
    } public desplazar(px: number, py: number): void {
        this.posX = px;
        this.posY = py;
    }
    public calPerimetro(): number {
        let perimetro: number = Math.PI * 2 * this.radio;
        return perimetro;
    }
}

let circulo1: Circle = new Circle(5, 5, 10);
console.log(circulo1);
circulo1.setRadio(6);
console.log(circulo1);
circulo1.desplazar(100, 100);
console.log(circulo1);
let areaCirulo = circulo1.getArea();
console.log(areaCirulo);
let perimetroCirculo: number = circulo1.calPerimetro();
console.log(perimetroCirculo);
console.log('');

export class Ellipse {
    private posX: number;
    private posY: number;
    private a: number;
    private b: number;
    public constructor(px: number, py: number, a: number, b: number) {
        this.posX = px;
        this.posY = py;
        this.a = a;
        this.b = b;
    }
    public setPosX(px: number): void {
        this.posX = px;
    }
    public getPosX(): number {
        return this.posX;
    }
    public setPosY(py: number): void {
        this.posY = py;
    }
    public getPosY(): number {
        return this.posY;
    }
    public setA(a: number): void {
        this.a = a;
    }
    public getA(): number {
        return this.a;
    }
    public setB(b: number): void {
        this.b = b;
    }
    public getB(): number {
        return this.b;
    }
    public getArea(): number {
        let area: number = this.a * this.b * Math.PI;
        return area;
    } public desplazar(px: number, py: number): void {
        this.posX = px;
        this.posY = py;
    }
    public calPerimetro(): number {
        let perimetro: number = Math.PI * (this.a * (this.a + this.b) - Math.sqrt((this.a * this.a + this.b) * (this.a + this.a * this.b)));
        return perimetro;
    }
}

let elipse1: Ellipse = new Ellipse(5, 5, 10, 15);
console.log(elipse1);
elipse1.setA(10);
console.log(elipse1);
elipse1.desplazar(100, 100);
console.log(elipse1);
let areaElipse = elipse1.getArea();
console.log(areaElipse);
let perimetroElipse: number = elipse1.calPerimetro();
console.log(perimetroElipse);
console.log('');

export class Sector {
    private posX: number;
    private posY: number;
    private radio: number;
    private angulo: number;
    public constructor(px: number, py: number, r: number, a: number) {
        this.posX = px;
        this.posY = py;
        this.radio = r;
        this.angulo = a;
    }
    public setPosX(px: number): void {
        this.posX = px;
    }
    public getPosX(): number {
        return this.posX;
    }
    public setPosY(py: number): void {
        this.posY = py;
    }
    public getPosY(): number {
        return this.posY;
    }
    public setRadio(r: number): void {
        this.radio = r;
    }
    public getRadio(): number {
        return this.radio;
    }
    public setAngulo(a: number): void {
        this.angulo = a;
    }
    public getAngulo(): number {
        return this.angulo;
    }
    public getArea(): number {
        let area: number = (0.5) * this.radio * this.radio * (this.angulo * (Math.PI / 180));
        return area;
    } public desplazar(px: number, py: number): void {
        this.posX = px;
        this.posY = py;
    }
    public calPerimetro(): number {
        let b = 3 * Math.PI / 4;
        let perimetro: number = b * this.radio;
        return perimetro;
    }
}

let sector1: Sector = new Sector(5, 5, 10, 10);
console.log(sector1);
sector1.setAngulo(20);
console.log(sector1);
sector1.desplazar(100, 100);
console.log(sector1);
let areaSector = sector1.getArea();
console.log(areaSector);
let perimetroSector: number = sector1.calPerimetro();
console.log(perimetroSector);
console.log('');

export class Trapezoide {
    private posX: number;
    private posY: number;
    private a: number;
    private b: number;
    private h: number;
    private l: number;
    public constructor(px: number, py: number, a: number, b: number, h: number, l: number) {
        this.posX = px;
        this.posY = py;
        this.a = a;
        this.b = b;
        this.h = h;
        this.l = l;
    }
    public setPosX(px: number): void {
        this.posX = px;
    }
    public getPosX(): number {
        return this.posX;
    }
    public setPosY(py: number): void {
        this.posY = py;
    }
    public getPosY(): number {
        return this.posY;
    }
    public setA(a: number): void {
        this.a = a;
    }
    public getA(): number {
        return this.a;
    }
    public setB(b: number): void {
        this.b = b;
    }
    public getB(): number {
        return this.b;
    }
    public setH(h: number): void {
        this.h = h;
    }
    public getH(): number {
        return this.h;
    }
    public setL(l: number): void {
        this.l = l;
    }
    public getL(): number {
        return this.l;
    }
    public getArea(): number {
        let area: number = (0.5) * (this.a + this.b) * this.h;
        return area;
    } public desplazar(px: number, py: number): void {
        this.posX = px;
        this.posY = py;
    }
    public calPerimetro(): number {
        let perimetro: number = this.a + this.b + this.h + this.l;
        return perimetro;
    }
}

let trapezoide1: Trapezoide = new Trapezoide(5, 5, 10, 15, 5, 6);
console.log(trapezoide1);
trapezoide1.setA(6);
console.log(trapezoide1);
trapezoide1.desplazar(100, 100);
console.log(trapezoide1);
let areaTrapezoide = trapezoide1.getArea();
console.log(areaTrapezoide);
let perimetroTrapezoide: number = trapezoide1.calPerimetro();
console.log(perimetroTrapezoide);
console.log('');