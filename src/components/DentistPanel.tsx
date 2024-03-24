'use client'
import { useReducer, useState } from "react";
import ProducCard from "./ProductCard";
import Link from "next/link";
import { useRef, useEffect } from "react";
import { DentistItem, DentistJson } from "../../interfaces";
import getDentists from "@/libs/getDentists";

export default function DentistPanel (){
  const [dentistResponse, setDentistResponse] = useState<DentistJson|null>(null)

  useEffect( ()=>{
    const fetchData = async ()=> {
      const dentists = await getDentists()
    
      setDentistResponse(dentists)
    }
    fetchData()
  }, [])

  const countRef = useRef(0)
  const inputRef = useRef<HTMLInputElement>(null)
  const compareReducer = (compareList:Set<string>, action:{type:string, dentistName:string})=>{
    switch(action.type){
      case 'add' : {
        return new Set(compareList.add(action.dentistName))
      }
      case 'remove' : {
        compareList.delete(action.dentistName)
        return new Set(compareList)
      }
      default : return compareList
    }
  }

  const [compareList, dispatchCompare] = useReducer(compareReducer, new Set<string>())

  /**
   *  Mock Data for Demonstration Only
   */
  /*
  const mockCarRepo = [
    {cid:"001", name:"Honda Civic", image:"/img/civic.jpg"},
    {cid:"002", name:"Honda Accord", image:"/img/accord.jpg"},
    {cid:"003", name:"Toyota Fortuner", image:"/img/fortuner.jpg"},
    {cid:"004", name:"Tesla Model 3", image:"/img/tesla.jpg"}
  ]*/
  if(!dentistResponse) return <p>Dentist panal is Loding ...</p>

  return (
      <div>
          <div style={{margin:"20px", display:"flex",
          flexDirection:"row",flexWrap:"wrap", alignContent:"space-around", 
          justifyContent:"space-around", padding: "10px"}}>
            {
               dentistResponse.data.map((dentistItem:DentistItem)=>(
                <Link href={`/dentists/${dentistItem.id}`} className="w-1/5">
                  <ProducCard dentistName={dentistItem.name} imgSrc={dentistItem.imageUrl}
                  onCompare={(dentist:string)=>dispatchCompare({type:'add', dentistName:dentist})}
                  />
                </Link>
                )
              )
            }
          </div>
          <div className="w-full text-xl font-medium">Compare List {compareList.size}</div>       
          { Array.from(compareList).map((car)=><div key={car}
          onClick={()=>dispatchCompare({type:'remove', dentistName:car})}
          >{car}</div>)} 

          <button className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2
            text-white shadow-sm" onClick={()=>{countRef.current++; alert(countRef.current)}}>
              count with Ref Object
          </button>
          <input type="text" placeholder="please fill" className="block text-gray-900 text-sm 
          rounded-lg p-2 m-2 bg-purple-50 ring-1 ring-inset ring-purple-400 
          focus:outline-none focus:bg-purple-200 focus:ring=2" ref={inputRef}/>

          <button className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2
          text-white shadow-sm" onClick={()=>{if(inputRef!=null) inputRef.current?.focus()}}>
            Focus Input
          </button>
      </div>
  );
}