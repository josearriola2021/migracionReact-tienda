import './App.css';
import './index.css';
import 'antd/dist/antd.css';
import { useState } from 'react';
import Header from './components/Header';
import Tienda from './pages/Tienda';
import Categoria from './components/Categoria';
import Ordenar from './components/Ordenar';

function App() {

  const [estadoBuscador, setEstadoBuscador] = useState("");
  const [estadoCategoria, setEstadoCategoria] = useState([]); 
  const [estadoOrdenar, setEstadoOrdenar] = useState("Precio bajo"); //Por defecto está ordenado por precio bajo

  const [activeBuscador, setActiveBuscador] = useState(true);
  const [checkedList, setCheckedList] = useState([]); //Permite establecer la lista de los checkbox checkeados
  
  return (
    <>
      <Header
        setEstadoBuscador={setEstadoBuscador}
        setActiveBuscador={setActiveBuscador}
        setCheckedList={setCheckedList}
      />
      <Ordenar
        setEstadoOrdenar={setEstadoOrdenar}
      />
      <section className="flex py-3 relative">
        <Categoria
          setEstadoCategoria={setEstadoCategoria}
          setActiveBuscador={setActiveBuscador}
          setCheckedList={setCheckedList}
          checkedList={checkedList}
        />
        <Tienda
          estadoBuscador={estadoBuscador}
          estadoCategoria={estadoCategoria}
          activeBuscador={activeBuscador}
          estadoOrdenar={estadoOrdenar}
        />
      </section>
    </>
  );
}

export default App;
