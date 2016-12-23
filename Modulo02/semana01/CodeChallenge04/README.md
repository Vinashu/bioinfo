Code Challenge: Solve the De Bruijn Graph from a String Problem.<br>
    Input: An integer k and a string Text.<br>
    Output: DeBruijnk(Text), in the form of an adjacency list.  <br>

Sample Input:<br>
    4<br>
    AAGATTCTCTAAGA<br>

Sample Output:<br>
    AAG -> AGA,AGA<br>
    AGA -> GAT<br>
    ATT -> TTC<br>
    CTA -> TAA<br>
    CTC -> TCT<br>
    GAT -> ATT<br>
    TAA -> AAG<br>
    TCT -> CTA,CTC<br>
    TTC -> TCT  <br>