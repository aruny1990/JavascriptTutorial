class Car{

    constructor(name,price,model,color){
        this.name=name;
        this.price = price;
        this.model=model;
        this.color = color;
    }

    // constructor(name){ //Duplicate constructors are not allowed
    //     this.name=name;
    //     this.price = price;
    //     this.model=model;
    //     this.color = color;
    // }

    refuel(){
        console.log("car is refueled");
    }
}

//new keyword: to create the object
const c1 = new Car("BMW",100,"520d","Black");
console.log(c1.name);
console.log(c1.price);
console.log(c1.model);
console.log(c1.color);


const c2 = new Car("Honda",20,"Civic","White");
console.log(c2.name);
console.log(c2.price);
console.log(c2.model);
console.log(c2.color);

c2.refuel();

const c3 = new Car("Audi");
console.log(c3.name);
console.log(c3.price);
console.log(c3.model);
console.log(c3.color);

