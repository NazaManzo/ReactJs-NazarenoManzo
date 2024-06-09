import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import data from '../data/productos.json';

const ItemDetailContainer = () => {
    let { itemId } = useParams();
    let [producto, setProducto] = useState(undefined);

    useEffect(() => {
        
        const foundProducto = data.find((prod) => prod.id === parseInt(itemId));
        setProducto(foundProducto);
    }, [itemId]);

    return (
        <div>
            {producto ? (
                <div className="producto-detalle">
                    <h2>{producto.nombre}</h2>
                    <img src={producto.imagen}/>
                    <p>{producto.descripcion}</p>
                    <p>Precio: ${producto.precio}</p>
                </div>
            ) : (
                <div>Cargando...</div>
            )}
        </div>
    );
};

export default ItemDetailContainer;
