import Header from "./components/Header";
import Guitar from "./components/Guitar";
import Footer from "./components/Footer";
import { db } from "./data/guitarras";
import { useState, useEffect } from "react";

function App() {
  const cartInStorage = localStorage.getItem("cart");
  const initialCart = cartInStorage ? JSON.parse(cartInStorage) : [];

  const [guitars] = useState(db);
  const [cart, setCart] = useState(initialCart);

  const addGuitar = (guitar) => {
    const idExist = cart.findIndex((g) => g.id === guitar.id);
    if (idExist === -1) {
      setCart([...cart, { ...guitar, cantidad: 1 }]);
    } else {
      const updatedCart = [...cart];
      updatedCart[idExist].cantidad++;
      setCart(updatedCart);
    }
  };

  function removeFromCart(id) {
    setCart((prevCart) => prevCart.filter((guitar) => guitar.id !== id));
  }

  function increaseQuantity(id) {
    const updatedCart = cart.map((item) => {
      if (item.id === id && item.cantidad < 5) {
        return {
          ...item,
          cantidad: item.cantidad + 1,
        };
      }
      return item;
    });
    setCart(updatedCart);
  }

  function decreaseQuantity(id) {
    const updatedCart = cart.map((item) => {
      if (item.id === id && item.cantidad > 1) {
        return {
          ...item,
          cantidad: item.cantidad - 1,
        };
      }
      return item;
    });
    setCart(updatedCart);
  }

  function clearCart() {
    setCart([]);
  }

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <>
      <Header
        cart={cart}
        removeFromCart={removeFromCart}
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
        clearCart={clearCart}
      />
      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">
          {guitars.map((guitar) => (
            <Guitar key={guitar.id} addGuitar={addGuitar} guitar={guitar} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
