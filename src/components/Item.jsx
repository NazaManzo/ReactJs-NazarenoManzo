import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../components/context/CartContext';

export const Item = ({ producto }) => {
    const { agregarAlCarrito } = useContext(CartContext);

    return (
        <div className="producto">
            <img src={producto.imagen} alt={producto.nombre} />
            <h2>{producto.nombre}</h2>
            <p>${producto.precio}</p>
            <p>{producto.descripcion}</p>
            <Link to={`/item/${producto.id}`} className="ver-mas">Ver más</Link>
            <button onClick={() => agregarAlCarrito(producto)} className="agregar-carrito">Agregar al carrito</button>
        </div>
    );
};
