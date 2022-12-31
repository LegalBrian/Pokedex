const { Router } = require('express');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const pokemonsRouter = require("./pokemons");
const typeRouter = require("./types");

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/pokemons?", pokemonsRouter);
router.use("/types?", typeRouter);

module.exports = router;
