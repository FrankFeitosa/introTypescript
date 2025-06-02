class Produto {
    name: string
    price: number
    stock: number
    constructor(name:string, price:number, stock:number) {
        this.name = name
        this.price = price
        this.stock = stock
    }

    comprar(qtd:number):number{
        this.stock = this.stock - qtd
        return this.stock // estoque atualizado
    }
    repor(qtd:number):number{
        this.stock = this.stock + qtd 
       return this.stock // estoque atualizado
    }
}

const paes = new Produto("Pão", 1.00, 10)

console.log(`Comprando 2 pães.  Estoque atual ${paes.comprar(2)}`);
console.log(`Repor 6 pães.  Estoque atual ${paes.repor(6)}`);
