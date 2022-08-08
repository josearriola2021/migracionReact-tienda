import { createContext, useState } from "react";

export const CarritoComprasContext = createContext();

export const CarritoComprasProvider = ({children}) => {

    //Captura los productos guardados en el local Storage cuando refrezco mi navegador
    const agregados = JSON.parse(localStorage.getItem("carritoCompras")) || [];
    const [productosAgregados, setProductosAgregados] = useState(agregados);

    //para poder guardar el producto agregado en el carrito de compras
    /**
     * id del producto
     * fecha en la que agregué el producto
     */

    const addProducto = (id, nombre, precio) => {
      const productoAgregado = {
        id,
        created_add: new Date(),
        nombre,
        precio,
        valor: 1
      };

      if (productosAgregados.length === 0) {
         setProductosAgregados([productoAgregado]);
         saveInLocalStorage([productoAgregado]);
         return;
      }
      productosAgregados[productosAgregados.length] = productoAgregado;
      setProductosAgregados(productosAgregados) ;
      saveInLocalStorage(productosAgregados);
    };

    const updateProducto = (id, newValue) => {
      const indexNewProducto = productosAgregados.findIndex(
        (producto) => producto.id === id
      );
      productosAgregados[indexNewProducto] = {
        ...productosAgregados[indexNewProducto],
        valor: newValue,
      };
      setProductosAgregados(productosAgregados);
      saveInLocalStorage(productosAgregados);

    };

    const removeProducto = (id) => {
        const newProductoAgregados = productosAgregados.filter((producto) => producto.id !==id);
        setProductosAgregados(newProductoAgregados);
        saveInLocalStorage(newProductoAgregados);
    }

    const saveInLocalStorage = (productosAgregados) => {
        localStorage.setItem("carritoCompras", JSON.stringify(productosAgregados))
    }

    const isIncludeInProductosAgregados = (id) => {
        const producto = productosAgregados.findIndex((producto) => producto.id === id);
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
        <CarritoComprasContext.Provider value={{productosAgregados, addProducto, capturarValorInput, isIncludeInProductosAgregados, removeProducto, updateProducto}}>
            {children}
        </CarritoComprasContext.Provider>
    );
};
 