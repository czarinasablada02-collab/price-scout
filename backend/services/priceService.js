// priceService.js

/**
 * Compares prices from different sources.
 * @param {Array} prices - Array of price objects, each containing 'source' and 'price' keys.
 * @returns {Object} - Object with the best price and corresponding source.
 */
function comparePrices(prices) {
    if (!prices || prices.length === 0) {
        throw new Error('No prices provided!');
    }

    let bestPrice = prices[0];

    for (let i = 1; i < prices.length; i++) {
        if (prices[i].price < bestPrice.price) {
            bestPrice = prices[i];
        }
    }

    return bestPrice;
}

module.exports = { comparePrices };