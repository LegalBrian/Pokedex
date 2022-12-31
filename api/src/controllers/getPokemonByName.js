const fetch = require("node-fetch");
const { Pokemon , Type } = require("../db");

const getPokemonByName = async (name) => {
  try {
    const db = await Pokemon.findOne({ where: { name: name }, include: Type });
    if (db) {
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
    } else {
      const api = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
      const info = await api.json();
      const pokemonName = [{
        id: info.id,
        name: info.name,
        image: info.sprites.other["official-artwork"].front_default,
        hp: info.stats[0].base_stat,
        attack: info.stats[1].base_stat,
        defense: info.stats[2].base_stat,
        speed: info.stats[5].base_stat,
        height: info.height,
        weight: info.weight,
        types: info.types.map((t) => t.type.name),
      }];
      return pokemonName;
    }
  } catch (error) {
    throw new Error("Pokemon not found");
  }
};

module.exports = getPokemonByName;