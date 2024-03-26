import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (


  <div className="flex flex-col min-h-screen">
  <main className="flex-1"> </main>
  <footer className="bg-black text-white py-5 ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <Image src="/img/logo1.png" alt="Dentisa Logo" width={150} height={50} className="mb-4" />
          <p>Dentisa Clean Tooth</p>
        </div>
        <div>
          <h3 className="font-bold mb-3">Associated company</h3>
          <ul>
            <li>
              <Link href="https://www.booking.dentist">
                <span className="cursor-pointer hover:underline">Booking Dentist</span>
              </Link>
            </li>
            <li>
              <Link href="https://www.planfy.com/online-bookings-dentists">
                <span className="cursor-pointer hover:underline">Planfy</span>
              </Link>
            </li>
            <li>
              <Link href="https://www.roguevalleydentist.com">
                <span className="cursor-pointer hover:underline">Jc</span>
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-3">Services</h3>
          <ul>
            <li>
              <Link href="/dentist">
                <span className="cursor-pointer hover:underline">Dentists</span>
              </Link>
            </li>
            <li>
              <Link href="/dentist">
                <span className="cursor-pointer hover:underline">Booking</span>
              </Link>
            </li>
            <li>
              <Link href="/mybooking">
                <span className="cursor-pointer hover:underline">Apointment</span>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <span className="cursor-pointer hover:underline">About</span>
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-3">Members</h3>
          <ul>
            <li>
                <span className="cursor-pointer hover:underline">1.Korakot Plodjuan</span>
            </li>
            <li>
                <span className="cursor-pointer hover:underline">2.Suradet Tongjaijongjaroen</span>
            </li>
            <li>
                <span className="cursor-pointer hover:underline">3.Basil Baha</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center pt-8 border-t border-gray-700 mt-8">
        <p>&copy; {new Date().getFullYear()} Create by blur Group</p>
      </div>
    </footer>
  </div>
  );
};

export default Footer;