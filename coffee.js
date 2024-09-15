//start the coffee machine - 2 secs
//Grind the coffee beans, -1
//Boil water, - 1.5
//Pour boiling water into a cup, - 0.5
//Add gorund coffee to the cup - 0.5
//Stir the coffee
//Enjoy your coffee!

function startCoffeeMachine(callback){
    console.log("starting the coffee machine...");
    setTimeout(function(){
        console.log("Coffee machine is ready.");
        callback("Coffeee machine is ready");
    },2000);
}

function grindCoffeeBeans(callback){
    console.log("Grinding coffee beans...");
    setTimeout(function(){
        console.log("Coffee beans are grind...");
        callback("grind coffee");
    },1000);
}


function boilWater(callback){
    console.log("Boiling water...");
    setTimeout(function(){
        console.log("Boiling water in the cup...");
        callback(boilWater+" in cup");
    },1000);
}

function pourBoilingWaterInCup(boiledWater,callback){
    console.log("Pouring boiling water into a cup...");
    setTimeout(function(){
        console.log("Boiling water is in the cup...");
        callback(boilWater+" in cup");
    },500);
}

function addCoffeeToCup(groundCoffee,callback){
    console.log("Adding ground coffee to the cup..");
    setTimeout(function(){
        console.log("Coffee added to the cup...");
        callback("coffee is added to the "+groundCoffee);
    },500);
}

function stirCoffee(coffeeInCup,callback){
    console.log("AStirring the cup..");
    setTimeout(function(){
        console.log("Coffee is stirred...");
        callback("enjoyable"+coffeeInCup);
    },300);
}

function enjoyCoffee(finalCoffee){
    console.log("Enjoying my "+finalCoffee);
}

//callback hell
startCoffeeMachine(function (coffeeMachineStatus){
    grindCoffeeBeans(function (groundCoffee){
        boilWater(function (boiledWater){
            pourBoilingWaterInCup(boiledWater,function(waterInCup){
                addCoffeeToCup(groundCoffee,function(coffeeInCup){
                    stirCoffee(coffeeInCup, function(finalCoffee)
                    {
                        enjoyCoffee(finalCoffee);
                    })
                })
            })
        })
    })
})
