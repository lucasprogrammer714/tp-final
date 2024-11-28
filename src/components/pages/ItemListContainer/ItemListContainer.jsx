import React from "react";
import { useEffect, useState } from "react";
import { CardItem } from "../../common/cardItem/CardItem";
import "./ItemListContainer.css"

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = fetch("/products.json");

    getProducts
      .then((response) => response.json())
      .then((response) => setProducts(response.productos))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h2>Productos</h2>

      <div className="items-container">
        {products.map((product) => {
          return <CardItem key={product.id} item={product} />;
        })}
      </div>
    </div>
  );
};

export default ItemListContainer;
