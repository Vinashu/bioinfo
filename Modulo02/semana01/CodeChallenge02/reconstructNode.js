process.stdin.on('data', function (chunk) {
  var reads = chunk.toString().split("\n");
  result = reconstruct(reads);
  process.stdout.write(result.toString());
});

function reconstruct(reads){
    var tam = reads.length;
    var text = reads[0];
    for (var i = 1; i < tam; i++) {
        text += sufix(reads[i]);       
    }
    return text;
}

function sufix(text){
    return text.substr(text.length - 1, 1);
}