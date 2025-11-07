import { useState } from "react";
import FuncionUseState from "./usestate";

export default function Hooks(){
    const [nombre, setNombre] = useState("Yesica");
    return(
        <div className="Contenido [&>p]:m-3 [&>h1,h2]:m-4 [&>h1,h2]:font-bold">
            <h1>React Hooks</h1>
            <p>Los ganchos (Hooks) permiten a los componentes funcionales, acceder al estado y otras propiedades sin la utilización de clases.<br/>Proveen una API mas directa a conceptos de React como props, states, context, entre otros.</p>
            <p>Son en definitiva funciones que permiten entre "enganchar a propiedades de React desde componentes funcionales".</p>
            
            <h2>Ejemplo:</h2>
            <div className="p-6">
                <p>Hola, mi nombre es: {nombre}</p>
                <button type="button" onClick={() => setNombre("Carla")}>Cambiar nombre</button>
            </div>
            <p>Se deben importar los Hooks desde React.</p>
            
            <h2>Reglas de Hooks</h2>
            <p>Hay 3 reglas para los Hooks:
                <ul>
                    <li>Solo pueden ser llamados dentro de componentes funcionales.</li>
                    <li>Solo pueden ser llamados en el nivel superior de un componente.</li>
                    <li>No pueden ser condicionales.</li>
                </ul>
            </p>
            <FuncionUseState/>
        </div>
    )
}