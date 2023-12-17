class Libro {
    constructor(titulo, autor) {
        this.titulo = titulo;
        this.autor = autor;
    }
    mostrarDetalles(){
    console.log("titulo : ",this.titulo);
    console.log("autor : ",this.autor);
}
}

var Libro1 = new Libro("La ciudad y los perros", "Mario Vargas LLosas");
Libro1.mostrarDetalles();


