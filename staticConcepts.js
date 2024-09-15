class Car{
    static wheels=4;

    constructor(name,model,price){
        this.name=name;
        this.model=model;
        this.price=price;
        this.wheels=50;
    }

    static stop(){
        console.log("car--stop");
    }

    drive(){
        console.log(this.name+" is driving");
    }

    // const t1= new Car("Honda",2023,50); //class cannot have const 
}

const c1= new Car("Honda",2023,50); 
//console.log(`${c1.name}, ${c1.model},${c1.price},${Car.wheels}`);
console.log(`${c1.name}, ${c1.model},${c1.price},${Car.wheels}`);
Car.stop();
//c1.stop(); //error
c1.drive();
//Car.drive();//error it is not a static function
//console.log(wheels); //error

//static var/function: call it by using class
//non static var/functions: call it by using object refernce name