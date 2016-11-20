var text = "TAAAGACTGCCGAGAGGCCAACACGAGTGCTAGAACGAGGGGCGTAAACGCGGGTCCGAT";
var skew = minimumSkew(text);
console.log("Text = " + text + "\n");
console.log("Skew = " + skew + "\n");

function minimumSkew(text) {
    var max = text.length;
    var skew = [0]; 
    var menor = 100;   
    for (var i = 1; i <= max +1; i++ ) {
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
        if (skew[i] < menor) {
            menor = skew[i];
        }
    } 
    return (procuraPos(0,max,skew,menor));
}

function procuraPos(inicio, fim, skew, menor) {    
    if (skew.indexOf(menor, inicio+1) == -1){
        return "";
    } else {         
        return skew.indexOf(menor, inicio+1) + " " + procuraPos(skew.indexOf(menor, inicio+1),fim, skew, menor); 
    }
}