import {Button, Checkbox, Form, Input} from "antd";
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { LockOutlined, UserOutlined } from '@ant-design/icons';

const FormIniciarSesion = ({loadings, enterLoading, showModalRegistrarse}) => {
    const { setUserAuth } = useContext(AuthContext); //Funcion del context para actualizar el Usuario autenticado

    //Constante para validacion de iniciar Sesion
    const validacionIniciarSesion = () => {
      const validacionEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
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
          user.email.toLowerCase() == inputEmailIniciarSesion.toLowerCase() &&
          user.password.toLowerCase() ==
            inputPasswordIniciarSesion.toLowerCase()
        );
      });
      const usersLocalStorage = JSON.parse(localStorage.getItem("usuarios"));
      const validacionLocalStorage = usersLocalStorage?.filter((user) => {
        return (
          user.email.toLowerCase() == inputEmailIniciarSesion.toLowerCase() &&
          user.password.toLowerCase() ==
            inputPasswordIniciarSesion.toLowerCase()
        );
      });
      if (
        (result == true &&
          inputPasswordIniciarSesion !== "" &&
          validacionUsuario != "") ||
        validacionLocalStorage.length > 0
      ) {
        enterLoading(0);
        setTimeout(() => {
          console.log(validacionUsuario);
          console.log(validacionLocalStorage);
          //Guardamos el usuario en el localStorage
          validacionUsuario != ""
            ? localStorage.setItem(
                "userAuth",
                JSON.stringify(validacionUsuario[0].nickname)
              )
            : localStorage.setItem(
                "userAuth",
                JSON.stringify(validacionLocalStorage[0].nickname)
              );
          //Seteamos el UserAuth de acuerdo al local storage
          validacionUsuario != ""
            ? setUserAuth(validacionUsuario[0].nickname)
            : setUserAuth(validacionLocalStorage[0].nickname);
        }, 4000);
      }
    };

    return (
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
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
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            loading={loadings[0]}
            onClick={validacionIniciarSesion}
          >
            Log in
          </Button>
          O{" "}
          <a href="#" onClick={showModalRegistrarse}>
            Registrarse!
          </a>
        </Form.Item>
      </Form>
    );
}
 
export default FormIniciarSesion;