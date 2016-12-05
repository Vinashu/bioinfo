process.stdin.on('data', function (chunk) {
  var args = chunk.toString().split("\n");
  var nums = args.shift();
  var k = parseInt(nums[0]);
  var t = parseInt(nums[1]);
  var dna = args;
  result = runMoreTimes(dna, k, t, 1000);
  process.stdout.write(result);
});

function runMoreTimes(dna, k, t, times){
    var bestMotifs = [];
    var motifs = [];
    var motifsScore = 0;
    var bestScore = Number.MAX_VALUE;
    for(i = 0; i < times; i++){
        motifs = randomizedMotifSearch(dna, k, t);
        motifsScore = score(motifs, k); 
        if (motifsScore < bestScore){
            bestMotifs = motifs;
            bestScore = motifsScore;
        }
    }
    console.log(bestScore);
    return bestMotifs.join("\n");
}

function randomizedMotifSearch(dna, k, t){
    var bestMotifs = [];
    var motifs = [];
    var profile = [];
    var ini = 0;
    dna.forEach(function(text){
        ini = Math.floor((Math.random() * (text.length - k)));        
        bestMotifs.push(text.substr(ini,k));
    }); 
    motifs = bestMotifs;
    while(1){ 
        profile = createProfileMatrix(motifs, k);
        for(var i = 0; i < t; i++){      
            motifs[i] =  profileMostProbable(dna[i], k, profile);
        }  
        if (score(motifs, k) < score(bestMotifs, k)){
            bestMotifs = motifs;
        } else {
            return bestMotifs;
        }
    }
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

function profileMostProbable(text, k, profile){
    var patterns = [];
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