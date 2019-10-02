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
var Electrodomestico = /** @class */ (function () {
    function Electrodomestico(marca, precio, id) {
        this.marca = marca;
        this.precio = precio;
        this.id = id;
        this.vendido = false;
    }
    Electrodomestico.prototype.getMarca = function () {
        return this.marca;
    };
    Electrodomestico.prototype.getPrecio = function () {
        return this.precio;
    };
    Electrodomestico.prototype.getId = function () {
        return this.id;
    };
    Electrodomestico.prototype.getVendido = function () {
        return this.vendido;
    };
    Electrodomestico.prototype.setVendido = function (estado) {
        this.vendido = estado;
    };
    return Electrodomestico;
}());
var Televisor = /** @class */ (function (_super) {
    __extends(Televisor, _super);
    function Televisor(marca, precio, id, pulgadas) {
        var _this = _super.call(this, marca, precio, id) || this;
        _this.pulgadas = pulgadas;
        return _this;
    }
    Televisor.prototype.getDatos = function () {
        return this;
    };
    return Televisor;
}(Electrodomestico));
var Lavadora = /** @class */ (function (_super) {
    __extends(Lavadora, _super);
    function Lavadora(marca, precio, id, capacidadKg) {
        var _this = _super.call(this, marca, precio, id) || this;
        _this.capacidadKg = capacidadKg;
        return _this;
    }
    Lavadora.prototype.getDatos = function () {
        return this;
    };
    return Lavadora;
}(Electrodomestico));
var Cocina = /** @class */ (function (_super) {
    __extends(Cocina, _super);
    function Cocina(marca, precio, id, cantHornilla) {
        var _this = _super.call(this, marca, precio, id) || this;
        _this.cantHornilla = cantHornilla;
        return _this;
    }
    Cocina.prototype.getDatos = function () {
        return this;
    };
    return Cocina;
}(Electrodomestico));
var Microondas = /** @class */ (function (_super) {
    __extends(Microondas, _super);
    function Microondas(marca, precio, id) {
        return _super.call(this, marca, precio, id) || this;
    }
    return Microondas;
}(Electrodomestico));
var TiendaDismac = /** @class */ (function () {
    function TiendaDismac() {
        this.inventario = [];
    }
    TiendaDismac.prototype.mostrarInventario = function () {
        for (var _i = 0, _a = this.inventario; _i < _a.length; _i++) {
            var articulo = _a[_i];
            console.log(articulo);
            console.log(' ');
        }
    };
    TiendaDismac.prototype.addElectrodomestico = function (electrodomestico) {
        this.inventario.push(electrodomestico);
    };
    return TiendaDismac;
}());
var tvSamsung = new Televisor("Samsung", 300, 1234, 60);
var lavadoraLg = new Lavadora("LG", 1000, 1234, 20);
var cocinaConsul = new Cocina("Consul", 500, 1234, 6);
var microondasLg = new Microondas("LG", 400, 1234);
var tiendaDiscmac = new TiendaDismac();
tiendaDiscmac.addElectrodomestico(tvSamsung);
tiendaDiscmac.addElectrodomestico(lavadoraLg);
tiendaDiscmac.addElectrodomestico(cocinaConsul);
tiendaDiscmac.addElectrodomestico(microondasLg);
tiendaDiscmac.mostrarInventario();
