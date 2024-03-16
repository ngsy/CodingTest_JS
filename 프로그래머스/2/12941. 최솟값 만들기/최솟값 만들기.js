function solution(A,B){
    B.sort((a,b) => b-a);
    const answer = A.sort((a,b) => a-b).reduce((acc,cur,idx) =>  acc + (cur *B[idx])
    ,0)
    
    
    return answer;
}