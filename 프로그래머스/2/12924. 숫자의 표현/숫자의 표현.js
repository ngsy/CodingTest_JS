//fill을 공백으로 선언하면 undefined로 채워짐
function solution(n) {
    // const numArr = new Array(n).fill().map((_,idx) => idx+1); 
    let sum =0;
    let count = 0;
    
    for(let i =1; i <= n;i++){
        sum =0;
      for(let j = i; j <= n; j++){
          sum+=j;
        if(sum === n) ++count;
        if(sum > n) break;   
      }
    }
    
    let answer = count;
    return answer;
}