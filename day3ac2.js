//activity 2 six rnd num tween 1-50
var arr =[];
while(arr.length <6){
    var r =Math.floor(Math.random() * 50) + 1;
    if(arr.indexOf(r) === -1) arr.push(r);
}
console.log(arr);