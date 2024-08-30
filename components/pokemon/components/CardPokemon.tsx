/* eslint-disable prettier/prettier */
'use client';
import React, { FC } from 'react'
import {Card, CardFooter, Image, Button, Chip} from "@nextui-org/react";

import { Pokemon } from '../interfaces/pokemon';
interface props{
  pokemon: Pokemon
}

const CardPokemon:FC<props> = ({pokemon}) => {
  console.log(pokemon)

  return (
    <div className='grid grid-cols-2 gap-4 w-full '>
      <div className='mx-auto'>
         <Card
      isFooterBlurred
      className="border-none max-w-[200px]"
      radius="lg"
    >
      <Image
        alt="Woman listing to music"
        className="object-cover"
        height={200}
        src={pokemon.sprites.front_default}
        width={200}
      />
      <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
        <p className="text-tiny text-white/80">{pokemon.name} </p>
        <Button className="text-tiny text-white bg-black/20" color="default" radius="lg" size="sm" variant="flat">
          {pokemon.types[0].type.name}
        </Button>
      </CardFooter>
    </Card>
    </div>
    <div className='flex flex-wrap justify-start items-center gap-1'>
        {pokemon.stats.map((stat,i) => (
          <Chip key={i} className='flex-1'>
            <p>{stat.stat.name}  {stat.base_stat}
            </p>
           
            </Chip>
        ))}
    </div>
    </div>
    
  )
}

export default CardPokemon