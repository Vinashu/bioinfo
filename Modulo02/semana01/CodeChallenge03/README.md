Code Challenge: Solve the Overlap Graph Problem (restated below).<br>
    Input: A collection Patterns of k-mers.<br>
    Output: The overlap graph Overlap(Patterns), in the form of an adjacency list. (You may return the edges in any order.)<br>  

Sample Input:<br>
    ATGCG<br>
    GCATG<br>
    CATGC<br>
    AGGCA<br>
    GGCAT<br>

Sample Output:<br>
    CATGC -> ATGCG<br>
    GCATG -> CATGC<br>
    GGCAT -> GCATG<br>
    AGGCA -> GGCAT    <br>              