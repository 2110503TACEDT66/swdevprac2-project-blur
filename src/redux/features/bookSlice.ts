import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { BookingItem } from "../../../interfaces";

type bookState = {
  booking: BookingItem[] // aray of reservation
}

const initialState:bookState = { booking:[] }

export const cartSlice = createSlice({
  name:"booking",
  initialState,
  reducers:{
    addBooking : (state,action:PayloadAction<BookingItem>) =>{
      const { id,name,surname,dentist } = action.payload
      const existBooking = state.booking.findIndex(bookitem => bookitem.id === id || bookitem.name === name 
        || bookitem.surname === surname || bookitem.dentist === dentist)
      if (existBooking !== -1) {
          
          state.booking[existBooking] = action.payload;
        } else {
          
          state.booking.push(action.payload);
        }
    },
    removeBooking : (state, action: PayloadAction<string>) => {
        const idToRemove = action.payload;
        state.booking = state.booking.filter(booking => booking.id !== idToRemove);
      }
}
})

export const {addBooking, removeBooking} = cartSlice.actions
export default cartSlice.reducer