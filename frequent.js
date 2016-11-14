var text = "CCAGCGGGGGTTGATGCTCTGGGGGTCACAAGATTGCATTTTTATGGGGTTGCAAAAATGTTTTTTACGGCAGATTCATTTAAAATGCCCACTGGCTGGAGACATAGCCCGGATGCGCGTCTTTTACAACGTATTGCGGGGTAAAATCGTAGATGTTTTAAAATAGGCGTAAC";
var k = 5;
console.log("Text = " + text);
console.log("Frequent Pattern: ");   
console.log(frequentWords(text, k)); 

function frequentWords(text, k){
    var frequentPatterns = [];
    var max = text.length - k;
    var pattern = "";
    for (var i = 0; i <= max; i++) {
        pattern = text.substring(i, i + k);
        frequentPatterns.push(
            {
                'pattern' : pattern,
                'count': patternCount(text, pattern)
            }
        );        
    }    
    frequentPatterns.sort(function(a,b){return b.count - a.count});
    var max = frequentPatterns[0].count;
    var answer = [];
    var qtd = 0;
    frequentPatterns.forEach(function(element){
        if(max === element.count) {
            qtd = answer.find(function(pattern){
                return pattern === element.pattern;    
            }, element);
            if(qtd === undefined) {
                answer.push(element.pattern);    
            }
        }    
    })
    return (answer.join(" "));
}

function patternCount(text, pattern) {
    var count = 0;
    var max = text.length - pattern.length;
    var pedaco = "";
    for (var i = 0; i <= max; i++ ) {
        pedaco = text.substring(i, i + pattern.length);
        if(pedaco === pattern) {
            count++;
        }
    } 
    return count;
}

/*
// put your javascript (node.js) code here
process.stdin.on('data', function (chunk) {
  var args = chunk.toString().split("\n");
  result = frequentWords(args[0].trim(), args[1].trim());
  process.stdout.write(result.trim());
});

function frequentWords(text, k){
    k = parseInt(k); 
    var frequentPatterns = [];
    var max = text.length - k;
    var pattern = "";
    for (var i = 0; i <= max; i++) {
        pattern = text.substring(i, i + k);
        frequentPatterns.push(
            {
                'pattern' : pattern,
                'count': patternCount(text, pattern)
            }
        );        
    }          
    frequentPatterns.sort(function(a,b){return b.count - a.count});
    var max = frequentPatterns[0].count;
    var answer = [];
    var qtd = 0;
    frequentPatterns.forEach(function(element){
        if(max === element.count) {
            qtd = answer.find(function(pattern){
                return pattern === element.pattern;    
            }, element);
            if(qtd === undefined) {
                answer.push(element.pattern);    
            }
        }    
    })
    return (answer.join(" "));
}
                  
function patternCount(text, pattern) {
    var count = 0;
    var max = text.length - pattern.length;
    var pedaco = "";
    for (var i = 0; i <= max; i++ ) {
        pedaco = text.substring(i, i + pattern.length);
        if(pedaco === pattern) {
            count++;
        }
    } 
    return count;
}
*/