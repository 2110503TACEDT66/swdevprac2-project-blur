import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { BookingItem } from "../../../interfaces";

type CartState = {
  dentistName: BookingItem[] // aray of reservation
}

const initialState:CartState = { dentistName:[] }

export const cartSlice = createSlice({
  name:"cart",
  initialState,
  reducers: {
    addReservation: (state, action:PayloadAction<BookingItem>)=>{
      state.dentistName.push(action.payload)
    },
    removeReservation: (state, action:PayloadAction<BookingItem>)=> {
      const remainItems =  state.dentistName.filter( obj => {
        return ( (obj.name !== action.payload.carModel)
        ||(obj.pickupDate !== action.payload.pickupDate)
        ||(obj.returnDate !== action.payload.returnDate) );
      })
      state.dentistName = remainItems
    }
  }
})

export const {addReservation, removeReservation} = cartSlice.actions
export default cartSlice.reducer