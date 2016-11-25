var k = 3;
var dna = [
    'TTACCTTAAC',
    'GATATCTGTC',
    'ACGGCGTTCG',
    'CCCTAAAGAG',
    'CGTCAGAGGT'
];
var output = "CCT";
var answer = medianString(dna,k);
console.log(output);
console.log(answer);
console.log(output === answer);
console.log("----------------");

k = 3;
dna = [
    'AAATTGACGCAT',
    'GACGACCACGTT',
    'CGTCAGCGCCTG',
    'GCTGAGCACCGG',
    'AGTTCGGGACAG'
];
output = "GAC";
answer = medianString(dna,k);
console.log(output);
console.log(answer);
console.log(output === answer);
console.log("----------------");

k = 6;
dna = [
    'TATTGGGTATCACTTCTAGGATTAACTAAATTTTATGCCACG',
    'GAAACTGGCTTATGAGAATTGCTAAAGAGTATCTTGGGCTTT',
    'CTCAATTAAAGAGGCTTAACACGCTCAGCGACAGCATGCAAA',
    'GGGTGAGGAAAGAGTCCCTTCGTACGCTCGGGCTTACAGGTA',
    'CTTTCCATTCGACCACGTGGATTAGCGCGGTTTCAGTCCGGA',
    'GATAGGGGATTAGCTCGATACCGACGGCTGGGGAAGGGTTTT',
    'TTTCACCTGGACCGTTTAGTTATCGGTTTAGCCCGAACTATT',
    'ATCGAGCGCATGCACGGACGGAGAATTTTAGGTTTAGACGGA',
    'GGCTAAAGCCCCTCGTCGGATACGGGATTATCCAACCAACGT',
    'CCGACTCCCCACTGACAACCACTCTCACTGGGCTTATCTACT'
];

output = "GGATTA";
answer = medianString(dna,k);
console.log(output);
console.log(answer);
console.log(output === answer);
console.log("----------------");

function medianString(dna, k) {
    var distance = Number.MAX_VALUE;
    var max = Math.pow(4,k)-1;
    var pattern;
    var median;
    for (var i = 0; i <= max; i++) {
        pattern = numberToPattern(i, k);
        if (distance > distanceBetweenPatternAndStrings(pattern, dna)){
            distance = distanceBetweenPatternAndStrings(pattern, dna);
            median = pattern;
        }
    }
    return median;
}

function distanceBetweenPatternAndStrings(pattern, dna){
    var k = pattern.length;
    var distance = 0;
    var hDistance;
    var patterns = [];
    dna.forEach(function(text){
        hDistance = Number.MAX_VALUE;
        patterns = findPatterns(text,k);
        patterns.forEach(function(kmer){
            if (hDistance > hammingDistance(pattern, kmer)){
                hDistance = hammingDistance(pattern, kmer);
            }
        })
        distance = distance + hDistance
    });
    return distance
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