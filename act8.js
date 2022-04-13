const string = "jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi"

let vowelsCount = [string.lastIndexOf("a"), string.lastIndexOf("e"), string.lastIndexOf("i"), string.lastIndexOf("o"), string.lastIndexOf("u")]
let result = Math.max(...vowelsCount)


console.log(result)