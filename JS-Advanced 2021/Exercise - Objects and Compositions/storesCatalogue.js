function solve(arr) {
    let catalogue = {};

    for(let line of arr){
        let [productName,price] = line.split(" : ");
        price = Number(price);

        let index = productName[0];
        
        if(!catalogue[index]){
            catalogue[index] = {};
        }
        catalogue[index][productName] = price;
    }

    let initialSort = Object.keys(catalogue).sort((a,b) => a.localeCompare(b));
    
    for(let key of initialSort){
        let sorted = Object.entries(catalogue[key]).sort((a,b) => a[0].localeCompare(b[0]));
        console.log(`${key}`);
        for(let line of sorted){
            console.log(`  ${line[0]}: ${line[1]}`);
        }
    }
}

solve([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
])
console.log('-----------');
solve([
    'Banana : 2',
    'Rubic\'s Cube : 5',
    'Raspberry P : 4999',
    'Rolex : 100000',
    'Rollon : 10',
    'Rali Car : 2000000',
    'Pesho : 0.000001',
    'Barrel : 10'
]
)