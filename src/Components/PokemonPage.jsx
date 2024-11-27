import { useState } from "react";
import { useEffect } from "react";
import PokemonCard from "./PokemonCard";

const PokemonPage = () => {
  const [pokemon, setPokemon] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");
  const API = "https://pokeapi.co/api/v2/pokemon?limit=50";

  const fetchPokemon = async () => {
    try {
      const res = await fetch(API);
      const data = await res.json();

      const detailPokemon = data.results.map(async (curPokemon) => {
        const res = await fetch(curPokemon.url);
        const data = await res.json();
        return data;
      });
      const detailPokemonRes = await Promise.all(detailPokemon);
      setPokemon(detailPokemonRes);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setErr(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  const searchData = pokemon.filter((curPokemon) =>
    curPokemon.name.toLowerCase().includes(search.toLocaleLowerCase())
  );

  if (loading) {
    return <h1 className="text-4xl font-bold text-center">Loading...</h1>;
  }
  if (err) {
    return <h1 className="text-4xl font-bold text-center">
       {err.message || "An unexpected error occurred"}
    </h1>;
  }
  return (
    <>
      <h1 className="text-center text-4xl font-bold my-3">
        Let's Catch Pokemon
      </h1>
      <div className="flex justify-center my-3 w-full">
        <input
          type="text"
          placeholder="Search Pokemon"
          className="border-b-black outline-none border-b-2 w-1/4 text-center bg-gray-100 py-1 mb-4"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="w-full">
        <ul className="grid grid-cols-4 gap-10 mx-10">
          {searchData.map((curPokemon) => {
            return <PokemonCard key={curPokemon.id} pokemonData={curPokemon} />;
          })}
        </ul>
      </div>
    </>
  );
};

export default PokemonPage;
