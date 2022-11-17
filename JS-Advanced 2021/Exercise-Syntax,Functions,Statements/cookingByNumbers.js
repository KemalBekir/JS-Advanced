function solve(input, ar1, ar2, ar3, ar4, ar5) {
    let num = Number(input);
    let cmd = [];
    cmd.push(ar1, ar2, ar3, ar4, ar5);

    for (let line of cmd) {
        if (line == 'chop') {
            num = num / 2;
            console.log(num);
        } else if (line == 'dice') {
            num = Math.sqrt(num);
            console.log(num);
        } else if (line == 'spice') {
            num += 1;
            console.log(num);
        } else if (line == 'bake') {
            num *= 3;
            console.log(num);
        } else if (line == 'fillet') {
            num = num - (num * 0.2);
            console.log(num);
        }
    }

}

solve('32', 'chop', 'chop', 'chop', 'chop', 'chop')
console.log('---------------');
solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet')