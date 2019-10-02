var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var FiguraGeometrica = /** @class */ (function () {
    function FiguraGeometrica(ancho, alto, profundidad) {
        this.ancho = ancho;
        this.alto = alto;
        this.profundidad = profundidad;
    }
    FiguraGeometrica.prototype.getAncho = function () {
        return this.ancho;
    };
    FiguraGeometrica.prototype.getAlto = function () {
        return this.alto;
    };
    FiguraGeometrica.prototype.getProfundidad = function () {
        return this.profundidad;
    };
    FiguraGeometrica.prototype.getArea = function () {
        var resultado = this.ancho * this.alto;
        return resultado;
    };
    FiguraGeometrica.prototype.getVolumen = function () {
        var resultado = this.ancho * this.alto * this.profundidad;
        return resultado;
    };
    return FiguraGeometrica;
}());
var Rectangulo = /** @class */ (function (_super) {
    __extends(Rectangulo, _super);
    function Rectangulo(ancho, alto, profundidad) {
        return _super.call(this, ancho, alto, profundidad) || this;
    }
    return Rectangulo;
}(FiguraGeometrica));
var Triangulo = /** @class */ (function (_super) {
    __extends(Triangulo, _super);
    function Triangulo(ancho, alto, profundidad) {
        return _super.call(this, ancho, alto, profundidad) || this;
    }
    Triangulo.prototype.getArea = function () {
        var resultado = this.ancho * this.alto * (0.5);
        return resultado;
    };
    Triangulo.prototype.getVolumen = function () {
        var resultado = (1 / 3) * this.ancho * this.profundidad * this.alto;
        return resultado;
    };
    return Triangulo;
}(FiguraGeometrica));
var rectangulo = new Rectangulo(10, 4, 4);
var triangulo = new Triangulo(10, 4, 5);
console.log("Area del rectangulo: ", rectangulo.getArea());
console.log("Volumen del rectagulo 3D: ", rectangulo.getVolumen());
console.log();
console.log("Area del triangulo: ", triangulo.getArea());
console.log("Volumen del triangulo 3D: ", triangulo.getVolumen());
