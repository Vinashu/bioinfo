var k = 8;
var t = 5;
var n = 10000;
var dna = [
    'CGCCCCTCTCGGGGGTGTTCAGTAACCGGCCA',
    'GGGCGAGGTATGTGTAAGTGCCAAGGTGCCAG',
    'TAGTACCGAGACCGAAAGAAGTATACAGGCGT',
    'TAGATCAAGTTTCAGGTGCACGTCGGTGAACC',
    'AATCCACCAGCTCCACGTGCAATGTTGGCCTA'
];
var output = "TCTCGGGG CCAAGGTG TACAGGCG TTCAGGTG TCCACGTG";
var answer = runMoreTimes(dna, k, t, n, 20);
console.log(output);
console.log(answer);
console.log(answer === output);
console.log("----------------");

function runMoreTimes(dna, k, t, n, times){
    var bestMotifs = [];
    var motifs = [];
    var motifsScore = 0;
    var bestScore = Number.MAX_VALUE;
    for(i = 0; i < times; i++){
        motifs = gibbsSampler(dna, k, t, n);
        motifsScore = score(motifs, k); 
        if (motifsScore <= bestScore){
            bestMotifs = motifs;
            bestScore = motifsScore;
        }
    }
    console.log(bestScore);
    return bestMotifs.join(" ");
}

function gibbsSampler(dna, k, t, n){
    var bestMotifs = [];
    var motifs = [];
    var motifsNoI = [];
    var removedMotif = "";
    var profile = [];
    var ini = 0;
    dna.forEach(function(text){
        ini = Math.floor((Math.random() * (text.length - k)));        
        bestMotifs.push(text.substr(ini,k));
    }); 
    motifs = bestMotifs;
    for(var j = 0; j < n; j++){
        ini = Math.floor((Math.random() * t));
        motifsNoI = motifs;
        delete motifsNoI[ini];
        profile = createProfileMatrix(motifsNoI, k);
        motifs[ini] =  profileRandomlyGenerated(dna[ini], k, profile); 
        if (score(motifs, k) <= score(bestMotifs, k)){
            bestMotifs = motifs;
        }
    }
    return bestMotifs;
}

function score(motifs, k){
    var consensus = "";
    var score = 0;
    var valor = 0;
    var index = 0;
    var position = [];
    var qtd = motifs.length;
    var profile = createProfileMatrix(motifs, k);
    for (var i = 0; i < k; i++){
        position = [
            profile[0][i],
            profile[1][i],
            profile[2][i],
            profile[3][i]
        ];
        valor = Math.max(...position);
        index = position.indexOf(valor);
        consensus += numberToLetter(index);
    } 
    for (var i = 0; i < qtd; i++){
        score += hammingDistance(motifs[i], consensus); 
    };
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
        profile[0].push(1);
        profile[1].push(1);
        profile[2].push(1);
        profile[3].push(1);                
    };  
    var pos;
    patterns.forEach(function(pattern){
        for (var i = 0; i < k; i++){
            pos = letterToNumber(pattern.charAt(i));
            profile[pos][i] = profile[pos][i] + 1;             
        }
    });   
    for (var i = 0; i < k; i++){
        profile[0][i] = profile[0][i] / (qtd +1);
        profile[1][i] = profile[1][i] / (qtd +1);
        profile[2][i] = profile[2][i] / (qtd +1);
        profile[3][i] = profile[3][i] / (qtd +1);                
    }
    return profile;
}

function profileRandomlyGenerated(text, k, profile){
    var patterns = [];
    var probs = [];
    var tam;
    var pos;
    var value;
    var max = 0;
    var motif;
    patterns = findPatterns(text, k);
    patterns.forEach(function(pattern){
        tam = pattern.length;
        value = 1;
        for(var i=0; i < tam; i++){
            pos = letterToNumber(pattern.charAt(i));
            value *= profile[pos][i];
        }
        probs.push(value);
    });   
    pos = Math.max(...probs);
    pos = probs.indexOf(pos);
    motif = patterns[pos];
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

function numberToLetter(n){
    switch (n){
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
/*
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
*/