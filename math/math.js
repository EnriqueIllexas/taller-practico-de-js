console.group("Cuadrado")

/*Perimetro del cuadrado */
const ladoCuadrado = 5;
const perimetroCuadrado = ladoCuadrado * 4;
const areaCuadrado= ladoCuadrado * ladoCuadrado;
console.log(
    {
        ladoCuadrado,
        perimetroCuadrado,
        areaCuadrado,
    }
    );

console.groupEnd("Cuadrado")
/*triangulo */
console.group("Triangulo")


const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const ladoTrianguloBase = 4;
const alturaTriangulo = 5.5;

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + ladoTrianguloBase;

const areaTriangulo = (ladoTrianguloBase * alturaTriangulo )/ 2;

function calcularTriangulo(lado1,lado2,base,altura){
    return{
        perimetro:(lado1 + lado2 + base),
        area:(base * altura) /2,
    };
}
function calcularAlturaTriangulo(lado1,base){
    if(lado1 == base){
        console.warn("no es un triangulo isoceles")
    }
    else{
        // h = raizcuadrado(lado1**2 - (b**2/4))
        return altura = Math.sqrt( (lado1 ** 2) - ((base ** 2) / 4));
    }
}



function calcularCuadrado(lado){
    return{
        perimetro: lado * 4,
        area:lado * lado,
    };
}


console.log
 (
    {
    ladoTriangulo1,
    ladoTriangulo2,
    ladoTrianguloBase,
    alturaTriangulo,
    perimetroTriangulo,
    areaTriangulo,
    }
 )
 console.groupEnd("Triangulo")

 console.group("Circulo")

const radioCirculo = 3;
const diametroCirculo = radioCirculo * 2;
const PI = 3.1415;

const circunferencia = diametroCirculo * PI;
const areCirculo = (radioCirculo ** 2) * PI;

console.log({
    radioCirculo,
    diametroCirculo,
    PI,
    circunferencia,
    areCirculo,
});

function calcularCirculo(radio){
    const diametro = radio * 2;
    const radioAlCuadrado = Math.pow(radio, 2)
    return{
        circunferencia: diametro * Math.PI.toFixed(3),
        area: radioAlCuadrado * Math.PI.toFixed(3),
    }
}
 console.groupEnd("Circulo")
