class Usuario{
    constructor(nombre,correo,contraseña){
        this.nombre = nombre;
        this.correo = correo;
        this.contraseña = contraseña;
    }
    static nuevoUsuario(usuario,usuariosTotal){
        usuariosTotal.push(usuario);
    }
    static mostrarUsuario(usuario){
        console.log(usuario.nombre);
        console.log(usuario.correo);
    }
    static convertirUsuario(usuariostotal){
        return JSON.stringify(usuariostotal);
    }
}
var usuariosArray = [];

var usuario1 = new Usuario("juan","juan@gmail.com","456123");
var usuario2 = new Usuario("jhon","jhomn@gmail.com","456123");
var usuario3 = new Usuario("juanx","juan@gmail.com","456123c");

Usuario.nuevoUsuario(usuario1,usuariosArray);
Usuario.nuevoUsuario(usuario2,usuariosArray);
Usuario.nuevoUsuario(usuario3,usuariosArray);

Usuario.mostrarUsuario(usuario1);

const usuarioLista = Usuario.convertirUsuario(usuariosArray);
console.log(usuarioLista);
console.log(JSON.stringify(JSON.parse(usuarioLista), null, 2));