const PokemonCard = ({ pokemonData }) => {
  return (
    <>
      <li className="shadow-custom  shadow-[#d2d2d2] flex flex-col items-center p-2">
        <figure>
          <img
            src={pokemonData.sprites.other.dream_world.front_default}
            alt={pokemonData.name}
            className="w-[150px] h-[150px] object-contain"
          />
        </figure>
        <h2 className="text-3xl font-bold my-2">{pokemonData.name}</h2>
        <p className="py-1 px-4 rounded-lg bg-green-500 inline-block">
            {
                pokemonData.types.map((curtype) => curtype.type.name).join(', ')
            }
        </p>
        <div className="flex  justify-between mt-2 p-2 w-full">
          <p><span className="font-bold text-sm">Height</span> : {pokemonData.height}</p>
          <p><span className="font-bold text-sm">Weight</span> : {pokemonData.weight} </p>
          <p><span className="font-bold text-sm">Speed</span> : {pokemonData.stats[5].base_stat} </p>
        </div>
        <div className="flex justify-between w-full text-sm p-2">
            <div className="text-center">
              <p>{pokemonData.base_experience}</p>
              <p className="font-bold">Experience</p>
            </div>
            <div className="text-center">
              <p>{pokemonData.stats[1].base_stat}</p>
              <p className="font-bold" >Attack</p>
            </div>
            <div className="text-center">
              <p>{pokemonData.abilities[0].ability.name}</p>
              <p className="font-bold" >Ability</p>
            </div>
        </div>
      </li>
    </>
  );
};

export default PokemonCard;
