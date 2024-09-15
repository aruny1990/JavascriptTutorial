//1. Object Literals: {}
const user = {
    name: 'Michael',
    age: 25,
    country:'USA',
    occupation: 'ENgineer'
};

console.log(user.name);
console.log(user.occupation);

//2.. Constructor Function
function Car(brand,model,price){
    this.brand = brand; //Instance variables
    this.model = model;
    this.price = price;
};

const c1 = new Car("BMW","520d",10000);
const c2 = new Car("Audi","Q7",15000);
console.log(c1.brand + " "+c1.model+" "+c1.price);
console.log(c2.brand + " "+c2.model+" "+c2.price);

//3. Class Style
class Customer{
    constructor(name,product){
        this.name=name;
        this.product=product;
    }

    addToCart(){
        console.log(`${this.product} add to cart`);
    }
}

//instance of class
const cust1 = new Customer("Naveen","Apple Mac Book Pro");
console.log(cust1.name);
console.log(cust1.product);
cust1.addToCart();

//4. Objrct.create(); with some prototype
const employeeProtoType = {
    printInfo:function(){
        console.log(`hello , emp name is ${this.name}`);
    }
};

const e1 = Object.create(employeeProtoType);
e1.name = 'Tom';
e1.printInfo();

//4. Using Factory functions return an object
function createDepartment(deptName,hod){
    return{
        deptName: deptName,
        hod:hod,
        getDepartmentInfo:function(){
            console.log(`hello , emp name is ${this.deptName} and hod is ${this.hod}`);
        }
    }
}

const dept1 = createDepartment("physics","H C Verma");
const dept2 = createDepartment("Maths","R C Sharma");
dept1.getDepartmentInfo();
dept2.getDepartmentInfo();

console.log(dept1.name+ "  "+dept1.hod);