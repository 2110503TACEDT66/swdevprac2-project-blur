
import { Suspense } from "react";
import { LinearProgress } from "@mui/material";
import CarPanel from "@/components/DentistPanel";
import getDentists from "@/libs/getDentists";
import DentistCatalog from "@/components/DentistCatalog";
import Footer from '@/components/Footer';
import { DentistJson } from "../../../../interfaces";
export default async function Car(){
  const dentist:DentistJson = await getDentists()

  return (
    <main className="text-center">
      <h1 className="text-xl font-medium p-5">Select Dentist</h1>
      <Suspense fallback={<p>Loding ...<LinearProgress/></p> }>
      <DentistCatalog dentistJson={dentist}/>
      </Suspense>

      <hr className="my-10" />

      <Footer/>
    </main>
  );
}