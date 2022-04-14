// rnd num tween 1 and 30 divisible by 7
// one line with arrays
let listRandSix = [...Array(6).keys()].map( x => Math.floor(Math.random()*30) )
console.log(listRandSix,'\n');

// prints number and divisible / not divisible 
listRandSix.map( x => 
    console.log( x + (x%7==0 ? " - Divisible by 7" : " - Not divisible by 7") ) )

