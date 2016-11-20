process.stdin.on('data', function (chunk) {
  var args = chunk.toString().split("\n");
  result = hammingDistance(args[0].trim(),args[1].trim());
  process.stdout.write(result.toString());
});

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