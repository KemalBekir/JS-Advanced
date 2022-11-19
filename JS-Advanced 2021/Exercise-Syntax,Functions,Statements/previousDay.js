function solve(y, m, d) {
    let dateString = y + '-' + m + '-' + d;
    let result = new Date(dateString);
    result.setDate(d - 1);
    console.log(result.getFullYear() + '-' + (Number(result.getMonth() + 1) + '-' + result.getDate()));
}

solve(2016, 9, 30);
solve(2016, 10, 1);