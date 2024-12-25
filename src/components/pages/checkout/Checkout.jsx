import { useContext, useState } from "react";
import { db } from "../../../firebaseConfig";
import { collection, addDoc, doc, updateDoc } from "firebase/firestore";
import { CartContext } from "../../../context/CartContext";
import "./Checkout.css";

const Checkout = () => {
  const { cart, getTotalAmount, resetCart } = useContext(CartContext);

  const [userInfo, setUserInfo] = useState({
    nombre: "",
    email: "",
    telefono: "",
  });

  const [orderId, setOrderId] = useState(null);

  const sendForm = (evento) => {
    evento.preventDefault();

    let total = getTotalAmount();
    let order = {
      buyer: userInfo,
      items: cart,
      total,
    };

    let ordersCollection = collection(db, "orders");
    addDoc(ordersCollection, order).then((res) => {
      setOrderId(res.id);
      resetCart();
    });

    let productsCollection = collection(db, "products");
    order.items.forEach((element) => {
      let refDoc = doc(productsCollection, element.id);
      updateDoc(refDoc, { stock: element.stock - element.quantity });
    });
  };

  const getInputData = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  return (
    <div>
      {orderId ? (
        <h2>¡Gracias por tu compra! Tu ticket de compra es : {orderId}</h2>
      ) : (
        <form onSubmit={sendForm}>
          <div className="form-style">
            <p>Ingrese sus datos: </p>
            <input
              type="text"
              placeholder="Nombre..."
              name="nombre"
              onChange={getInputData}
            />
            <input
              type="text"
              placeholder="Email..."
              name="email"
              onChange={getInputData}
            />
            <input
              type="text"
              placeholder="Telefono..."
              name="telefono"
              onChange={getInputData}
            />
          </div>
          <div className="checkout-buttons-container">
            <button className="checkout-buttons-styles">Comprar</button>
            <button type="button" className="checkout-buttons-styles">Cancelar</button>
          </div>
        </form>
      )}
    </div>
  );
};

export default Checkout;
