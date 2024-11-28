import React, { useEffect, useState } from 'react'

function FetchingData() {

    const[products, setProducts] = useState([]);

    useEffect(()=>{
        const getProducts = fetch("/products.json");

        getProducts
        .then((response) => response.json())
        .then((response) => setProducts(response.productos))
        .catch((error) => console.log(error));

    }, []);

  return (
    <div>

        {products.map((product) => {
            return <h2 key={product.id}> {product.nombre} </h2>
        })}

    </div>
  )
}

export default FetchingData