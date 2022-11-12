function solve(input){
    let sorted = input.sort((a,b) => {
        return a.localeCompare(b);
    });

    let num = 1;
    for(let name of sorted){
        console.log(`${num++}.${name}`);
    }
}

solve(["John", "Bob", "Christina", "Ema"])

