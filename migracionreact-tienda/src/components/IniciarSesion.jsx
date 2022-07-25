const IniciarSesion  = () => {
    return ( 
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

     );
}
 
export default IniciarSesion;