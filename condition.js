/*

if(condition){
    if true
}else{
    if false
}

*/

// var isRaining = true;

// if(isRaining === true){
//     console.log("will not go outside")
// }else{
//     console.log("will go outside")
// }
// if (isRaining === true) {
//     console.log("will not go outside")
// } else {
//     console.log("will go outside")
// }

// //  condition ? if true : if false

// isRaining === true ? console.log("will not go outside") : console.log("will go outside");

// var money = 10;
// var isRaining = false;
// var taxi = 15;


if(isRaining === true && money >= taxi){
    console.log("will go to market")
}else {
    console.log("will not go to market")
}
if(isRaining === false || money >= taxi){
    console.log("will go to market")
}else {
    console.log("will not go to market")
}

// var money = 10;

// if(money >= 100){
//     console.log("biriyani khabo");
// }else if(money >=50){
//     console.log("noodles khabo")
// }else if(money >= 20){
//     console.log("singara khabo")
// }else{
//     console.log("na kheye auto chore bari ferot")
// }


var isRaining = false;
var haveUmbrella = true;

if(isRaining === true){
    if(haveUmbrella === true){
        console.log("will go outside, i have my cata")
    }else{
        console.log("will not go outside, cata nai")
    }

}else{
    console.log("will go outside.. its a sunny day")
}
