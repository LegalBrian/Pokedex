const { Router } = require("express");
const { getAllPokemon } = require("../controllers/getAllPokemons");
const getPokemonByName = require("../controllers/getPokemonByName");
const getPokemonById = require("../controllers/getPokemonById");
const postPokemon = require("../controllers/postPokemon");

const router = Router();

router.get("/", async (req, res) => {
    try {
        const { name } = req.query;
        if (name) {
            const getByName = await getPokemonByName(name.toLowerCase());
            res.status(200).json(getByName);
        }else{
            const getAll = await getAllPokemon();
            res.status(200).json(getAll);
        };
    } catch (error) {
        res.status(404).json(error.message);
    };
});
  
router.get("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const pokemonInfo = await getPokemonById(id);
        res.status(200).json(pokemonInfo);
    } catch (error) {
        res.status(404).json(error.message);   
    }
});

router.post("/", async (req, res) => {
    try {
        const { name, hp, attack, defense, speed, height, weight, types, image } = req.body;
        res.status(200).json(await postPokemon( name, hp, attack, defense, speed, height, weight, types, image));
    } catch (error) {
        res.status(404).json(error.message);
    };
});

module.exports = router;