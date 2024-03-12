function solution(ineq, eq, n, m) {
    let answer = 0;
    
    if(ineq === '>'){
        if(eq === '=') return answer=n >= m? 1:0;
        answer=n > m? 1:0    
    }

    if(ineq === '<'){
        if(eq === '=') return answer = m >= n? 1:0;
        answer = m > n? 1:0   
    }
        
    return answer;
}