import 'bootstrap-icons/font/bootstrap-icons.css';
import { Modal } from 'antd'; //Para abrir modal
import React, { useState } from 'react'; //Para abrir modal
import { Button, Checkbox, Form, Input, Select} from 'antd'; //Para formulario de iniciar sesion
import { LockOutlined, UserOutlined } from '@ant-design/icons'; //Para formulario de iniciar sesion
import "../json/data.json";
import "../css/Header.css";
// import { PoweroffOutlined } from '@ant-design/icons'; //Para loading

const Header = () => {

    //Estado inicial de modales: Iniciar Sesion y Registrarse
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isModalVisibleRegistrarse, setIsModalVisibleRegistrarse] = useState(false);

    //Eventos para abrir y cerrar modal Login
    const showModal = () => {
      setIsModalVisible(true);
    };
    const handleCancel = () => {
      setIsModalVisible(false);
    };

    //Eventos para abrir y cerrar modal Registrarse
    const showModalRegistrarse = () => {
        setIsModalVisibleRegistrarse(true);
    }
    const handleCancelRegistrarse = () => {
        setIsModalVisibleRegistrarse(false);
    }

    //Constante para formulario de iniciar Sesion
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };

    //Estado inicial de loading de button
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
        }, 4000);
      };

      //Constantes para formulario de registro - Estilos
      const formItemLayout = {
        labelCol: {
          xs: {
            span: 24,
          },
          sm: {
            span: 8,
          },
        },
        wrapperCol: {
          xs: {
            span: 24,
          },
          sm: {
            span: 16,
          },
        },
      };
      const tailFormItemLayout = {
        wrapperCol: {
          xs: {
            span: 24,
            offset: 0,
          },
          sm: {
            span: 16,
            offset: 8,
          },
        },
      };
      const [form] = Form.useForm();
      const onFinish2 = (values) => {
        localStorage.setItem("usuarios", JSON.stringify(values));
        console.log('Received values of form: ', values);
      };
      
    return ( 
        <>
            <header className="sticky top-0 z-10">
              <div className="navbar bg-base-100">
                <div className="md:block hidden" style={{flex: "3"}}>
                    <a className="btn btn-ghost normal-case text-xl">Tienda Virtual</a>
                </div>
                <div className="md:flex-none justify-end gap-2" style={{flex: "6"}}>
                    <div className="form-control w-full">
                    <input type="text" placeholder="Search" className="input input-bordered" id="buscadorInput" />
                    </div>
                    <div className="dropdown dropdown-end" id="inicioSesionHeader">
                    <label tabindex="0" className="btn btn-ghost btn-circle avatar w-40 gap-4 px-3" onClick={showModal}>
                        <figure>
                        <i className="bi bi-person text-3xl"></i>
                        </figure>
                        <p className="capitalize" id="inicioSesionHeaderUsuario">Inicia Sesion</p>
                    </label>
                    <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-black hidden" id="inicioSesionHeaderItems">
                        <li>
                        <a className="justify-between">
                            Profile
                            <span className="badge">New</span>
                        </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                    </div>
                    <div className="dropdown dropdown-end">
                    <label tabindex="0" className="btn btn-ghost btn-circle">
                        <figure className="indicator">
                        <i className="bi bi-cart text-3xl"></i>
                        <span className="badge badge-sm indicator-item" id="indicadorItem">0</span>
                        </figure>
                    </label>
                    <div tabindex="0" className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
                        <div className="card-body">
                        <span className="font-bold text-lg text-black" id="cantidadProductosSpan">0 productos</span>
                        <span className="text-info" id="totalPrecioSpan">Total: S/0</span>
                        <div className="card-actions">
                            <button className="btn btn-primary btn-block" id="viewCart">View cart</button>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
              </div>
            </header>

            {/*Modal de iniciar Sesion */}
            <Modal title="Iniciar Sesión" visible={isModalVisible} onCancel={handleCancel} footer={null}>
                <article className='flex justify-center'>
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
                                message: 'Ingresa tu email!',
                            },
                            ]}
                        >
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} 
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
                                message: 'Ingresa tu contraseña!',
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
                        <Button type="primary" htmlType='submit'
                        loading={loadings[0]} onClick={() => {
                            const validacionEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
                            const inputEmailIniciarSesion = document.querySelector("#inputEmailIniciarSesion").value;
                            const result = validacionEmail.test(inputEmailIniciarSesion);
                            const inputPasswordIniciarSesion = document.querySelector("#inputPasswordIniciarSesion").value;
                            const jsonUsers = require("../json/data.json");
                            const users = jsonUsers["users"];                            
                            //Validacion de Inicio de Sesion con los usuarios del json
                            const validacionUsuario = users.filter((user) => {return user.email.toLowerCase() == inputEmailIniciarSesion.toLowerCase()
                                && user.password.toLowerCase() == inputPasswordIniciarSesion.toLowerCase();
                            });
                            if (result == true && inputPasswordIniciarSesion !== "" && validacionUsuario != "") {
                                enterLoading(0)
                            }
                                }}>
                            Log in
                        </Button>
                            O <a href="#" onClick={showModalRegistrarse}>Registrarse!</a>
                        </Form.Item>
                    </Form>
                </article>
            </Modal>

            {/* Modal de registrarse */}
            <Modal title="Registrarse" visible={isModalVisibleRegistrarse} onCancel={handleCancelRegistrarse} footer={null}>
                <Form
                    {...formItemLayout}
                    form={form}
                    name="register"
                    onFinish={onFinish2}
                    scrollToFirstError
                >
                    <Form.Item
                        name="email"
                        label="E-mail"
                        rules={[
                        {
                            type: 'email',
                            message: 'Ingrese un email válido!',
                        },
                        {
                            required: true,
                            message: 'Ingresa tu email!',
                        },
                        ]}
                    >
                    <Input 
                    id="inputEmailRegistro"
                    />
                    </Form.Item>

                    <Form.Item
                        name="password"
                        label="Contraseña"
                        rules={[
                        {
                            required: true,
                            message: 'Ingresa tu contraseña!',
                        },
                        ]}
                        hasFeedback
                    >
                        <Input.Password 
                        id="inputPasswordRegistro"
                        />
                    </Form.Item>

                    <Form.Item
                        name="confirm"
                        label="Confirmar contraseña"
                        dependencies={['password']}
                        hasFeedback
                        rules={[
                        {
                            required: true,
                            message: 'Confirma tu contraseña!',
                        },
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                            if (!value || getFieldValue('password') === value) {
                                return Promise.resolve();
                            }

                            return Promise.reject(new Error('Las dos contraseñas ingresadas no coinciden!'));
                            },
                        }),
                        ]}
                    >
                        <Input.Password 
                        id="inputPasswordConfirmRegistro"
                        />  
                    </Form.Item>

                    <Form.Item
                        name="nickname"
                        label="Nickname"
                        tooltip="Como quieres aparecer al iniciar tu sesión?"
                        rules={[
                        {
                            required: true,
                            message: 'Ingresa un nombre de usuario!',
                            whitespace: true,
                        },
                        ]}
                    >
                        <Input
                            id='inputNicknameRegistro'
                        />
                    </Form.Item>

                    <Form.Item
                        name="agreement"
                        valuePropName="checked"
                        rules={[
                        {
                            validator: (_, value) =>
                            value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
                        },
                        ]}
                        {...tailFormItemLayout}
                    >
                        <Checkbox>
                            He leído los <a href="">términos y condiciones</a>
                        </Checkbox>
                    </Form.Item>

                    <Form.Item {...tailFormItemLayout}>
                        <Button type="primary" 
                                htmlType='submit' 
                                loading={loadings[0]} 
                                onClick={() => {
                                    const validacionEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
                                    const inputEmailRegistro = document.querySelector("#inputEmailRegistro");
                                    const result = validacionEmail.test(inputEmailRegistro.value);
                                    const inputPasswordRegistro = document.querySelector("#inputPasswordRegistro").value;
                                    const inputPasswordConfirmRegistro = document.querySelector("#inputPasswordConfirmRegistro").value;
                                    const inputNicknameRegistro = document.querySelector("#inputNicknameRegistro").value;
                                    if (result == true && inputPasswordRegistro !== "" && inputPasswordConfirmRegistro !== "" && inputNicknameRegistro !== "") {
                                        enterLoading(0)
                                    }
                                }}>
                                Registrarse
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
        </>
     );
}
 
export default Header;