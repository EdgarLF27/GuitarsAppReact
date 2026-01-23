import Header from "./components/Header";
import Guitar from "./components/Guitar";
import Footer from "./components/Footer";
import { db } from "./data/guitarras";
import { useState } from "react";

function App() {
  const [guitars, setGuitars] = useState(db);

  return (
    <>
      <Header />
      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">
          {guitars.map((guitar) => (
            <Guitar
              key={guitar.id}
              nombre={guitar.nombre}
              precio={guitar.precio}
              guitar={guitar}
            />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
