class CaixaEletronico {
    private balance:number
    constructor(initialBalance:number) {
        this.balance = initialBalance
    }
    // Saldo
    getBalance(){
        return this.balance
    }
    //Bloqueio de valores negativos
    public deposit(amount:number){
        if(amount > 0) this.balance += amount
    }
      // Bloqueio de saques maiores que o saldo
    public withdrwal(amount:number){
        if(amount > 0 && this.balance >= amount) this.balance -= amount 
    }
}
const contBancaria1 = new CaixaEletronico(99)
// teste 1
contBancaria1.deposit(-20)
console.log(contBancaria1.getBalance());
// teste 2
contBancaria1.withdrwal(120)
console.log(contBancaria1.getBalance());


