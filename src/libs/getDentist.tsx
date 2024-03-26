export default async function getDentist(id:string){

  const response = await fetch(`http://localhost:5000/api/v1/dentists/${id}`)
  if(!response.ok){
    throw new Error("Failed to fetch dentist")
  }
  return await response.json()
}