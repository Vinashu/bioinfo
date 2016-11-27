process.stdin.on('data', function (chunk) {
  var args = chunk.toString().split("\n");
  var text = args.shift();
  var k = parseInt(args.shift());
  var profile = [];
  args.forEach(function(line){
      profile.push(line.split(" "));
  });
  result = profileMostProbable(text, k, profile);
  process.stdout.write(result);
});

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