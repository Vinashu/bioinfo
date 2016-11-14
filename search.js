var text = "CTGTTTTTGATCCATGATATGTTATCTCTCCGTCATCAGAAGAACAGTGACGGATCGCCCTCTCTCTTGGTCAGGCGACCGTTTGCCATAATGCCCATGCTTTCCAGCCAGCTCTCAAACTCCGGTGACTCGCGCAGGTTGAGTA";
var pattern = "CTC";
/*
process.stdin.on('data', function (chunk) {
  var args = chunk.toString().split("\n");
  result = patternCount(args[0].trim(), args[1].trim());
  process.stdout.write(result.toString());
});
*/

var count = patternCount(text, pattern);
console.log("Text = " + text + "\n");
console.log("Pattern = " + pattern + "\n");
console.log("Count = " + count + "\n");

function patternCount(text, pattern) {
    var count = 0;
    var max = text.length - pattern.length;
    var pedaco;
    for (var i = 0; i <= max; i++ ) {
        pedaco = text.substring(i, i + pattern.length);
        console.log(pattern + " = " + pedaco + "\n");
        if(pedaco === pattern) {
            count++;
        }
    } 
    return count;
}