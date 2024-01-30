const express = require('express');
const router = express.Router();
const db = require('../models');

// Create a new symbol
router.post('/', async (req, res) => {
    try {
        const { code, name, description } = req.body;
        const newSymbol = await db.symbols.create({ code, name, description });
        res.status(201).json(newSymbol);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Read all symbols
router.get('/', async (req, res) => {
    try {
        const symbols = await db.symbols.findAll();
        res.json(symbols);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Read a single symbol by id
router.get('/:id', async (req, res) => {
    try {
        const symbol = await db.symbols.findByPk(req.params.id);
        if (!symbol) {
            return res.status(404).json({ error: 'Symbol not found' });
        }
        res.json(symbol);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Update a symbol
router.put('/:id', async (req, res) => {
    try {
        const { code, name, description } = req.body;
        const symbol = await db.symbols.findByPk(req.params.id);
        if (!symbol) {
            return res.status(404).json({ error: 'Symbol not found' });
        }
        symbol.code = code;
        symbol.name = name;
        symbol.description = description;
        await symbol.save();
        res.json(symbol);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Delete a symbol
router.delete('/:id', async (req, res) => {
    try {
        const symbol = await db.symbols.findByPk(req.params.id);
        if (!symbol) {
            return res.status(404).json({ error: 'Symbol not found' });
        }
        await symbol.destroy();
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
