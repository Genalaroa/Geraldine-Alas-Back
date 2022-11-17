const ERROR = { error: "Producto no encontrado"};

class Container {
    constructor() {
        this.products= [];
    }
    
    getAll() {
        return this.products;
    }

    getById(id){
        const obj = this.products.find((product) => product.id === id);
        if (obj){
            return obj;
        }else{
            return ERROR
        }
    }

    create(obj){
        const arrayOfIds = this.products.map((product)=> product.id);
        const maxId = arrayOfIds.length === 0 ? 0 : Math.max(...arrayOfIds);
        const id = maxId + 1;
        const newObj = {id, ...obj};
        this.products.push(newObj);
        return newObj;
    }

    updateById(id, obj) {
        const foundObj = this.products.find((product) => product.id === id);
        if (foundObj) {
          const filteredProducts = this.products.filter(
            (product) => product.id !== id
          );
          const newObj = { id, ...obj };
          this.products = [...filteredProducts, newObj];
          return newObj;
        } else {
          return ERROR;
        }
      }

      deleteById(req, res) {
        try {
            const { id } = req.params
            if (isNaN(id)) {
                res.status(400).json({ Error: "El parametro ingresado no es un numero" })
            }
            const product = products.filter(filterProduct => filterProduct.id === Number(id))
            if (!product) {
                res.status(404).json({ Error: "El producto no existe" })
            }
            products = products.filter(filterProduct => filterProduct.id !== Number(id))
            res.status(200).json(`Producto con id : ${id} eliminado exitosamente`)
        } catch (error) {
            console.log("Error en deleteById", error);
        }
    }


}
module.exports = Container