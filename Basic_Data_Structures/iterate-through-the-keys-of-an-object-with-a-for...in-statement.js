function countOnline(usersObj) {
  // Only change code below this line
  let usersOnline = 0;
  
  for(let user in usersObj){
    //console.log(typeof user);
    if(usersObj[user]['online'] == true){
      usersOnline++;
    }
  }
  return usersOnline;
  // Only change code above this line
}

console.log(countOnline({ Alan: { online: false }, Jeff: { online: true }, Sarah: { online: false } }));