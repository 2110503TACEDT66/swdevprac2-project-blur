import TopMenuItem from './TopMenuItem';
import styles from './topmenu.module.css'
import Image from 'next/image';
import {getServerSession} from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { Link } from '@mui/material';

export default async function TopMenu() {

  const session = await getServerSession(authOptions)


  return (

    <div className={styles.menucontainer}>
        <Image src={'/img/logo1.png'} className={styles.logoimg}
        alt='logo' width={0} height={0} sizes='90vh'/>
        <TopMenuItem title='Dentists' pageRef='/car'/>
        <TopMenuItem title='Booking' pageRef='/reservations'/>
        <TopMenuItem title='About' pageRef='/about'/>
        <div className='flex items-center absolute right-0 h-full px-2 text-cyan-600 text-sm mx-20
        hover:text-white hover:bg-cyan-600 hover:border-transparent'>
        <TopMenuItem title='Appointment' pageRef='/cart'/>
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