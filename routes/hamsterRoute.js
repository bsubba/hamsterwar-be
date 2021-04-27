const express = require('express');
const { addHamster, getAllHamsters, getHamster, updateHamster, deleteHamster } = require('../controllers/hamsterController');

const router = express.Router();

router.post('/hamsters', addHamster);
router.get('/hamsters', getAllHamsters);
router.get('/hamsters/:id', getHamster);
router.put('/hamsters/:id', updateHamster);
router.delete('/hamsters/:id', deleteHamster);

module.exports = {
    routes: router
}