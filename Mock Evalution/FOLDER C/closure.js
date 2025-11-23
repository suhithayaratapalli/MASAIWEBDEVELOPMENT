//Q10
function counter() {
  let count = 0;          

  return function () {
    count++;
    return count;
  };
}

const c = counter();
console.log(c()); // 1
console.log(c()); // 2
console.log(c()); // 3

//Q11
function createWallet() {
  let balance = 0;        

  function addMoney(amount) {
    balance += amount;
    console.log(`Added: ${amount}`);
  }

  function checkBalance() {
    console.log(`Balance: ${balance}`);
  }

  return {
    addMoney,
    checkBalance
  };
}

let myWallet = createWallet();
myWallet.addMoney(500);
myWallet.addMoney(200);
myWallet.checkBalance();   // Balance: 700
