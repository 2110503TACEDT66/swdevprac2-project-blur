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
  name: string;
  surname: string;
  id: string;
  dentist: string;
  appt: string;
}