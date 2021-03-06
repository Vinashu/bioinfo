process.stdin.on('data', function (chunk) {
  var args = chunk.toString().split("\n");
  result = aproximatePattern(args[0].trim(),args[1].trim(),args[2].trim());
  process.stdout.write(result.toString());
});

function aproximatePattern(pattern, text, mm){
    var p = pattern.length;
    var max = text.length - p;
    distances = [];
    for(var i = 0; i <= max; i++){
        if(hammingDistance(pattern, text.substr(i,p)) <= mm){
            distances.push(i);
        }
    }
    return distances.join(" ");
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