// Herança

class Animal {
    // Atributos

    // Construtor
    constructor(public name:string) {} // Dessa maneira enxuga mais o código  pois não precisa declarar os atributos antes do construtor
    //Métodos
    move():string {
        return `${this.name} se move.`
    }
}

class Dog extends Animal {
    bark():string{
        return "Au Au"
    }
}

class Frog extends Animal{
  move():string {
        return `${this.name} pula.`
    }
}

const dog1 = new Dog("Snoopy")
console.log(dog1.move());
console.log(dog1.bark());

const frog1 = new Frog("Sapão")
console.log(frog1.move());
