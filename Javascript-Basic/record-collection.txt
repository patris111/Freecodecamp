// Setup
var collection = {
  2548: {
    album: "Slippery When Wet",
    artist: "Bon Jovi",
    tracks: [
      "Let It Rock",
      "You Give Love a Bad Name"
    ]
  },
  2468: {
    album: "1999",
    artist: "Prince",
    tracks: [
      "1999",
      "Little Red Corvette"
    ]
  },
  1245: {
    artist: "Robert Palmer",
    tracks: [ ]
  },
  5439: {
    album: "ABBA Gold"   
  }
};

// Only change code below this line
function updateRecords(id, prop, value) {
  
  //Property is Tracks.
  if(prop == "tracks" && value != ""){
    
    if(collection[id].hasOwnProperty("tracks")== false){
      
      collection[id]["tracks"] = [];
    }
   
    collection[id][prop].push(value);
  }
  //Value empty, delete property.
  else if(value === ""){
      
    delete collection[id][prop];
  }
  //Update value for record album's property.
  else{
      
    collection[id][prop] = value;   
  }
  
  return collection;
}

//console.log(updateRecords(2468, "tracks", "Free"));

