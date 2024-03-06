/*
 * FreeCodeCamp
 */

/**
 * Calculates the change to be given based on the price, cash, and the available cash in the drawer.
 *
 * @param {number} price - The price of the item
 * @param {number} cash - The cash provided by the customer
 * @param {Array} cid - The available cash in drawer as a 2D array
 * @return {Object} The status and the change to be given
 */
const checkCashRegister = (price, cash, cid) => {
  const currencyValues = {
    PENNY: 0.01,
    NICKEL: 0.05,
    DIME: 0.1,
    QUARTER: 0.25,
    ONE: 1,
    FIVE: 5,
    TEN: 10,
    TWENTY: 20,
    'ONE HUNDRED': 100,
  };

  let changeDue = (cash - price).toFixed(2);
  let change = { status: 'OPEN', change: [] };

  // Sum up the total amount of money available in the cash drawer
  let cidTotal = cid.reduce((acc, curr) => acc + curr[1], 0).toFixed(2);

  // Return exact change
  if (cidTotal === changeDue) {
    return (change = { status: 'CLOSED', change: cid });
  }
  // Initialize an array to store the change to be given
  let changeToGive = [];
  // Loop through each currency in descending order
  for (let i = cid.length - 1; i >= 0; i--) {
    let currency = cid[i][0];
    let value = currencyValues[currency];
    let currencyAvailable = cid[i][1];

    // Check if the currency is usable and there's enough of it available
    if (value <= changeDue && currencyAvailable > 0) {
      // Calculate the maximum amount of this currency we can give
      let maxAmount = 0;
      while (currencyAvailable > 0 && changeDue >= value) {
        maxAmount += value;
        changeDue -= value;
        changeDue = parseFloat(changeDue.toFixed(2));
        currencyAvailable -= value;
      }
      // Add the currency and its amount to the change to give
      changeToGive.push([currency, maxAmount]);
    }
  }
  // If changeDue is not zero after giving change, return insufficient funds
  if (changeDue > 0) {
    return (change = { status: 'INSUFFICIENT_FUNDS', change: [] });
  } else {
    return (change = { status: 'OPEN', change: changeToGive });
  }
};

// checkCashRegister(19.5, 20, [
//   ['PENNY', 1.01],
//   ['NICKEL', 2.05],
//   ['DIME', 3.1],
//   ['QUARTER', 4.25],
//   ['ONE', 90],
//   ['FIVE', 55],
//   ['TEN', 20],
//   ['TWENTY', 60],
//   ['ONE HUNDRED', 100],
// ]); // Should return an object.
checkCashRegister(19.5, 20, [
  ['PENNY', 1.01],
  ['NICKEL', 2.05],
  ['DIME', 3.1],
  ['QUARTER', 4.25],
  ['ONE', 90],
  ['FIVE', 55],
  ['TEN', 20],
  ['TWENTY', 60],
  ['ONE HUNDRED', 100],
]); // Should return {status: "OPEN", change: [["QUARTER", 0.5]]}.
// checkCashRegister(3.26, 100, [
//   ['PENNY', 1.01],
//   ['NICKEL', 2.05],
//   ['DIME', 3.1],
//   ['QUARTER', 4.25],
//   ['ONE', 90],
//   ['FIVE', 55],
//   ['TEN', 20],
//   ['TWENTY', 60],
//   ['ONE HUNDRED', 100],
// ]); // Should return {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}.
// checkCashRegister(19.5, 20, [
//   ['PENNY', 0.01],
//   ['NICKEL', 0],
//   ['DIME', 0],
//   ['QUARTER', 0],
//   ['ONE', 0],
//   ['FIVE', 0],
//   ['TEN', 0],
//   ['TWENTY', 0],
//   ['ONE HUNDRED', 0],
// ]); // Should return {status: "INSUFFICIENT_FUNDS", change: []}.
// checkCashRegister(19.5, 20, [
//   ['PENNY', 0.01],
//   ['NICKEL', 0],
//   ['DIME', 0],
//   ['QUARTER', 0],
//   ['ONE', 1],
//   ['FIVE', 0],
//   ['TEN', 0],
//   ['TWENTY', 0],
//   ['ONE HUNDRED', 0],
// ]); // Should return {status: "INSUFFICIENT_FUNDS", change: []}.
// checkCashRegister(19.5, 20, [
//   ['PENNY', 0.5],
//   ['NICKEL', 0],
//   ['DIME', 0],
//   ['QUARTER', 0],
//   ['ONE', 0],
//   ['FIVE', 0],
//   ['TEN', 0],
//   ['TWENTY', 0],
//   ['ONE HUNDRED', 0],
// ]); // Should return {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}.
