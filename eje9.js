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
}

var Libro1 = new Libro("La ciudad y los perros", "Mario Vargas LLosas",1980);
Libro1.mostrarDetalles();


class Revista extends Libro{
    constructor(titulo, autor,año_de_publicacion,categoria){
        super(titulo, autor,año_de_publicacion);
        this.categoria = categoria;
    }

    }

var revista1 = new Revista("Rolling Stone","editorial Sevilla",2023,"Musica");
revista1.mostrarDetalles();
console.log("categoria :",revista1.categoria)