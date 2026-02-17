const express = require('express');
const router = express.Router();

// Get all products
router.get('/', (req, res) => {
    res.json({ message: 'Get all products' });
});

// Get product by ID
router.get('/:id', (req, res) => {
    res.json({ message: 'Get product by ID: ' + req.params.id });
});

// Create new product
router.post('/', (req, res) => {
    res.json({ message: 'Create new product', data: req.body });
});

// Update product
router.put('/:id', (req, res) => {
    res.json({ message: 'Update product: ' + req.params.id, data: req.body });
});

// Delete product
router.delete('/:id', (req, res) => {
    res.json({ message: 'Delete product: ' + req.params.id });
});

module.exports = router;