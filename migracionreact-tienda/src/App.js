import './App.css';
import './index.css';
import 'antd/dist/antd.css';
import Header from './components/Header';
import Tienda from './pages/Tienda';
import Categoria from './components/Categoria';
import Ordenar from './components/Ordenar';
import { useState } from 'react';

function App() {

  const [estadoBuscador, setEstadoBuscador] = useState("");
  const [estadoCategoria, setEstadoCategoria] = useState("");

  const [activeBuscador, setActiveBuscador] = useState(true);
  const [activeCategoria, setActiveCategoria] = useState(false);


  console.log(activeBuscador);
  console.log(activeCategoria);
  
  return (
    <>
      <Header setEstadoBuscador={setEstadoBuscador} setActiveBuscador = {setActiveBuscador} setActiveCategoria={setActiveCategoria}/>
      <Ordenar />
      <section className="flex py-3 relative">
        <Categoria setEstadoCategoria={setEstadoCategoria} setActiveBuscador = {setActiveBuscador} setActiveCategoria = {setActiveCategoria}/>
        <Tienda
          estadoBuscador={estadoBuscador}
          estadoCategoria={estadoCategoria}
          activeBuscador = {activeBuscador}
        />
      </section>
    </>
  );
}

export default App;
