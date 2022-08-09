import { useContext, useEffect, useState } from "react";
import { CarritoComprasContext } from "../../context";
import { Drawer, Typography } from 'antd';
import { UserAddOutlined } from "@ant-design/icons";
import {CartItem} from "../../components";

const DrawerCart = ({onClose, visible}) => {
    const {contador, productosAgregados, productosOfUser, sumaProductos} = useContext(CarritoComprasContext);

    useEffect(() => {
      contador(productosAgregados)
    }, [])

    return (
      <Drawer
        title="Resumen de compra"
        placement="right"
        zIndex={0}
        onClose={onClose}
        visible={visible}
        className="mt-14"
      >
        <Typography.Title level={4}>Resume cart</Typography.Title>
        <Typography.Text>Resumen de productos</Typography.Text>
        <Typography.Title level={4}>Total: S/{sumaProductos}</Typography.Title>
        {
            productosOfUser.length > 0 &&
                productosOfUser.map((producto, index) => <CartItem producto={producto} index={index}/>)
        }

      </Drawer>
    );
}
 
export default DrawerCart;