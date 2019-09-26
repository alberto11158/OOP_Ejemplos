/**
 * Crea una clase Cuenta conlos métodos Ingreso, reintegro 
 * y transferencia. La clase contendra un constructor por defecto, un constructor con parametros,
 * un constructor copia y los métodos getters y setters.
 */
export class Cuenta {
    private saldo: number;
    private nroCuenta: number;
    public constructor(saldo: number, nroCuenta: number) {
        this.saldo = saldo;
        this.nroCuenta = nroCuenta;
    }
    public getNroCuenta(): number {
        return this.nroCuenta;
    }
    public getSaldo(): number {
        return this.saldo;
    }
    public setNroCuenta(nroCuenta: number): void {
        this.nroCuenta = nroCuenta;
    }
    public ingresar(monto: number): void {
        this.saldo += monto;
    }
    public reintegro(monto: number): number {
        this.saldo -= monto;
        return this.saldo;
    }
    public transferencia(monto: number, cuenta: Cuenta): number {
        cuenta.ingresar(monto);
        this.saldo -= monto;
        console.log(cuenta);
        return this.saldo;
    }
}

let cuenta: Cuenta = new Cuenta(100, 1234);
let cuenta2: Cuenta = new Cuenta(0, 6789);

cuenta.ingresar(100);
cuenta.reintegro(50);
console.log(cuenta.getSaldo());
cuenta.transferencia(100, cuenta2);
console.log(cuenta.getSaldo());
console.log(cuenta2.getSaldo());