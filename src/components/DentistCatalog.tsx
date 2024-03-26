
import { DentistItem, DentistJson } from "../../interfaces";
import ProducCard from "./ProductCard";
import Link from "next/link";

export default async function DentistCatalog({dentistJson}:{dentistJson:DentistJson}){
  const dentistJsonReady = await dentistJson
  return (
    <>
    Select {dentistJsonReady.count} Dentist in our website
    <div style={{margin:"20px", display:"flex",
          flexDirection:"row",flexWrap:"wrap", alignContent:"space-around", 
          justifyContent:"space-around", padding: "10px"}}>
            {
               dentistJsonReady.data.map((dentistItem:DentistItem)=>(
                <Link href={`/dentist/${dentistItem.id}`} className="w-[100%] sm:w-[50%] md:w-[30%] lg:w-[25%] p-2 sm:p-4 md:p-4 lg:p-8">
                  <ProducCard dentistName={dentistItem.name} imgSrc={dentistItem.imageUrl}/>
                </Link>
                )
              )
            }
    </div>
    </>
  )
}