import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import getUserProfile from "@/libs/getUserProfile";
import { getServerSession } from "next-auth";
import Dentist from "@/db/models/Dentists";
import { dbConnect } from "@/db/dbConnect";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export default async function DashboardPage (){

  const addDentist = async (addDentistForm:FormData) => {
    "use server"
    const name = addDentistForm.get("name")
    const yearsOfExperience = addDentistForm.get("yearsOfExperience")
    const areaOfExpertise = addDentistForm.get("areaOfExpertise")
    const imageUrl = addDentistForm.get("imageUrl")

    try {
      await dbConnect()
      const car = await Dentist.create({
        "name": name,
        "yearsOfExperience": yearsOfExperience,
        "areaOfExpertise": areaOfExpertise,
        "imageUrl": imageUrl,
      })
    } catch (error) {
        console.log(error)
    }
    revalidateTag("dentists")
    redirect("/dentist")
  }



  const session = await getServerSession(authOptions)
  if(!session || !session.user.token) return null
  
  const profile = await getUserProfile(session.user.token)
  var createAt = new Date(profile.data.createdAt);


  return (
    <main className="bg-slate-100 m-5 p-5">
      <div className="text-2xl">{profile.data.name}</div>
      <table>
        <tbody>
          <tr><td>Email</td><td>{profile.data.email}</td></tr>
          <tr><td>Tel.</td><td>{profile.data.tel}</td></tr>
          <tr><td>Member Since </td><td>:{createAt.toString()}</td></tr>
        </tbody>
      </table>

      {
        (profile.data.role =="admin")?
        <form action={addDentist}>
          <div className="text-xl text-blue-700">Create New Dentist</div>
          <div className="flex items-center w-1/2 my-2">
              <label className="w-auto block text-gray-700 pr-4" htmlFor="model">Dentist's Name</label>
              <input type="text" required id="name" name="name" placeholder="Dentist's Name"
              className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700 focus:outline-none focus:border-blue-400"/>
          </div>
          <div className="flex items-center w-1/2 my-2">
              <label className="w-auto block text-gray-700 pr-4" htmlFor="desc">Years Of Experience</label>
              <input type="Number" required id="yearsOfExperience" name="yearsOfExperience" placeholder="yearsOfExperience" min={0} max={40}
              className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700 focus:outline-none focus:border-blue-400"/>
          </div>
          <div className="flex items-center w-1/2 my-2">
              <label className="w-auto block text-gray-700 pr-4" htmlFor="picture">Area Of Expertise</label>
              <input type="text" required id="areaOfExpertise" name="areaOfExpertise" placeholder="areaOfExpertise"
              className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700 focus:outline-none focus:border-blue-400"/>
          </div>
          <div className="flex items-center w-1/2 my-2">
              <label className="w-auto block text-gray-700 pr-4" htmlFor="dayRate">Image</label>
              <input type="text" required id="imageUrl" name="imageUrl" placeholder="imageUrl"
              className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700 focus:outline-none focus:border-blue-400"/>
          </div>
          <button type="submit" className="bg-blue-500 rounded hover:bg-blue-700 text-white p-2">Add New Dentist</button>
        </form>
        : null
      }
          </main>
  );
}