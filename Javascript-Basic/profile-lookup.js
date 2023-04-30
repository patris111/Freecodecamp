// Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(name, prop){
    // Only change code below this line
    var firstName, propFound, result;
    
    for(var i = 0; i < contacts.length; i++){
        
        firstName = contacts[i]["firstName"];
        propFound = contacts[i].hasOwnProperty(prop);
        
        if(name === firstName && propFound ){
           
           result = contacts[i][prop];
           break;
    
        }
        else if(name === firstName && propFound == false){
            
            result = "No such property";
            break;
        }
        else{ 
            
            result = "No such contact"; 
        }
    }
    return result;
}
   
// Only change code above this line

console.log(lookUpProfile("Sherlock", "number"));





