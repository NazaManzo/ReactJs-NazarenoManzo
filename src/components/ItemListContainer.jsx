import React, { useEffect, useState } from 'react';
import { ItemList } from './ItemList';
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/config";

export const ItemListContainer = () => {

  const { categoryId } = useParams();
  const [productos, setProductos] = useState([]);
  const [titulo, setTitulo] = useState("Productos");

  useEffect(() => {
    const productosRef = collection(db, "productos");
    const q = categoryId ? query(productosRef, where("categoria.id", "==", categoryId)) : productosRef;

    const categoriasRef = collection(db, "categorias");
    const catQuery = categoryId && query(categoriasRef, where("id", "==", categoryId));

    getDocs(q)
      .then((res) => {
        setProductos(
          res.docs.map((doc) => {
            return {...doc.data(), id: doc.id}
          })
        )
      })
      .catch((error) => {
        console.error("Error al obtener productos: ", error);
      });

    if (catQuery) {
      getDocs(catQuery)
        .then((res) => {
          if (res.docs.length > 0) {
            setTitulo(res.docs[0].data().nombre);
          } else {
            setTitulo("Productos");
          }
        })
        .catch((error) => {
          console.error("Error al obtener categorías: ", error);
          setTitulo("Productos");
        });
    } else {
      setTitulo("Productos");
    }
  }, [categoryId]);

  return (
    <div className="item-list-container">
      <h1>{titulo}</h1>
      <ItemList productos={productos} />
    </div>
  )
}
