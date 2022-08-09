import { createContext, useContext, useState } from "react";
import { AuthContext } from "./AuthContext";

export const CarritoComprasContext = createContext();

export const CarritoComprasProvider = ({children}) => {

    //Captura los productos guardados en el local Storage cuando refrezco mi navegador
    const agregados = JSON.parse(localStorage.getItem("carritoCompras")) || [];
    const [productosAgregados, setProductosAgregados] = useState(agregados);
    const [totalProductos, setTotalProductos] = useState(0);
    const [sumaProductos, setSumaProductos] = useState(0);

    const {userAuth} = useContext(AuthContext);

    //para poder guardar el producto agregado en el carrito de compras
    /**
     * id del producto
     * fecha en la que agregué el producto
     */

     const saveInLocalStorage = (productosAgregados) => {
        localStorage.setItem("carritoCompras", JSON.stringify(productosAgregados))
    }

    const contador = (productosAgregados) => {
        const contadorCantidadProductos = productosAgregados.map(producto => producto.valor).reduce((a,b) => a+b,0);
        const contadorPrecioProductos = productosAgregados.map(producto => producto.total).reduce((a,b) => a+b,0);
        setTotalProductos(contadorCantidadProductos);
        setSumaProductos(contadorPrecioProductos);
    }

    const addProducto = (id, nombre, precio) => {
      const valor = 1;
      const productoAgregado = {
        id,
        user: userAuth,
        created_add: new Date(),
        nombre,
        precio,
        valor: valor,
        total: precio * valor,
      };

      if (productosAgregados.length === 0) {
        setProductosAgregados([productoAgregado]);
        saveInLocalStorage([productoAgregado]);
        contador([productoAgregado]);
        return;
      }
      productosAgregados[productosAgregados.length] = productoAgregado;
      setProductosAgregados(productosAgregados);
      saveInLocalStorage(productosAgregados);
      contador(productosAgregados);
    };

    const updateProducto = (id, newValue, precio) => {
      const indexNewProducto = productosAgregados.findIndex(
        (producto) => producto.id === id
      );
      productosAgregados[indexNewProducto] = {
        ...productosAgregados[indexNewProducto],
        valor: newValue,
        total: precio * newValue
      };
      setProductosAgregados(productosAgregados);
      saveInLocalStorage(productosAgregados);
      contador(productosAgregados);
    };

    const removeProducto = (id) => {
        const newProductosAgregados = productosAgregados.filter((producto) => producto.id !==id);
        setProductosAgregados(newProductosAgregados);
        saveInLocalStorage(newProductosAgregados);
        contador(newProductosAgregados);
    }

    const isIncludeInProductosAgregados = (id) => {
        const producto = productosAgregados.findIndex((producto) => producto.id === id && producto.user === userAuth);
        return producto === -1 ? true : false;
    }

    const capturarValorInput = (id) => {
        const indexNewProducto = productosAgregados.findIndex((producto) => producto.id === id);
        if (indexNewProducto !== -1) {
            const valorInput = productosAgregados[indexNewProducto].valor;
            return valorInput; 
        }
    }

    return (
        <CarritoComprasContext.Provider value={{productosAgregados, addProducto, capturarValorInput, isIncludeInProductosAgregados, removeProducto, sumaProductos, totalProductos, updateProducto}}>
            {children}
        </CarritoComprasContext.Provider>
    );
};
 