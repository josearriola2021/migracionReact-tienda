import { Card } from "antd";

const CartItem = ({producto}) => {
    const {nombre, valor, precio, total} = producto;

    return (
      <div>
        <Card
          style={{
            width: 300,
          }}
        >
            <div>{nombre}</div> 
        </Card>
      </div>
    );
}
 
export default CartItem;