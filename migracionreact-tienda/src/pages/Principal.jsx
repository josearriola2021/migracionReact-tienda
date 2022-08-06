import { useState } from 'react';
import Header from '../components/Header';
import Productos from '../components/Productos';
import Categoria from '../components/Categoria';
import Ordenar from '../components/Ordenar';
import '../App.css';
import '../index.css';
import 'antd/dist/antd.css';

function Principal() {

  const [data, setData] = useState({});
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
      <Ordenar setEstadoOrdenar={setEstadoOrdenar} />
      <section className="flex py-3 relative">
        <Categoria
          data={data}
          setEstadoCategoria={setEstadoCategoria}
          setActiveBuscador={setActiveBuscador}
          setCheckedList={setCheckedList}
          checkedList={checkedList}
        />
        <Productos
          setData={setData}
          data={data}
          estadoBuscador={estadoBuscador}
          estadoCategoria={estadoCategoria}
          activeBuscador={activeBuscador}
          estadoOrdenar={estadoOrdenar}
        />
      </section>
    </>
  );
}

export default Principal;
