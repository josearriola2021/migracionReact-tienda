// import '../json/data.json';
import "../index.css";

const Card = ({producto}) => {

  const {nombre, imagen, precio} = producto;

  return (
    <div className="card bg-base-100 shadow-xl max-w-xs" style={{maxHeight: "500px"}}>
      <figure><img src={imagen} alt="Nombre"/></figure>
      <div className="card-body flex-none">
        <h2 className="card-title text-base">{nombre}</h2>
        <p className="text-red-500 font-bold text-base">S/. {precio}</p>
        <div className="card-actions justify-end agregar-button">
          <button className="md:scale-90 btn text-sm btn-primary">Agregar</button>
        </div>
        <div className="form-control hidden cantidad-productosagregados">
          <label>
            <span className="cursor-pointer border-2 border-black delete-product" style = {{borderRadius: "50%", padding: "6px"}}><i className="bi bi-trash3"></i></span>
            <span className="cursor-pointer hidden minus-product"><i className="bi bi-dash-circle text-2xl"></i></span>
            <input type="text" value="1" className="input input-bordered cantidadproductos-input" id={nombre} style={{width: "70px"}}/>
            <span className="cursor-pointer add-product"><i className="bi bi-plus-circle text-2xl"></i></span>
          </label>
        </div>
      </div>
    </div>
  );
    
}
 
export default Card;