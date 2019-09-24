/**
 * TAREA: HACER UNA CLASE QUE SE LLAME "Auto" el cual reciba como
 * parametros (ruedas, color, puertas, marca, modelo) 
 */
class Auto{
    ruedas: number;
    color: string;
    puertas: number;
    marca: string;
    modelo: string;
    constructor(nRuedas: number, nColor: string, nPuertas: number, nMarca: string, nModelo: string){
        this.ruedas = nRuedas;
        this.color = nColor;
        this.puertas = nPuertas;
        this.marca = nMarca;
        this.modelo = nModelo;
    }
}