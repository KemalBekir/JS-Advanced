function solve(input) {
    let isSame = true;
    let text = input.toString();
    let sum = parseInt(text[0]);

    for (let i = 1; i < text.length; i++) {
        sum += parseInt(text[i]);
        if(text[i] != text[i-1]){
            isSame = false;
        }
    }
    console.log(isSame);
    console.log(sum);
}

solve(2222222)
console.log('-----');
solve(1234)