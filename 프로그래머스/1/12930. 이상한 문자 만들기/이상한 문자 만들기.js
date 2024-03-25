//짝수 대문자 홀수 소문자
function solution(s) {
    const answer = s.split(' ').reduce((acc,cur) => {
        const word = cur.split('').map((val,index) => index % 2 === 0? val.toUpperCase() : val.toLowerCase()).join('');
        acc.push(word);
        return acc 
    },[]);
    
        
    return answer.join(' ');
}