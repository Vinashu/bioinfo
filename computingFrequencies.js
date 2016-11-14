/*
Sample Input:
ACGCGGCTCTGAAA
2
Sample Output:
2 1 0 0 0 0 2 2 1 2 1 0 0 1 1 0
*/

var text = "CTCCGTGTGCTGACTCGGCTTTACGCTGAGCGCCGCCGGTAAACGTCGACGTAACCGCATCATACTAGCATAAATGAAAGGCACGATCCGGCATATCCCAACGGGACATACAAGGAAAAATTGTACATCCTTCTAGATCACACAAGTATCCCGGCGTTTGGCTAAGGGTCAACAAGCGTCGAGTAGACCTGGACTTTCCGATTTTGAGGAAGACGAGGCTCTTTCGACACGGGCGTTGCTTCGCCATACTATTGCAGTCCACATGCGACGCCTCGTTGCTAAGCGACACGGACGTATTGTCTTTGGCTGCGCTTGACAATGCCCGCTGACACACCGGGACTCATATGTCCGTCACATAGGATCGGCTAGGCGGATGGCGCGTTGCATTCATTGGGCCGGAGTCTTATTGTCCCAGACGCTGAGTGTTTTCGGTAGACATCACGGGCTGTTGTCCATCCCTACTCGGGCGTCTTGGGGAGTAGAAGCCGATCTCTGCTGAGAAAACAGGCAGTTAGTGTTATTGCATGCCTTACCAAGAACTCTCCTGGCGGGGTCATGTTAAGCTGAGTCGGGTGTCGACAAGTAACTAGTGTGCCAGGTGGGTGATCTGCAGGCCGGCCCCCAGGCGCATGTGCCGCTATCATGGAGGCGATTCTGTATCACAAGGTAATAGGAACTACCCCCTCTGAGGGTGAGACCGAAAGGTAGTCAATACTGGGAGTTGCCGGGCCACTACCAGTTAACAGGACTTCGAGCCTGACCTGGATACGTAGCATGGTGGTCCCTCGCACAGAT";
var k = 7;
var frequencyArray = computingFrequencies(text, k)

console.log("text = " + text);
console.log("k = " + k);
console.log("frequencyArray = " + frequencyArray.join(" "));

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

/*
// put your javascript (node.js) code here
process.stdin.on('data', function (chunk) {
  var args = chunk.toString().split("\n");
  result = computingFrequencies(args[0].trim(),parseInt(args[1].trim()));
  process.stdout.write(result.toString());
});

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
    return frequencyArray.join(" ");
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
*/