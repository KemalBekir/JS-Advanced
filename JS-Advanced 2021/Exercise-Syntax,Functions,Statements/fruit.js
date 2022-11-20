function solve(name, grams, amount){
    let fruit = name;
    let weight = Number(grams);
    let price = Number(amount);

    console.log(`I need $${((weight/1000) * price).toFixed(2)} to buy ${(weight / 1000).toFixed(2)} kilograms ${fruit}.`);
}

solve('orange', 2500, 1.80)
solve('apple', 1563, 2.35)