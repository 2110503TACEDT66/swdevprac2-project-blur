export default async function getAppointments(token:string) {
    const response = await fetch('http://localhost:5000/api/v1/appointments',{
        method:'GET',
        headers:{
            authorization: `Bearer ${token}`,
        },
    })
    if(!response){
        throw new Error('Failed to fetch appointment')
    }
    return await response.json();
}