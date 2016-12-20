String Spelled by a Genome Path Problem. Reconstruct a string from its genome path.<br>
    Input: A sequence of k-mers Pattern1, … ,Patternn such that the last k - 1 symbols of Patterni are equal to the first k-1 symbols of Patterni+1 for 1 ≤ i ≤ n-1.<br>
    Output: A string Text of length k+n-1 such that the i-th k-mer in Text is equal to Patterni  (for 1 ≤ i ≤ n).        <br>

Code Challenge: Solve the String Spelled by a Genome Path Problem.<br>

Sample Input:<br>
    ACCGA<br>
    CCGAA<br>
    CGAAG<br>
    GAAGC<br>
    AAGCT<br>

Sample Output:<br>
    ACCGAAGCT     <br>                      