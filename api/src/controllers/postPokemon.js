const { Pokemon , Type } = require("../db");

const postPokemon = async (name, hp, attack, defense, speed, height, weight, types , image) => {
    // aca verifico que tenga nombre y que no exista el pokemon en la db.
    if (!name) throw new Error("a name is required");
    const exist = await Pokemon.findOne({where: {name: name}});
    if (exist) throw new Error("Pokemon already exist");

    if(!image) image = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Pokebola-pokeball-png-0.png/800px-Pokebola-pokeball-png-0.png";

    const pokemonCreated = await Pokemon.create({
        name: name.toLowerCase(), 
        image,
        hp, 
        attack, 
        defense, 
        speed, 
        height, 
        weight, 
    })

    //aca verifica si hay tipos, en caso de no haber asigna el tipo normal por defecto.
    const pokemonTypes = types? await Type.findAll({
        where: { name: types }
    }) : await Type.findAll({
        where: { name: ["normal"]}
    })
                
    pokemonCreated.addType(pokemonTypes)
    return 'Pokemon created successfuly'
}


module.exports = postPokemon;