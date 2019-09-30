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
var Cliente = /** @class */ (function () {
    function Cliente(nombre) {
        this.nombre = nombre;
    }
    Cliente.prototype.getNombre = function () {
        return this.nombre;
    };
    return Cliente;
}());
var Disco = /** @class */ (function () {
    function Disco(cliente, titulo, tipo, precio) {
        this.cliente = cliente;
        this.titulo = titulo;
        this.tipo = tipo;
        this.precio = precio;
    }
    Disco.prototype.getDatos = function () {
        return [this.tipo, this.precio];
    };
    Disco.prototype.getCliente = function () {
        return this.cliente;
    };
    Disco.prototype.getTitulo = function () {
        return this.titulo;
    };
    return Disco;
}());
var Cd = /** @class */ (function (_super) {
    __extends(Cd, _super);
    function Cd(cliente, titulo, tipo, precio) {
        return _super.call(this, cliente, titulo, tipo, precio) || this;
    }
    return Cd;
}(Disco));
var Dvd = /** @class */ (function (_super) {
    __extends(Dvd, _super);
    function Dvd(cliente, titulo, tipo, precio) {
        return _super.call(this, cliente, titulo, tipo, precio) || this;
    }
    return Dvd;
}(Disco));
var BluRay = /** @class */ (function (_super) {
    __extends(BluRay, _super);
    function BluRay(cliente, titulo, tipo, precio) {
        return _super.call(this, cliente, titulo, tipo, precio) || this;
    }
    return BluRay;
}(Disco));
var tiendaDiscos = /** @class */ (function () {
    function tiendaDiscos() {
        this.registro = [];
    }
    tiendaDiscos.prototype.addVenta = function (disco) {
        this.registro.push(disco);
    };
    tiendaDiscos.prototype.calVentaCds = function () {
        var total = 0;
        for (var _i = 0, _a = this.registro; _i < _a.length; _i++) {
            var disco = _a[_i];
            var datos = disco.getDatos();
            if (datos[0] == "cd") {
                total += datos[1];
            }
        }
        return total;
    };
    tiendaDiscos.prototype.calVentaDvds = function () {
        var total = 0;
        for (var _i = 0, _a = this.registro; _i < _a.length; _i++) {
            var disco = _a[_i];
            var datos = disco.getDatos();
            if (datos[0] == "dvd") {
                total += datos[1];
            }
        }
        return total;
    };
    tiendaDiscos.prototype.calVentaBlurays = function () {
        var total = 0;
        for (var _i = 0, _a = this.registro; _i < _a.length; _i++) {
            var disco = _a[_i];
            var datos = disco.getDatos();
            if (datos[0] == "bluray") {
                total += datos[1];
            }
        }
        return total;
    };
    tiendaDiscos.prototype.calVentaTotal = function () {
        var total = 0;
        for (var _i = 0, _a = this.registro; _i < _a.length; _i++) {
            var disco = _a[_i];
            var datos = disco.getDatos();
            total += datos[1];
        }
        return total;
    };
    return tiendaDiscos;
}());
var cliente = new Cliente("Luis");
var cliente2 = new Cliente("Alberto");
var cd1 = new Cd(cliente, "Doom", "cd", 12);
var cd2 = new Cd(cliente2, "DarkNight", "cd", 12);
var dvd1 = new Dvd(cliente, "Sing", "dvd", 10);
var dvd2 = new Dvd(cliente2, "SpiderMan", "dvd", 10);
var bluray1 = new BluRay(cliente, "SAW", "bluray", 30);
var bluray2 = new BluRay(cliente, "Kingsman", "bluray", 30);
var tiendaUMSS = new tiendaDiscos();
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
