class User {
    // Atributos
    name: string
    age: number
    // Construtor
    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }
    // Métodos
    greet():string{
        return `Olá sou o ${this.name} e tenho ${this.age}`
    }
}

const user1 = new User("Frank", 35) 
const user2 = new User("Felipe", 43) 
const user3 = new User("Willian", 20) 
const user4 = new User("Amaral", 27) 

console.log(user1.greet());
console.log(user2.greet());
console.log(user3.greet());
console.log(user4.greet());



