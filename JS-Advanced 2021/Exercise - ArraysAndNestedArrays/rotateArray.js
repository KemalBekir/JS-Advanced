function solve(input,num){
    let n = Number(num);
    let result = input;
    for(let i = 0; i < n; i++){
        let temp = result.pop();
        result.unshift(temp);
    }
    console.log(result.join(' '));
}

solve(['1', 
'2', 
'3', 
'4'], 
2)
solve(['Banana', 
'Orange', 
'Coconut', 
'Apple'], 
15)