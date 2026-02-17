const express = require('express');
const router = express.Router();
const { comparePrices } = require('../services/priceService');

// Get price comparison for a product
router.get('/compare/:productId', (req, res) => {
    try {
        const productId = req.params.productId;
        // Mock price data - replace with actual database queries
        const prices = [
            { source: 'Home Depot', price: 29.99 },
            { source: 'Lowe\'s', price: 31.99 },
            { source: 'Amazon', price: 28.99 },
            { source: 'Walmart', price: 32.99 }
        ];
        
        const bestPrice = comparePrices(prices);
        res.json({ 
            productId,
            allPrices: prices,
            bestPrice: bestPrice
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get price history for a product
router.get('/history/:productId', (req, res) => {
    try {
        const productId = req.params.productId;
        // Mock history data - replace with actual database queries
        const history = [
            { date: '2026-02-10', price: 35.99 },
            { date: '2026-02-12', price: 33.99 },
            { date: '2026-02-14', price: 31.99 },
            { date: '2026-02-17', price: 28.99 }
        ];
        
        res.json({
            productId,
            priceHistory: history
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get prices from specific competitor
router.get('/competitor/:competitorId', (req, res) => {
    try {
        const competitorId = req.params.competitorId;
        // Mock competitor data - replace with actual database queries
        res.json({
            competitorId,
            competitor: 'Home Depot',
            products: [
                { id: 1, name: 'Drill', price: 29.99 },
                { id: 2, name: 'Saw', price: 45.99 }
            ]
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;