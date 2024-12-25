import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Counter from "../../common/counter/Counter";
import { db } from "../../../firebaseConfig";
import { collection, getDoc, doc } from "firebase/firestore";
import "./ItemDetails.css";
import BeatLoader from "react-spinners/BeatLoader";


const ItemDetail = () => {
  const { id } = useParams();

  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let productsCollection = collection(db, "products");
    let refProduct = doc(productsCollection, id);

    getDoc(refProduct).then((res) => {
      setProduct({ ...res.data(), id: res.id });
      setLoading(false);
    });
  }, [id]);

  return (
    <>
      {loading ? (
        <div className="loader-container">
          <BeatLoader />
        </div>
      ) : (
        <div>
          <div className="detail-style">
            <h2>{product.nombre}</h2>
            <img src={product.rutaImagen} alt="x-series-s" />
          </div>
          <div className="text-box">
            <p className="detail-p">{product.detalle}</p>
          </div>
          <h3>{product.proveedor}</h3>
          <div className="style-counter">
            <Counter product={product} />
          </div>
        </div>
      )}
    </>
  );
};

export default ItemDetail;
