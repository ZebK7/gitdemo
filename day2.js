console.log("all around the world".charAt(7).toUpperCase());

let i= 10;
i +=2;
console.log(i);
let favouriteDrink="coffee";
console.log("my favourite drink is " + favouriteDrink);

//activity1
let name="John";
let age ="50";
let favColour="red";
console.log(`welcome ${name} who's ${age}, you like ${favColour}`);

//activity2
let breakfast="toast";
let lunch="sandwich";
let dinner="chips";
console.log(`hi menu is ${breakfast} followed by ${lunch} and then ${dinner}`);


// activity 3
var myBirthday, today, bday, diff, days;
myBirthday = [5,12]; // 5th december
today = new Date();
bday = new Date(today.getFullYear(),myBirthday[1]-1,myBirthday[0]);
if( today.getTime() > bday.getTime()) {
    bday.setFullYear(bday.getFullYear()+1);
}
diff = bday.getTime()-today.getTime();
days = Math.floor(diff/(1000*60*60*24));
console.log(days+" days until birthday!");

//example
if (1 === "1") {
    console.log(true);
}
else {
    console.log(false);
}
if (1 != "1") {
    console.log(true);
}
else {
    console.log(false);
}
