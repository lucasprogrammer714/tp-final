import { useContext, useState } from "react";
import { FiMinusCircle } from "react-icons/fi";
import { IoAddCircleOutline } from "react-icons/io5";
import { CartContext } from "../../../context/CartContext";
import Swal from "sweetalert2";
import "./Counter.css";

const Counter = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  const [contador, setContador] = useState(1);

  const addItem = () => {
    if (contador < product.stock) {
      setContador(contador + 1);
    } else {
      Swal.fire({
        title: "¡Stock máximo alcanzado!",
        text: "No puedes agregar más productos al carrito.",
        icon: "warning",
        customClass: {
          confirmButton: "confirm-button",
        },
        confirmButtonText: "Entendido",
      });
    }
  };
  const decreaseItem = () => {
    if (contador > 0) {
      setContador(contador - 1);
    } else {
      Swal.fire({
        title: "¡Error en stock!",
        text: "La cantidad de productos elegidos debe ser mayor a 0.",
        icon: "warning",
        customClass: {
          confirmButton: "confirm-button",
        },
        confirmButtonText: "Entendido",
      });
    }
  };

  const onAdd = () => {
    let objetoParaElCarrito = { ...product, quantity: contador };
    console.log("objet", objetoParaElCarrito);
    addToCart(objetoParaElCarrito);
  };

  return (
    <div>
      <button onClick={decreaseItem}>
        <FiMinusCircle className="icons" />
      </button>
      <button onClick={addItem}>
        <IoAddCircleOutline className="icons" />
      </button>
        <h2>{contador}</h2>
        <button onClick={onAdd} className="button">
          Agregar al carrito
        </button>
    </div>
  );
};

export default Counter;
