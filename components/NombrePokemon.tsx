/* eslint-disable prettier/prettier */
'use client';
import React from 'react'
import { usePathname } from 'next/navigation';
const NombrePokemon = () => {
  

  return (
    <div>{usePathname().split('/')[2]}</div>
  )
}

export default NombrePokemon