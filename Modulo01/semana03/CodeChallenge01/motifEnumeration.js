var k = 3;
var d = 1;
var dna = [
    'ATTTGGC',
    'TGCCTTA',
    'CGGTATC',
    'GAAAATT'
];
var output = 'ATA ATT GTT TTT';

var answer = motifEnumeration(dna, k, d); 
console.log("Outuput = " + output);
console.log("Answer = " + answer);
console.log(answer === output);

function motifEnumeration(dna, k, d) {
    var max = Math.pow(4,k)-1;
    var index;
    var tam;
    var frequencyArray = [];
    var frequentPatterns = [];    
    var neighborhood = [];
    var patterns = [];
    var pattern;
    for (var i = 0; i <= max; i++){
        frequencyArray[i] = 0;
    }    
    dna.forEach(function(text){
        console.log(text);
        tam = text.length - k;
        for (var i = 0; i <= tam; i++){            
            neighborhood = neighbors(text.substr(i, k), d);
            //neighborhood = removeDuplicate(neighborhood);           
            if (Array.isArray(neighborhood)){
                neighborhood.forEach(function(pattern){
                    if(patternCount(text, pattern) > 0){
                        index = patternToNumber(pattern);
                        frequencyArray[index] +=  1;
                        console.log(pattern);
                    }
                });
            } else {
                if(patternCount(text, pattern) > 0){
                    index = patternToNumber(pattern);
                    frequencyArray[index] +=  1;
                    console.log(pattern);                    
                }            
            }      
        }
    });
    for (var i = 0; i <= max; i++){
        if (frequencyArray[i] == dna.length) {
            pattern = numberToPattern(i, k);
            frequentPatterns.push(pattern);
        }
    }
    //console.log(frequencyArray);
    return frequentPatterns;
}

function patternCount(text, pattern) {
    var count = 0;
    var max = text.length - pattern.length;
    var pedaco;
    for (var i = 0; i <= max; i++ ) {
        pedaco = text.substring(i, i + pattern.length);
        if(pedaco === pattern) {
            count++;
        }
    } 
    return count;
}

function removeDuplicate(conjunto) {
	var novo = []; 
    var max = conjunto.length;
	for(var i = 0; i < max; i++) {
		if (novo.indexOf(conjunto[i]) == -1) {
            novo.push(conjunto[i]);
        }
	}
	return novo;
}        


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
        if (Array.isArray(neighborhood)){
            neighborhood.forEach(function(pattern){
                index = patternToNumber(pattern);
                close[index] =  1;
            });
        } else {
            index = patternToNumber(neighborhood);
            close[index] =  1;            
        }      
    }
    var pattern;
    for (var i = 0; i <= max; i++){
        if (close[i] == 1) {
            pattern = numberToPattern(i, k);
            frequencyArray[i] = approximatePatternCount(pattern, text, d) + approximatePatternCount(reverse(pattern), text, d);
            index = patternToNumber(reverse(pattern));
            frequencyArray[index] = approximatePatternCount(pattern, text, d) + approximatePatternCount(reverse(pattern), text, d);           
        }
    }
    var maxCount = Math.max.apply(null, frequencyArray);
    for (var i = 0; i <= max; i++){
        if (frequencyArray[i] == maxCount) {
            pattern = numberToPattern(i, k);
            frequentPatterns.push(pattern);
        }
    }
    return frequentPatterns; 
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

function reverse(pattern) {
    rpattern = pattern.split('').reverse().join('');  
    rpattern = rpattern.replace(/A/g,"0");       
    rpattern = rpattern.replace(/T/g,"1");
    rpattern = rpattern.replace(/C/g,"2");
    rpattern = rpattern.replace(/G/g,"3");     
    rpattern = rpattern.replace(/0/g,"T");
    rpattern = rpattern.replace(/1/g,"A");
    rpattern = rpattern.replace(/2/g,"G");
    rpattern = rpattern.replace(/3/g,"C");    
    return rpattern;
}