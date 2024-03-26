 import Image from "next/image"
 import Link from "next/link";
import getDentist from "@/libs/getDentist";
 export default async function CarDetailPage({params}: {params: {cid: string}}){

  const dentistDetail = await getDentist(params.cid)
  /**
   *  Mock Date for Demonstration Only
   */
  /*
  const mockCarRepo = new Map()
  mockCarRepo.set("001", {name:"Honda Civic", image:"/img/civic.jpg"})
  mockCarRepo.set("002", {name:"Honda Accord", image:"/img/accord.jpg"})
  mockCarRepo.set("003", {name:"Toyota Fortuner", image:"/img/fortuner.jpg"})
  mockCarRepo.set("004", {name:"Tesla Model 3", image:"/img/tesla.jpg"})
  */

  return (
    <main className="text-center p-5">
      <h1 className="text-lg font-medium underline decoration-gray-400 decoration-solid underline-offset-4 font-medium text-xl">{dentistDetail.data.name}</h1>

      <div className="flex flex-row my-5">
        <Image src={ dentistDetail.data.imageUrl }
            alt='Product Picture'
            width={0} height={0} sizes="100vw"
            className="rounded-lg w-[30%] bg-black"/>

        <div className="text-left text-xl mx-5">
          <div>Year Of Experience : { dentistDetail.data.yearsOfExperience } years</div>
          <div>Area Of Expertise : { dentistDetail.data.areaOfExpertise }</div>
          <Link href={`/reservations?id=${params.cid}&model=${dentistDetail.data.name}`}>
          <button className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2
                text-white shadow-sm">
                  Booking
          </button>
        </Link>
        </div>
      </div>
      
    </main>
  );
 }

 export async function generateStaticParams() {
   return [{cid:'001'}, {cid:'002'}, {cid:'003'}, {cid:'004'}]
 }