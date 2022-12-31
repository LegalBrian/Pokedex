const fetch = require("node-fetch");
const { Pokemon , Type } = require("../db");

const getPokemonById = async (id) => {
  try{
    if(!isNaN(id)){
      const api = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const data = await api.json();
      const pokemonId = [{
        id: data.id,
        name: data.name,
        image: data.sprites.other["official-artwork"].front_default,
        hp: data.stats[0].base_stat,
        attack: data.stats[1].base_stat,
        defense: data.stats[2].base_stat,
        speed: data.stats[5].base_stat,
        height: data.height,
        weight: data.weight,
        types: data.types.map((t) => t.type.name),
      }];
      return pokemonId;
    }else{
      const db = await Pokemon.findByPk(id, { include: Type });
      const pokemonDb = [{
        id: db.id,
        name: db.name,
        image: db.image,
        hp: db.hp,
        attack: db.attack,
        defense: db.defense,
        speed: db.speed,
        height: db.height,
        weight: db.weight,
        types: db.types.map((t) => t.name),
      }];      
      return pokemonDb;
    }
  }
  catch{
    throw new Error("Pokemon not found");
  }
};

module.exports= getPokemonById;