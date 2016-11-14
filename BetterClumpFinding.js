var genome = "CGGACTCGACAGATGTGAAGAACGACAATGTGAAGACTCGACACGACAGAGTGAAGAGAAGAGGAAACATTGTAA";
var k = 5;
var L = 50;
var t = 4; 

//Sample Output:
//CGACA GAAGA

console.log("genome = " + genome);
console.log("k = " + k);
console.log("L = " + L);
console.log("t = " + t);

var frequentPatterns = betterClumpFinding(genome, k, t, L);
console.log("frequentPatterns = " + frequentPatterns);

function betterClumpFinding(genome, k, t, L){
    var frequentPatterns = [];
    var Clump = [];
    var max = Math.pow(4,k)-1;
    for (var i = 0; i <= max; i++) {
        Clump[i] = 0;
    }
    var text = genome.substring(0, L);  
    var frequencyArray = computingFrequencies(text, k);
    for (var i = 0; i <= max; i++) {
        if (frequencyArray[i] >= t){
            Clump[i] = 1;
        }
    }
    var tam = genome.length - L;
    var firstPattern;
    var lastPattern;
    var index;
    var pattern;
    for (var i = 1; i <= tam; i++){
        firstPattern = genome.substring(i - 1, k + i -1);
        index = patternToNumber(firstPattern);
        frequencyArray[index] = frequencyArray[index] - 1;
        lastPattern = genome.substring(i + L - k, i + L);      
        index = patternToNumber(lastPattern);
        frequencyArray[index] = frequencyArray[index] + 1;  
        if (frequencyArray[index] >= t) {
            Clump[index] = 1;
        }
    }   
    for (var i = 0; i <= max; i++){
        if (Clump[i] == 1){
            pattern = numberToPattern(i, k);
            frequentPatterns.push(pattern);
        }
    }
    return frequentPatterns.join(" ");
    //return frequentPatterns.length;
}

function computingFrequencies(text, k){
    var frequencyArray = [];
    var max = Math.pow(4, k) - 1;
    for(var i = 0; i <= max; i++){
        frequencyArray[i] = 0;
    }
    max = text.length - k;
    for(var i = 0; i <= max; i++){
        var pattern = text.substring(i, i+k);
        j = patternToNumber(pattern);
        frequencyArray[j] = frequencyArray[j] + 1;
    }
    return frequencyArray;
}

function patternToNumber(pattern){
    tam = pattern.length;
    if(tam == 0) {
        return 0;
    } else {
        var symbol = pattern.charAt(tam-1);
        var prefix = pattern.substring(0, tam-1);      
        return 4 * patternToNumber(prefix) + symbolToNumber(symbol); 
    }
}

function symbolToNumber(symbol){
    switch(symbol) {
        case "A":
            return 0;
        case "C":
            return 1;
        case "G":
            return 2;
        case "T":
            return 3;
    }
}

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
  var args1 = args[1].toString().trim().split(" ");  
  result = betterClumpFinding(args[0].trim(),parseInt(args1[0].trim()),parseInt(args1[2].trim()),parseInt(args1[1].trim()));
  process.stdout.write(result.toString());
});

function betterClumpFinding(genome, k, t, L){
    var frequentPatterns = [];
    var Clump = [];
    var max = Math.pow(4,k)-1;
    for (var i = 0; i <= max; i++) {
        Clump[i] = 0;
    }
    var text = genome.substring(0, L);  
    var frequencyArray = computingFrequencies(text, k);
    for (var i = 0; i <= max; i++) {
        if (frequencyArray[i] >= t){
            Clump[i] = 1;
        }
    }
    var tam = genome.length - L;
    var firstPattern;
    var lastPattern;
    var index;
    var pattern;
    for (var i = 1; i <= tam; i++){
        firstPattern = genome.substring(i - 1, k + i -1);
        index = patternToNumber(firstPattern);
        frequencyArray[index] = frequencyArray[index] - 1;
        lastPattern = genome.substring(i + L - k, i + L);      
        index = patternToNumber(lastPattern);
        frequencyArray[index] = frequencyArray[index] + 1;  
        if (frequencyArray[index] >= t) {
            Clump[index] = 1;
        }
    }   
    for (var i = 0; i <= max; i++){
        if (Clump[i] == 1){
            pattern = numberToPattern(i, k);
            frequentPatterns.push(pattern);
        }
    }
    return frequentPatterns.join(" ");
    //return frequentPatterns.length;
}

function computingFrequencies(text, k){
    var frequencyArray = [];
    var max = Math.pow(4, k) - 1;
    for(var i = 0; i <= max; i++){
        frequencyArray[i] = 0;
    }
    max = text.length - k;
    for(var i = 0; i <= max; i++){
        var pattern = text.substring(i, i+k);
        j = patternToNumber(pattern);
        frequencyArray[j] = frequencyArray[j] + 1;
    }
    return frequencyArray;
}

function patternToNumber(pattern){
    tam = pattern.length;
    if(tam == 0) {
        return 0;
    } else {
        var symbol = pattern.charAt(tam-1);
        var prefix = pattern.substring(0, tam-1);      
        return 4 * patternToNumber(prefix) + symbolToNumber(symbol); 
    }
}

function symbolToNumber(symbol){
    switch(symbol) {
        case "A":
            return 0;
        case "C":
            return 1;
        case "G":
            return 2;
        case "T":
            return 3;
    }
}

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