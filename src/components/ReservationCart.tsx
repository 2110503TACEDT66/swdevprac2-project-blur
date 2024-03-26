'use client'
import { removeBooking } from "@/redux/features/bookSlice"
import { AppDispatch, useAppSelector } from "@/redux/store"
import { useDispatch } from "react-redux"

export default function ReservationCart(){
  const booking = useAppSelector( (state)=> state.bookSlice.booking )
  const dispatch = useDispatch<AppDispatch>()
  return (
    <>
    { 

      booking.length>0?
      booking.map((bookItem)=> (
        <div className="bg-slate-200 rounded px-5 mx-5 py-2 my-2" key={bookItem.id}>
          <div className="text-xl">{bookItem.dentist}</div>
          <div className="text-xl">Appointment Date {bookItem.appt.toString()} </div>
          <div className="text-sm">Name : {bookItem.name}</div>
          <div className="text-sm">Surname : {bookItem.surname}</div>
          <div className="text-sm">Citizen ID : {bookItem.id}</div>
          <button className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2
                text-white shadow-sm" onClick={()=> dispatch(removeBooking(bookItem.id))}>
                  Remove appointment
          </button>
        </div>
      )):<div className="text-center text-xl">No Appointment</div>
    }
    </>
  )
}