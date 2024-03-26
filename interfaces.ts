export interface DentistItem{
  id:string,
  name:string,
  yearOfExperience:number,
  areaOfExpertise:string,
  imageUrl:string,
  appointment:BookingItem[],
}

export interface DentistJson{
  success: boolean,
  count: number,
  pagination: Object,
  data: DentistItem[],
}

export interface BookingItem{
  name: string,
  surname: string,
  id: string,
  dentist: string,
  appt: string,
  token:string,
}

export interface BookingJson{
  success: boolean,
  count: number,
  pagination: Object,
  data: BookingItem[],
}

export interface user{
  _id: string,
  name: string,
  tel: string,
  email: string,
  role: string,
  token: string,
  createdAt: Date,
}

export interface userJson{
  success: boolean,
  count: number,
  pagination: Object,
  data: user,
}