var text = "CATGGGCATCGGCCATACGCC";
var output = "0 -1 -1 -1 0 1 2 1 1 1 0 1 2 1 0 0 0 0 -1 0 -1 -2";
var skew = skewCount(text);
console.log("Text = " + text + "\n");
console.log("Output = " + output + "\n");
console.log("Skew = " + skew + "\n");

function skewCount(text) {
    var max = text.length;
    var skew = [0];    
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
    } 
    return skew.join(" ");
}