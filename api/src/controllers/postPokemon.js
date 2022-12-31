const { Pokemon , Type } = require("../db");

const postPokemon = async (name, hp, attack, defense, speed, height, weight, types , image) => {
    if (!name) throw new Error("a name is required");
    const exist = await Pokemon.findOne({where: {name: name}});
    if (exist) throw new Error("Pokemon already exist");

    const pokemonCreated = await Pokemon.create({
        name, 
        image,
        hp, 
        attack, 
        defense, 
        speed, 
        height, 
        weight, 
    })

    const pokemonTypes = types? await Type.findAll({
        where: { name: types }
    }) : await Type.findAll({
        where: { name: ["normal"]}
    })
                
    pokemonCreated.addType(pokemonTypes)
    return 'Pokemon created successfuly'
}


module.exports = postPokemon;