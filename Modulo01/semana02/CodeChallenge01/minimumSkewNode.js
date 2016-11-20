process.stdin.on('data', function (chunk) {
  var args = chunk.toString().split("\n");
  result = minimumSkew(args[0].trim());
  result = result.trim();
  process.stdout.write(result.toString());
});

function minimumSkew(text) {
    var max = text.length;
    var skew = [0]; 
    var menor = 0;   
    for (var i = 1; i <= max; i++ ) {
        switch(text.substring(i-1, i)){
            case 'C':
                skew[i] = skew[i-1] - 1;            
            break;
            case 'G':
                skew[i] = skew[i-1] + 1;
            break;
            default:
                skew[i] = skew[i-1];            
        }
        if (skew[i] < menor) {
            menor = skew[i];
        }
    } 
    var resultado = procuraPos(0,max,skew,menor); 
    return resultado.trim();
}

function procuraPos(inicio, fim, skew, menor) {
    if (skew.indexOf(menor, inicio+1) == -1){
        return "";
    } else {         
        return skew.indexOf(menor, inicio+1) + " " + procuraPos(skew.indexOf(menor, inicio+1),fim, skew, menor); 
    }
}