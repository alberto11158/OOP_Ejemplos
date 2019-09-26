/**
 * Crea una clase Contador con los métodos para Incrementar y decrementar el contador.
 * La clase contendra un constructor por defecto, un constructor con parametros, un constructor copia
 * y los métodos getters y setters.
 */
export class Contador{
    private marcador: number;
    public constructor(marcador: number){
        this.marcador = marcador;
    }
    public getMarcador(): number{
        return this.marcador;
    }
    public setMarcador(nMarcador): void{
        this.marcador = nMarcador;
    }
    public incrementar(): void{
        this.marcador++;
    }
    public decrementar(): void{
        this.marcador--;
    }
    public toString(): void{
        console.log(this);
    }
}

let contador: Contador = new Contador(0);
contador.incrementar();
contador.setMarcador(0);
contador.toString();