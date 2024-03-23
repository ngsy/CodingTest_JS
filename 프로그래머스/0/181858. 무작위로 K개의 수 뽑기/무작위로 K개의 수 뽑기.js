function solution(arr, k) {
    const answer = arr.reduce((acc ,cur) => {
        if(acc.indexOf(cur) === -1) acc.push(cur) 
         return acc;
    },[]).slice(0,k);
    
    const blankCount = answer.length - k;
    if(blankCount < 0) for(let i = blankCount; i < 0; i++) answer.push(-1);
    
    return answer;
}