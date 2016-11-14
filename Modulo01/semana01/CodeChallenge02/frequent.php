<?php
$text = "GTAGCTCGTAGCTCGGGGGCAAGGGGGCAAGTAGCTCCTTATTACTGAGAACGGTAGCTCGGGGGCAACTTATTACTGGGGGCAAGAGAACGGTAGCTCCTTATTACTGTAGCTCCTTATTACTGTAGCTCTTCATTAACGGGGGCAATTCATTAACCTTATTACTGGGGGCAAGGGGGCAATTCATTAACCTTATTACTGTAGCTCTTCATTAACGTAGCTCGTAGCTCGTAGCTCGGGGGCAAGTAGCTCGAGAACGGAGAACGGGGGGCAACTTATTACTTTCATTAACGTAGCTCGTAGCTCGGGGGCAATTCATTAACGAGAACGTTCATTAACCTTATTACTCTTATTACTGGGGGCAATTCATTAACGGGGGCAACTTATTACTGGGGGCAAGGGGGCAAGGGGGCAAGGGGGCAAGTAGCTCGGGGGCAAGGGGGCAAGTAGCTCTTCATTAACTTCATTAACGAGAACGGGGGGCAACTTATTACTGTAGCTCGGGGGCAAGTAGCTCCTTATTACTCTTATTACTGGGGGCAAGGGGGCAAGAGAACGGAGAACGGGGGGCAATTCATTAACCTTATTACTGGGGGCAAGTAGCTCCTTATTACTGGGGGCAACTTATTACTCTTATTACTTTCATTAACGGGGGCAAGTAGCTCGTAGCTCGGGGGCAAGAGAACGGTAGCTCGGGGGCAAGTAGCTCCTTATTACTGAGAACGCTTATTACTGAGAACGGGGGGCAAGAGAACGTTCATTAACGAGAACGGAGAACGGGGGGCAAGTAGCTCTTCATTAAC";
$k = 12;
echo "Text = $text <br />";
echo "<br /> Frequent Pattern: ";
echo "<pre>";   
print_r(frequentWords($text,$k)); 
echo "</pre>";

function patternCount($text, $pattern) {
    $count = 0;
    for ($i = 0; $i <= strlen($text) - strlen($pattern); $i++ ) {
        if(substr($text, $i, strlen($pattern)) == $pattern) {
            $count++;
        }
    } 
    return $count;
}

function frequentWords($text, $k){
    $frequentPatterns = array();
    for ($i = 0; $i <= strlen($text) - $k; $i++) {
        $pattern = substr($text, $i, $k);
        $frequentPatterns[$pattern] = patternCount($text, $pattern);        
    }    
    array_multisort($frequentPatterns, SORT_DESC, SORT_NUMERIC);
    $max = current($frequentPatterns);
    $answer = array();
    foreach ($frequentPatterns as $key => $value) {
        if($max == $value) {
            array_push($answer,$key); 
        }
    }
    return ($answer);
}
?>