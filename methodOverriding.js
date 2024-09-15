class Car{
    minSpeed =100;
    constructor(make,model){
        this.make=make;
        this.model=model;
    }

    startEngine(){
        console.log("Starting engine... for Car");
    }
}

class Audi extends Car{
    minSpeed = 200;
    startEngine(){
         console.log("Stating engine... for Audi");
     }

     autoParking(){
        console.log("Audi -- auto Parking");
     }
}

const audi = new Audi();
audi.startEngine();
audi.autoParking();
console.log(audi.minSpeed); //variable also we can inherit

const car  = new Car();
car.startEngine();
//car.autoParking(); //Error as Parent cannot use child method but child cna use parent method



