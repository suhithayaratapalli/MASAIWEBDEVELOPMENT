// Q1: Spread Operator (Array)
let arr1 = [10, 20, 30];
let arr2 = [40, 50];
let combined = [...arr1, ...arr2];
console.log("Q1 Combined:", combined);

// Q2: Spread Operator (Object)
let person = { name: "Venu", age: 25 };
let extra = { city: "Bengaluru" };
let profile = { ...person, ...extra };
console.log("Q2 Profile:", profile);

// Q3: Rest Operator (Function Parameters)
function sumAll(...nums) {
  return nums.reduce((acc, cur) => acc + cur, 0);
}
console.log("Q3 Sum:", sumAll(1, 2, 3, 4));

// Q4: Array Destructuring + Rest
let numbers = [10, 20, 30, 40, 50];
let [a, ...remaining] = numbers;
console.log("Q4 a:", a);
console.log("Q4 Remaining:", remaining);

// Q5: Nested Object Destructuring
let user = {
  name: "Alice",
  address: {
    city: "Bengaluru",
    pin: 560001,
    geo: { lat: 11.22, lng: 77.33 }
  }
};

let {
  address: {
    city,
    geo: { lat, lng }
  }
} = user;

console.log("Q5 City:", city);
console.log("Q5 Lat:", lat);
console.log("Q5 Lng:", lng);

// Q6: Arrow Function
let multiply = (a, b) => a * b;
console.log("Q6 Multiply:", multiply(5, 4));

// Q7: Optional Chaining
let emp = {
  name: "Prakash",
  details: {
    department: "IT",
    profile: { role: "Developer" }
  }
};

let role = emp?.details?.profile?.role;
console.log("Q7 Role:", role);
