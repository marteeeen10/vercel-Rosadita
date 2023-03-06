import { useState } from "react"
import { toast } from 'react-toastify'
export const ItemCount = ({valInicial, stock, onAdd}) => {

    const [contador, setContador] = useState(valInicial)
    const sumar = () => (contador < stock) && setContador(contador + 1)
    const restar = () => (contador > valInicial) && setContador(contador - 1)
    const agregarCarrito = () =>{
        onAdd(contador)
    toast.success ("Articulo Agregado")
    }



    return (
        <>
            <button className="btn btn-danger" onClick={() => restar() }>-</button>
            {contador}
            <button className="btn btn-success" onClick={() => sumar()}>+</button>
            <button className="btn btn-dark" onClick={() => agregarCarrito()}>Agregar al Carrito</button>
        </>
    );
}
