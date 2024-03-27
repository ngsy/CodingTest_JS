/**구슬을 나누는 경우의 수 Lv.0
 * https://school.programmers.co.kr/learn/courses/30/lessons/120840
 * 
 * 
 */

function solution(balls, share) {
  return Math.round(factorial(balls) / (factorial((balls-share)) * factorial(share)));
}

const factorial = (n) => {
  let temp = 1
  for(let i = n; i >= 2; i-- )temp*=i
  return temp;
}    

