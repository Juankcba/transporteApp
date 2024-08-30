/* eslint-disable prettier/prettier */

import axios from "axios";

import { title } from "@/components/primitives";
import CardPokemon from "@/components/pokemon/components/CardPokemon";

export default async function PokemonPage({ params }: { params: { name: string } }) {
  const {data:pokemon} = await axios.get(`https://pokeapi.co/api/v2/pokemon/${params.name}`);

  

  return (
    <div>
      <h1 className={title()}>Pokemon - {pokemon.name.toUpperCase()} </h1>
      <section className="container mx-auto my-4">
     <CardPokemon pokemon={pokemon}/>
     </section>
    </div>
  );
}
