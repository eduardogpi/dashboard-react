
'use client'
import { CardEndereco } from '@/components/PesqCep/CardEndereco';
import CardTabEndereco from '@/components/PesqCep/CardTabEndereco';

import React, { useState } from 'react';

type TEndereco = {
  cep?: string | undefined,
  logradouro?: string | undefined,
  complemento?: string | undefined,
  unidade?: string | undefined,
  bairro?: string | undefined,
  localidade?: string | undefined,
  uf?: string | undefined,
  estado?: string | undefined,
  regiao?: string | undefined,
  ibge?: string | undefined,
  gia?: string | undefined,
  ddd?: string | undefined,
  siafi?: string | undefined
}
export default function Home() {
  const [result, setResult] = useState<TEndereco>({})

  function updateResult(r: TEndereco){
    setResult(r)
  }
  return (
    <div className='flex flex-col gap-2 items-center'>
      <CardEndereco handleResult={updateResult}/>
      <CardTabEndereco resultado={result}/>
    </div>
    

  )
}
