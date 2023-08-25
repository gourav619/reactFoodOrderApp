import { useState } from "react";
import Header from "./components/layouts/Header";
import Meal from "./components/meal/Meal";
import Cart from "./components/cart/Cart";
import CartProvider from "./context/CartProvider";

const App = () => {
  const [showModal, setShowModal] = useState(false);

  const showModalHandler = () => {
    setShowModal(true);
  };
  const hideModalHandler = () => {
    setShowModal(false);
  };

  return (
    <CartProvider>
      {showModal && <Cart hide={hideModalHandler} />}
      <Header onShow={showModalHandler} />
      <main>
        <Meal />
      </main>
    </CartProvider>
  );
};

export default App;
