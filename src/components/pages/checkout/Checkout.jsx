import { useContext, useState } from "react";
import { db } from "../../../firebaseConfig";
import { collection, addDoc, doc, updateDoc } from "firebase/firestore";
import { CartContext } from "../../../context/CartContext";
import "./Checkout.css";
import Swal from "sweetalert2";

const Checkout = () => {
  const { cart, getTotalAmount, resetCart } = useContext(CartContext);

  const [userInfo, setUserInfo] = useState({
    nombre: "",
    email: "",
    telefono: "",
  });

  const [orderId, setOrderId] = useState(null);


  const validate = () => {
    const newErrors = {};
    if (!userInfo.nombre.trim()) newErrors.nombre = "El nombre es requerido.";
    if (!userInfo.email.trim()) {
      newErrors.email = "El email es requerido.";
    } else if (!/\S+@\S+\.\S+/.test(userInfo.email)) {
      newErrors.email = "El email no es válido.";
    }
    if (!userInfo.telefono.trim()) {
      newErrors.telefono = "El teléfono es requerido.";
    } else if (!/^\d+$/.test(userInfo.telefono)) {
      newErrors.telefono = "El teléfono debe contener solo números.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const [errors, setErrors] = useState({});

  const getInputData = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };


  const sendForm = (evento) => {
    evento.preventDefault();

    if (validate()) {
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
    }
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
            {errors.nombre && <span className="error">{errors.nombre}</span>}

            <input
              type="text"
              placeholder="Email..."
              name="email"
              onChange={getInputData}
            />
            {errors.nombre && <span className="error">{errors.email}</span>}

            <input
              type="text"
              placeholder="Telefono..."
              name="telefono"
              onChange={getInputData}
            />
            {errors.nombre && <span className="error">{errors.telefono}</span>}
          </div>
          <div className="checkout-buttons-container">
            <button className="checkout-buttons-styles">Comprar</button>
            <button type="button" className="checkout-buttons-styles">
              Cancelar
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default Checkout;
