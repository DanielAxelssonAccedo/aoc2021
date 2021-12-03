var fs = require("fs")
var submarinelogs = fs.readFileSync("./day2input.txt").toString().split("\n")


console.log(Day2part1(submarinelogs))



function Day2part1(input) {

    var down = 0
    var forward = 0
    var up = 0
    var depth = 0
    var horizontal = 0

    for(let i = 0; i < input.length; i++) {
        
        if(input[i].includes("forward") == true){
           forwardNumber = parseInt(input[i][8])
           horizontal = horizontal + forwardNumber 
           
        }
        
        else if(input[i].includes("down") == true){
           downNumber = parseInt(input[i][5])

           depth = depth + downNumber
           
        }

        else if(input[i].includes("up") == true){
            upNumber = parseInt(input[i][3])
            depth = depth - upNumber
            
        }

    }

    result = depth * horizontal
    return result;

}