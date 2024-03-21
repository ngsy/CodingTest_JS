function solution(s){
    const arr = s.split("");
    //첫번째 인덱스 요소는 에 괄호가 닫혀있는 경우는 성립이 안된다. || 마지막 인덱스 요소에 괄호가 열려있는건 성립이안된다. 
    if(arr[0] === ')' || arr[arr.length-1] === '(') return false;

    const result = arr.reduce((acc,cur) => {
        acc = cur ==='(' ? acc+=1 : acc-=1;
        if (acc < 0 ) return false;    
        return acc
    },0);
    
    const answer = result === 0 ? true : false;
    return answer;
}
