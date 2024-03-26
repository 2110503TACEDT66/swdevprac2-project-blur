export default async function addAppointment(token:string,Id:string,appt:string){
    
    const response = await fetch(`http://localhost:5000/api/v1/dentists/${Id}/appointments`,{
        method:'POST',
        headers:{
            "Content-Type":"application/json",
            authorization: `Bearer ${token}`,
        },
        body:JSON.stringify({
            appt : appt
        })
    })
    if(!response){
        throw new Error('Failed to add appointment');
    }
    return await response.json();

}