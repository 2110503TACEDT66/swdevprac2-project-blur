import TopMenuItem from './TopMenuItem';
import Image from 'next/image';
import {getServerSession} from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { Link } from '@mui/material';

export default async function TopMenu() {

  const session = await getServerSession(authOptions)


  return (

<div className="h-12 bg-gray-100 fixed top-0 right-0 left-0 z-50 border-y-2 border-gray-200 flex flex-row">
        <Image src={'/img/logo1.png'} className="h-100 w-auto size-9"
        alt='logo' width={0} height={0} sizes='90vh'/>
        <TopMenuItem title='Dentists' pageRef='/dentist'/>
        <TopMenuItem title='Booking' pageRef='/reservations'/>
        <TopMenuItem title='About' pageRef='/about'/>
        <TopMenuItem title='Appointment' pageRef='/mybooking'/>
        <div className='flex items-center absolute right-10 h-full px-2 text-cyan-600 text-sm mx-20
        hover:text-white hover:bg-cyan-600 hover:border-transparent'>
        <TopMenuItem title='Register' pageRef='/register'/>
        </div>
        {
          session? <Link href="/api/auth/signout">
            <div className='flex items-center absolute right-0 h-full px-2 text-cyan-600 text-sm
            hover:text-white hover:bg-cyan-600 hover:border-transparent'>
            Sign-Out of {session.user?.name}</div></Link>
            :<Link href="/api/auth/signin">
            <div className='flex items-center absolute right-0 h-full px-2 text-cyan-600 text-sm
            hover:text-white hover:bg-cyan-600 hover:border-transparent'>
            Sign-In</div></Link> 
        }
</div>
    
  );
}