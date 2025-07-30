function sumOfProducts(n1, n2) {
  // Convert numbers to strings
  let s1 = n1.toString();
  let s2 = n2.toString();

  // Pad the shorter number with leading zeros
  while (s1.length < s2.length) {
    s1 = '0' + s1;
  }
  while (s2.length < s1.length) {
    s2 = '0' + s2;
  }

  let sum = 0;

  // Loop through each digit
  for (let i = 0; i < s1.length; i++) {
    let d1 = parseInt(s1[i]);
    let d2 = parseInt(s2[i]);
    sum += d1 * d2;
  }

  return sum;
}

        // calling the function
console.log(sumOfProducts(6, 34)); 
console.log(sumOfProducts(123, 456));