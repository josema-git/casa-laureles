import "./App.css";

import { useState } from "react";
import Modal from "./components/modal";

function App() {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <>
      {showInfo && (
        <Modal onClick={() => setShowInfo(false)}>
          <div className="info">
            <p>Área lote 424m^2</p>
            <p>Área construcción 331m^2</p>
            <p>Área libre 93m^2</p>
            <p># Pisos 2</p>
          </div>
        </Modal>
      )}
      <main className="gallery">
        <h1 className="title">Casa Laureles</h1>
        {Array.from({ length: 35 }).map((_, index) => (
          <div>
            <img
              key={index}
              src={`/${index + 1}.jpg`}
              onClick={() => setShowInfo(true)}
            />
          </div>
        ))}
      </main>
      <footer>hola</footer>
    </>
  );
}

export default App;
