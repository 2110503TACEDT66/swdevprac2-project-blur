import React from 'react';
import Banner from '@/components/Banner'
import { TravelCard } from '@/components/TravelCard'
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Banner/>
      <TravelCard></TravelCard>
      <Footer/>
    </main>
  )
}
