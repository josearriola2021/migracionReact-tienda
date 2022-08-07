import { createContext, useState } from "react";

export const CarritoComprasContext = createContext();

export const CarritoComprasProvider = ({children}) => {

    //Captura los productos guardados en el local Storage cuando refrezco mi navegador
    const agregados = JSON.parse(localStorage.getItem("carritoCompras")) || [];
    const { productosAgregados, setProductosAgregados } = useState(agregados);

    //para poder guardar el producto agregado en el carrito de compras
    /**
     * id del producto
     * fecha en la que agregué el producto
     */

    const addProducto = (id) => {
      const productoAgregado = {
        id,
        created_add: new Date(),
      };

      if (productosAgregados.lenght === 0) {
         setProductosAgregados([productoAgregado]);
         saveInLocalStorage();
         return;
      }
      setProductosAgregados([
        ...productosAgregados, productoAgregado
      ]);
      saveInLocalStorage();
    };

    const saveInLocalStorage = () => {
        localStorage.setItem("carritoCompras", productosAgregados)
    }

    return (
        <CarritoComprasContext.Provider value={{productosAgregados, addProducto}}>
            {children}
        </CarritoComprasContext.Provider>
    );
};
 