function solve(input,num){
    let n = Number(num);
    let result = [];

    for(let i = 0; i < input.length; i+= n){
        result.push(input[i]);
    }
    return result;
}

console.log(solve(['5', 
'20', 
'31', 
'4', 
'20'], 
2))
solve(['dsa',
'asd', 
'test', 
'tset'], 
2

)
solve(['1', 
'2',
'3', 
'4', 
'5'], 
6
)