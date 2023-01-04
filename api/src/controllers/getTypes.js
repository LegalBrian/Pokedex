const fetch = require("node-fetch");
const { Type } = require("../db");

const getTypes = async () => {
// aca busco los tipos en la api y a medida que me los trae los pongo en la db.
const api = await fetch('https://pokeapi.co/api/v2/type');
const types = await api.json();
types.results.map(async el=>{
    await Type.findOrCreate({
        where: {name: el.name}
    })
})
return await Type.findAll();
}

module.exports = getTypes;