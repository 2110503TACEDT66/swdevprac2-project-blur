'use client'
import { removeReservation } from "@/redux/features/cartSlice"
import { AppDispatch, useAppSelector } from "@/redux/store"
import { useDispatch } from "react-redux"

export default function ReservationCart(){
  const booking = useAppSelector( (state)=> state.cartSlice.booking )
  const dispatch = useDispatch<AppDispatch>()
  return (
    <>
    {
      booking?.map((bookItem)=> (
        <div className="bg-slate-200 rounded px-5 mx-5 py-2 my-2" key={bookItem.id}>
          <div className="text-xl">{bookItem.dentist}</div>
          <div className="text-sm">Appointment Date {bookItem.appt.toString()} </div>
          <div className="text-sm">Duration {bookItem.duration} minute</div>
          <div className="text-sm">Status {bookItem.status}</div>
          <button className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2
                text-white shadow-sm" onClick={()=> dispatch(removeReservation(bookItem.id))}>
                  Remove from Cart
          </button>
        </div>
      ))
    }
    </>
  )
}