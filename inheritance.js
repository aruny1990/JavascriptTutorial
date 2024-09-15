class Automobile{
    constructor(chasisNumber){
            this.chasisNumber=chasisNumber;
    }
    useAeroDynamics(){
        console.log("Automobile-Aerodynamics"+this.chasisNumber);
    }
}

//parent class
class Vehicle extends Automobile{
    constructor(make,model,year){
        super(1000);
        this.make=make;
        this.model = model;
        this.year=year;

    }

    getInfo(){
        return `${this.make},${this.model},${this.year}`;
    }

    startEngine(){
        console.log('Starting engine....');
    }
    stopEngine(){
        console.log("Stopping Engine...");
    }
}

//We can extend only one class
class Car extends Vehicle{
    constructor(make,model,year,fuelType){
      super(make,model,year);//call the parent class constructor
      this.fuelType = this.fuelType;
    }

    driverCar(){
        console.log("Driving the car..."+this.model);
    }


}


class Truck extends Vehicle{
    constructor(make,model,year,lodingCapacity){
      super(make,model,year);//call the parent class constructor
      this.lodingCapacity = this.loadingCapacity;
    }

    driverTruck(){
        console.log("Driving the Truck..."+this.model+"capacity is "+this.lodingCapacity);
    }


}

const car = new Car("Honda","Civic",2023,"Petrol");
const truck = new Truck("Tata","Sumo",2020,100);


car.startEngine();
console.log(car.getInfo());
car.driverCar();
car.useAeroDynamics();
console.log(car.chasisNumber)

truck.startEngine();
console.log(truck.getInfo());
truck.driverTruck();
//truck.driverCar();