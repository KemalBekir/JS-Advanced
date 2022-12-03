function solve() {
  let input = document.getElementById('text').value;
  let currentCase = document.getElementById('naming-convention').value;
  let equal = document.getElementById('result');
  input = input.toLowerCase().split(' ');
  let result = '';
  if(currentCase == 'Camel Case'){
    result += input[0]
    for(let i = 1; i < input.length; i++){
      result += input[i][0].toUpperCase() + input[i].substring(1);
      equal.textContent = result;
    }
  } else if (currentCase == 'Pascal Case'){
    for(let line of input){
      result += line[0].toUpperCase() + line.substring(1);
      equal.textContent = result;
    }
  } else {
    equal.textContent = 'Error!';
  }
}
