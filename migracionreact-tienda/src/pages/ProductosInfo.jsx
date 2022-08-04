import { useEffect, useState } from "react";
import {useParams} from "react-router-dom";
import { Avatar, Button, Card, Col, Divider, Image, List, Row, Space, Typography } from 'antd';
import 'bootstrap-icons/font/bootstrap-icons.css';
const { Text, Title } = Typography;
const { Meta } = Card;

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

    const searchId = data.productos?.filter((producto) => {
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
        {searchId && (
          <Row gutter={20} justify="center">
            <Col className="gutter-row" xs={{ span: 24 }} lg={{ span: 6 }}>
              <Image width="25rem" src={searchId[0].imagen} />
            </Col>
            <Col className="gutter-row" xs={{ span: 24 }} lg={{ span: 6 }}>
              <Title level={3}>{nombre}</Title>
              <Divider style={{ width: "10px" }} />
              <Title level={5} type="danger" style={{ marginBottom: "20px" }}>
                Precio: {searchId[0].precio}
              </Title>
              <Button
                type="primary"
                size="large"
                shape="round"
                style={{ width: "40%" }}
              >
                Agregar
              </Button>
            </Col>
            <Col className="gutter-row" xs={{ span: 24 }} lg={{ span: 6 }}>
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
            </Col>
          </Row>
        )}
      </>
    );
}
 
export default ProductosInfo;