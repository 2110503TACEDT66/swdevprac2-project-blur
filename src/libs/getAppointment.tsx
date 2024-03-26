export default async function getAppointment(token:string,Id:string){
    
    const response = await fetch (`${process.env.BACKEND_URL}/api/v1/appointments/${Id}`,{
        method:'GET',
        headers:{
            authorization: `Bearer ${token}`,
        },
    })
    if(!response){
        throw new Error('Failed to fetch appointment');
    }
    return await response.json();

}