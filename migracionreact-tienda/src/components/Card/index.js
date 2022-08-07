// import '../json/data.json';
import "../../index.css";
import {useContext, useEffect, useState} from "react";
import {CarritoComprasContext} from "../../context";
import {Button, InputNumber} from "antd";
import {DeleteOutlined} from '@ant-design/icons';
import {Link} from "react-router-dom";

const Card = ({producto}) => {

  const {id, nombre, imagen, precio} = producto;
  const [size, setSize] = useState('large');
  const [buttonSecondary, setButtonSecondary] = useState(true)

  const {addProducto, isIncludeInProductosAgregados, removeProducto} = useContext(CarritoComprasContext);

  const onChange = (value) => {
    value == 0 && setButtonSecondary(true);
    removeProducto(id);
  }

  const deleteProducto = () => {
    setButtonSecondary(true);
    removeProducto(id);
  }

  //Activa el boton secundario para seleccionar la cantidad de productos a agregar al carrito
  const activeButtonSecondary = (e) => {
    buttonSecondary ? 
    setButtonSecondary(false) : setButtonSecondary(true);
    if (buttonSecondary == true) {
      addProducto(id, nombre, precio);
    }
  }

  useEffect(() => {
    const pintado = isIncludeInProductosAgregados(id);
    setButtonSecondary(pintado);
  }, [buttonSecondary])

  return (
    <div
      className="card bg-base-100 shadow-xl max-w-xs"
      style={{ maxHeight: "500px" }}
    >
      <Link to={`/${nombre}/${id}`}>
        <figure>
          <img src={imagen} alt="Nombre" />
        </figure>
      </Link>
      <div className="card-body flex-none">
        <h2 className="card-title text-base">{nombre}</h2>
        <p className="text-red-500 font-bold text-base">S/. {precio}</p>
        <div className="card-actions justify-end agregar-button">
          {buttonSecondary ? (
            <Button
              type="primary"
              shape="round"
              size={size}
              onClick={activeButtonSecondary}
            >
              Agregar
            </Button>
          ) : (
            <Button
              type="primary"
              shape="round"
              size={size}
            >
              <div className="flex justify-center items-center gap-2">
                <DeleteOutlined style={{fontSize:"20px"}} onClick={deleteProducto}/>
                <InputNumber min={0} max={100} defaultValue={1} onChange={onChange}/>
              </div>
            </Button>
          )}

          {/* <button className="md:scale-90 btn text-sm btn-primary">
            Agregar
          </button> */}
        </div>
        {/* <div className="form-control hidden cantidad-productosagregados">
          <label>
            <span
              className="cursor-pointer border-2 border-black delete-product"
              style={{ borderRadius: "50%", padding: "6px" }}
            >
              <i className="bi bi-trash3"></i>
            </span>
            <span className="cursor-pointer hidden minus-product">
              <i className="bi bi-dash-circle text-2xl"></i>
            </span>
            <input
              type="text"
              value="1"
              onChange={onChange}
              className="input input-bordered cantidadproductos-input"
              id={nombre}
              style={{ width: "70px" }}
            />
            <span className="cursor-pointer add-product">
              <i className="bi bi-plus-circle text-2xl"></i>
            </span>
          </label>
        </div> */}
      </div>
    </div>
  );
    
}
 
export default Card;