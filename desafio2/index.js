const conteiner = require("./script.js")
const productos = new conteiner ("./productos.json")

async function elementos(){

    const juego1={
        nombre: "Call of Dutty Modern Warfare 2",
        precio: 70,
        thumbail: "./img/callof.jpg"
    }

    const juego2={
        nombre: "Madison",
        precio: 65,
        thumbail: "./img/Madison.jpg"
    }

    const juego3={
        nombre: "World of Warcraft",
        precio: 90, 
        thumbail: "./img/wow.jpg"
    }

    const juego4={
        nombre: "League of Legends",
        precio: 40,
        thumbail: "./img/lol.jpg"
    }


await productos.getAll().then(a=>console.log(a))
await productos.deleteAll()
await productos.save(juego1)
await productos.save(juego2)
await productos.save(juego3)
await productos.save(juego4)
await productos.getById(4).then(id=>console.log(id))   
await productos.deleteById(3).then(id=>console.log(id))
}
elementos()