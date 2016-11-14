var index = 6301;
var k = 9;
var pattern = "AACGAGCTC";
var answer = numberToPattern(index, k);

console.log("pattern = " + pattern);
console.log("index = " + index);
console.log("k = " + k);
console.log("answer = " + answer);
console.log("iguais = " + (answer === pattern));

function numberToPattern(index, k){
    if(k == 1) {
        return numberToSymbol(index);
    } else {
        var prefixIndex = parseInt(index / 4);
        var r = index % 4;        
        var symbol = numberToSymbol(r);
        var prefixPattern = numberToPattern(prefixIndex, k - 1);
        return prefixPattern + symbol; 
    }
}

function numberToSymbol(number){
    switch(number) {
        case 0:
            return "A";
        case 1:
            return "C";
        case 2:
            return "G";
        case 3:
            return "T";
    }
}

/*
// put your javascript (node.js) code here
process.stdin.on('data', function (chunk) {
  var args = chunk.toString().split("\n");
  result = numberToPattern(parseInt(args[0].trim()), parseInt(args[1].trim()));
  process.stdout.write(result.toString());
});

function numberToPattern(index, k){
    if(k == 1) {
        return numberToSymbol(index);
    } else {
        var prefixIndex = parseInt(index / 4);
        var r = index % 4;        
        var symbol = numberToSymbol(r);
        var prefixPattern = numberToPattern(prefixIndex, k - 1);
        return prefixPattern + symbol; 
    }
}

function numberToSymbol(number){
    switch(number) {
        case 0:
            return "A";
        case 1:
            return "C";
        case 2:
            return "G";
        case 3:
            return "T";
    }
}
*/