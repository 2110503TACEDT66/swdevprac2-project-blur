import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { BookingItem } from "../../../interfaces";

type CartState = {
  dentistItem: BookingItem[] // aray of reservation
}

const initialState:CartState = { dentistItem:[] }

export const cartSlice = createSlice({
  name:"cart",
  initialState,
  reducers: {
    addReservation: (state, action:PayloadAction<BookingItem>)=>{
      state.dentistItem.push(action.payload)
    },
    removeReservation: (state, action:PayloadAction<BookingItem>)=> {
      const remainItems =  state.dentistItem.filter( obj => {
        return ( (obj.name !== action.payload.carModel)
        ||(obj.pickupDate !== action.payload.pickupDate)
        ||(obj.eturnDate !== action.payload.returnDate) );
      })
      state.dentistItem = remainItems
    }
  }
})

export const {addReservation, removeReservation} = cartSlice.actions
export default cartSlice.reducer