
//a < ( b + c)
function solution(sides) {
    // sides에 가장 긴 변이 있는 경우    
    let count = 0;
    const maxLine = Math.max(...sides);
    const minLine = Math.min(...sides);
    const sumLine = maxLine + minLine;
    
    for(let i =1 ; i <= maxLine; i++){
        let sum = i + minLine;
        if(sum > maxLine) count+=1;
    }
    
    // sides에 가장 긴 변이 없는 경우    
    for (let j = maxLine+1; j < sumLine; j++){
        count+=1;
    }
    
    const answer = count;
    return answer;
    
}

