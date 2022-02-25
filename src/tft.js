// write a program to add the digits in a string 
// input --> "1421" 
//Output --> 8

function addString(str) {
    let newString = str.split("").map(Number)
    console.log(newString)
    let output = 0
    for (let i = 0; i < newString.length; i++) {
        output += newString[i]
    }
    console.log(output)
}
addString("1421")

// input --> "1S5G11"
// Output --> 8

function addDigit(str) {
    let newString = str.split("").map(Number).filter(x => !isNaN(x))
    console.log(newString)
    let output = 0
    for (let i = 0; i < newString.length; i++) {
        output += newString[i]
    }
    console.log(output)
}
addDigit("1S5G11")

// Reduce method
// input --> "1421" 
//Output --> 8 

function addStringDigit(str) {
    let newArr = str.split("").map(Number).filter(x => !isNaN(x))
    console.log(newArr)
    let a = newArr.reduce((acc, current) => acc + current, 0)
    console.log(a);
}
addStringDigit("1S5G11")

