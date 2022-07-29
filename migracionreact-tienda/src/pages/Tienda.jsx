import { useEffect, useState } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Card from '../components/Card';

// import Card from "../components/card";

const Tienda = ({estadoBuscador, estadoCategoria, activeBuscador}) => {

    const [data, setData] = useState({});

    useEffect(() => {
        const fetchApi = async () => {
            try {
                const response = await fetch("https://josearriola2021.github.io/dataJson/data.json");
                const data = await response.json();
                setData(data); 
            } catch (error) {
                console.log(error);
            }
        }
        fetchApi();
    })

    const agregarButton = document.querySelectorAll(".agregar-button");
    const cantidadProductosAgregados = document.querySelectorAll(".cantidad-productosagregados");

    agregarButton.forEach((element, index) => {
      element.addEventListener("click", () => {
        element.classList.add("hidden");
        cantidadProductosAgregados[index].classList.remove("hidden");
      });
    });

    const resultadoBuscador = data.productos?.filter((producto) => producto.nombre.toLowerCase().includes(estadoBuscador.toLowerCase()));
    
    const resultadoCategoria = data.productos?.filter((producto) => estadoCategoria.includes(producto.itemcategoria))
    
    return (
      <div className="mx-auto lg:px-12 sm:px-3 px-4 grid grid-cols-2 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-3 gap-4">
        {activeBuscador
          ? resultadoBuscador?.map((producto) => {
              return <Card producto={producto} />;
            })
          : resultadoCategoria?.map((producto) => {
              return <Card producto={producto} />;
            })}
      </div>
    );
}
 
export default Tienda;