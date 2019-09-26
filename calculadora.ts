/**
 * Crea una clase Calculadora con metodos para sumar, restar, multiplicar 
 * y dividor.
 */
export class Calculadora{
    public sumar(num1: number, num2: number): number{
        return num1 + num2;
    }
    public restar(num1: number, num2:number): number{
        return num1 - num2;
    }
    public multiplicar(num1: number, num2: number): number{
        return num1 * num2;
    }
    public dividir(num1: number, num2:number){
        return num1/num2;
    }
}

let calculadora: Calculadora = new Calculadora();
console.log(calculadora.sumar(1.5, 25));
console.log(calculadora.restar(-12, 5));
console.log(calculadora.multiplicar(-23, 4));
console.log(calculadora.dividir(45, 5));