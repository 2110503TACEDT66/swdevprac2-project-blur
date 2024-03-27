import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { BookingItem } from "../../../interfaces";

type bookState = {
  booking: BookingItem[] // aray of reservation
}

const initialState:bookState = { booking:[] }

export const cartSlice = createSlice({
  name:"fucking",
  initialState,
  reducers:{
    addBooking : (state,action:PayloadAction<BookingItem>) =>{
      const existingBookingIndex = state.booking.findIndex(
        (bookItem) => bookItem.id === action.payload.id
      );

      if (existingBookingIndex !== -1) {
        state.booking[existingBookingIndex] = action.payload;
      } else {
        state.booking.push(action.payload);
      }
    },
    removeBooking : (state, action: PayloadAction<string>) => {
      const remainingItems = state.booking.filter(
        (obj) => obj.id !== action.payload
      );
      state.booking = remainingItems;
      }
}
})

export const {addBooking, removeBooking} = cartSlice.actions
export default cartSlice.reducer