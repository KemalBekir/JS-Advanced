function solve(arr) {
    let result = [];
    let [town,latitude,longtitude] = arr[0].substring(2,arr[0].length - 2).split(' | ');
    
    for(let i = 1; i < arr.length; i++){
        const obj = {};
        let [currentTown,currentLatitude,currentLongtitude] = arr[i].substring(2,arr[i].length - 2).split(' | ');
        obj[town] = currentTown;
        obj[latitude] = Number(Number(currentLatitude).toFixed(2));
        obj[longtitude] = Number(Number(currentLongtitude).toFixed(2));
        result.push(obj);
    }

    console.log(JSON.stringify(result));
}

solve([
    '| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |'
])
console.log('---------');
solve([
    '| Town | Latitude | Longitude |',
    '| Veliko Turnovo | 43.0757 | 25.6172 |',
    '| Monatevideo | 34.50 | 56.11 |'
])