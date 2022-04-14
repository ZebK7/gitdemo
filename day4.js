//functions
function getRectArea(width, height) {
    if (width > 0 && height > 0) {
      return width * height;
    }
    return 0;
  }
  
  console.log(getRectArea(3, 4));

  //A function immediately stops at the point where return is called
  function counter() {
    for (var count = 1; ; count++) {  // infinite loop
      console.log(count + 'A'); // until 5
        if (count === 5) {
          return;
        }
        console.log(count + 'B');  // until 4
      }
    console.log(count + 'C');  // never appears
  }
  
  counter();

  // example shows map function that should receive a function as first argument and an array as second argument
  function map(f, a) {
    let result = []; // Create a new Array
    let i; // Declare variable
    for (i = 0; i != a.length; i++)
      result[i] = f(a[i]);
    return result;
  }
  const f = function(x) {
    return x * x * x;
 }
 let numbers = [0, 1, 2, 5, 10];
 let cube = map(f,numbers);
 console.log(cube);

