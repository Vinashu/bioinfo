<?php
$pattern = "CTTGATCAT";
$positions = patternPositions($text, $pattern);
echo "Text = $text <br/>";
echo "Pattern = $pattern <br/>";
echo "Positions = $positions <br/>";
function patternPositions($text, $pattern) {
    $positions = "";
    for ($i = 0; $i <= strlen($text) - strlen($pattern); $i++ ) {
        if(substr($text, $i, strlen($pattern)) == $pattern) {
            $positions .= $i . " ";
        }
    } 
    return $positions;
}
?>