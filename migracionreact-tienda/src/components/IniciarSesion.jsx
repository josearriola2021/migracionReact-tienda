import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Modal } from 'antd'; 
import { Button, Checkbox, Form, Input} from 'antd';
import { useState } from 'react';

const IniciarSesion  = ({isModalVisible, setIsModalVisible, setIsModalVisibleRegistrarse, setUsuarioInicioSesion}) => {
  //Cierre de login
  const handleCancel = () => {
    setIsModalVisible(false);
  };

  //Apertura de registrarse
  const showModalRegistrarse = () => {
    setIsModalVisibleRegistrarse(true);
  };

  //Constante para formulario de iniciar Sesion
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  //Loadings - Iniciar Sesion
  const [loadings, setLoadings] = useState([]);
  const enterLoading = (index) => {
    setLoadings((prevLoadings) => {
      const newLoadings = [...prevLoadings];
      newLoadings[index] = true;
      return newLoadings;
    });
    setTimeout(() => {
      setLoadings((prevLoadings) => {
        const newLoadings = [...prevLoadings];
        newLoadings[index] = false;
        return newLoadings;
      });
      setIsModalVisible(false);
    }, 4000);
  };

  return (
    <Modal
      title="Iniciar Sesión"
      visible={isModalVisible}
      onCancel={handleCancel}
      footer={null}
    >
      <article className="flex justify-center">
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: "Ingresa tu email!",
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              type="email"
              placeholder="Email"
              id="inputEmailIniciarSesion"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Ingresa tu contraseña!",
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
              id="inputPasswordIniciarSesion"
            />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
            <a className="login-form-forgot" href="">
              Olvidaste tu contraseña
            </a>
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              loading={loadings[0]}
              onClick={() => {
                const validacionEmail =
                  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
                const inputEmailIniciarSesion = document.querySelector(
                  "#inputEmailIniciarSesion"
                ).value;
                const result = validacionEmail.test(inputEmailIniciarSesion);
                const inputPasswordIniciarSesion = document.querySelector(
                  "#inputPasswordIniciarSesion"
                ).value;
                const jsonUsers = require("../json/data.json");
                const users = jsonUsers["users"];
                //Validacion de Inicio de Sesion con los usuarios del json
                const validacionUsuario = users.filter((user) => {
                  return (
                    user.email.toLowerCase() ==
                      inputEmailIniciarSesion.toLowerCase() &&
                    user.password.toLowerCase() ==
                      inputPasswordIniciarSesion.toLowerCase()
                  );
                });
                const usersLocalStorage = JSON.parse(localStorage.getItem("usuarios"));
                const validacionLocalStorage = usersLocalStorage.filter((user) => {
                  return(
                    user.email.toLowerCase() ==
                      inputEmailIniciarSesion.toLowerCase() &&
                    user.password.toLowerCase() ==
                      inputPasswordIniciarSesion.toLowerCase()
                  );
                });
                console.log(validacionUsuario);
                if (
                  (result == true &&
                  inputPasswordIniciarSesion !== "" &&
                  validacionUsuario != "") || validacionLocalStorage != ""
                ) {
                  enterLoading(0);
                // Actualizamos el nombre de usuario al iniciar sesion
                  setTimeout(() => {
                    validacionUsuario != "" ? setUsuarioInicioSesion(validacionUsuario[0].nickname)
                    :
                    setUsuarioInicioSesion(validacionLocalStorage[0].nickname);
                  }, 4000)
                }
              }}
            >
              Log in
            </Button>
            O{" "}
            <a href="#" onClick={showModalRegistrarse}>
              Registrarse!
            </a>
          </Form.Item>
        </Form>
      </article>
    </Modal>
  );
}
 
export default IniciarSesion;