var fs = require("fs")
var text = fs.readFileSync("./day1input.txt").toString().split("\n")
var textNumber = text.map(x => parseInt(x))



console.log("Result: " + Day1Part1(textNumber))
console.log("Part 2 Result: " + Day1Part2(textNumber))

function Day1Part1(input) {

var inc = 0


for(let i = 1; i < input.length; i++) {
   
    if(input[i] > input[i-1]) {
        
        inc++
        
    }
    
}

return inc;

}

function Day1Part2(input) {

    var inc = 0

    const reducer = (previousValue, currentValue) => previousValue + currentValue

    for(let i = 2; i < input.length; i++){

       sumASlice = input.slice(i-2, i+1)
       sumA = sumASlice.reduce(reducer)

       sumBSlice = input.slice(i-1,i+2)
       sumB = sumBSlice.reduce(reducer)

       if(sumA < sumB) {
           inc++
       }

    }

    return inc;
}