function checkPalindrome(num1,num2) {
    let number = num1
    let reverse = 0
    while (number > 0) {
       let remainder =Math.round(number%10)
        reverse = (reverse*10) + remainder
        number = Math.round(number/10)
    }
    if (reverse == num2) {
        console.log("Number is palindrome");
    } else {
        console.log("Number is not palindrome");
    }
}

checkPalindrome(202,202)