import { useEffect, useState } from "react";
import {useParams} from "react-router-dom";
import { fetchApi } from "../services";

const ProductosInfo = () => {
    const {nombre, id} = useParams();
    const [data, setData] = useState({});

    const fetchProductosInfo = async () => {
        const res = await fetch("https://josearriola2021.github.io/dataJson/data.json");
        const data = await res.json()
        setData(data);
    }

    useEffect(() => {
        fetchProductosInfo();
    }, []);

    const resultadoSearchId = data.productos?.filter((producto) => {
        return producto.id == id;
    })

    console.log(resultadoSearchId);

    return (
      <>
        <figure>
          <img src={resultadoSearchId[0].imagen} alt="Nombre" />
        </figure>
        <div>{nombre}</div>
      </>
    );
}
 
export default ProductosInfo;