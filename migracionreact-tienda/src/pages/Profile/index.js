import { useContext } from "react";
import { AuthContext } from "../../context";
import { Descriptions } from 'antd';

const Profile = () => {

    const {userAuth, users} = useContext(AuthContext);

    const datosPersonales = users.filter(user => user.nickname === userAuth); 
    //Traigo el objeto que coincide con el userAuth

    return (
        <>
            <div>{userAuth}</div>
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
              </Descriptions>
        </>
    );
}
 
export default Profile;