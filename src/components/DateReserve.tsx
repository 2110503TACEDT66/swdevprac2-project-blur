"use client"
import { useState } from "react";
import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Select, MenuItem } from "@mui/material";
import {Dayjs} from "dayjs"
import TextField from "@mui/material/TextField";

export default function LocationDateReserve ({onDateChange,onFnameChange,onLnameChange,onCidChange}
  :{onDateChange:Function,onFnameChange:Function,onLnameChange:Function,onCidChange:Function}){

  const [apptDate, setApptDate] = useState<Dayjs|null>(null)
  const [fName,setFName] = useState<string|null>(null)
  const [lName,setLName] = useState<string|null>(null)
  const [cId,setCid] = useState<string|null>(null)

  

  return (
    <div className="rounded-lg space-y-2
        w-fit px-20 py-5 flex flex-row justify-center grid gap-5">
            <TextField name="Name" label="Name" variant="standard"
            value={fName}
            onChange={(e)=>{setFName(e.target.value),onFnameChange(e.target.value)}}
            />
            <TextField name="Surame" label="Surame" variant="standard"
            value={lName}
            onChange={(e)=>{setLName(e.target.value),onLnameChange(e.target.value)}}
            />
            <TextField name="CitizenId" label="Citizen ID" variant="standard"
            value={cId}
            onChange={(e)=>{setCid(e.target.value),onCidChange(e.target.value)}}
            />
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker className="bg-white"
                value={apptDate}
                onChange={(value)=>{setApptDate(value),onDateChange(value)}}
                />
            </LocalizationProvider>
        </div>
  );
}