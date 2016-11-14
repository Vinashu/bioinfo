var pattern = "CTCGCGGGTTAAGCTTAACT";
var number = 508600295175;
var answer = patternToNumber(pattern);

console.log("pattern = " + pattern);
console.log("number = " + number);
console.log("answer = " + answer);
console.log("iguais = " + (number === answer));

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