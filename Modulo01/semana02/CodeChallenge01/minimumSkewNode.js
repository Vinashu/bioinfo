process.stdin.on('data', function (chunk) {
  var args = chunk.toString().split("\n");
  result = minimumSkew(args[0].trim());
  process.stdout.write(result.toString());
});

function minimumSkew(text) {
    var max = text.length;
    var skew = [0]; 
    for (var i = 1; i <= max; i++ ) {
        switch(text.charAt(i-1)){
            case 'C':
                skew[i] = skew[i-1] - 1;            
            break;
            case 'G':
                skew[i] = skew[i-1] + 1;
            break;
            default:
                skew[i] = skew[i-1];            
        }
    } 
    var menor = Math.min.apply(null, skew)
    var retorno = procuraPos(0,max,skew,menor) 
    return retorno.trim();
}

function procuraPos(inicio, fim, skew, menor) { 
    var valor = skew.indexOf(menor, inicio+1)    
    if (valor == -1){
        return "";
    } else {         
        return valor + " " + procuraPos(valor, fim, skew, menor); 
    }
}