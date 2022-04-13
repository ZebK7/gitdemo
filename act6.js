//activity 6
function checkPalindrome(num) {
    var numString = num.toString();
    return numString.split("").reverse().join("") == numString;
}
if (checkPalindrome(20202)) {   
    console.log("Is a palindrome");
} else {
    console.log("Not a palindrome");
}
