class Libro {
    constructor(titulo,autor){
        this.titulo = titulo;
        this.autor = autor;
    }
}
var Libro1 = new Libro ("La ciudad y los perros","Mario Vargas LLosas");

console.log(Libro1.titulo);
console.log(Libro1.autor);