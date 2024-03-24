'use client'
import { useState } from 'react';
import styles from './banner.module.css'
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';



export default function Banner (){
  const covers = ['/img/den1.jpg', '/img/den2.jpg']
  const [index, setIndex] = useState(0)
  const router = useRouter();
  const { data: session } = useSession()
  console.log(session?.user.token)

  return(
    <div className={styles.banner} onClick={()=>setIndex(index + 1)}>
        <Image src={covers[index%2]}
        alt='cover'
        fill={true}
        priority
        objectFit='cover'/>
        <div className={styles.bannerText}>
            <h1 className='text-6xl font-lg subpixel-antialiased font-serif text-green-900 ms-3 py-9'>Your Dentist Booking</h1>
            <h3 className='text-3xl font-extralight subpixel-antialiased italic font-serif text-green-800'>Booking Your Dentist with Us</h3>
        </div>
        {
          session? <div className='z-30 absolute top-5 right-10 font-semibold text-cyan-800 text-xl'>
                  Hello {session.user?.name}</div>
                   : null
        }
        <button className='bg-white text-cyan-600 border border-cyan-600 rounded px-2 py-2 
        font-sembiblod m-2 z-30 bottom-0 right-0  absolute hover:text-white hover:bg-cyan-600 hover:border-transparent'
        onClick={(e)=>{e.stopPropagation();router.push('/car')}}>
          Select Your Booking Dentist Now
        </button>
    </div>
  );
}