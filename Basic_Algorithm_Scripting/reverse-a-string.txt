function reverseString(str) {
  let arr = [];
  const regex = /[\,]/g;
  for(let i = 0; i < str.length; i++){
    arr.unshift(str[i]);
  }
  str = arr.toString().replace(regex, '');
  return str;
}

console.log(reverseString("hello"));
