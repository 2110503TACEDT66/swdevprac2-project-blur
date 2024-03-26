import ReservationCart from "@/components/ReservationCart"
import Footer from "@/components/Footer"

export default async function CartPage(){
  return (
    <main>
       <ReservationCart></ReservationCart>
       <Footer/>
    </main>
  )
}