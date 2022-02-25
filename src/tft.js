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

