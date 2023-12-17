class Rectangulo{
    constructor(base,altura){
        this.base = base;
        this.altura= altura;
    }
    calcularArea(){
        console.log(this.base * this.altura);
    }
}

var rectangulo =  new Rectangulo(5,4);
rectangulo.calcularArea();
