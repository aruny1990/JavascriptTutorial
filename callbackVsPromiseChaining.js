function startCoffeeMachine(){
    return new Promise((resolve)=>{
        console.log("starting the coffee machine...");
        setTimeout(()=>{
            console.log("Coffee machine is ready.");
            resolve("Coffeee machine is ready");
        },2000);
    });
    
}

function grindCoffeeBeans(){
    return new Promise((resolve)=>{
    console.log("Grounding coffee beans...");
    setTimeout(()=>{
        console.log("Coffee beans are ground...");
        resolve("ground coffee");
    },1000);
});
}


function boilWater(){
    return new Promise((resolve)=>{
    console.log("Boiling water...");
    setTimeout(()=>{
        console.log("Water is boiled...");
        resolve("boiled water");
    },1500);
});
}

function pourBoilingWaterInCup(boiledWater){
    return new Promise((resolve)=>{
    console.log("Pouring boiling water into a cup...");
    setTimeout(()=>{
        console.log("Boiling water is in the cup...");
        resolve(boiledWater+" in cup");
    },500);
});
}

function addCoffeeToCup(groundCoffee){
    return new Promise((resolve)=>{
    console.log("Adding ground coffee to the cup..");
    setTimeout(()=>{
        console.log("Coffee is added to the cup...");
        resolve("coffee is added to the "+groundCoffee);
    },500);
});
}

function stirCoffee(coffeeInCup){
    return new Promise((resolve)=>{
    console.log("Stirring the cup...");
    setTimeout(()=>{
        console.log("Coffee is stirred ..");
        resolve("enjoyable "+coffeeInCup);
    },300);
});
}

function enjoyCoffee(finalCoffee){
    console.log("Enjoying my "+finalCoffee);
}



//Promise Chaining
startCoffeeMachine((coffeeMachineStatus)=>{
    console.log(coffeeMachineStatus);
    return grindCoffeeBeans();
})
.then((groundCoffee)=>{
    console.log(groundCoffee);
    return boilWater();
})
.then((boiledWater)=>{
    console.log(boiledWater);
    return pourBoilingWaterInCup(boiledWater);
})
.then((waterInCup)=>{
    console.log(waterInCup);
    return addCoffeeToCup(waterInCup);
})
.then((coffeeInCup)=>{
    console.log(coffeeInCup);
    return stirCoffee(coffeeInCup);
})
.then((finalCoffee)=>{
    enjoyCoffee(finalCoffee);
})
.catch((error)=>{
    console.log("Error OCcured ",error);
});