#eje1.js
#Crear un objeto llamado persona con propiedades como nombre, edad y ocupación.
Creamos el objeto:  var = persona con su nombre - valor de nombre,edad,ocupación.
#eje2.js
#Crear una clase Libro con un constructor que acepte título y autor. Crear el objeto Libro y mostrar sus datos.
Creamos la clase Libro , con su constructor,con los parámetros título y autor.Luego se instancia un objeto y con console.log mostramos sus datos.
#eje3.js
#Agregar un método mostrarDetalles a la clase Libro que imprima el título y autor
Dentro de la clase Libro creamos la función mostrarDetalles ,se instancia  el objeto con sus parámetros  y luego al objeto llamamos a la función de la clase.
#eje4.js
#Convertir una cadena JSON a un objeto JavaScript
Creamos una cadena Json son sus datos,luego creamos una variable donde convertimos a javascript s la cadena json con el método parse() y los mostramos por consola.
#eje5.js
#Convertir un objeto JavaScript a una cadena JSON
Creamos un objeto javascript ,creamos una variable que convierte en Json con el método stringify() y lo mostramos por consola.
#eje6.js
#Scope Local y Global: Declarar una variable global y una variable local en una función. Imprimir ambas variables.
Declaramos una variable con su dato que será la global luego ,declaramos una función donde declaramos una variable que será el local y mostramos ambas variables.Luego invocamos a la función.
#eje7.js
#Scope de Bloque: Utilizar let y const para declarar variables con alcance de bloque
Declaramos una variable let fuera del bloque if.
Declaramos una variable const  dentro del bloque if.
Al tener el mismo nombre ambas variables,al imprimirse nos mostrará diferentes los datos.
#eje8.js
#Modificar la clase Libro para aceptar un año de publicación como parámetro en el constructor
Agregamos un parámetro al constructor de la clase Libro ya hecho en el ejercicio 3.
#eje9.js
#Herencia de Clases: Crear una clase Revista que herede de la clase Libro y tenga un nuevo atributo, como categoría. Crea un objeto e imprime revista
Creamos la clase Revista y que hereda de la clase Libro con la palabra extends.Agremos un parámetro al constructor.Se instancia el objeto ,y se imprime por consola.
#eje10.js
#Uso de this en Métodos: Agregar un método a la clase Libro que utilice this para imprimir el mensaje "Este libro es de [autor]".
Creamos un método mostratAutor con el parámetro this.autor del constructor dentro de la clase Libro.Se instancia el objeto y se llama al método para imprimirlo.
#eje11.js
Crear un objeto rectángulo con propiedades base y altura. Calcular y mostrar el área del rectángulo
Creamos la clase Rectangulo con su constructor,creamos el método ,se instancia el objeto,se le pasa los argumentos y llamamos al método para mostrarlo.
#eje12.js
#Crear dos archivos: operaciones.js que contenga funciones de suma y resta, y app.js que importe estas funciones y las utilice.
En operaciones.js creamos dos funciones: suma y resta con sus parámetros  y un return del resultado.Con module.exports para exportar las funciones creadas.
#eje13.js
#JSON y Array de Objetos: Crear un array de objetos, cada uno representando una persona con propiedades como nombre, edad y ciudad. Convertir el array a JSON
Creamos una array personas con sus propiedades.Luego con la función stringify() pasamos el array para convertirlo a JSON y lo mostramos por consola.
#eje14.js
#Métodos Estáticos: Agregar un método estático a la clase Libro que devuelve la cantidad total de libros creados.
Dentro de la clase Libro creamos un método con la palabra static que sirve para definir el método o propiedad que pertenecen a la clase en sí misma.
Creamos una variable con un valor de incremento llamado Libro.contadorLibro++ ,de la propiedad estática del método .Se instancia la cantidad de objetos y llamamos al método para mostrar la cantidad.
#eje15.js
#Registro de Usuarios con Clase y JSON: Crea una clase Usuario que tenga propiedades como nombre, correo y contraseña. Implementa métodos para agregar un nuevo usuario, mostrar la información de un usuario y convertir la lista de usuarios a JSON
Creamos un métodos estáticos para agregar un nuevo usuario al array,para mostrar la información de un usuario,para convertir la lista de usuarios en JSON
Creamos un array de objetos para almacenar los usuarios creados instanciando el objeto
Agregamos usuarios al array  llamando a la función.
Mostramos un usuario llamando a la función
Convertir la lista del array de usuarios a JSON llamando a la función y los mostramos por consola
Para mostrarlo formateados en JSON usamos la función stringify() y pars().


