import { useContext, useState } from "react";
import { CartContext } from "../../../context/CartContext";

const Counter = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  const [contador, setContador] = useState(1);

  const sumar = () => {
    if (contador < product.stock) {
      setContador(contador + 1);
    } else {
      alert("stock maximo");
    }
  };
  const restar = () => {
    setContador(contador - 1);
  };

  const onAdd = () => {
    let objetoParaElCarrito = { ...product, quantity: contador };
    console.log("objet", objetoParaElCarrito)
    addToCart(objetoParaElCarrito);
  };

  return (
    <div style={{ color: "red", margin: "20px" }}>
      <button onClick={restar}>restar</button>
      <h2>{contador}</h2>
      <button onClick={sumar}>sumar</button>
      <button onClick={onAdd}>Agregar al carrito</button>
    </div>
  );
};

export default Counter;