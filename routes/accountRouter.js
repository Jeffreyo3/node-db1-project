const express = require('express');
const db = require('../data/dbConfig');
const router = express.Router();

// GET
router.get('/', async (req,res)=> {
    try {
        const accounts = await db('accounts')
        res.json(accounts)
    } catch (err) {
        res.status(500).json({message: "Failed to get accounts", err})
    }
});

// GET by id
// CREATE
// UPDATE by id
// DELETE


module.exports = router;