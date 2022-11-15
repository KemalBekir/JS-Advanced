function solve(input){
    let command = input;
    let result = [];
    let num = 1;

    for(let line of command){
        if(line == 'add'){
            result.push(num);
            num++;
        }else if(line == 'remove'){
            result.pop();
            num++;
        }
    }
    
    if(result.length == 0){
        console.log('Empty');
    }else {
        console.log(result.join('\n'));
    }
}

solve(['add', 
'add', 
'add', 
'add'])
solve(['add', 
'add', 
'remove', 
'add', 
'add'])
solve(['remove', 
'remove', 
'remove'])