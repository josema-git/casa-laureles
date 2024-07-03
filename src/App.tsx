import "./App.css";

import { useState } from "react";
import Modal from "./components/modal";

function App() {
  const [showInfo, setShowInfo] = useState(false)
  const [info, setInfo] = useState([0, "" , ""])

  function showImages(n: number, place: string , images: string): void {
      setShowInfo(true);
      setInfo([n, place , images]);
  }

  return (
    <main className="all">
      {showInfo && (
        <Modal onClick={() => setShowInfo(false)}>
          <div className="info">
            <h1>Fotos de {info[1]}</h1>
            {Array.from({length: Number(info[0])}).map((_,i) => <a href={`${info[2]}${i+1}.jpg`} target="_blank" > <img className="img-modal" src={`${info[2]}${i+1}.jpg`} /></a>)}
          </div>
        </Modal>
      )}
        <h1 className="title">Casa Laureles</h1>
        <div className="info-casa">
          <p>Area lote: 424 m<sup>2</sup></p>
          <p>Area construida: 331 m<sup>2</sup></p>
          <p>Area libre: 93 m<sup>2</sup></p>
          <p>N° de pisos: 2 </p>
          <p>Altura: 2.2 m</p>
          <p>Frente 10.9 m</p>
          <p>Fondo: 44.05</p>
        </div>
        <div className="gallery">
        {Array.from({length: 3}).map((_,i) => (<div className="photos" onClick={() => showImages(3, "Exterior" , "/Primer Piso/Exterior/")}><h1>Exterior</h1><img src={`/Primer Piso/Exterior/${i+1}.jpg`} /></div>))}
        {Array.from({length: 2}).map((_,i) => (<div className="photos" onClick={() => showImages(2, "Escaleras" , "/Primer Piso/Escaleras/")}><h1>Escaleras</h1><img src={`/Primer Piso/Escaleras/${i+1}.jpg`} /></div>))}
        {Array.from({length: 2}).map((_,i) => (<div className="photos" onClick={() => showImages(2, "Pasillo" , "/Primer Piso/Pasillo/")}><h1>Pasillo</h1><img src={`/Primer Piso/Pasillo/${i+1}.jpg`} /></div>))}
        {Array.from({length: 2}).map((_,i) => (<div className="photos" onClick={() => showImages(2, "Sala 1" , "/Primer Piso/Sala1/")}><h1>Sala 1</h1><img src={`/Primer Piso/Sala1/${i+1}.jpg`} /></div>))}
        {Array.from({length: 3}).map((_,i) => (<div className="photos" onClick={() => showImages(3, "Patio" , "/Primer Piso/Patio/")}><h1>Patio</h1><img src={`/Primer Piso/Patio/${i+1}.jpg`} /></div>))}
        {Array.from({length: 2}).map((_,i) => (<div className="photos" onClick={() => showImages(2, "Bano 1" , "/Primer Piso/Bano1/")}><h1>Baño 1</h1><img src={`/Primer Piso/Bano1/${i+1}.jpg`} /></div>))}
        {Array.from({length: 2}).map((_,i) => (<div className="photos" onClick={() => showImages(2, "Habitacion 1" , "/Primer Piso/Habitacion1/")}><h1>Habitacion 1</h1><img src={`/Primer Piso/Habitacion1/${i+1}.jpg`} /></div>))}
        {Array.from({length: 2}).map((_,i) => (<div className="photos" onClick={() => showImages(2, "Habitacion 2" , "/Primer Piso/Habitacion2/")}><h1>Habitacion 2</h1><img src={`/Primer Piso/Habitacion2/${i+1}.jpg`} /></div>))}
        {Array.from({length: 1}).map((_,i) => (<div className="photos" onClick={() => showImages(1, "Habitacion 3" , "/Primer Piso/Habitacion3/")}><h1>Habitacion 3</h1><img src={`/Primer Piso/Habitacion3/${i+1}.jpg`} /></div>))}
        {Array.from({length: 1}).map((_,i) => (<div className="photos" onClick={() => showImages(1, "Sala 2" , "/Primer Piso/Sala2/")}><h1>Sala 2</h1><img src={`/Primer Piso/Sala2/${i+1}.jpg`} /></div>))}
        {Array.from({length: 2}).map((_,i) => (<div className="photos" onClick={() => showImages(2, "Sala 3" , "/Primer Piso/Sala3/")}><h1>Sala 3</h1><img src={`/Primer Piso/Sala3/${i+1}.jpg`} /></div>))}
        {Array.from({length: 2}).map((_,i) => (<div className="photos" onClick={() => showImages(2, "Cocina 1" , "/Primer Piso/Cocina1/")}><h1>Cocina 1</h1><img src={`/Primer Piso/Cocina1/${i+1}.jpg`} /></div>))}
        {Array.from({length: 1}).map((_,i) => (<div className="photos" onClick={() => showImages(1, "HabitacionDeServicio 1" , "/Primer Piso/HabitacionDeServicio1/")}><h1>Habitacion de servicio 1</h1><img src={`/Primer Piso/HabitacionDeServicio1/${i+1}.jpg`} /></div>))}
        {Array.from({length: 1}).map((_,i) => (<div className="photos" onClick={() => showImages(1, "HabitacionDeServicio 2" , "/Primer Piso/HabitacionDeServicio2/")}><h1>Habitacion de servicio 2</h1><img src={`/Primer Piso/HabitacionDeServicio2/${i+1}.jpg`} /></div>))}
        {Array.from({length: 0}).map((_,i) => (<div className="photos" onClick={() => showImages(0, "Bano 2" , "/Primer Piso/Bano2/")}><h1>Baño 2</h1><img src={`/Primer Piso/Bano2/${i+1}.jpg`} /></div>))}
        {Array.from({length: 6}).map((_,i) => (<div className="photos" onClick={() => showImages(6, "Solar" , "/Primer Piso/Solar/")}><h1>Solar</h1><img src={`/Primer Piso/Solar/${i+1}.jpg`} /></div>))}
        </div>
    </main>
  );
}

export default App;
