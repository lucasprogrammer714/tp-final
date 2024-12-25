import React from "react";
import { useEffect, useState } from "react";
import { CardItem } from "../../common/cardItem/CardItem";
import { useParams } from "react-router-dom";
import "./ItemListContainer.css";
import { db } from "../../../firebaseConfig";
import { collection, addDoc, getDocs, query, where } from "firebase/firestore";
import BeatLoader from 'react-spinners/BeatLoader';

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  const { category } = useParams();

  useEffect(() => {
    let productsCollection = collection(db, "products");

    let queryForFilter = productsCollection;

    if (category) {
      let filteredProductsCollection = query(
        productsCollection,
        where("categoria", "==", category)
      );

      queryForFilter = filteredProductsCollection;
    }

    getDocs(queryForFilter).then((res) => {
      let productsList = res.docs.map((element) => {
        return { ...element.data(), id: element.id };
      });

      setItems(productsList);
    });
  }, [category]);

  return (
    <div>
      <h2>Productos</h2>
      {items.length === 0 ? (
        <BeatLoader />
      ) : (
        <div className="wrapper">
          {items.map((product) => {
            return (
              <CardItem key={product.id} item={product} className="item" />
            );
          })}
        </div>
      )}
      
    </div>
  );
};

export default ItemListContainer;
