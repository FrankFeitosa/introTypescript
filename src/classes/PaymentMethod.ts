abstract class PaymentMethod {
    abstract processPayment(amount:number): string;
}

class CreditCard extends PaymentMethod{
    processPayment(amount: number): string {
        return `Pagamento de R$${amount} via cartão`
    }
}

class Pix extends PaymentMethod{
    processPayment(amount: number): string {
        return `Pagamento de R$${amount} via Pix`
    }
}

class Boleto extends PaymentMethod{
    processPayment(amount: number): string {
        return `Pagamento de R$${amount} via Boleto`
    }
}

const creditPayment = new CreditCard()
const pixPayment = new Pix()

console.log(creditPayment.processPayment(300.00));
console.log(pixPayment.processPayment(100.00));

