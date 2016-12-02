Code Challenge: Implement GibbsSampler.<br>
    Input: Integers k, t, and N, followed by a collection of strings Dna.<br>
    Output: The strings BestMotifs resulting from running GibbsSampler(Dna, k, t, N) with<br>
    20 random starts. Remember to use pseudocounts!<br>

Sample Input:<br>
    8 5 100<br>
    CGCCCCTCTCGGGGGTGTTCAGTAAACGGCCA<br>
    GGGCGAGGTATGTGTAAGTGCCAAGGTGCCAG<br>
    TAGTACCGAGACCGAAAGAAGTATACAGGCGT<br>
    TAGATCAAGTTTCAGGTGCACGTCGGTGAACC<br>
    AATCCACCAGCTCCACGTGCAATGTTGGCCTA<br>

Sample Output:<br>
    AACGGCCA<br>
    AAGTGCCA<br>
    TAGTACCG<br>
    AAGTTTCA<br>
    ACGTGCAA<br>