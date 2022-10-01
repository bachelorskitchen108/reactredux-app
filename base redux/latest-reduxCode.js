// need to install npm @reduxjs/toolkit

const ReduxToolkit  = require('@reduxjs/toolkit');

const  { createSlice, configureStore  } = ReduxToolkit;

const reservationSlice = createSlice({
  name: 'reservation',
  initialState: {
    reservationList: [],
    calcellationList: [],
    totalAmount: 100
  },
  reducers: {
    newBooking: (state, action) => {
      state.reservationList = [...state.reservationList, action.payload];
      state.totalAmount += action.payload.amount;
    },
    cancleBooking: (state, action) => {
      state.reservationList = state.reservationList.filter(booking => booking.name !== action.payload.name);
      state.calcellationList = [...state.calcellationList, action.payload];
      state.totalAmount -= action.payload.amount;
    }
  }
});



const { newBooking, cancleBooking } = reservationSlice.actions;

const store = configureStore({
  reducer: reservationSlice.reducer
})


store.subscribe(() => console.log(store.getState()))



store.dispatch(newBooking({name: 'Debasish', amount: 20}))

store.dispatch(newBooking({name: 'Rio', amount: 20}))
store.dispatch(cancleBooking({name: 'Debasish', amount: 10}))