export interface DentistItem{
  id:string,
  name:string,
  yearOfExperience:number,
  areaOfExpertise:string,
  imageUrl:string
}

export interface DentistJson{
  success: boolean,
  count: number,
  pagination: Object,
  data: DentistItem[]
}

export interface BookingItem{
  id:string,
  appt:Date,
  user:string,
  dentist:string,
  service:string,
  clinic:string,
  duration:number,
  status:string
}