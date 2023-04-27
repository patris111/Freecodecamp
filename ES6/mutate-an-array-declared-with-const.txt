const s = [5, 7, 2];
function editInPlace() {
  'use strict';
  // Only change code below this line
  // Using s = [2, 5, 7] would be invalid
  
  s.unshift(s[2]);
  s.pop();

  return s;

  // Only change code above this line
}
console.log(editInPlace());

