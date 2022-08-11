import { useContext, useState } from "react";
import { AuthContext } from "../../context";
import { Card, Descriptions, Typography,  Radio, Space, Tabs } from 'antd';
const { TabPane } = Tabs;

const Profile = () => {

    const {userAuth, users} = useContext(AuthContext);

    const datosPersonales = users.filter(user => user.nickname === userAuth); 
    //Traigo el objeto que coincide con el userAuth

    return (
      <>
        <Tabs tabPosition="left">
          <TabPane tab="Perfil" key="1">
            <div>
              <Typography.Title level={2}>Perfil</Typography.Title>
              <Typography.Text style={{ fontSize: "16px" }}>
                Visualiza tus datos de sesión, correo electrónico y contraseña
              </Typography.Text>
              <Card
                style={{
                  width: 300,
                }}
              >
                <Typography.Title level={4}>Datos Personales</Typography.Title>
                <div className="border-b-2 border-b-gray-100 border-dashed py-2">
                    <label className="font-semibold">Nombre</label>
                    <div>{datosPersonales[0].nombre}</div>
                </div>
                <div className="border-b-2 border-b-gray-100 border-dashed py-2">
                    <label className="font-semibold">Apellidos</label>
                    <div>{datosPersonales[0].apellidos}</div>
                </div>
                <div className="border-b-2 border-b-gray-100 border-dashed py-2">
                    <label className="font-semibold">E-mail</label>
                    <div>{datosPersonales[0].email}</div>
                </div>
                <div className="border-b-2 border-b-gray-100 border-dashed py-2">
                    <label className="font-semibold">Documento de Identidad</label>
                    <div>{datosPersonales[0].DNI}</div>
                </div>
                <div className="border-b-2 border-b-gray-100 border-dashed py-2">
                    <label className="font-semibold">Teléfono</label>
                    <div>{datosPersonales[0].telefono}</div>
                </div>
              </Card>
            </div>
          </TabPane>
          <TabPane tab="Direcciones" key="2">
            Direcci
          </TabPane>
          <TabPane tab="Tarjetas de crédito" key="3">
            Content of Tab 3
          </TabPane>
        </Tabs>

        {/* <div>{userAuth}</div>
            <Descriptions title="Perfil" layout="vertical">
                <Descriptions.Item label="UserName">{userAuth}</Descriptions.Item>
                <Descriptions.Item label="Teléfono">{datosPersonales[0].telefono}</Descriptions.Item>
                <Descriptions.Item label="Email">{datosPersonales[0].email}</Descriptions.Item>
                <Descriptions.Item label="Distrito">{datosPersonales[0].distrito}</Descriptions.Item>
                <Descriptions.Item label="Provincia">{datosPersonales[0].provincia}</Descriptions.Item>
                <Descriptions.Item label="Departamento">{datosPersonales[0].departamento}</Descriptions.Item>
                <Descriptions.Item label="País">{datosPersonales[0].pais}</Descriptions.Item>
                <Descriptions.Item label="Dirección" span={2}>
                {datosPersonales[0].pais}                
                </Descriptions.Item>
              </Descriptions> */}
      </>
    );
}
 
export default Profile;