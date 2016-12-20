process.stdin.on('data', function (chunk) {
  var args = chunk.toString().split("\n");
  var k = parseInt(args[0]);
  var text = args[1];
  result = composition(text, k);
  process.stdout.write(result.toString());
});

function composition(text, k){
    var tam = text.length;
    var max = tam - k;
    var reads = [];
    for(var i = 0; i <= max; i++){
        reads.push(text.substr(i, k));
    }
    return reads.join("\n");
}