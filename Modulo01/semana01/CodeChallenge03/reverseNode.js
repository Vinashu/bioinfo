process.stdin.on('data', function (chunk) {
  var args = chunk.toString().split("\n");
  result = reverse(args[0].trim());
  process.stdout.write(result.toString());
});

function reverse(pattern) {
    rpattern = pattern.split('').reverse().join('');  
    rpattern = rpattern.replace(/A/g,"0");       
    rpattern = rpattern.replace(/T/g,"1");
    rpattern = rpattern.replace(/C/g,"2");
    rpattern = rpattern.replace(/G/g,"3");     
    rpattern = rpattern.replace(/0/g,"T");
    rpattern = rpattern.replace(/1/g,"A");
    rpattern = rpattern.replace(/2/g,"G");
    rpattern = rpattern.replace(/3/g,"C");    
    return rpattern;
}