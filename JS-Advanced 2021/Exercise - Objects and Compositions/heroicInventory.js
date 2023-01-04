function solve(arr) {
    let result = [];

    for (let line of arr) {
        let [name, level, items] = line.split(' / ');
        level = Number(level);
        if (items != undefined) {
            items = items.split(', ');
        } else {
            items = [];
        }
        result.push({name, level , items});
    }
    
    console.log(JSON.stringify(result));
}

solve(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'])
solve(['Jake / 1000 / Gauss, HolidayGrenade']
)