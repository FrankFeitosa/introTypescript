abstract class CoffeMachine{
    abstract brew(): void;

    prepareCoffe(): void{
        this.heatWater();
        this.brew();
    }

    private heatWater(): void{
        console.log("Aquecendo água...");
        
    }
}

class ExpressMachine extends CoffeMachine{
    brew(): void{
        console.log("Extraindo espresso...");
    }
}

const coffe1 = new ExpressMachine()
coffe1.prepareCoffe()
coffe1.brew()