function factorialize(num) {
  if(num == 0){
    return 1;
  }
  
  num = factorialize(num -1) * num;
    
  return num;
}

console.log(factorialize(5));
