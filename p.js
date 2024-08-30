// Ticket fare Calculator
// - Children (age < 10): free
// - Students get a 50% discount
//  - Senior citizens (age >= 60) gets a 15% Discount
// - Otherwise Regular ticket fare 800 tk 

//  800 * 0.5

var orginalPrice = 800;
var age = 70;
var isStudent = false

if(age < 10){
    console.log("your ticket price is free")
}else if(isStudent){
    console.log("your ticket price is: ",orginalPrice - orginalPrice * 0.5)
}else if(age >= 60){
    console.log("your ticket price is: ", orginalPrice - orginalPrice * 0.15)
}else{
    console.log("your ticket price is : ",orginalPrice)
}