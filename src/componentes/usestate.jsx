import { useState } from "react";

export default function FuncionUseState(){
    return(
        <div className="Contenido [&>p]:m-3 [&>h1,h2]:m-4 [&>h1,h2]:font-bold">
            <h2>Hook useState</h2>
            <p>Este Hook se utiliza para mantener un seguimiento del estado de la aplicación.<br/>Los estados generalmente se refieren a datos o propiedades de la aplicación que necesitan ser monitoreados.</p>
            <p>El primer paso es importarlo desde React; import &#123;useState&#125; from 'react'</p>
            <p>Luego inicializamos nuestro estado invocando a useState en nuestro componente funcional. useState acepta un estado inicial y retorna 2 valores:
                <ul>
                    <li>El estado actual.</li>
                    <li>Una función que actualiza el estado.</li>
                </ul>
            </p>

            <h2>Ejemplo:</h2>
            <code>
                import &#123;useState&#125; from 'react';<br/>
                function ColorFavorito()&#123;<br/>
                    const [color, setColor] = useState("Azul");
                &#125;
            </code>
            
            <p>El primer valor, color es nuestro estado actual, el segundo valor, setColor, es la función que se utiliza para actualizar nuestro estado. Estos nombres son variables que pueden llevar el nombre que quieran.</p>
            <p>Por último establecems el estado inicial a "Azul" con la llamada a useState()</p>
        </div>
    )
}