var pattern = "GAGG";
var text = "TTTAGAGCCTTCAGAGG";
var mm = 2;
var output = 4;
var distances = aproximatePatternCount(pattern, text, mm);
console.log("Teste 01...")
console.log("Pattern = " + pattern);
console.log("Text = " + text);
console.log("Mismatch = " + mm);
console.log("Output = " + output);
console.log("Distances = " + distances);
console.log("Result = " + (output === distances));
console.log("............");

pattern = "AA";
text = "AAA";
mm = 0;
output = 2;
distances = aproximatePatternCount(pattern, text, mm);
console.log("Teste 02...")
console.log("Pattern = " + pattern);
console.log("Text = " + text);
console.log("Mismatch = " + mm);
console.log("Output = " + output);
console.log("Distances = " + distances);
console.log("Result = " + (output === distances));
console.log("............");

pattern = "ATA";
text = "ATA";
mm = 1;
output = 1;
distances = aproximatePatternCount(pattern, text, mm);
console.log("Teste 03...")
console.log("Pattern = " + pattern);
console.log("Text = " + text);
console.log("Mismatch = " + mm);
console.log("Output = " + output);
console.log("Distances = " + distances);
console.log("Result = " + (output === distances));
console.log("............");

pattern = "AAAAA";
text = "AACAAGCTGATAAACATTTAAAGAG";
mm = 2;
output = 11;
distances = aproximatePatternCount(pattern, text, mm);
console.log("Teste 04...")
console.log("Pattern = " + pattern);
console.log("Text = " + text);
console.log("Mismatch = " + mm);
console.log("Output = " + output);
console.log("Distances = " + distances);
console.log("Result = " + (output === distances));
console.log("............");

pattern = "GCCACTG";
text = "CCGGCCGTGCGGGTTTCGGGTAGTTTTAAGTTACGGGAATCCTTCGTAGGTTGCGCGCCACTGGTTCGAGGATGCACCTGTTCTACTTCGCCACCATATCTAACCCAGCGCTACTAGGTGTCAACTTTTAACGTTCTCGACTATAGAAACGTCACGTTCGGATAAGAGGAGCCCTCAATCTTTGGACCGTGTGGAGCGAACAACGAGTACAAGGCCTTTGGTCTCCAGGGCGAGGGTACATAATTAAAGCACCGAGACGCGTCAGCACAACAGCTAGGGGTGGTGCATGAACCGAGCCGCCCTATTGAGGCTGTGGGCGACTTATGGGAATGCGGGAGCACCCAATAT";
mm = 2;
output = 6;
distances = aproximatePatternCount(pattern, text, mm);
console.log("Teste 04...")
console.log("Pattern = " + pattern);
console.log("Text = " + text);
console.log("Mismatch = " + mm);
console.log("Output = " + output);
console.log("Distances = " + distances);
console.log("Result = " + (output === distances));
console.log("............");

function aproximatePatternCount(pattern, text, mm){
    var p = pattern.length;
    var max = text.length - p;
    distances = 0;
    for(var i = 0; i <= max; i++){
        if(hammingDistance(pattern, text.substr(i,p)) <= mm){
            distances++;
        }
    }
    return distances;
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