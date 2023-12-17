class Libro {
    constructor(titulo, autor,año_de_publicacion) {
        this.titulo = titulo;
        this.autor = autor;
        this.año_de_publicacion = año_de_publicacion;
    }
    mostrarDetalles(){
    console.log("titulo : ",this.titulo);
    console.log("autor : ",this.autor);
    console.log("Año de publiccion : ",this.año_de_publicacion);
    }
    mostrarAutor(){
        console.log("Este libro es de ",this.autor);
    }

}
var Libro1 = new Libro("La ciudad y los perros", "Mario Vargas LLosas",1980);
Libro1.mostrarAutor();