Code Challenge: Implement GreedyMotifSearch with pseudocounts.<br>
    Input: Integers k and t, followed by a collection of strings Dna.<br>
    Output: A collection of strings BestMotifs resulting from applying GreedyMotifSearch(Dna, k, t) with pseudocounts.<br>
    If at any step you find more than one Profile-most probable k-mer in a given string, use the one occurring first.<br>

Sample Input:<br>
    3 5<br>
    GGCGTTCAGGCA<br>
    AAGAATCAGTCA<br>
    CAAGGAGTTCGC<br>
    CACGTCAATCAC<br>
    CAATAATATTCG<br>
Sample Output:<br>
    TTC<br>
    ATC<br>
    TTC<br>
    ATC<br>
    TTC<br>         