const { Router } = require("express")
const router = Router();
const Product = require("../models/product")

// Adding Product
router.post("/product/new", async (req, res) => {
    try{

        const product = await Product.create(req.body);

        res.status(201).json({
            success: true,
            product
        })

    }
    catch(e) {
        res.send(e)
    }
})


// Getting all products
router.get("/product/all", async (req, res) => {
    try{

        const products = await Product.find().sort({ "price": 1});
        // res.send(products);
        
        res.status(200).json({
            success: true,
            products
        })

    }
    catch(e) {
        res.send(e)
    }
})


// getting product by id
router.get("/product/:id", async (req, res) => {

    try{
        const id = req.params.id;
        const product = await Product.find({ _id: id });
        // res.send(products);
        
        if(!product){
            res.status(404).json({
                success: false,
                message: "Product not found"
            })
        }

        res.status(200).json({
            success: true,
            product
        })
        

    }
    catch(e) {
        res.send(e)
    }
})

// Update Product
router.put("/product/:id", async (req, res) => {

    try{
        const id = req.params.id;
        const product = await Product.findByIdAndUpdate(id, req.body, {
            new: true,
            useFindAndModify: true,
            runValidators: true
        });

        if(!product){
            res.status(404).json({
                success: false,
                message: "Product not found"
            })
        }

        // res.send(products);
        
        res.status(200).json({
            success: true,
            product
        })

    }
    catch(e) {
        res.send(e)
    }
})

// Delete Product
router.delete("/product/:id", async (req, res) => {

    try{
        const id = req.params.id;
        const product = await Product.findByIdAndDelete(id);
        // const product = await Product.deleteOne({ _id: id})

        if(!product){
            res.status(404).json({
                success: false,
                message: "Product not found"
            })
        }
        // res.send(products);
        
        res.status(200).json({
            success: true,
            message: "Product Deleted Succesfully"
        })

    }
    catch(e) {
        res.send(e)
    }
})


module.exports = router;