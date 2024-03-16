function solution(A,B){
    
    const sortB = B.sort((a,b) => b-a);// 내림차순
    const answer = A.sort((a,b) => a-b).reduce((acc,cur,idx) =>  acc + (cur *sortB[idx])
    ,0)
    
    
    return answer;
}