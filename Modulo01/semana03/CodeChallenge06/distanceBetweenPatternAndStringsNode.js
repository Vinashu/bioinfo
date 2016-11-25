process.stdin.on('data', function (chunk) {
  var dna = chunk.toString().split("\n");
  var pattern = dna.shift();  
  dna = dna.split(" ");  
  result = distanceBetweenPatternAndStrings(pattern, dna);
  process.stdout.write(result);
});

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