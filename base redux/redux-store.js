//Action Creators
//Person who is submitting the form
//It will be JS function 
const newBooking = (name, amount) => {
    return{
        type:"NEW_BOOKING",
        payload:{
            name,
            amount,
        }
    };
};

const cancelBooking = (name, refundAmount) => {
    return{
        type:"CANCEL_BOOKING",
        payload:{
            name,
            refundAmount,
        }
    }
};


//Reducers
// WHICH WILL ACCEPT this actions when theya are dispatched
// when ever we need to make a book the clark pull the data from the store and need to check the avaliability 
const reservationHistory = (oldReservationList=[], action) => {
 if(action.type === 'NEW_BOOKING'){
    return [...oldReservationList, action.payload]
 }else if(action.type === "CANCEL_BOOKING"){
   return oldReservationList.filter(recored => {
    return recored.name !== action.payload.name;
   })
 }
 return oldReservationList;
}

const cancellationHistory = (oldCancellationList=[], action) => {
    if(action.payload === "CANCEL_BOOKING"){
        return [...oldCancellationList, action.payload]
    }
    return oldCancellationList;
}

const accounting = (totalAmount=100, action) => {
   if(action.type === "NEW_BOOKING"){
    return totalAmount + action.payload.amount
   }else if( action.type === "CANCEL_BOOKING"){
    return totalAmount - action.payload.refundAmount
   }
   return totalAmount;
}


//Redux Store
const { createStore, combineReducers } = Redux;

// In railway central store will have all the details like reservationHistory, cancellentionHistory, Accountiong
// In the below code we are combining alll the reducers that we decalred so far above 

const railwayCentralStore = combineReducers({
    accounting: accounting,
    reservationHistory: reservationHistory,
    cancellationHistory: cancellationHistory
});

const store = createStore(railwayCentralStore);

// To test we need to dispatch our actions to the reducers
const myAction = newBooking("Jayanth", 100);
store.dispatch(myAction);
store.dispatch(newBooking("Jyo", 400));
store.dispatch(newBooking("sri", 90));
store.dispatch(cancelBooking("sri", 50));
console.log(store.getState());