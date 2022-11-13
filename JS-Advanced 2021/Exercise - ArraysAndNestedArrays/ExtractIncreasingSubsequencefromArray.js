function solve(input) {
    let result = [];
    let max = Number.MIN_SAFE_INTEGER;

    input.reduce((prev, current,) => {
        if (current >= max) {
            max = current;
            result.push(max);
        }
    },0);
    return result;
}

console.log(solve([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24]))
solve([1,
    2,
    3,
    4])
solve([20,
    3,
    2,
    15,
    6,
    1])