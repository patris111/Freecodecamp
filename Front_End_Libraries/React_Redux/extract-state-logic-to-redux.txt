// Define ADD, addMessage(), messageReducer(), and store here:
const ADD = 'ADD';

//Action creator
const addMessage = (message) =>{
    return {
        type: ADD,
        message
    }
}
//Reducer
const messageReducer = (state = [], action) => {
    switch(action.type){
        case ADD:
            let newState = [...state, action.message];
            return newState;
        default:
            return state;    
    }
}
//Store
const store = Redux.createStore(messageReducer);

