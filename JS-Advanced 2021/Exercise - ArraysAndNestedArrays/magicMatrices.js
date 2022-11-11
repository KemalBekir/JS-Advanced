function solve(input) {
    let sumRow = row => input[row].reduce((a, b) => a + b);
    let sumCol = col => input.map(row => row[col])
        .reduce((a, b) => a + b);
 
    if (input.length > 0) {
        let targetSum = sumRow(0);
 
        for (let i = 1; i < input.length; i++) {
            let rowSum = sumRow(i);
            if (rowSum !== targetSum) {
                return false;
            }
        }
 
        for (let j = 0; j < input[0].length; j++) {
            let colSum = sumCol(j);
            if (colSum !== targetSum) {
                return false;
            }
        }
    }
 
    return true;
}

console.log(solve([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]))
console.log(solve([
    [11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]]))
solve([
    [1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]]
)
