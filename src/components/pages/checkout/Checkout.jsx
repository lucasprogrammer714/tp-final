import { useContext, useState } from "react";
import { db } from "../../../firebaseConfig";
import { collection, addDoc, doc, updateDoc } from "firebase/firestore";
import { CartContext } from "../../../context/CartContext";

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
        <h2>gracias tu ticket es : {orderId}</h2>
      ) : (
        <form onSubmit={sendForm}>
          <input
            type="text"
            placeholder="nombre..."
            name="nombre"
            onChange={getInputData}
          />
          <input
            type="text"
            placeholder="email..."
            name="email"
            onChange={getInputData}
          />
          <input
            type="text"
            placeholder="telefono..."
            name="telefono"
            onChange={getInputData}
          />
          <button>comprar</button>
          <button type="button">cancelar</button>
        </form>
      )}
    </div>
  );
};

export default Checkout;