let drinks = [
    "Coke",
    "Pepsi",
    "Fanta",
    "IrnBru",
    "Red Bull"
   
];
for(let i = 0; i <drinks.length; i++){
console.log(drinks[i]);  
}
//eg2
let multiplesTwo =[];
for(let i =0; i< 20; i++) {
    if (i % 2 == 0) {
        multiplesTwo.push(i);
    }
}
console.log(`Numbers divisible by 2 between 0 and 20 are: ${multiplesTwo}.`); //using back ticks not quotemarks

// eg while loop
let age =15;
while( age <18) {
    console.log("You're a child!"); 
    age++;
    }
console.log("You're an adult");
