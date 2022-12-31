const { Router } = require("express");
const getTypes = require("../controllers/getTypes")

const router = Router();

router.get('/', async (req, res) => {
    try {
        res.json(await getTypes());
    } catch (error) {
        res.status(404).json(error.message);
    };
});

module.exports = router;