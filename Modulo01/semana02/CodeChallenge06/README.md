Frequent Words with Mismatches and Reverse Complements Problem: Find the most frequent k-mers (with mismatches and reverse complements) in a string.<br>
    Input: A DNA string Text as well as integers k and d.<br>
    Output: All k-mers Pattern maximizing the sum Countd(Text, Pattern)+ Countd(Text, Patternrc) over all possible k-mers.<br>

Code Challenge: Solve the Frequent Words with Mismatches and Reverse Complements Problem. 

Sample Input:<br>
    ACGTTGCATGTCGCATGATGCATGAGAGCT<br>
    4 1<br>
Sample Output:<br>
    ATGT ACAT     <br>   