export default function Objetos() {
    //El objeto literal es almazenado en la variable taza
    //Todos los objetos array, listas y demás estructuras 
    //similares deben ser variables del tipo const
    
    const taza= {material: "ceramico", color: "rojo", volumen: 20}
    //Otra manera de escribir los objetos es un formato de lista
    //este formato mejora la legibilidad
    const auto= {
        marca: "lamborgini",
        modelo: "Murcielago",
        color: "Amarillo",
        kilometraje: 100000,
        patente: "ABC123",
        anio: 2005,
    }
    //Es posible crear un objeto vacio y luego agregarle las propiedades

    const persona= {};

    persona.nombre= "Ricardo";
    persona.apellido= "Fort";
    persona.edad= 40;
    persona.altura= 1.50;

    //Podemos acceder a los atributos de los objetos de 2 maneras:

    console.log(persona.nombre)

    console.log(auto["marca"])

    //Metodos
    const perro= {
        raza: "Labrador",
        nombre: "Fido",
        edad: 8,
        ladra: function() {
            console.log("BARF BARF");
        },
        info: function(){
            return "raza: " + this.raza + "\n" + "Nombre: " + this.nombre + "\n" + "edad: " + this.edad        }
    }

    //Invocamos al metodo ladra de la misma manera que las propiedades
    perro.ladra();
    
    var infoPerro= perro.info();
    console.log(infoPerro);

    const ciudad= {
        nombre: "Moron",
        provincia: "Buenos Aires",
        habitantes: 500000,
        partido: "La Matanza",
        intendente: "ChantaDeTurno",
    }

    var texto= "La ciudad de " + ciudad.nombre + " se encuentra en la provincia " + ciudad.provincia + ", tiene una población de " + ciudad.habitantes + " habitantes"
    //document.getElementById("informacion").innerHTML= texto;
    
    return(
        <>
        <div>
            <div>
                <h2>Objetos</h2>
                <p>Un objeto en JS es una estructura de datos que nos permite almacenar diversos tipos de datos en un solo elemento.<br/>Estas estructuras comparten las mismas caracteristicas que los objetos fisicos.<br/></p>
                <p>Pensemos en cualquier objeto de la vida real, los podemos describir con sus correspondientes atributos: ej. Taza es un objeto y sus atributos serian: el tipo de material, el color, etc.<br/>Los atributos estan definidos en el codigo con una serie de pares de llave/valor.<br/></p>
                <h3>Objeto literal</h3>
                <div>
                    &#123; material:"ceramico", color:"rojo", volumen: 20 &#125;
                </div>
                <p>El ejemplo anterior, representa un objeto literal, esta encerrado entre llaves y sus pares de llave/valor estan separados por coma(,)</p>
                <p>Ver ejemplo en codigo fuente</p>
                <h3>Metodos de los objetos</h3>
                <p>Si los atributos son los que identifican a los objetos, los metodos describen su comportamiento. Son las acciones de este objeto van a realizar.<br/>Los metodos para JS, son funciones almacenadas como valores de las propiedades.</p>
                <p>Ver ejemplo en codigo fuente</p>
                <h3>Mostrando las propiedades</h3>
                <p>Para mostrar los valores de las propiedades de nuestros objetos, podemos utilizar el metodo document.getElementById("")</p>
                <p id="informacion"></p>
            </div>
        </div>
        <h1>Pagina de inicio</h1>
        <a href="./claseform">Link a clase formulario</a>
        </>
    )
}