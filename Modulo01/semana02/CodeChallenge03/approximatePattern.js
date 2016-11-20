var pattern = "ATTCTGGA";
var text = "CGCCCGAATCCAGAACGCATTCCCATATTTCGGGACCACTGGCCTCCACGGTACGGACGTCAATCAAAT";
var mm = 3;
var output = "6 7 26 27";
var distances = aproximatePattern(pattern, text, mm);
console.log("Teste 01...")
console.log("Pattern = " + pattern);
console.log("Text = " + text);
console.log("Mismatch = " + mm);
console.log("Output = " + output);
console.log("Distances = " + distances);
console.log("Result = " + (output === distances));
console.log("............");

pattern = "GAGCGCTGG";
text = "GAGCGCTGGGTTAACTCGCTACTTCCCGACGAGCGCTGTGGCGCAAATTGGCGATGAAACTGCAGAGAGAACTGGTCATCCAACTGAATTCTCCCCGCTATCGCATTTTGATGCGCGCCGCGTCGATT";
mm = 2;
output = "0 30 66";
distances = aproximatePattern(pattern, text, mm);
console.log("Teste 02...")
console.log("Pattern = " + pattern);
console.log("Text = " + text);
console.log("Mismatch = " + mm);
console.log("Output = " + output);
console.log("Distances = " + distances);
console.log("Result = " + (output === distances));
console.log("............");

pattern = "AATCCTTTCA";
text = "CCAAATCCCCTCATGGCATGCATTCCCGCAGTATTTAATCCTTTCATTCTGCATATAAGTAGTGAAGGTATAGAAACCCGTTCAAGCCCGCAGCGGTAAAACCGAGAACCATGATGAATGCACGGCGATTGCGCCATAATCCAAACA";
mm = 3;
output = "3 36 74 137";
distances = aproximatePattern(pattern, text, mm);
console.log("Teste 03...")
console.log("Pattern = " + pattern);
console.log("Text = " + text);
console.log("Mismatch = " + mm);
console.log("Output = " + output);
console.log("Distances = " + distances);
console.log("Result = " + (output === distances));
console.log("............");

pattern = "CCGTCATCC";
text = "CCGTCATCCGTCATCCTCGCCACGTTGGCATGCATTCCGTCATCCCGTCAGGCATACTTCTGCATATAAGTACAAACATCCGTCATGTCAAAGGGAGCCCGCAGCGGTAAAACCGAGAACCATGATGAATGCACGGCGATTGC";
mm = 3;
output = "0 7 36 44 48 72 79 112";
distances = aproximatePattern(pattern, text, mm);
console.log("Teste 04...")
console.log("Pattern = " + pattern);
console.log("Text = " + text);
console.log("Mismatch = " + mm);
console.log("Output = " + output);
console.log("Distances = " + distances);
console.log("Result = " + (output === distances));
console.log("............");

pattern = "TTT";
text = "AAAAAA";
mm = 3;
output = "0 1 2 3";
distances = aproximatePattern(pattern, text, mm);
console.log("Teste 05...")
console.log("Pattern = " + pattern);
console.log("Text = " + text);
console.log("Mismatch = " + mm);
console.log("Output = " + output);
console.log("Distances = " + distances);
console.log("Result = " + (output === distances));
console.log("............");

pattern = "CCA";
text = "CCACCT";
mm = 0;
output = "0";
distances = aproximatePattern(pattern, text, mm);
console.log("Teste 06...")
console.log("Pattern = " + pattern);
console.log("Text = " + text);
console.log("Mismatch = " + mm);
console.log("Output = " + output);
console.log("Distances = " + distances);
console.log("Result = " + (output === distances));
console.log("............");

function aproximatePattern(pattern, text, mm){
    var p = pattern.length;
    var max = text.length - p;
    distances = [];
    for(var i = 0; i <= max; i++){
        if(hammingDistance(pattern, text.substr(i,p)) <= mm){
            distances.push(i);
        }
    }
    return distances.join(" ");
}

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