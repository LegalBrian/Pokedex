const fetch = require("node-fetch");
const { Pokemon , Type } = require("../db");

const getApiPokemon = async () => {
  const search = async(url) => {
    let aux = {pokemon: null, next: ""};
    await fetch(url)
    .then((res)=> res.json())
    .then((data)=> {
      return {urls: data.results.map((x) => x.url), next: data.next};
    })
    .then(async (data) => {
      await Promise.all(
        data.urls.map((x) => fetch(x).then((res)=> res.json()))
      ).then((data)=>{
        aux.pokemon = data.map((x)=>{
          return {
            id: x.id,
            name: x.name,
            image: x.sprites.other["official-artwork"].front_default,
            hp: x.stats[0].base_stat,
            attack: x.stats[1].base_stat,
            defense: x.stats[2].base_stat,
            speed: x.stats[5].base_stat,
            height: x.height,
            weight: x.weight,
            types: x.types.map((t) => t.type.name),
          };
        });
      });
    aux.next = data.next
    });
    return aux
  };
  const firstTwenty = await search("https://pokeapi.co/api/v2/pokemon");
  const secondTwenty = await search(firstTwenty.next);
  const apiConcat = await firstTwenty.pokemon.concat(secondTwenty.pokemon);
  return apiConcat;
};

const getDbPokemon = async () => {
  const pokemonsDb = await Pokemon.findAll({
    include: {
      model: Type,
    },
  });
  const pokemonDb = await pokemonsDb.map((pokemon) => {
    const result =  pokemon.toJSON();
    return {
      ...result,
      types: result.types.map((type) => type.name),
    };
  });
  return pokemonDb;
};

const getAllPokemon = async () => {
  const apiPokemon = await getApiPokemon();
  const dbPokemon = await getDbPokemon();
  const pokemon = apiPokemon.concat(dbPokemon);
  return pokemon;
};

module.exports = {
  getAllPokemon,
  getApiPokemon,
  getDbPokemon,
};