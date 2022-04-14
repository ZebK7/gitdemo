console.log("Hello World")
console.log("hello".toUpperCase());
console.log(Math.random());
console.log(Math.random()*10);
console.log(Math.floor(Math.random()*100));
console.log(
    `   |  |
        |  |
        |  |
    ------------
        |  |
        |  |
        |  |
    ------------
        |  |
        |  |
        |  | `)

        for (k = 1; k <= 3; k++) {
            for (i = 1; i <= 3; i++) console.log("   |   |   ");
            if(k<3) console.log("-----------");
          }        