import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { BookingItem } from "../../../interfaces";

type CartState = {
  booking: BookingItem[] // aray of reservation
}

const initialState:CartState = { booking:[] }

export const cartSlice = createSlice({
  name:"cart",
  initialState,
  reducers: {
    addReservation: (state, action:PayloadAction<BookingItem>)=>{
      const remainItems = state.booking.filter(obj => {
        return (obj.id != action.payload.id);
    })
    remainItems.push(action.payload);
    state.booking = remainItems;
    },
    removeReservation: (state, action:PayloadAction<string>)=> {
      const remainItems =  state.booking.filter( obj => {
        return ( (obj.id !== action.payload) );
      })
      state.booking = remainItems
    }
  }
})

export const {addReservation, removeReservation} = cartSlice.actions
export default cartSlice.reducer