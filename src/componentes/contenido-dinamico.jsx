import listaPersonas from "../json/personas.json"

export default function ContenidoDinamico(){
    return(
        <div>
            <h2>Creación dinamica</h2>
            <p>Utilizando las funcionalidades de React, podemos generar elementos html de manera automatica. Para esto utilizamos 2 cosas, una lista de objetos y la función map()</p>
            <h3>JSON</h3>
            <p>Es el acronimo de JavaScript Object Notation, es un formato que define objetos de JS de manera estandarizada. eSTOS ESTAN CONTENIDOS EN SU PROPIO ARCHIVO CON EXTENCION json y se pueden importar directamente a los componenente de React.</p>
            <h3>Tabla dinamica</h3>
            <p>En este ejemplo vamos a cargar una tabla con contenido de un archivo .json</p>
            <div>
                <table className="border border-b-blue-800 table-auto w-2xl [&_th]:border [&_td]:border [&_td]:px-1">
                    <thead className="">
                        <tr>
                            <th>Nombre</th>
                            <th>Email</th>
                            <th>Curso</th>
                            <th>Nota</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            listaPersonas.map((persona, indice) => (
                                <tr key={indice}>
                                    <td>{persona.nombre}</td>
                                    <td>{persona.email}</td>
                                    <td>{persona.curso}</td>
                                    <td>{persona.nota}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}