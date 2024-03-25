function solution(arr) {
    let answer = [];
    const row = arr.length;//행
    const column = arr[0].length; //열
    
    const zeroSize = row > column? row - column : column ; 
    let zeroArr = [];
    
    for(let k = 0; k < zeroSize ; k++) zeroArr.push(0);

        
    //행과 열이 같은 경우 
    if(column === row ) return arr;
    
    //행의 수가 많을 경우 
    if(row > column) for(let el of arr) answer.push(el.concat(zeroArr));          
    
    //열의 수가 더 많은경우
    if(column > row){
        answer = [...arr];
        for(let i = 0; i < (column-row); i++) answer.push(zeroArr);
    }
    
    
    return answer;
}