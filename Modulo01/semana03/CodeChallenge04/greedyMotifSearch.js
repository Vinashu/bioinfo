var k = 3;
var t = 5;
var dna = [
    'GGCGTTCAGGCA',
    'AAGAATCAGTCA',
    'CAAGGAGTTCGC',
    'CACGTCAATCAC',
    'CAATAATATTCG'
];
var output = "CAG CAG CAA CAA CAA";
var answer = greedyMotifSearch(dna, k, t);

console.log(output);
console.log(answer);
console.log(answer === output);
console.log("----------------");

k = 3;
t = 4;
dna = [
    'GCCCAA',
    'GGCCTG',
    'AACCTA',
    'TTCCTT'
];
output = "GCC GCC AAC TTC";
answer = greedyMotifSearch(dna, k, t);
console.log(output);
console.log(answer);
console.log(answer === output);

function greedyMotifSearch(dna, k, t){
    var bestMotifs = [];
    var motifs = [];
    var profile = [];
    dna.forEach(function(text){
        bestMotifs.push(text.substr(0,k));
    }); 
    var patterns = findPatterns(dna[0], k);   
    patterns.forEach(function(motif){
        motifs[0] = motif;
        for(var i = 1; i < t; i++){
            profile = createProfileMatrix(motifs, k);      
            motifs[i] =  profileMostProbable(dna[i], k, profile);
        }  
        if (score(motifs, k) < score(bestMotifs, k)){
            bestMotifs = motifs;
        }
        motifs = [];
    });
    return bestMotifs.join(" ");
}

function score(motifs, k){
    var score = 0;
    var qtd = motifs.length;
    var profile = createProfileMatrix(motifs, k);
    for (var i = 0; i < k; i++){
        score += qtd - Math.max(
            profile[0][i],
            profile[1][i],
            profile[2][i],
            profile[3][i]                                   
        );
    } 
    return score;
}

function createProfileMatrix(patterns, k){
    var qtd = patterns.length;
    var profile = [
        [],
        [],
        [],
        []
    ];
    for (var i = 0; i < k; i++){
        profile[0].push(0);
        profile[1].push(0);
        profile[2].push(0);
        profile[3].push(0);                
    };  
    var pos;
    patterns.forEach(function(pattern){
        for (var i = 0; i < k; i++){
            pos = letterToNumber(pattern.charAt(i));
            profile[pos][i] = profile[pos][i] + 1;             
        }
    });   
    for (var i = 0; i < k; i++){
        profile[0][i] = profile[0][i] /qtd;
        profile[1][i] = profile[1][i] /qtd;
        profile[2][i] = profile[2][i] /qtd;
        profile[3][i] = profile[3][i] /qtd;                
    }
    return profile;
}

function profileMostProbable(text, k, profile){
    var patterns = [];
    var tam;
    var pos;
    var value;
    var max = -1;
    var motif;
    patterns = findPatterns(text, k);
    patterns.forEach(function(pattern){
        tam = pattern.length;
        value = 1;
        for(var i=0; i < tam; i++){
            pos = letterToNumber(pattern.charAt(i));
            value *= profile[pos][i];
        }
        if (value > max){
            max = value;
            motif = pattern;
        }
    });
    return motif;
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

function letterToNumber(l){
    switch (l){
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