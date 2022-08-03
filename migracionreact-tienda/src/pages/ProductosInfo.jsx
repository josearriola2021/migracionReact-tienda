import { useEffect, useState } from "react";
import {useParams} from "react-router-dom";
import { fetchApi } from "../services";

const ProductosInfo = () => {
    const {nombre, id} = useParams();
    const [data, setData] = useState([]);

    const fetchProductosInfo = async () => {
        const data = await fetchApi();
        setData(data);
    }

    useEffect(() => {
        fetchApi();
    }, []);

    return ( 
        <div>Hola</div>
     );
}
 
export default ProductosInfo;