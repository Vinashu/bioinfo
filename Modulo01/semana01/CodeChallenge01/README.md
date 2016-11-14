Code Challenge: Implement PatternCount (reproduced below).<br>
    Input: Strings Text and Pattern.<br>
    Output: Count(Text, Pattern).<br>

    PatternCount(Text, Pattern)
        count ← 0
        for i ← 0 to |Text| − |Pattern|
            if Text(i, |Pattern|) = Pattern
                count ← count + 1
        return count      
Sample Input:<br>
    GCGCG<br>
    GCG<br>
Sample Output:<br>
    2                  
