const express = require ('express');
const router = require  ("./router.js");
const app = express();
const PORT = 8080;


app.use("/api/productos", router);
app.use (express.json());
app.use (express.static('public'));
app.use(express.urlencoded({ extended: true }));


const server = app.listen(PORT, () =>{
    console.log(`Servidor corriendo en el puerto:  ${PORT}`);
})

server.on("error", (error) =>{
    console.log(`Error corriendo en el servidor ${error}`);
})
