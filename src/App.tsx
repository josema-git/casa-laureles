import "./App.css";

import { useEffect, useState } from "react";
import Modal from "./components/modal";

// const Csarpetas = ["Antejardin", "Bano%201", "Bano%202", "Cocina%201", "Escaleras", "Exterior", "Habitacion 1", "Habitacion 2","Habitacion 3", "Habitacion de servicio", "Habitacion de servicio 2", "Pasillo" , "Sala 1", "Sala 2", "Solar"];

function App() {
  const [showInfo, setShowInfo] = useState(false)

  const [filter, setFilter] = useState("Antejardin")


  useEffect(()=> {

    fetch('/Primer Piso/Antejardin').then(res => res.blob()).then(console.log)

  },[])

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
        <div>
          {Array.from({length: 3}).map((_,i) => (<img src={`/Primer Piso/Antejardin/${i+1}.jpg`}/>))}
          {Array.from({length: 4}).map((_,i) => (<img src={`/Primer Piso/Bano1/${i+1}.jpg`}/>))}
          {Array.from({length: 0}).map((_,i) => (<img src={`/Primer Piso/Bano2/${i+1}.jpg`}/>))}
          {Array.from({length: 4}).map((_,i) => (<img src={`/Primer Piso/Cocina1/${i+1}.jpg`}/>))}
          {Array.from({length: 5}).map((_,i) => (<img src={`/Primer Piso/Escaleras/${i+1}.jpg`}/>))}
          {Array.from({length: 6}).map((_,i) => (<img src={`/Primer Piso/Exterior/${i+1}.jpg`}/>))}
          {Array.from({length: 4}).map((_,i) => (<img src={`/Primer Piso/Habitacion1/${i+1}.jpg`}/>))}
          {Array.from({length: 3}).map((_,i) => (<img src={`/Primer Piso/Habitacion2/${i+1}.jpg`}/>))}
          {Array.from({length: 2}).map((_,i) => (<img src={`/Primer Piso/Habitacion3/${i+1}.jpg`}/>))}
          {Array.from({length: 2}).map((_,i) => (<img src={`/Primer Piso/HabitacionDeServicio1/${i+1}.jpg`}/>))}
          {Array.from({length: 1}).map((_,i) => (<img src={`/Primer Piso/HabitacionDeServicio2/${i+1}.jpg`}/>))}
          {Array.from({length: 3}).map((_,i) => (<img src={`/Primer Piso/Pasillo/${i+1}.jpg`}/>))}
          {Array.from({length: 3}).map((_,i) => (<img src={`/Primer Piso/Sala1/${i+1}.jpg`}/>))}
          {Array.from({length: 1}).map((_,i) => (<img src={`/Primer Piso/Sala2/${i+1}.jpg`}/>))}
          {Array.from({length: 9}).map((_,i) => (<img src={`/Primer Piso/Solar/${i+1}.jpg`}/>))}
          
        </div>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
