class Libro {
    constructor(titulo, autor) {
        this.titulo = titulo;
        this.autor = autor;
        Libro.contadorLibro++;
    }
    static contadorLibros(){
        console.log(Libro.contadorLibro)
    }
    
}
Libro.contadorLibro=0;

var libro01 = new Libro("titulo1","autor1");
var libro02 = new Libro("titulo2","autor2");
var libro03 = new Libro("titulo2","autor2");

Libro.contadorLibros();