const fs=require ("fs").promises


class contenedor{
    constructor(path){
      this.path = path
    }
  
  //Métodos

    async save(juego){
      try {
        const leer = await fs.readFile(this.path, "utf-8")
        const data = JSON.parse(leer)
        let id;
          data.length == 0
          ? ( id = 1)
          : (id =data [data.length - 1]. id + 1);
        const newProduct = {...juego, id};
        data.push(newProduct);
        await fs.writeFile(this.path, JSON.stringify(data, null, 2), "utf-8")
        return newProduct.id;

      } catch (error) {

        console.log(error)
      }  
    }
  
    async getById(id){
      try {
        const leer = await fs.readFile(this.path, "utf-8");
        const data = JSON.parse(leer);
        const obj = data.find (obj=>obj.id==id)
          if(!obj){
            return null
          }
          return obj

      } catch (error) {
        console.log(error);
      }
    }
  
    async getAll(){
      
        const leer = await fs.readFile(this.path, "utf-8");
        return JSON.parse(leer)
    
    }
  
    async deleteById(id){
      try {
        const juegos = await this.getAll();
        const juego= juegos.find((juego)=> juego.id===id);
          if (juego) {
            const index = juegos.indexOf(juego);
            juegos.splice(index,1);
            await fs.writeFile(
              path.resolve(this.path),
              JSON.stringify(juegos, null, 2)
            )}
      } catch (error) {
        console.log(error);
      }  
    }
  
    async deleteAll(){
      try {
        await fs.writeFile(this.path, JSON.stringify([], null,));
      } catch (error) {
        console.log(error)
      }
    }
    
  }
  
module.exports=contenedor
