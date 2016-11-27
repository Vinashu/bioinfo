
var text = 'ACCTGTTTATTGCCTAAGTTCCGAACAAACCCAATATAGCCCGAGGGCCT';
var k = 5;
var profile = [
    [0.2, 0.2, 0.3, 0.2, 0.3],
    [0.4, 0.3, 0.1, 0.5, 0.1],
    [0.3, 0.3, 0.5, 0.2, 0.4],
    [0.1, 0.2, 0.1, 0.1, 0.2]
];
var output = 'CCGAG';
var answer = profileMostProbable(text, k, profile);
console.log(output);
console.log(answer);
console.log(answer === output);

text = 'TATAAATATACGATTGCGAGGTCAGACGCTTTCGTCCTTTGCAGTAGCGTCCGCTCCCTACCAAACTCGAAACGGCCATGGGCGTTATTACAAACGCACAACCTACAAACCAGTAGGGACTTACACTGATGTTAACGATAAGGTTGTCAACCTTAGACGGGGGGTGACCACCATTTGGGTTTCGAAGTATTTGCGCAGTGAACAGCCTACAGAAGGGCGACCTTTTCTTTTCTTCCCCCAGCTTCTCGCTCCGGATCCTGATACCAGATCTGATGAAGCGTTGTCGCTCAAATAATCCCTAAATCTGAGATTGGTGGTGATGCAAAACCAGCCATACAACATTACTCTCTTGTACGTATACGTAAGCTTGGAGTGCTCTAGCCCTAGTCGCTGTAGCCGTGTCCGAGTATTCATCAGAGAGCATAAGAAAATGCTGATTACGAGTCGAACTTCAGTGTAGTGGGGCTATGGTCTTCACTCTACTCAATATTTGAAATAGGGGTATGTCGTTCCAAAGTATATGCCTGACACCTTAGTGTCATGGGTTGCGGGCCAGTTTGGGACGTATTCCCAATCAGTCATTAGAATTACAATCCGTACGAAAAGTTCATCCCTCAACCCCATCGGCTCGGGTCAGTTCTTTACAGGCGCTATGAACGCGGACGTTTGTGGTTGAACACTTGACAATTAACTAAAGGCCAAAAGAGAGCGCTCTGCTTCTGACCTGCGCTACATGTGAACCCTGCCTCAAGCCTATCATTGTTCCATTGCTAAATTATGTCTGCACTGCATAAGGCACCCCCTGACCTGGACAGCCGCGTACGAGTCTCCCTGACAGATGTTATGCGTCGAGGCTTGCCGTGAGGAAAGTGTACGAGACCCATGAACGAGAATCGCGGGTGTCTCAAAAGAGTAGGGAGGCGAGGTCGAGCCACATACGGTAGACAGAGCAAACCATGAAAGGTAGAAGCGAGGTAACTTCAAGTATAATATGTCCAAT';
k = 15;
profile = [
    [0.227, 0.182, 0.333, 0.318, 0.303, 0.258, 0.288, 0.106, 0.242, 0.152, 0.364, 0.242, 0.348, 0.242, 0.242],
    [0.212, 0.227, 0.212, 0.167, 0.212, 0.303, 0.258, 0.258, 0.227, 0.227, 0.242, 0.303, 0.152, 0.273, 0.258],
    [0.318, 0.303, 0.258, 0.227, 0.242, 0.182, 0.242, 0.258, 0.303, 0.348, 0.152, 0.258, 0.303, 0.212, 0.212],
    [0.242, 0.288, 0.197, 0.288, 0.242, 0.258, 0.212, 0.379, 0.227, 0.273, 0.242, 0.197, 0.197, 0.273, 0.288]
];
output = 'TGAACACTTGACAAT';
answer = profileMostProbable(text, k, profile);
console.log(output);
console.log(answer);
console.log(answer === output);

function profileMostProbable(text, k, profile){
    var patterns = [];
    var tam;
    var pos;
    var value;
    var max = 0;
    var motif;
    patterns = findPatterns(text, k);
    patterns.forEach(function(pattern){
        tam = pattern.length;
        value = 1;
        for(var i=0; i < tam; i++){
            pos = letterToNumber(pattern.charAt(i));
            value *= profile[pos][i];
        }
        if (value > max){
            max = value;
            motif = pattern;
        }
    });
    return motif;
}

function findPatterns(text, k){
    var patterns = [];
    var max = text.length - k;
    var pattern;
    for(var i = 0; i <= max; i++){
        pattern = text.substring(i, i+k);
        patterns.push(pattern);
    }
    return patterns;
} 

function letterToNumber(l){
    switch (l){
        case "A":
            return 0;
        case "C":
            return 1;
        case "G":
            return 2;
        case "T":
            return 3;                        
    }
}