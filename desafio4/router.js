const express = require ('express');
const router = express.Router();
const Container = require ('./container');
const container = new Container ();

router.get( '/', (_req, res) =>{
    const products = container.getAll();
    res.send(products);
});

router.get( '/:id', (req, res) =>{
    const id =req.params.id;
    const product = container.getById(parseInt(id));
    res.send(product)
});

router.post( '/', (req, res) =>{
    const obj = req.body;
    const newObj = container.create(obj);
    res.send(newObj)
});

router.put( '/:id', (req, res) =>{
    const id = req.params.id;
    const obj = req.body;
    const updateProducts = container.updateById(parseInt(id).obj);
    res.send (updateProducts)
});

router.delete( '/', (req, res) =>{
    res.send("DELETE ID")
});


module.exports = router;