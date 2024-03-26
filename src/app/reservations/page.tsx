"use client"
import LocationDateReserve from "@/components/DateReserve";
import dayjs, { Dayjs } from "dayjs";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { BookingItem } from "../../../interfaces";
import { addBooking } from "@/redux/features/bookSlice";
import { useSession } from "next-auth/react";
import Footer from '@/components/Footer';

export default function Reservations (){

  const urlParams = useSearchParams()
  const hid = urlParams.get('id')
  const dentist = urlParams.get('dentist')

  const dispatch = useDispatch<AppDispatch>()

  const {data:session} = useSession()

  const makeBooking = () => {
    if( hid && dentist && apptDate && fName && lName && cId){
      const item:BookingItem = {
        name:fName,
        surname:lName,
        id:cId,
        dentist: dentist,
        appt: dayjs(apptDate).format("YYYY/MM/DD"),
        token: session?.user.token || "null" ,
      }
      dispatch(addBooking(item))
    }
  }

  const [apptDate, setApptDate] = useState<Dayjs|null>(null)
  const [fName,setFName] = useState<string|null>(null)
  const [lName,setLName] = useState<string|null>(null)
  const [cId,setCid] = useState<string|null>(null)

  return (
    <main className="w-[100%] flex flex-col items-center space-y-4">
      <div className="text-xl font-medium">New Appointment</div>
      <div className="text-xl font-medium">Dentist : {dentist}</div>

      <div className="w-fit space-y-2">
         <div className="text-md text-center text-gray-600">Enter your information and pick-up date</div>
          <LocationDateReserve 
          onDateChange={(value:Dayjs)=>{setApptDate(value)}}
          onFnameChange={(value:string)=>{setFName(value)}}
          onLnameChange={(value:string)=>{setLName(value)}}
          onCidChange={(value:string)=>{setCid(value)}}
          />
      </div>
      
      <button className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2
      text-white shadow-sm" onClick={makeBooking}>
        Make Appointment
      </button>
      <div>
      </div>
      <Footer/>
    </main>
  );
}