import React, { useEffect, useState } from "react";
import products from "../../../products.json"; 
import { useParams } from "react-router-dom";

const ItemDetail = () => {

const {id} = useParams();

  const [product, setProduct] = useState({});

  useEffect(() => {
    const findedProduct = products.find((item) => item.id === id);
    setProduct(findedProduct);
  }, [id]);

  return (
    <div>
      <h2>{product.nombre}</h2>
      <h3>{product.detalle}</h3>
      <h3>{product.proveedor}</h3>
      <button>Agregar al carrito</button>
    </div>
  );
};

export default ItemDetail;
