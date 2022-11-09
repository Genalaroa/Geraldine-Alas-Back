const express = require ('express');
const classContainer =require ('./container/archivos.Container');
const archivo = new classContainer ('./container/productos.txt')
const app = express();
const PORT = 8080;



app.get('/products', async (req, res) =>{

    const prods =await archivo.getAll();
    res.send({ Productos: prods})
});


app.get('/random', async (req, res) =>{

    const prods =await archivo.getAll();
    const random = parseInt(Math.random() * prods.length);
    res.send({Productos: prods[random]})
});



const server = app.listen(PORT, () =>{
    console.log(`Servidor corriendo en el puerto:  ${PORT}`);
})

