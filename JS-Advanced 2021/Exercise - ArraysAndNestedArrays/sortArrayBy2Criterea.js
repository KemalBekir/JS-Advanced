function solve(input) {
    let sorted = input.sort((a,b) => {
        if(a.length == b.length){
            return a.localeCompare(b);
        } else {
            return a.length - b.length;
        }
    });
    console.log(sorted.join('\n'));
}

solve(['alpha',
    'beta',
    'gamma'])
solve(['Isacc',
    'Theodor',
    'Jack',
    'Harrison',
    'George']
)
solve(['test',
    'Deny',
    'omen',
    'Default']
)