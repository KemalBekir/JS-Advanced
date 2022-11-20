function gcd_rec(a, b) {
  while (b != 0){
      const temp = b;
      b = a % b;
      a = temp;
  }
  return a;
}

gcd_rec(15, 5)
console.log(gcd_rec(2154, 458)); 