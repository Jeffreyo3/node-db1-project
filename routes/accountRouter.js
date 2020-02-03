const express = require('express');
const db = require('../data/dbConfig');
const router = express.Router();

// GET
router.get('/', async (req, res) => {
    try {
        const accounts = await db('accounts')
        res.json(accounts)
    } catch (err) {
        res.status(500).json({ message: "Failed to get accounts", error: err });
    }
});

// GET by id
router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const [account] = await db('accounts').where('id', id);
        res.json(account);
    } catch (err) {
        res.status(500).json({ message: "Failed to get account", error: err });
    }
});

// CREATE
router.post('/', async (req, res) => {
    const accountData = req.body;
    try {
        const account = await db('accounts').insert(accountData);
        res.status(201).json(account);
    } catch (err) {
        res.status(500).json({ message: "Failed to add account", error: err });
    }
})

// UPDATE by id
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const rowsUpdated = await db('accounts')
            .where('id', id)
            .update(req.body);
        res.status(200).json({ updated: rowsUpdated });
    } catch (err) {
        res.status(500).json({ message: "Failed to update account", error: err });
    }
});

// DELETE by id
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const rowsDeleted = await db('accounts')
            .where('id', id)
            .del();
        res.status(200).json({ deletedRecords: rowsDeleted })
    } catch (err) {
        res.status(500).json({ message: "Failed to delete account", error: err });
    }
});


module.exports = router;