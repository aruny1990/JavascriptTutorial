// function checkDayOfWeek(dayNumber){
//     let day;

//     switch(dayNumber){
//         case 0:
//             day="Sunday";
//             break;
//         case 1:
//             day="Monday";
//             break;
//         case 2:
//             day="Tuesday";
//             break;
//         case 3:
//             day="Wednesday";
//             break;
//         case 4:
//             day = "Thursday";
//             break;    
//         case 5:
//             day = "Friday";
//             break;
//         case 6:
//             day = "Saturday";
//             break;

//         default:
//             console.log("Invalid day");     
//             break;   
//     }
//     return day;
// }


// console.log(checkDayOfWeek(0));
// console.log(checkDayOfWeek(3));
// console.log(checkDayOfWeek(4));
// console.log(checkDayOfWeek(10));


function checkDayOfWeek(dayNumber){
    let day;

    switch(dayNumber){
        case 0:
            day="Sunday";
           // break;
        case 1:
            day="Monday";
          //  break;
        case 2:
            day="Tuesday";
            break;
        case 3:
            day="Wednesday";
          //  break;
        case 4:
            day = "Thursday";
          //  break;    
        case 5:
            day = "Friday";
            //break;
        case 6:
            day = "Saturday";
            //break;

        default:
            console.log("Invalid day");     
            //break;   
    }
    return day;
}


console.log(checkDayOfWeek(4));


//
let browser = "chrome";

switch(browser){
    case "chrome":
        console.log("launch chrome");
        break;
    case "firefox":
        console.log("luanch firefox");
        break;
    case "edge":
        console.log("launch edge");
    
    default:
        console.log("please pass the right browser ..."+ browser);
        break;
}