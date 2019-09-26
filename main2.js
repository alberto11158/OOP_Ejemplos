"use strict";
exports.__esModule = true;
var Rectangulo = /** @class */ (function () {
    function Rectangulo(px, py, h, w) {
        this.posX = px;
        this.posY = py;
        this.height = h;
        this.width = w;
    }
    Rectangulo.prototype.setPosX = function (px) {
        this.posX = px;
    };
    Rectangulo.prototype.getPosX = function () {
        return this.posX;
    };
    Rectangulo.prototype.setPosY = function (py) {
        this.posY = py;
    };
    Rectangulo.prototype.getPosY = function () {
        return this.posY;
    };
    Rectangulo.prototype.setWidth = function (w) {
        this.width = w;
    };
    Rectangulo.prototype.getWidth = function () {
        return this.width;
    };
    Rectangulo.prototype.setHeight = function (h) {
        this.height = h;
    };
    Rectangulo.prototype.getHeight = function () {
        return this.height;
    };
    Rectangulo.prototype.getArea = function () {
        var area = this.height * this.width;
        return area;
    };
    Rectangulo.prototype.desplazar = function (px, py) {
        this.posX = px;
        this.posY = py;
    };
    Rectangulo.prototype.calPerimetro = function () {
        var perimetro = (this.width + this.height) * 2;
        return perimetro;
    };
    return Rectangulo;
}());
exports.Rectangulo = Rectangulo;
var rectangulo1 = new Rectangulo(5, 5, 10, 15);
console.log(rectangulo1);
rectangulo1.setHeight(66);
console.log(rectangulo1);
rectangulo1.desplazar(100, 100);
console.log(rectangulo1);
var areaRectangulo = rectangulo1.getArea();
console.log(areaRectangulo);
var perimetroRectangulo = rectangulo1.calPerimetro();
console.log(perimetroRectangulo);
console.log('');
var Triangle = /** @class */ (function () {
    function Triangle(px, py, h, b) {
        this.posX = px;
        this.posY = py;
        this.height = h;
        this.base = b;
    }
    Triangle.prototype.setPosX = function (px) {
        this.posX = px;
    };
    Triangle.prototype.getPosX = function () {
        return this.posX;
    };
    Triangle.prototype.setPosY = function (py) {
        this.posY = py;
    };
    Triangle.prototype.getPosY = function () {
        return this.posY;
    };
    Triangle.prototype.setBase = function (b) {
        this.base = b;
    };
    Triangle.prototype.getWidth = function () {
        return this.base;
    };
    Triangle.prototype.setHeight = function (h) {
        this.height = h;
    };
    Triangle.prototype.getHeight = function () {
        return this.height;
    };
    Triangle.prototype.getArea = function () {
        var area = (0.5) * this.base * this.height;
        return area;
    };
    Triangle.prototype.desplazar = function (px, py) {
        this.posX = px;
        this.posY = py;
    };
    Triangle.prototype.calPerimetro = function () {
        var perimetro = this.base * 3;
        return perimetro;
    };
    return Triangle;
}());
exports.Triangle = Triangle;
var triangulo = new Triangle(5, 5, 10, 15);
console.log(triangulo);
triangulo.setHeight(66);
console.log(triangulo);
triangulo.desplazar(100, 100);
console.log(triangulo);
var areaTriangulo = triangulo.getArea();
console.log(areaTriangulo);
var perimetro = triangulo.calPerimetro();
console.log(perimetro);
console.log('');
var Square = /** @class */ (function () {
    function Square(px, py, s) {
        this.posX = px;
        this.posY = py;
        this.side = s;
    }
    Square.prototype.setPosX = function (px) {
        this.posX = px;
    };
    Square.prototype.getPosX = function () {
        return this.posX;
    };
    Square.prototype.setPosY = function (py) {
        this.posY = py;
    };
    Square.prototype.getPosY = function () {
        return this.posY;
    };
    Square.prototype.setSide = function (s) {
        this.side = s;
    };
    Square.prototype.getWidth = function () {
        return this.side;
    };
    Square.prototype.getArea = function () {
        var area = this.side * this.side;
        return area;
    };
    Square.prototype.desplazar = function (px, py) {
        this.posX = px;
        this.posY = py;
    };
    Square.prototype.calPerimetro = function () {
        var perimetro = this.side * 4;
        return perimetro;
    };
    return Square;
}());
exports.Square = Square;
var square1 = new Square(5, 5, 10);
console.log(square1);
square1.setSide(5);
console.log(square1);
square1.desplazar(100, 100);
console.log(square1);
var areaSquare = square1.getArea();
console.log(areaSquare);
var perimetroSquare = square1.calPerimetro();
console.log(perimetroSquare);
console.log('');
var Parallelogram = /** @class */ (function () {
    function Parallelogram(px, py, h, w) {
        this.posX = px;
        this.posY = py;
        this.height = h;
        this.width = w;
    }
    Parallelogram.prototype.setPosX = function (px) {
        this.posX = px;
    };
    Parallelogram.prototype.getPosX = function () {
        return this.posX;
    };
    Parallelogram.prototype.setPosY = function (py) {
        this.posY = py;
    };
    Parallelogram.prototype.getPosY = function () {
        return this.posY;
    };
    Parallelogram.prototype.setWidth = function (w) {
        this.width = w;
    };
    Parallelogram.prototype.getWidth = function () {
        return this.width;
    };
    Parallelogram.prototype.setHeight = function (h) {
        this.height = h;
    };
    Parallelogram.prototype.getHeight = function () {
        return this.height;
    };
    Parallelogram.prototype.getArea = function () {
        var area = this.height * this.width;
        return area;
    };
    Parallelogram.prototype.desplazar = function (px, py) {
        this.posX = px;
        this.posY = py;
    };
    Parallelogram.prototype.calPerimetro = function () {
        var perimetro = (this.width + this.height) * 2;
        return perimetro;
    };
    return Parallelogram;
}());
exports.Parallelogram = Parallelogram;
var paralelogramo = new Parallelogram(5, 5, 10, 15);
console.log(paralelogramo);
paralelogramo.setHeight(66);
console.log(paralelogramo);
paralelogramo.desplazar(100, 100);
console.log(paralelogramo);
var areaParalelogramo = paralelogramo.getArea();
console.log(areaParalelogramo);
var perimetroParalelogramo = paralelogramo.calPerimetro();
console.log(perimetroParalelogramo);
console.log('');
var Circle = /** @class */ (function () {
    function Circle(px, py, r) {
        this.posX = px;
        this.posY = py;
        this.radio = r;
    }
    Circle.prototype.setPosX = function (px) {
        this.posX = px;
    };
    Circle.prototype.getPosX = function () {
        return this.posX;
    };
    Circle.prototype.setPosY = function (py) {
        this.posY = py;
    };
    Circle.prototype.getPosY = function () {
        return this.posY;
    };
    Circle.prototype.setRadio = function (r) {
        this.radio = r;
    };
    Circle.prototype.getRadio = function () {
        return this.radio;
    };
    Circle.prototype.getArea = function () {
        var area = Math.PI * this.radio * this.radio;
        return area;
    };
    Circle.prototype.desplazar = function (px, py) {
        this.posX = px;
        this.posY = py;
    };
    Circle.prototype.calPerimetro = function () {
        var perimetro = Math.PI * 2 * this.radio;
        return perimetro;
    };
    return Circle;
}());
exports.Circle = Circle;
var circulo1 = new Circle(5, 5, 10);
console.log(circulo1);
circulo1.setRadio(6);
console.log(circulo1);
circulo1.desplazar(100, 100);
console.log(circulo1);
var areaCirulo = circulo1.getArea();
console.log(areaCirulo);
var perimetroCirculo = circulo1.calPerimetro();
console.log(perimetroCirculo);
console.log('');
var Ellipse = /** @class */ (function () {
    function Ellipse(px, py, a, b) {
        this.posX = px;
        this.posY = py;
        this.a = a;
        this.b = b;
    }
    Ellipse.prototype.setPosX = function (px) {
        this.posX = px;
    };
    Ellipse.prototype.getPosX = function () {
        return this.posX;
    };
    Ellipse.prototype.setPosY = function (py) {
        this.posY = py;
    };
    Ellipse.prototype.getPosY = function () {
        return this.posY;
    };
    Ellipse.prototype.setA = function (a) {
        this.a = a;
    };
    Ellipse.prototype.getA = function () {
        return this.a;
    };
    Ellipse.prototype.setB = function (b) {
        this.b = b;
    };
    Ellipse.prototype.getB = function () {
        return this.b;
    };
    Ellipse.prototype.getArea = function () {
        var area = this.a * this.b * Math.PI;
        return area;
    };
    Ellipse.prototype.desplazar = function (px, py) {
        this.posX = px;
        this.posY = py;
    };
    Ellipse.prototype.calPerimetro = function () {
        var perimetro = Math.PI * (this.a * (this.a + this.b) - Math.sqrt((this.a * this.a + this.b) * (this.a + this.a * this.b)));
        return perimetro;
    };
    return Ellipse;
}());
exports.Ellipse = Ellipse;
var elipse1 = new Ellipse(5, 5, 10, 15);
console.log(elipse1);
elipse1.setA(10);
console.log(elipse1);
elipse1.desplazar(100, 100);
console.log(elipse1);
var areaElipse = elipse1.getArea();
console.log(areaElipse);
var perimetroElipse = elipse1.calPerimetro();
console.log(perimetroElipse);
console.log('');
var Sector = /** @class */ (function () {
    function Sector(px, py, r, a) {
        this.posX = px;
        this.posY = py;
        this.radio = r;
        this.angulo = a;
    }
    Sector.prototype.setPosX = function (px) {
        this.posX = px;
    };
    Sector.prototype.getPosX = function () {
        return this.posX;
    };
    Sector.prototype.setPosY = function (py) {
        this.posY = py;
    };
    Sector.prototype.getPosY = function () {
        return this.posY;
    };
    Sector.prototype.setRadio = function (r) {
        this.radio = r;
    };
    Sector.prototype.getRadio = function () {
        return this.radio;
    };
    Sector.prototype.setAngulo = function (a) {
        this.angulo = a;
    };
    Sector.prototype.getAngulo = function () {
        return this.angulo;
    };
    Sector.prototype.getArea = function () {
        var area = (0.5) * this.radio * this.radio * (this.angulo * (Math.PI / 180));
        return area;
    };
    Sector.prototype.desplazar = function (px, py) {
        this.posX = px;
        this.posY = py;
    };
    Sector.prototype.calPerimetro = function () {
        var b = 3 * Math.PI / 4;
        var perimetro = b * this.radio;
        return perimetro;
    };
    return Sector;
}());
exports.Sector = Sector;
var sector1 = new Sector(5, 5, 10, 10);
console.log(sector1);
sector1.setAngulo(20);
console.log(sector1);
sector1.desplazar(100, 100);
console.log(sector1);
var areaSector = sector1.getArea();
console.log(areaSector);
var perimetroSector = sector1.calPerimetro();
console.log(perimetroSector);
console.log('');
var Trapezoide = /** @class */ (function () {
    function Trapezoide(px, py, a, b, h, l) {
        this.posX = px;
        this.posY = py;
        this.a = a;
        this.b = b;
        this.h = h;
        this.l = l;
    }
    Trapezoide.prototype.setPosX = function (px) {
        this.posX = px;
    };
    Trapezoide.prototype.getPosX = function () {
        return this.posX;
    };
    Trapezoide.prototype.setPosY = function (py) {
        this.posY = py;
    };
    Trapezoide.prototype.getPosY = function () {
        return this.posY;
    };
    Trapezoide.prototype.setA = function (a) {
        this.a = a;
    };
    Trapezoide.prototype.getA = function () {
        return this.a;
    };
    Trapezoide.prototype.setB = function (b) {
        this.b = b;
    };
    Trapezoide.prototype.getB = function () {
        return this.b;
    };
    Trapezoide.prototype.setH = function (h) {
        this.h = h;
    };
    Trapezoide.prototype.getH = function () {
        return this.h;
    };
    Trapezoide.prototype.setL = function (l) {
        this.l = l;
    };
    Trapezoide.prototype.getL = function () {
        return this.l;
    };
    Trapezoide.prototype.getArea = function () {
        var area = (0.5) * (this.a + this.b) * this.h;
        return area;
    };
    Trapezoide.prototype.desplazar = function (px, py) {
        this.posX = px;
        this.posY = py;
    };
    Trapezoide.prototype.calPerimetro = function () {
        var perimetro = this.a + this.b + this.h + this.l;
        return perimetro;
    };
    return Trapezoide;
}());
exports.Trapezoide = Trapezoide;
var trapezoide1 = new Trapezoide(5, 5, 10, 15, 5, 6);
console.log(trapezoide1);
trapezoide1.setA(6);
console.log(trapezoide1);
trapezoide1.desplazar(100, 100);
console.log(trapezoide1);
var areaTrapezoide = trapezoide1.getArea();
console.log(areaTrapezoide);
var perimetroTrapezoide = trapezoide1.calPerimetro();
console.log(perimetroTrapezoide);
console.log('');
