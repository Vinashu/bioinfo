var reads = [
    'ACCGA',
    'CCGAA',
    'CGAAG',
    'GAAGC',
    'AAGCT'
];   

var output = 'ACCGAAGCT';
var answer = reconstruct(reads);

console.log(output);
console.log(answer);
console.log(answer === output);

reads = [
    'TCGGGGAATGCATC',
    'CGGGGAATGCATCA',
    'GGGGAATGCATCAC',
    'GGGAATGCATCACA',
    'GGAATGCATCACAA',
    'GAATGCATCACAAA',
    'AATGCATCACAAAG',
    'ATGCATCACAAAGT',
    'TGCATCACAAAGTG',
    'GCATCACAAAGTGC',
    'CATCACAAAGTGCA',
    'ATCACAAAGTGCAG'
]
output = 'TCGGGGAATGCATCACAAAGTGCAG';
answer = reconstruct(reads);

console.log(output);
console.log(answer);
console.log(answer === output);
    
function reconstruct(reads){
    var tam = reads.length;
    var text = reads[0];
    for (var i = 1; i < tam; i++) {
        text += sufix(reads[i]);       
    }
    return text;
}

function prefix(text){   
    return text.substr(0, text.length - 1);
}

function sufix(text){
    return text.substr(text.length - 1, 1);
}