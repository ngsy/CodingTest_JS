function solution(d, budget) {
    let answer = 0;
    d.sort((a,b) => a-b);
    
    let temp = d.reduce((acc ,cur) => {
        acc+=cur;
        if(acc <= budget)answer++;
        return acc;
    },0)
    return answer;
}