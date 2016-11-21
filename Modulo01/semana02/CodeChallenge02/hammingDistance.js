var text1 = "GGGCCGTTGGT";
var text2 = "GGACCGTTGAC";
var output = 3;
var distance = hammingDistance(text1, text2);
console.log("Teste 01...")
console.log("Text1 = " + text1);
console.log("Text2 = " + text2);
console.log("Output = " + output);
console.log("Distance = " + distance);
console.log("Result = " + (output === distance));
console.log("............")

text1 = "AAAA";
text2 = "TTTT";
output = 4;
distance = hammingDistance(text1, text2);
console.log("Teste 02...")
console.log("Text1 = " + text1);
console.log("Text2 = " + text2);
console.log("Output = " + output);
console.log("Distance = " + distance);
console.log("Result = " + (output === distance));
console.log("............")

text1 = "ACGTACGT";
text2 = "TACGTACG";
output = 8;
distance = hammingDistance(text1, text2);
console.log("Teste 03...")
console.log("Text1 = " + text1);
console.log("Text2 = " + text2);
console.log("Output = " + output);
console.log("Distance = " + distance);
console.log("Result = " + (output === distance));
console.log("............")

text1 = "ACGTACGT";
text2 = "CCCCCCCC";
output = 6;
distance = hammingDistance(text1, text2);
console.log("Teste 04...")
console.log("Text1 = " + text1);
console.log("Text2 = " + text2);
console.log("Output = " + output);
console.log("Distance = " + distance);
console.log("Result = " + (output === distance));
console.log("............")

text1 = "ACGTACGT";
text2 = "TGCATGCA";
output = 8;
distance = hammingDistance(text1, text2);
console.log("Teste 05...")
console.log("Text1 = " + text1);
console.log("Text2 = " + text2);
console.log("Output = " + output);
console.log("Distance = " + distance);
console.log("Result = " + (output === distance));
console.log("............")

text1 = "GATAGCAGCTTCTGAACTGGTTACCTGCCGTGAGTAAATTAAAATTTTATTGACTTAGGTCACTAAATACT";
text2 = "AATAGCAGCTTCTCAACTGGTTACCTCGTATGAGTAAATTAGGTCATTATTGACTCAGGTCACTAACGTCT";
output = 15;
distance = hammingDistance(text1, text2);
console.log("Teste 06...")
console.log("Text1 = " + text1);
console.log("Text2 = " + text2);
console.log("Output = " + output);
console.log("Distance = " + distance);
console.log("Result = " + (output === distance));
console.log("............")

text1 = "AGAAACAGACCGCTATGTTCAACGATTTGTTTTATCTCGTCACCGGGATATTGCGGCCACTCATCGGTCAGTTGATTACGCAGGGCGTAAATCGCCAGAATCAGGCTG";
text2 = "AGAAACCCACCGCTAAAAACAACGATTTGCGTAGTCAGGTCACCGGGATATTGCGGCCACTAAGGCCTTGGATGATTACGCAGAACGTATTGACCCAGAATCAGGCTC";
output = 28;
distance = hammingDistance(text1, text2);
console.log("Teste 07...")
console.log("Text1 = " + text1);
console.log("Text2 = " + text2);
console.log("Output = " + output);
console.log("Distance = " + distance);
console.log("Result = " + (output === distance));
console.log("............")

text1 = "CTACAGCAATACGATCATATGCGGATCCGCAGTGGCCGGTAGACACACGT ";
text2 = "CTACCCCGCTGCTCAATGACCGGGACTAAAGAGGCGAAGATTATGGTGTG";
output = 37;
distance = hammingDistance(text1, text2);
console.log("Teste 07...")
console.log("Text1 = " + text1);
console.log("Text2 = " + text2);
console.log("Output = " + output);
console.log("Distance = " + distance);
console.log("Result = " + (output === distance));
console.log("............")

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