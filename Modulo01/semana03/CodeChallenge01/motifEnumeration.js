
var k = 3;
var d = 1;
var dna = [
    'ATTTGGC',
    'TGCCTTA',
    'CGGTATC',
    'GAAAATT'
];

var output = 'ATA ATT GTT TTT';

function motifEnumeration(dna, k, d) {
    var patterns = [];
    for each k-mer pattern in dna
        for each k-mer pattern’ differing from Pattern by at most d mismatches
            if Pattern' appears in each string from dna with at most d mismatches
                add Pattern' to Patterns
    remove duplicates from Patterns
    return patterns;
}
