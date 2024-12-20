import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Counter from "../../common/counter/Counter";
import { db } from "../../../firebaseConfig";
import { collection, getDoc, doc} from "firebase/firestore"


const ItemDetail = () => {

const {id} = useParams();

  const [product, setProduct] = useState({});

  useEffect(() => {

    let productsCollection = collection( db, "products");
    let refProduct = doc(productsCollection, id);

    getDoc(refProduct).then((res) =>{
      setProduct({...res.data(), id: res.id})
    })
  }, [id]);

  return (
    <div>
      <h2>{product.nombre}</h2>
      <h3>{product.detalle}</h3>
      <h3>{product.proveedor}</h3>
      <Counter product={product}/>
    </div>
  );
};

export default ItemDetail;
