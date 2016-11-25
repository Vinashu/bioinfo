process.stdin.on('data', function (chunk) {
  var args = chunk.toString().split("\n");
  var ints = args.shift();
  ints = ints.split(" ");
  result = motifEnumeration(args, parseInt(ints[0].trim()), parseInt(ints[1].trim()));
  process.stdout.write(result);
});

function motifEnumeration(dna, k, d) {
    var patterns = [];
    var neighborhood = [];
    var frequentPatterns = [];
    var frequencyArray = [];
    var max = Math.pow(4,k)-1; 
    var index;    
    var pattern;   
    var tam = dna.length;
    dna.forEach(function(text){
        neighborhood = [];
        patterns = findPatterns(text,k);
        patterns.forEach(function(pattern){
            neighborhood = neighborhood.concat(neighbors(pattern,d));
        });   
        neighborhood = removeDuplicate(neighborhood);
        frequentPatterns.push(neighborhood);
    });
    for (var i = 0; i <= max; i++){
        frequencyArray[i] = 0;
    }
    frequentPatterns.forEach(function(patterns){
        patterns.forEach(function(pattern){
            index = patternToNumber(pattern);
            frequencyArray[index] += 1;
        });  
    });         
    frequentPatterns = [];
    for (var i = 0; i <= max; i++){
        if(frequencyArray[i] >= tam){
            pattern = numberToPattern(i,k); 
            frequentPatterns.push(pattern);
        }
    }
    return frequentPatterns.join(" ");
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

function findPatterns(text, k){
    var patterns = [];
    var max = text.length - k;
    var pattern;
    for(var i = 0; i <= max; i++){
        pattern = text.substring(i, i+k);
        patterns.push(pattern);
    }
    return patterns;
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