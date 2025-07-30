function findTax(salary) {
  let taxRate = 0;

  switch (true) {
    case (salary > 0 && salary <= 500000):
      taxRate = 0;
      break;
    case (salary > 500000 && salary <= 1000000):
      taxRate = 0.10;
      break;
    case (salary > 1000000 && salary <= 1500000):
      taxRate = 0.20;
      break;
    case (salary > 1500000):
      taxRate = 0.30;
      break;
    default:
      console.log("Invalid salary amount.");
      return;
  }

  let taxAmount = salary * taxRate;
  console.log("Salary: ₹" + salary);
  console.log("Tax Rate: " + (taxRate * 100) + "%");
  console.log("Tax Amount: ₹" + taxAmount);
}

        // calling the function

findTax(2000000);