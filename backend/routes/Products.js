const express = require('express');
const router = express.Router();
const productModel = require('../models/Product');

// Save product in data 
router.post("/uploadProduct", async (req, res) => {
    try {
        const data = await productModel(req.body);
        const datasave = await data.save();
        res.send({ message: "Upload successfully" });
    } catch (error) {
        console.error('Error uploading product:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Get all products
router.get('/product', async (req, res) => {
    try {
        const data = await productModel.find({});
        res.json(data); // Send JSON response directly
    } catch (error) {
        console.error('Error fetching product data:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Get product by ID
router.get('/product/:id', async (req, res) => {
    try {
        const productId = req.params.id;
        const product = await productModel.findById(productId);
        if (!product) {
            res.status(404).json({ error: 'Product not found' });
            return;
        }
        res.json(product);
    } catch (error) {
        console.error('Error fetching product by ID:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;
