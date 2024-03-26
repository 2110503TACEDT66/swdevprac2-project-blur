import ReservationCart from "@/components/ReservationCart"
import { getServerSession } from "next-auth"
import { authOptions } from "../api/auth/[...nextauth]/route"
import getUserProfile from "@/libs/getUserProfile"
import getAppointments from "@/libs/getAppointments"

export default async function CartPage(){

  const session = await getServerSession(authOptions)
  var profile;

  if(session){
    profile = await getUserProfile(session.user.token)
  }

  const allAppointment = await  getAppointments(profile?.data.token||'');

  return (
    <main>
       <ReservationCart></ReservationCart>
    </main>
  )
}