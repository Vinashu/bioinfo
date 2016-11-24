Code Challenge: Implement MotifEnumeration (reproduced below).<br>
    Input: Integers k and d, followed by a collection of strings Dna.<br>
    Output: All (k, d)-motifs in Dna.<br>

    MotifEnumeration(Dna, k, d)<br>
        Patterns ← an empty set<br>
        for each k-mer Pattern in Dna<br>
            for each k-mer Pattern’ differing from Pattern by at most d mismatches<br>
                if Pattern' appears in each string from Dna with at most d mismatches<br>
                    add Pattern' to Patterns<br>
        remove duplicates from Patterns<br>
        return Patterns<br>

Sample Input:<br>
    3 1<br>
    ATTTGGC<br>
    TGCCTTA<br>
    CGGTATC<br>
    GAAAATT<br>
Sample Output:<br>
    ATA ATT GTT TTT<br>     