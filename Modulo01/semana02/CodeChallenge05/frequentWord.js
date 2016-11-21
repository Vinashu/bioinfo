/*Sample Input:
     ACGTTGCATGTCGCATGATGCATGAGAGCT
     4 1

Sample Output:
     GATG ATGC ATGT
*/

var text = "ACGTTGCATGTCGCATGATGCATGAGAGCT";
var k = 4;
var d = 1;
var output = "GATG ATGC ATGT";
var answer = frequentWordsWithMismatches(text, k, d); 

console.log("Outuput = " + output);
console.log("Answer = " + answer);
console.log(answer === output);

function frequentWordsWithMismatches(text, k, d) {
    var frequentPatterns = [];
    var close = [];
    var max = Math.pow(4,k)-1;
    var tam = text.length - k;    
    var neighborhood = [];
    var frequencyArray = [];
    var index;
    for (var i = 0; i <= max; i++){
        close[i] = 0;
        frequencyArray[i] = 0;
    }
    for (var i = 0; i <= tam; i++){
        neighborhood = neighbors(text.substr(i, k), d);
        neighborhood.forEach(function(pattern){
            index = patternToNumber(pattern);
            close[index] =  1;
        });     
    }
    var pattern;
    for (var i = 0; i <= max; i++){
        if (close[i] == 1) {
            pattern = numberToPattern(i, k);
            frequencyArray[i] = approximatePatternCount(pattern, text, d);
        }
    }
    var maxCount = Math.max.apply(null, frequencyArray);
    for (var i = 0; i <= max; i++){
        if (frequencyArray[i] == maxCount) {
            pattern = numberToPattern(i, k);
            frequentPatterns.push(pattern);
        }
    }
    return frequentPatterns.reverse().join(" "); 
}

function neighbors(pattern,d){
    if (d == 0){
        return pattern;
    } else if(pattern.length == 1){
        return ["A", "C", "G", "T"];
    }
    var nucleotide = ["A", "C", "G", "T"];     
    var neighborhood = [];
    var suffixNeighbors = neighbors(pattern.substr(1,pattern.length-1), d);
    suffixNeighbors.forEach(function(text, index, arr){
        if (hammingDistance(pattern.substr(1,pattern.length-1), text) < d) {
            nucleotide.forEach(function(x){
                neighborhood.push(x + text);
            });
        } else {
                neighborhood.push(pattern.charAt(0) + text);            
        }
    });
    return neighborhood;    
}

function hammingDistance(text1, text2) {
    var max = text1.length;
    var distance = 0;  
    for (var i = 0; i < max; i++ ) {
        if (text1.charAt(i) != text2.charAt(i)) {
            distance++;
        }
    } 
    return (distance);
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

function approximatePatternCount(pattern, text, mm){
    var p = pattern.length;
    var max = text.length - p;
    distances = 0;
    for(var i = 0; i <= max; i++){
        if(hammingDistance(pattern, text.substr(i,p)) <= mm){
            distances++;
        }
    }
    return distances;
}

function hammingDistance(text1, text2) {
    var max = text1.length;
    var distance = 0;  
    for (var i = 0; i < max; i++ ) {
        if (text1.charAt(i) != text2.charAt(i)) {
            distance++;
        }
    } 
    return (distance);
}