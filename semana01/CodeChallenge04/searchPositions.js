var text = "GATATATGCATATACTT";
var pattern = "ATAT";
var positions = patternPositions(text, pattern);
console.log("Text = " + text);
console.log("Pattern = " + pattern);
console.log("Positions = " + positions);
function patternPositions(text, pattern) {
    var positions = "";
    var k = pattern.length;
    var max = text.length - k;
    for (var i = 0; i <= max; i++ ) {
        if(text.substring(i, k+i) == pattern) {
            positions += i + " ";
        }
    } 
    return positions.trim();
}