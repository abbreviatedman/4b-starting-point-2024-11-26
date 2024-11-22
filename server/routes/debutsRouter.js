const express = require('express');

const {
    getAllDebuts,
    createOneDebut,
    getDebutByName,
} = require('../controllers/debutsController');

const router = express.Router();

// GET localhost:3000/api/debuts
router.get('/', getAllDebuts);
// POST localhost:3000/api/debuts
router.post('/', createOneDebut);
// GET localhost:3000/api/debuts/Hulk (or whatever name)
router.get('/:name', getDebutByName);

module.exports = router;