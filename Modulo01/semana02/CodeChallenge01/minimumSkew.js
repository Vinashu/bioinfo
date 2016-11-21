var text = "TAAAGACTGCCGAGAGGCCAACACGAGTGCTAGAACGAGGGGCGTAAACGCGGGTCCGAT";
var output = "11 24"
var skew = minimumSkew(text);
console.log("Test 01");
console.log("Text = " + text);
console.log("Output = " + output);
console.log("Skew = " + skew);
console.log(skew.trim() === output);
console.log(".......");

text = "ACCG";
output = "3"
skew = minimumSkew(text);
console.log("Test 02");
console.log("Text = " + text);
console.log("Output = " + output);
console.log("Skew = " + skew);
console.log(skew.trim() === output);
console.log(".......");

text = "ACCC";
output = "4"
skew = minimumSkew(text);
console.log("Test 03");
console.log("Text = " + text);
console.log("Output = " + output);
console.log("Skew = " + skew);
console.log(skew.trim() === output);
console.log(".......");

text = "CCGGGT";
output = "2"
skew = minimumSkew(text);
console.log("Test 04");
console.log("Text = " + text);
console.log("Output = " + output);
console.log("Skew = " + skew);
console.log(skew.trim() === output);
console.log(".......");

text = "CCGGCCGG";
output = "2 6"
skew = minimumSkew(text);
console.log("Test 05");
console.log("Text = " + text);
console.log("Output = " + output);
console.log("Skew = " + skew);
console.log(skew.trim() === output);
console.log(".......");

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