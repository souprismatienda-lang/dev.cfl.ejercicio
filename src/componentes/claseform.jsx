export default function ClaseForm() {
    return (
    <>
    <h2 className="m-2 text-5xl font-bold">Formularios</h2>
    <p className="m-4">Los formularios HTML se utilizan para recolectar entradas del usuario. Esta info recolectada se enviara a un servidor externo para ser procesada, aunque podemos utilizar funciones de JS para modificar contenido del DOM local.</p>
    <div className="m-4">
        <p>Ejemplo</p>
        <form className="m-4">
            <label>Nombre:</label><br/>
            <input type="text" className="border border-black" /><br/>
            <label>Apellido:</label><br/>
            <input type="text" className="border border-black" /><br/>
            <input className="bg-blue-400 border hover:bg-amber-300 p-2" type="submit" value="Enviar" />
        </form>
    </div>
    <h2 className="m-2 text-5xl font-bold">El elemento &lt;form&gt;</h2>
    <p className="m-4">Este es un elemento contenedor para diferentes tipos de elementos de entrada, tales como: campos de texto, checkboxes, botones radius, botones de envio, etc.</p>
    <h2 className="m-2 text-5xl font-bold">El elemento &lt;input&gt;</h2>
    <p className="m-4">Este elemento es el mas utilizado en un formulario. Puede mostrarse de diversas maneras dependiendo de su atributo type</p>
    <table className="m-4 border border-collapse">
        <tr>
            <th>Type</th>
            <th>Descripcion</th>
        </tr>
        <tr>
            <td>Type="text"</td>
            <td>Muestra un campo para introducir una sola linea de texto</td>
        </tr>
        <tr>
            <td>Type="radio"</td>
            <td>Muestra un boton redondo que se puede utilizar para seleccionar una de varias opciones</td>
        </tr>
        <tr>
            <td>Type="checkbox"</td>
            <td>Muestra una caja de selección para elegir entre 0 o multiples selecciones</td>
        </tr>
        <tr>
            <td>Type="submit"</td>
            <td>Muestra un boton para enviar la información del formulario</td>
        </tr>
        <tr>
            <td>Type="button"</td>
            <td>Muestra un boton clickeable</td>
        </tr>
    </table>
    </>
    )
}