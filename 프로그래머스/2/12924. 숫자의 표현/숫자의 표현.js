/**숫자의 표현 Lv.2
 * https://school.programmers.co.kr/learn/courses/30/lessons/12924
 *
 *
 *
 *
 */
function solution(n) {    
    const numArr = new Array(n).fill().map((_,idx) => idx+1);
    let sum =0;
    let count = 0;
    // for(let i =1; i <= n;i++){
    //     sum =0;
    //   for(let j = i; j <= n; j++){
    //       sum+=j;
    //     if(sum === n) ++count;
    //     if(sum > n) break;   
    //   }
    // }
    numArr.forEach((val) => {
        sum =0;
      for(let j = val; j <= n; j++){
          sum+=j;
        if(sum === n) ++count;
        if(sum > n) break;   
      }
    })
    
  
    return count;
}