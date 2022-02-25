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
