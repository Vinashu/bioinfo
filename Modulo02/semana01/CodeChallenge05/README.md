Code Challenge: Solve the de Bruijn Graph from k-mers Problem.<br>
    Input: A collection of k-mers Patterns.<br>
    Output: The adjacency list of the de Bruijn graph DeBruijn(Patterns).<br> 

Sample Input:<br>
    GAGG<br>
    CAGG<br>
    GGGG<br>
    GGGA<br>
    CAGG<br>
    AGGG<br>
    GGAG<br>

Sample Output:<br>
    AGG -> GGG<br>
    CAG -> AGG,AGG<br>
    GAG -> AGG<br>
    GGA -> GAG<br>
    GGG -> GGA,GGG<br>           