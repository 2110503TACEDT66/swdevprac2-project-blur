export default async function getBookingItem(token:string) {
    const response = await fetch("",{
        method:"GET",
        headers:{
            authorization:`Bearer ${token}`
        }
    })
    if(!response.ok){
        throw new Error("Failed to fetch Booking")
    }
    return await response.json()
}