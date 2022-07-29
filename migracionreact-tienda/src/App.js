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

  console.log(estadoCategoria);
  console.log(estadoBuscador);
  
  return (
    <>
      <Header setEstadoBuscador={setEstadoBuscador} />
      <Ordenar />
      <section className="flex py-3 relative">
        <Categoria setEstadoCategoria={setEstadoCategoria} />
        <Tienda
          estadoBuscador={estadoBuscador}
          estadoCategoria={estadoCategoria}
        />
      </section>
    </>
  );
}

export default App;
