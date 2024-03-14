function solution(my_string, queries) {
    let answer = [...my_string];
    
    for(let arr of queries){
        let start = arr[0];
        let end = arr[1];
      
        while(start < end) {
            let temp = answer[start];
            answer[start] = answer[end];
            answer[end] = temp;
            start++;
            end--;
        }
    
    }
    
    return answer.join("");
}