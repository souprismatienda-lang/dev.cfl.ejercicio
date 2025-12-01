import { useEffect, useState } from "react"

export default function Snippets(){

    const [color1, setColor1] = useState("bg-blue-300");

    function cambiaRojo(){
        setColor1("bg-red-300");
    }

    const [color2, setColor2] = useState("bg-blue-300");
    let flag = true;

    function interruptorColor(){
        if (flag){
            setColor2("bg-red-300");
            flag = false;
        } else {
            setColor2("bg-blue-300");
            flag = true;
        }
    }

    const [color3, setColor3] = useState("blue");
    const [posicion, setPosicion] = useState(0);

    function gestionClick(valorOpcion){
        setOpcion(valorOpcion);
    }

    function BarraDeNavegacion(){
        return(
            <>
                <button onClick={() => gestionClick(1)}>Pagina 1</button>
                <button onClick={() => gestionClick(2)}>Pagina 2</button>
                <button onClick={() => gestionClick(3)}>Pagina 3</button>
                <button onClick={() => gestionClick(4)}>Pagina 4</button>
            </>
        )
    }
    function ContenidoNav1(){
        return(
            <div id="contenidonav1">
                        <h2>Titulo 1</h2>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat autem placeat deserunt molestiae iure aspernatur, laudantium architecto rerum obcaecati eveniet saepe beatae, nulla, deleniti quasi enim aliquam. Sint, reiciendis architecto.</p>
                    </div>
        )
    }
    function ContenidoNav2(){
        return(
            <div id="contenidonav2">
                        <h2>Titulo 2</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse tempora hic modi sed, architecto, impedit ducimus illum dicta cum eos libero dolore optio ab iusto, perferendis tempore harum quas vero.</p>
                    </div>
        )
    }
    function ContenidoNav3(){
        return(
            <div id="contenidonav3">
                        <h2>Titulo 3</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione expedita, quam perferendis eligendi dolorum enim veritatis ipsa accusantium. Dolorum id atque maiores. Ipsum, facilis cumque. Quos eum quisquam nemo eligendi?</p>
                    </div>
        )
    }
    function ContenidoNav4(){
        return(
            <div id="contenidonav4">
                        <h2>Titulo 4</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione expedita, quam perferendis eligendi dolorum enim veritatis ipsa accusantium. Dolorum id atque maiores. Ipsum, facilis cumque. Quos eum quisquam nemo eligendi?</p>
                    </div>
        )
    }

    const [condicion, setCondicion] = useState(true);
    const gestionCondicion = () => {
        condicion ? setCondicion(false) : setCondicion(true);
    }

    const [opcion, setOpcion] = useState(1);

    function menuOpciones(){
                        switch(opcion){
                            case 1:
                                return <ContenidoNav1 />
                                break;
                            case 2:
                                return <ContenidoNav2 />
                                break;
                            case 3:
                                return <ContenidoNav3 />
                                break;
                            case 4:
                                return <ContenidoNav4 />
                                break;
                            default:
                                return <p>Nada por aqui</p>
                        }
    }
    
    return(
        <>
        <div id="contenedorprincipal">
            <div id="contenido">
                <section id="ejercicio">
                    <h2>Modificando en DOM con JS</h2>
                    <p>Utilizando los Hooks useEffect, Useref, useState, podemos modificar diferentes aspectos del DOM,
                        como contenido de algun elemento HTML, o inclusdo cambiar nombres de clases para lograr diferentes efectos</p>
                    <div id="ejemplo1">
                        <div id="elementoejemplo1" className={"w-30 h-30 " + color1}></div>
                        <button onClick={cambiaRojo}>cambiar a rojo</button>
                    </div>
                    <div id="ejemplo2">
                        <div id="elementoejemplo2" className={"w-30 h-30 " + color2}></div>
                        <button onClick={interruptorColor}>Intercambia color</button>
                    </div>
                    <div id="ejemplo3">
                        <div id="elementoejemplo3" className={`w-30 h-30`} style={{backgroundColor: color3}}></div>
                        <div id="botonera" className="flex flex-wrap gap-4 m-4">
                            <button className="bg-red-500"type="button" onClick={() => setColor3("red")}>Cambiar a Rojo</button>
                            <button className="bg-blue-500"type="button" onClick={() => setColor3("blue")}>Cambiar a Azul</button>
                            <button className="bg-green-500"type="button" onClick={() => setColor3("green")}>Cambiar a Verde</button>
                            <button className="bg-yellow-500"type="button" onClick={() => setColor3("yellow")}>Cambiar a Amarillo</button>
                        </div>
                    </div>
                    <div id="ejemplo4">
                        <div id="elementoejemplo4" className="w-30 h-30 bg-blue-600" style={{transform: `translateX(${posicion}%)`}}></div>
                        <input type="range" min="1" max="740" defaultValue={posicion} onChange={(e) =>setPosicion(e.target.value)}/>
                        <p>valor del rango: {posicion}</p>
                    </div>
                </section>
                <div>
                    <hr />
                <section id="barranav">
                    <h2>Barra de Navegacion</h2>
                    <div id="contenedornav" className="flex max-[660px]: gap-5 justify-center p-4 [&>button]:p-5 bg-gray-300 [&>button]:bg-cyan-400 [&>button]:hover:bg-amber-300 [&>button]:hover:-translate-y-2 [&>button]:transition-transform [&>button]:duration-200">
                        <BarraDeNavegacion></BarraDeNavegacion>
                    </div>
                    {/* condicion ? <ContenidoNav1 /> : <ContenidoNav2 />*/}
                    {menuOpciones()}
                </section>
                </div>
            </div>
        </div>
        </>
    )
}