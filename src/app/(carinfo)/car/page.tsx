import CarCatalog from "@/components/DentistCatalog";
import { Suspense } from "react";
import { LinearProgress } from "@mui/material";
import CarPanel from "@/components/DentistPanel";
import getDentists from "@/libs/getDentists";

export default async function Car(){
  const dentist = await getDentists()

  return (
    <main className="text-center p-5">
      <h1 className="text-xl font-medium">Select Dentist</h1>
      <Suspense fallback={<p>Loding ...<LinearProgress/></p> }>
      <CarCatalog dentistJson={dentist}/>
      </Suspense>

      <hr className="my-10" />
      <h1>Try Client side Car Panel</h1>
      <CarPanel/>

    </main>
  );
}