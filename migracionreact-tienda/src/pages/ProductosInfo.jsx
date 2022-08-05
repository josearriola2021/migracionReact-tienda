import { useEffect, useState } from "react";
import {useParams} from "react-router-dom";
import { Avatar, Button, Card, Divider, Image, List, Space, Table, Tabs, Typography } from 'antd';
import { AndroidOutlined, AppleOutlined } from '@ant-design/icons';
import 'bootstrap-icons/font/bootstrap-icons.css';
const { Text, Title } = Typography;
const { Meta } = Card;
const { TabPane } = Tabs;

const ProductosInfo = () => {
    const {nombre, id} = useParams();
    const [data, setData] = useState([]);

    const fetchProductosInfo = async () => {
        const res = await fetch("https://josearriola2021.github.io/dataJson/data.json");
        const data = await res.json()
        setData(data);
    }

    useEffect(() => {
        fetchProductosInfo();
    }, []);

    const onChange = (key) => {
      console.log(key);
    };

    const searchProductoId = data.productos?.filter((producto) => {
        return producto.id == id;
    })

    const searchEspecificacionesId = data.especificaciones?.filter((producto) => {
      return producto.id == id;
  })


    const tiposEntrega = [
      <Space direction="vertical">
        <Title level={5} strong>
          Tipo de entrega disponible
        </Title>
        <Card bordered={false}>
          <Meta
            avatar={<i className="bi bi-truck text-3xl text-red-500"></i>}
            title={
              <Title level={5} style={{ margin: "0", padding: "0" }}>
                Delivery Programado
              </Title>
            }
            description="Ver más distritos"
          />
          <Divider bordered />
          <Meta
            avatar={<i className="bi bi-shop text-3xl text-red-500"></i>}
            title={
              <Title level={5} style={{ margin: "0", padding: "0" }}>
                Recojo en Tienda
              </Title>
            }
            description={<p>Ver más tiendas</p>}
          />
        </Card>
      </Space>,
    ];

    const footer = [
      <Space direction="vertical">
        <Title level={5} strong>
          Métodos de pago
        </Title>
        <Text>Diversas formas de pago</Text>
        <Image
          width={150}
          src="https://i.pinimg.com/originals/56/67/f8/5667f881a3a0fdb2e18469de23d6a2c5.png"
        />
      </Space>,
    ];

    return (
      <>
        {searchProductoId && (
          <>
            <div className="pl-60 py-4">
              {searchProductoId[0].categoria} -{" "}
              {searchProductoId[0].itemcategoria}
            </div>
            <div className="flex flex-col gap-10 md:flex-row justify-center gap-4">
              <div className="md:col-span-1 ">
                <Image width="25rem" src={searchProductoId[0].imagen} />
              </div>
              <div className=" md:w-80 col-span-1">
                <Title level={3}>{nombre}</Title>
                <Divider style={{ width: "10px" }} />
                <Title level={5} type="danger" style={{ marginBottom: "20px" }}>
                  Precio: {searchProductoId[0].precio}
                </Title>
                <Button
                  type="primary"
                  size="large"
                  shape="round"
                  style={{ width: "200px" }}
                >
                  Agregar
                </Button>
              </div>
              <div className="md:w-80 col-span-1 justify-center">
                <List
                  size="large"
                  header={
                    <>
                      <Title level={5}>Vendido y despachado por</Title>{" "}
                      <p>Ecommerce</p>
                    </>
                  }
                  footer={footer}
                  bordered
                  dataSource={tiposEntrega}
                  renderItem={(item) => <List.Item>{item}</List.Item>}
                />
              </div>
            </div>

            <div className="flex flex-col items-center mt-10">
              <Title level={3} className="text-center">
                Sobre este Producto
              </Title>
              <Tabs defaultActiveKey="1" size="large" centered>
                <TabPane
                  tab={
                    <span>
                      <AppleOutlined />
                      Especificaciones
                    </span>
                  }
                  key="1"
                >
                  {searchEspecificacionesId && (
                    <div className="">
                      <table className="table">
                        <tbody>
                          {
                            searchEspecificacionesId[0].descripcion?.map((elemento) => {
                              return (
                                <tr className="text-base">
                                  <td className="font-semibold">{elemento.titulo}</td>
                                  <td>{elemento.detalle}</td>
                                </tr>
                              )
                            })
                          }
                        </tbody>
                      </table>
                    </div>
                  )}
                </TabPane>
              </Tabs>
            </div>
          </>
        )}
      </>
    );
}
 
export default ProductosInfo;