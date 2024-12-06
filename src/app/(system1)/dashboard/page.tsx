import CardGrafico1 from '@/components/Graficos/CardGrafico1';
import CardGrafico2 from '@/components/Graficos/CardGrafico2';
import CardGrafico3 from '@/components/Graficos/CardGrafico3';
import React from 'react';

export default function Home() {
  return (
    <div className='w-100 h-100 grid lg:grid-cols-3 sm:grid-cols-1 p-2 mx-auto gap-1 bg-zinc-800'>
      <CardGrafico1/>
      <CardGrafico2/>
      <CardGrafico3/>
    </div>
  )
}
