var fs = require("fs")
var text = fs.readFileSync("./day1input.txt").toString().split("\n")
var textNumber = text.map(x => parseInt(x))



console.log("Result: " + Day1Part1(textNumber))

function Day1Part1(input) {

var inc = 0


for(let i = 1; i < input.length; i++) {
   
    if(input[i] > input[i-1]) {
        
        inc++
        
    }
    
}

return inc;

}
