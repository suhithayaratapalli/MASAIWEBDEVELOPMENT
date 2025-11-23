// -------------------- Q8: Inbuilt HOF – map, filter, reduce, sort --------------------

let nums = [10, 3, 7, 20, 13, 2];

// 1. map → squares
let squares = nums.map(n => n * n);
console.log("Squares:", squares);

// 2. filter → prime numbers
function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}
let primes = nums.filter(isPrime);
console.log("Primes:", primes);

// 3. reduce → sum of all elements
let total = nums.reduce((acc, val) => acc + val, 0);
console.log("Sum:", total);

// 4. sort → descending order
let sortedDesc = [...nums].sort((a, b) => b - a);
console.log("Sorted Desc:", sortedDesc);



// --------------------------- Q9: Callback Function ---------------------------

function displayCar() {
  console.log("Car details displayed");
}

function displayTruck() {
  console.log("Truck details displayed");
}

function displayBike() {
  console.log("Bike details displayed");
}

function vehicleInfo(vehicleCategory, callbackFn) {
  console.log("Vehicle Category:", vehicleCategory);
  callbackFn();
}

vehicleInfo("Car", displayCar);
vehicleInfo("Truck", displayTruck);
vehicleInfo("Bike", displayBike);
