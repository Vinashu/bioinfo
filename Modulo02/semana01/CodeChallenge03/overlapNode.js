process.stdin.on('data', function (chunk) {
  var reads = chunk.toString().split("\n");
  process.stdout.write(overlap(reads));
});
   
function overlap(reads){
    var tam = reads.length;
    var nodes = [];
    var graph = [];
    for (var i = 0; i < tam; i++) {
        nodes[i] = [];
        reads.forEach(function(read){          
            if(sufix(reads[i]) == prefix(read)){
                nodes[i].push(read);
            }
        });
        if(nodes[i].length > 0){
            graph.push(reads[i] + " -> " + nodes[i].join(","));
        }
    }
    return graph.join("\n");
}

function prefix(text){   
    return text.substr(0, text.length - 1);
}

function sufix(text){
    return text.substr(1, text.length - 1);
}