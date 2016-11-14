process.stdin.on('data', function (chunk) {
  var args = chunk.toString().split("\n");
  result = patternPositions(args[1].trim(), args[0].trim());
  process.stdout.write(result.toString());
});

function patternPositions(text, pattern) {
    var positions = "";
    var k = pattern.length;
    var max = text.length - k;
    for (var i = 0; i <= max; i++ ) {
        if(text.substring(i, k+i) == pattern) {
            positions += i + " ";
        }
    } 
    return positions.trim();
}