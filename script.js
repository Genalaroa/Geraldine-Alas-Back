class Usuario{
    constructor (name, apellido){
        this.name = name;
        this.apellido = apellido;
        this.libros = [];
        this.mascotas= [];
    }

    // metodos 

     getFullName() {
        return (`Mi nombre completo es ${this.name} ${this.apellido}`)
     };

     addMascota(name){
        this.mascotas.push(name)
     };

     countMascotas(){
       return (`${this.name} tiene ${this.mascotas.length} mascotas.`)
     };

    addBook (name, autor){
      let lib = {'nombre': name, 'autor':autor};
      this.libros.push(lib);
    };
    
    getBookName (){
      return this.libros.forEach(this.showBook);

    };   

     showBook(libro) {
     
     console.log(libro['nombre']);
    }
    
}

let usuario1 = new Usuario('Geraldine', 'Alas');
console.log(usuario1.getFullName()); 

usuario1.addMascota("Odin");   
usuario1.addMascota("Arthas");
usuario1.addMascota("Flopi");
usuario1.addMascota("Flopi");
console.log(usuario1.countMascotas()) ;

usuario1.addBook("You before me","Jojo Moyes");
usuario1.addBook("El arte de la guerra","Sun Tzu");
usuario1.addBook("Dios vuelve en una Harley","Joan Brady");
console.log(usuario1.getBookName()); 
