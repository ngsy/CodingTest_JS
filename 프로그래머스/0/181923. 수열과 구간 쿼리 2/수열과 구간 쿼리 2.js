function solution(arr, queries) {
    let answer = [];
    for(let el of queries){
        [s,e,k] = el;
        let temp = arr.slice(s,e+1).filter((val) => k < val);
        temp.length > 0? answer.push(Math.min(...temp)) : answer.push(-1);
    }
    return answer;
}