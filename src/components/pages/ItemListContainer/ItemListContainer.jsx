import React from "react";
import { useEffect, useState } from "react";
import { CardItem } from "../../common/cardItem/CardItem";
import { useParams } from "react-router-dom";
import "./ItemListContainer.css";
import products from "../../../products.json";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

   const {category} = useParams();

   console.log(category)

  useEffect(() => {
    const getProducts = new Promise((resolve, reject) => {
      let isLogged = true;
      if (isLogged) {
        resolve(products);
      } else {
        reject({ message: " ocurrio un error al traer productos" });
      }
    });

    getProducts
      .then((response) => {
        if (category != null) {
          const filterItems = response.filter((el) =>
            el.categoria.includes(category)
          );

          setItems(filterItems);

        } else {
          setItems(response);

        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [category]);

  return (
    <div>
      <h2>Productos</h2>

      <div className="items-container">
        {items.map((product) => {
          return <CardItem key={product.id} item={product} />;
        })}
      </div>
    </div>
  );
};

export default ItemListContainer;
